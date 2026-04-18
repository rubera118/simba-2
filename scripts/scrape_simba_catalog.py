import base64
import html
import json
import math
import re
import urllib.request
from collections import defaultdict
from pathlib import Path


BASE_URL = "https://www.simbaonlineshopping.com/"
TARGET_COUNT = 789
ALLOWED_CATEGORIES = [
    "Food Products",
    "Cleaning and Sanitary",
    "Vegetable and Fruits",
    "Cosmetics",
    "Alcoholic Drinkings",
    "Toys",
    "Kitchenware",
    "Electronics and Electrical Equipments",
    "Pet Care",
    "Non-Alcoholic Drinks",
]

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_JSON = ROOT / "products.json"
IMAGE_DIR = ROOT / "assets" / "products"

PRODUCT_PATTERN = re.compile(
    r"<div class=\"img-thumbnail \">.*?"
    r"<img src='(?P<image>data:image/[^']+)'[^>]*>.*?"
    r"<div class=\"proName\">(?P<name>.*?)</div>.*?"
    r"hfUnitPrice[^>]*value=\"(?P<price>\d+)\".*?"
    r"hfItemID[^>]*value=\"(?P<id>\d+)\".*?"
    r"hfItemName[^>]*value=\"(?P<item_name>.*?)\".*?"
    r"hdfsub_cat_name_rptr[^>]*value=\"(?P<subcategory>.*?)\".*?"
    r"hdCatName_rptr[^>]*value=\"(?P<category>.*?)\"",
    re.S,
)


def fetch_text(url: str) -> str:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0 Safari/537.36"
            )
        },
    )
    with urllib.request.urlopen(request, timeout=60) as response:
        return response.read().decode("utf-8", "ignore")


def compact_text(value: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(value)).strip()


def collect_subcategories() -> list[str]:
    home_html = fetch_text(BASE_URL)
    return sorted(set(re.findall(r"Products\.aspx\?subcat=(\d+)", home_html)))


def scrape_products() -> dict[str, dict]:
    products: dict[str, dict] = {}

    for index, subcat_id in enumerate(collect_subcategories(), start=1):
        page_html = fetch_text(f"{BASE_URL}Products.aspx?subcat={subcat_id}")
        for match in PRODUCT_PATTERN.finditer(page_html):
            product = {key: compact_text(value) for key, value in match.groupdict().items()}
            if product["category"] not in ALLOWED_CATEGORIES:
                continue

            product_id = product["id"]
            if product_id in products:
                continue

            products[product_id] = {
                "id": product_id,
                "name": product["item_name"] or product["name"],
                "category": product["category"],
                "subcategory": product["subcategory"],
                "price": int(product["price"]),
                "image_data": product["image"],
            }

        print(f"Fetched {index} subcategories -> {len(products)} unique products")

    return products


def allocate_counts(products: dict[str, dict]) -> dict[str, int]:
    grouped: dict[str, list[dict]] = defaultdict(list)
    for product in products.values():
        grouped[product["category"]].append(product)

    totals = {category: len(grouped.get(category, [])) for category in ALLOWED_CATEGORIES}
    total_products = sum(totals.values())
    if total_products < TARGET_COUNT:
        raise ValueError(f"Only found {total_products} products, need at least {TARGET_COUNT}")

    raw = {
        category: (count * TARGET_COUNT / total_products) if count else 0
        for category, count in totals.items()
    }
    allocated = {category: min(totals[category], math.floor(value)) for category, value in raw.items()}
    remainder = TARGET_COUNT - sum(allocated.values())

    ranked_categories = sorted(
        ALLOWED_CATEGORIES,
        key=lambda category: (raw[category] - allocated[category], totals[category]),
        reverse=True,
    )

    for category in ranked_categories:
        if remainder <= 0:
            break
        if allocated[category] < totals[category]:
            allocated[category] += 1
            remainder -= 1

    return allocated


def save_image(product_id: str, image_data_url: str) -> str:
    header, encoded = image_data_url.split(",", 1)
    extension = "jpg"
    if "image/png" in header:
        extension = "png"
    elif "image/webp" in header:
        extension = "webp"

    IMAGE_DIR.mkdir(parents=True, exist_ok=True)
    file_path = IMAGE_DIR / f"{product_id}.{extension}"
    file_path.write_bytes(base64.b64decode(encoded))
    return f"assets/products/{product_id}.{extension}"


def build_catalog(products: dict[str, dict]) -> list[dict]:
    grouped: dict[str, list[dict]] = defaultdict(list)
    for product in products.values():
        grouped[product["category"]].append(product)

    allocations = allocate_counts(products)
    catalog: list[dict] = []

    for category in ALLOWED_CATEGORIES:
        category_products = grouped.get(category, [])
        selected = category_products[: allocations.get(category, 0)]
        for product in selected:
            image_path = save_image(product["id"], product["image_data"])
            subcategory = product["subcategory"] or category
            catalog.append(
                {
                    "id": product["id"],
                    "name": product["name"],
                    "category": category,
                    "subcategory": subcategory,
                    "price": product["price"],
                    "image": image_path,
                    "description": f"Real Simba Supermarket item from the {subcategory} aisle.",
                    "badge": subcategory,
                }
            )

    if len(catalog) != TARGET_COUNT:
        raise ValueError(f"Expected {TARGET_COUNT} products but built {len(catalog)}")

    return catalog


def main() -> None:
    products = scrape_products()
    catalog = build_catalog(products)
    OUTPUT_JSON.write_text(json.dumps(catalog, indent=2), encoding="utf-8")

    counts: dict[str, int] = defaultdict(int)
    for product in catalog:
        counts[product["category"]] += 1

    print(f"Wrote {len(catalog)} products to {OUTPUT_JSON}")
    print(json.dumps(counts, indent=2))


if __name__ == "__main__":
    main()
