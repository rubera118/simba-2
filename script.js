const STORAGE_KEYS = {
  cart: "simba-cart",
  theme: "simba-theme",
  language: "simba-language",
};

const translations = {
  en: {
    announceText: "Modern shopping for Kigali families, offices, and everyday essentials.",
    announcePill: "Same-day delivery available",
    brandTagline: "Rwanda's upgraded online supermarket",
    navAisles: "Aisles",
    navFeatured: "Featured",
    navShop: "Shop",
    navCheckout: "Checkout",
    theme: "Theme",
    cart: "Cart",
    heroBadge: "A modern Simba experience",
    heroTitle: "Shop the supermarket by aisle, offer, and mood",
    heroText:
      "We redesigned Simba Supermarket into a faster, cleaner, more visual shopping experience with fresh produce, household essentials, beverages, beauty, and checkout built for mobile first.",
    shopNow: "Start shopping",
    exploreAisles: "Explore aisles",
    popularSearches: "Popular:",
    metricCategories: "main shopping aisles",
    metricProducts: "sample products ready",
    metricPayment: "checkout ready",
    spotlightToday: "Today's spotlight",
    spotlightTitle: "Fresh produce, pantry staples, and trusted household brands",
    spotlightText: "Designed to feel more premium and easier to browse than the current live site.",
    featureFast: "Fast delivery",
    featureFastValue: "Built for quick ordering on mobile",
    featureFresh: "Clearer browsing",
    featureFreshValue: "Aisle-first navigation instead of crowded text menus",
    featureTrusted: "Better trust signals",
    featureTrustedValue: "Delivery, payment, and support made obvious",
    departmentsBadge: "Departments",
    departmentsTitle: "Shop by department",
    departmentsText: "Quick aisle shortcuts inspired by large marketplace navigation.",
    departmentSearchLabel: "Search inside departments",
    departmentSearchPlaceholder: "Search rice, drinks, baby...",
    departmentEmpty: "No matching department found.",
    promoBadge: "Promo highlights",
    promoTitle: "Weekly deals, bundles, and fast-moving offers",
    shoppingRowsBadge: "Shopping rows",
    shoppingRowsTitle: "Curated shelves that feel more like a real marketplace",
    shoppingRowsText: "These rows help shoppers discover products by intent instead of only by category.",
    trustOneTitle: "Shop by category",
    trustOneText: "Main aisles inspired by the real Simba store structure",
    trustTwoTitle: "Faster decisions",
    trustTwoText: "Promotions, popular items, and curated shortcuts above the fold",
    trustThreeTitle: "Beginner friendly",
    trustThreeText: "Simple code, clean files, and easy deployment",
    aislesBadge: "Main aisles",
    aislesTitle: "Browse the supermarket the modern way",
    aislesText:
      "Instead of long old-style category lists, these quick tiles surface the main departments shoppers care about first.",
    featuredBadge: "Featured shelves",
    featuredTitle: "Popular picks and weekly highlights",
    featuredText:
      "This section gives the homepage energy, helps discovery, and makes the store feel more alive than a plain list.",
    electronicsBadge: "Smart home picks",
    electronicsTitle: "Electronics that deserve more visibility",
    electronicsText:
      "We now give electronics its own spotlight so high-value items do not disappear inside a long supermarket catalog.",
    catalogBadge: "Digital supermarket",
    catalogTitle: "Search, filter, and add to cart quickly",
    catalogNote:
      "The catalog below keeps the power of the old store, but packages it in a cleaner and more responsive layout.",
    searchLabel: "Search products",
    searchPlaceholder: "Search rice, juice, shampoo...",
    categoryLabel: "Category",
    priceLabel: "Max price",
    loading: "Loading products...",
    emptyTitle: "No products found",
    emptyText: "Try a different search term, category, or price range.",
    cartBadge: "Your basket",
    cartTitle: "Shopping cart",
    subtotal: "Subtotal",
    checkout: "Proceed to checkout",
    addToCart: "Add to cart",
    details: "View details",
    allCategories: "All categories",
    itemsFound: "{count} items found",
    emptyCart: "Your cart is empty. Add a few products to get started.",
    remove: "Remove",
    categoryItems: "{count} products",
    inStock: "In stock",
    quantity: "Quantity",
    shopCategory: "Shop this aisle",
    featuredShelfTitle: "Featured",
    departmentCount: "{count} items",
    shopDepartment: "Open department",
    promoPrimaryAction: "Shop the deal",
    promoSecondaryAction: "Browse all",
    budgetBadge: "Budget pick",
    familyBadge: "Family essential",
    bestRowTitle: "Best sellers",
    bestRowText: "Top-performing staples and popular picks shoppers reach for first.",
    budgetRowTitle: "Budget picks",
    budgetRowText: "Easy wins for value-focused baskets and everyday savings.",
    familyRowTitle: "Family essentials",
    familyRowText: "Bigger-need items for family kitchens, laundry rooms, and routines.",
    quickView: "Quick view",
    browseCatalog: "Browse catalog",
  },
  fr: {
    announceText: "Shopping moderne pour les familles, bureaux et besoins du quotidien a Kigali.",
    announcePill: "Livraison le jour meme disponible",
    brandTagline: "Le supermarche en ligne Simba modernise",
    navAisles: "Rayons",
    navFeatured: "Vedettes",
    navShop: "Boutique",
    navCheckout: "Paiement",
    theme: "Theme",
    cart: "Panier",
    heroBadge: "Une nouvelle experience Simba",
    heroTitle: "Faites vos courses par rayon, offre et besoin",
    heroText:
      "Nous avons repense Simba Supermarket en une experience plus rapide, plus claire et plus visuelle pour l'alimentation, la maison, les boissons, la beaute et le paiement mobile.",
    shopNow: "Commencer",
    exploreAisles: "Explorer les rayons",
    popularSearches: "Populaire :",
    metricCategories: "rayons principaux",
    metricProducts: "produits de demonstration",
    metricPayment: "paiement pret",
    spotlightToday: "A la une",
    spotlightTitle: "Produits frais, essentiels du garde-manger et marques de confiance",
    spotlightText: "Concu pour etre plus premium et plus facile a parcourir que le site actuel.",
    featureFast: "Livraison rapide",
    featureFastValue: "Pense pour commander vite sur mobile",
    featureFresh: "Navigation plus claire",
    featureFreshValue: "Navigation par rayons au lieu de menus de texte charges",
    featureTrusted: "Confiance visible",
    featureTrustedValue: "Livraison, paiement et support clairement affiches",
    departmentsBadge: "Departements",
    departmentsTitle: "Acheter par departement",
    departmentsText: "Raccourcis rapides inspires de la navigation des grandes marketplaces.",
    departmentSearchLabel: "Rechercher dans les departements",
    departmentSearchPlaceholder: "Chercher riz, boissons, bebe...",
    departmentEmpty: "Aucun departement correspondant.",
    promoBadge: "Promotions",
    promoTitle: "Offres de la semaine, bundles et selections rapides",
    shoppingRowsBadge: "Rangees d'achat",
    shoppingRowsTitle: "Des rangees plus proches d'une vraie marketplace",
    shoppingRowsText: "Ces rangees aident a decouvrir par besoin et non seulement par categorie.",
    trustOneTitle: "Acheter par categorie",
    trustOneText: "Rayons inspires de la vraie structure du magasin Simba",
    trustTwoTitle: "Choix plus rapides",
    trustTwoText: "Promotions, produits populaires et raccourcis visibles des le debut",
    trustThreeTitle: "Facile a comprendre",
    trustThreeText: "Code simple, fichiers propres et deploiement facile",
    aislesBadge: "Rayons principaux",
    aislesTitle: "Parcourez le supermarche de facon moderne",
    aislesText:
      "Au lieu de longues listes anciennes, ces tuiles mettent en avant les principaux rayons recherches par les clients.",
    featuredBadge: "Rayons vedettes",
    featuredTitle: "Selections populaires et temps forts de la semaine",
    featuredText:
      "Cette section donne de l'energie a la page d'accueil et rend la boutique plus vivante qu'une simple liste.",
    electronicsBadge: "Maison connectee",
    electronicsTitle: "Des produits electroniques mieux mis en valeur",
    electronicsText:
      "Nous donnons maintenant aux produits electroniques leur propre espace pour qu'ils ne disparaissent pas dans un long catalogue.",
    catalogBadge: "Supermarche digital",
    catalogTitle: "Recherchez, filtrez et ajoutez rapidement au panier",
    catalogNote:
      "Le catalogue garde la richesse de l'ancien site mais avec une presentation plus propre et responsive.",
    searchLabel: "Rechercher des produits",
    searchPlaceholder: "Chercher riz, jus, shampoing...",
    categoryLabel: "Categorie",
    priceLabel: "Prix maximum",
    loading: "Chargement des produits...",
    emptyTitle: "Aucun produit trouve",
    emptyText: "Essayez un autre mot-cle, une autre categorie ou un autre prix.",
    cartBadge: "Votre panier",
    cartTitle: "Panier",
    subtotal: "Sous-total",
    checkout: "Passer au paiement",
    addToCart: "Ajouter au panier",
    details: "Voir details",
    allCategories: "Toutes les categories",
    itemsFound: "{count} articles trouves",
    emptyCart: "Votre panier est vide. Ajoutez quelques produits pour commencer.",
    remove: "Supprimer",
    categoryItems: "{count} produits",
    inStock: "En stock",
    quantity: "Quantite",
    shopCategory: "Voir ce rayon",
    featuredShelfTitle: "Vedette",
    departmentCount: "{count} articles",
    shopDepartment: "Ouvrir",
    promoPrimaryAction: "Voir l'offre",
    promoSecondaryAction: "Tout voir",
    budgetBadge: "Petit prix",
    familyBadge: "Essentiel famille",
    bestRowTitle: "Meilleures ventes",
    bestRowText: "Les produits les plus choisis pour les paniers du quotidien.",
    budgetRowTitle: "Bons plans",
    budgetRowText: "Des choix simples pour les paniers a bon prix.",
    familyRowTitle: "Essentiels famille",
    familyRowText: "Des indispensables pour la cuisine, la lessive et la maison.",
    quickView: "Voir vite",
    browseCatalog: "Voir le catalogue",
  },
  rw: {
    announceText: "Kwamamaza gushya ku miryango, ibiro n'ibikenerwa buri munsi i Kigali.",
    announcePill: "Kohereza umunsi umwe birahari",
    brandTagline: "Simba Supermarket yongerewe isura nshya",
    navAisles: "Ibyiciro",
    navFeatured: "Byatoranyijwe",
    navShop: "Gura",
    navCheckout: "Kwishyura",
    theme: "Insanganyamatsiko",
    cart: "Agaseke",
    heroBadge: "Simba nshya kandi igezweho",
    heroTitle: "Gura ukurikije icyiciro, igabanyirizwa, n'icyo ukeneye",
    heroText:
      "Twavuguruye Simba Supermarket tuyigira yihuta, isukuye kandi yoroshye kureba ku biribwa, ibikoresho byo mu rugo, ibinyobwa, ubwiza no kwishyura kuri telefoni.",
    shopNow: "Tangira kugura",
    exploreAisles: "Reba ibyiciro",
    popularSearches: "Bikunzwe:",
    metricCategories: "ibyiciro by'ingenzi",
    metricProducts: "ibicuruzwa byiteguye",
    metricPayment: "kwishyura byiteguye",
    spotlightToday: "Iby'uyu munsi",
    spotlightTitle: "Imboga n'imbuto bishya, ibyo mu bubiko n'amazina yizewe",
    spotlightText: "Byubatswe kugira ngo birusheho kuba byiza kandi byoroshye kurusha urubuga ruriho ubu.",
    featureFast: "Kohereza vuba",
    featureFastValue: "Byubakiwe gutumiza vuba kuri telefoni",
    featureFresh: "Kureba byoroshye",
    featureFreshValue: "Kuyobora ukurikije ibyiciro aho kuba urutonde rurerure",
    featureTrusted: "Kwizerana kugaragara",
    featureTrustedValue: "Kohereza, kwishyura na serivisi biragaragara neza",
    departmentsBadge: "Amashami",
    departmentsTitle: "Gura ukoresheje amashami",
    departmentsText: "Inzira z'ibyiciro byihuse nk'iziri kuri marketplace nini.",
    departmentSearchLabel: "Shakishiriza mu mashami",
    departmentSearchPlaceholder: "Shaka umuceri, ibinyobwa, umwana...",
    departmentEmpty: "Nta shami rihuye n'ibyashakishijwe.",
    promoBadge: "Promos",
    promoTitle: "Ibyagabanyijwe, bundles n'ibikunzwe by'iki cyumweru",
    shoppingRowsBadge: "Imirongo yo kugura",
    shoppingRowsTitle: "Imirongo ituma iduka risa na marketplace nyayo",
    shoppingRowsText: "Iyi mirongo ifasha kubona ibicuruzwa ukurikije icyo ushaka kurusha icyiciro gusa.",
    trustOneTitle: "Gura ukoresheje ibyiciro",
    trustOneText: "Ibyiciro byahumetswe n'imiterere nyayo ya Simba",
    trustTwoTitle: "Fata icyemezo vuba",
    trustTwoText: "Ibikunzwe n'ibyagabanyijwe biri hejuru ku rupapuro",
    trustThreeTitle: "Byoroshye kwiga",
    trustThreeText: "Code isukuye, amadosiye meza kandi byoroshye kohereza online",
    aislesBadge: "Ibyiciro by'ingenzi",
    aislesTitle: "Reba supermarket mu buryo bwa none",
    aislesText:
      "Aho kugira urutonde rurerure rw'inyandiko, aya makarita yerekana ibyiciro abantu bashaka cyane mbere.",
    featuredBadge: "Ibyatoranyijwe",
    featuredTitle: "Ibikunzwe n'iby'icyumweru",
    featuredText:
      "Iki gice giha urupapuro ubuzima kandi kigatuma iduka risa neza kurusha urutonde rusanzwe.",
    electronicsBadge: "Ibikoresho byo mu rugo bigezweho",
    electronicsTitle: "Electronics zibona umwanya ugaragara",
    electronicsText:
      "Ubu electronics zifite igice cyazo kugira ngo zidatakara hagati ya catalog ndende ya supermarket.",
    catalogBadge: "Supermarket yo kuri internet",
    catalogTitle: "Shakisha, muyungurure kandi ushyire mu gaseke vuba",
    catalogNote:
      "Catalog igumana imbaraga z'urubuga rushaje ariko mu miterere isukuye kandi ikora neza kuri telefoni.",
    searchLabel: "Shakisha ibicuruzwa",
    searchPlaceholder: "Shaka umuceri, umutobe, shampoo...",
    categoryLabel: "Icyiciro",
    priceLabel: "Igiciro ntarengwa",
    loading: "Turimo gupakurura ibicuruzwa...",
    emptyTitle: "Nta bicuruzwa byabonetse",
    emptyText: "Gerageza irindi jambo, icyiciro cyangwa igiciro.",
    cartBadge: "Agaseke kawe",
    cartTitle: "Agaseke",
    subtotal: "Igiteranyo mbere",
    checkout: "Komeza wishyure",
    addToCart: "Shyira mu gaseke",
    details: "Reba ibisobanuro",
    allCategories: "Ibyiciro byose",
    itemsFound: "{count} byabonetse",
    emptyCart: "Agaseke kawe karimo ubusa. Ongeramo ibicuruzwa.",
    remove: "Kuramo",
    categoryItems: "{count} ibicuruzwa",
    inStock: "Birahari",
    quantity: "Ingano",
    shopCategory: "Gura muri iki cyiciro",
    featuredShelfTitle: "Byatoranyijwe",
    departmentCount: "{count} ibicuruzwa",
    shopDepartment: "Fungura",
    promoPrimaryAction: "Gura deal",
    promoSecondaryAction: "Reba byose",
    budgetBadge: "Igiciro gito",
    familyBadge: "Iby'ingenzi ku muryango",
    bestRowTitle: "Ibikunzwe cyane",
    bestRowText: "Ibicuruzwa abantu bahitamo cyane mu kugura buri munsi.",
    budgetRowTitle: "Ibyo ku giciro cyiza",
    budgetRowText: "Amahitamo meza ku gaseke k'igiciro gito.",
    familyRowTitle: "Iby'ingenzi by'umuryango",
    familyRowText: "Ibyo mu gikoni, isuku n'ibikenerwa mu rugo.",
    quickView: "Reba vuba",
    browseCatalog: "Reba katalogi",
  },
};

const categoryMeta = {
  "Food Products": {
    icon: "Food",
    colorClass: "category-food",
    summary: "Rice, bread, pantry staples, breakfast, and everyday meals.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
  },
  "Cleaning & Sanitary": {
    icon: "Care",
    colorClass: "category-cleaning",
    summary: "Laundry, dishwashing, hygiene, and home cleaning essentials.",
    image:
      "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=1200&q=80",
  },
  "Vegetables & Fruits": {
    icon: "Fresh",
    colorClass: "category-produce",
    summary: "Fresh fruits and vegetables for healthier daily shopping.",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=80",
  },
  Cosmetics: {
    icon: "Beauty",
    colorClass: "category-cosmetics",
    summary: "Hair care, body care, skin care, and personal essentials.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  "Alcoholic Drinks": {
    icon: "Drinks",
    colorClass: "category-alcohol",
    summary: "Beers, wines, and celebration-ready drink selections.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
  },
  Kitchenware: {
    icon: "Home",
    colorClass: "category-kitchen",
    summary: "Serving pieces, storage, and smart kitchen helpers.",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
  },
  Electronics: {
    icon: "Tech",
    colorClass: "category-electronics",
    summary: "Appliances and everyday electrical tools for the home.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  "Non-Alcoholic Drinks": {
    icon: "Juice",
    colorClass: "category-softdrinks",
    summary: "Juices, water, and refreshing drinks for the family.",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1200&q=80",
  },
  "Baby & Family": {
    icon: "Family",
    colorClass: "category-baby",
    summary: "Baby food, diapers, and family care products.",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
  },
  Toys: {
    icon: "Play",
    colorClass: "category-toys",
    summary: "Playful products for gifts, learning, and fun.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
  },
};

let appState = {
  products: [],
  cart: loadFromStorage(STORAGE_KEYS.cart, []),
  language: loadFromStorage(STORAGE_KEYS.language, "en"),
  theme: loadFromStorage(STORAGE_KEYS.theme, "light"),
  selectedCategory: "all",
  searchQuery: "",
  departmentQuery: "",
  maxPrice: 120000,
  promoIndex: 0,
  promoTimer: null,
};

const elements = {
  body: document.body,
  languageSelect: document.getElementById("languageSelect"),
  themeToggle: document.getElementById("themeToggle"),
  cartToggle: document.getElementById("cartToggle"),
  closeCart: document.getElementById("closeCart"),
  cartDrawer: document.getElementById("cartDrawer"),
  overlay: document.getElementById("overlay"),
  searchInput: document.getElementById("searchInput"),
  categoryFilter: document.getElementById("categoryFilter"),
  priceFilter: document.getElementById("priceFilter"),
  priceValue: document.getElementById("priceValue"),
  productsByCategory: document.getElementById("productsByCategory"),
  resultsSummary: document.getElementById("resultsSummary"),
  loadingState: document.getElementById("loadingState"),
  emptyState: document.getElementById("emptyState"),
  cartItems: document.getElementById("cartItems"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartCount: document.getElementById("cartCount"),
  categoryShowcase: document.getElementById("categoryShowcase"),
  featuredShelf: document.getElementById("featuredShelf"),
  electronicsSpotlight: document.getElementById("electronicsSpotlight"),
  quickSearchButtons: document.querySelectorAll(".quick-search"),
  departmentMenu: document.getElementById("departmentMenu"),
  departmentSearchInput: document.getElementById("departmentSearchInput"),
  promoCarousel: document.getElementById("promoCarousel"),
  promoTiles: document.getElementById("promoTiles"),
  promoPrev: document.getElementById("promoPrev"),
  promoNext: document.getElementById("promoNext"),
  shoppingRows: document.getElementById("shoppingRows"),
};

const PRODUCT_FALLBACK_IMAGE = "assets/product-fallback.svg";

document.addEventListener("DOMContentLoaded", initStorefront);

async function initStorefront() {
  applyTheme();
  applyLanguage();
  bindGlobalControls();
  updatePriceLabel();
  renderCart();
  await loadProducts();
}

async function loadProducts() {
  try {
    const response = await fetch("products.json");
    appState.products = await response.json();
    populateCategoryFilter();
    renderDepartmentMenu();
    renderCategoryShowcase();
    renderPromoSections();
    renderFeaturedShelf();
    renderShoppingRows();
    renderElectronicsSpotlight();
    renderProducts();
    renderCart();
    startPromoAutoplay();
  } catch (error) {
    elements.loadingState.classList.add("hidden");
    elements.emptyState.classList.remove("hidden");
    elements.emptyState.querySelector("h3").textContent = "Could not load products";
    elements.emptyState.querySelector("p").textContent = "Run the site through a local server so JSON files can load correctly.";
    console.error(error);
  }
}

function bindGlobalControls() {
  const promoScrollTarget = document.getElementById("catalog");

  elements.languageSelect.value = appState.language;
  elements.priceFilter.value = appState.maxPrice;
  elements.departmentSearchInput.value = appState.departmentQuery;

  elements.languageSelect.addEventListener("change", (event) => {
    appState.language = event.target.value;
    saveToStorage(STORAGE_KEYS.language, appState.language);
    applyLanguage();
    populateCategoryFilter();
    renderDepartmentMenu();
    renderCategoryShowcase();
    renderPromoSections();
    renderFeaturedShelf();
    renderShoppingRows();
    renderElectronicsSpotlight();
    renderProducts();
    renderCart();
  });

  elements.themeToggle.addEventListener("click", () => {
    appState.theme = appState.theme === "dark" ? "light" : "dark";
    saveToStorage(STORAGE_KEYS.theme, appState.theme);
    applyTheme();
  });

  elements.searchInput.addEventListener("input", (event) => {
    appState.searchQuery = event.target.value.trim().toLowerCase();
    appState.departmentQuery = appState.searchQuery;
    elements.departmentSearchInput.value = event.target.value;
    renderDepartmentMenu();
    renderProducts();
  });

  elements.departmentSearchInput.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    appState.departmentQuery = query;
    appState.searchQuery = query;
    elements.searchInput.value = event.target.value;
    renderDepartmentMenu();
    renderProducts();
  });

  elements.categoryFilter.addEventListener("change", (event) => {
    appState.selectedCategory = event.target.value;
    renderProducts();
  });

  elements.priceFilter.addEventListener("input", (event) => {
    appState.maxPrice = Number(event.target.value);
    updatePriceLabel();
    renderProducts();
  });

  elements.cartToggle.addEventListener("click", openCart);
  elements.closeCart.addEventListener("click", closeCart);
  elements.overlay.addEventListener("click", closeCart);

  elements.quickSearchButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const query = button.dataset.search || "";
      elements.searchInput.value = query;
      elements.departmentSearchInput.value = query;
      appState.searchQuery = query.toLowerCase();
      appState.departmentQuery = query.toLowerCase();
      appState.selectedCategory = "all";
      elements.categoryFilter.value = "all";
      renderDepartmentMenu();
      renderProducts();
      promoScrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  elements.promoPrev?.addEventListener("click", () => rotatePromo(-1));
  elements.promoNext?.addEventListener("click", () => rotatePromo(1));
}

function applyLanguage() {
  const copy = translations[appState.language] || translations.en;
  document.documentElement.lang = appState.language;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) node.textContent = copy[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (copy[key]) node.placeholder = copy[key];
  });
}

function applyTheme() {
  elements.body.classList.toggle("dark", appState.theme === "dark");
}

function populateCategoryFilter() {
  const copy = translations[appState.language] || translations.en;
  const categories = [...new Set(appState.products.map((product) => product.category))];
  const options = [`<option value="all">${copy.allCategories}</option>`]
    .concat(categories.map((category) => `<option value="${category}">${category}</option>`))
    .join("");

  elements.categoryFilter.innerHTML = options;
  elements.categoryFilter.value = appState.selectedCategory;
}

function renderDepartmentMenu() {
  const copy = translations[appState.language] || translations.en;
  const categories = [...new Set(appState.products.map((product) => product.category))];
  const filteredCategories = categories.filter((category) => {
    const meta = categoryMeta[category] || { summary: "" };
    const productNames = appState.products
      .filter((product) => product.category === category)
      .map((product) => `${product.name} ${product.description} ${product.badge}`)
      .join(" ")
      .toLowerCase();
    const haystack = `${category} ${meta.summary} ${productNames}`.toLowerCase();
    return haystack.includes(appState.departmentQuery);
  });

  if (!filteredCategories.length) {
    elements.departmentMenu.innerHTML = `<div class="department-empty">${copy.departmentEmpty}</div>`;
    return;
  }

  elements.departmentMenu.innerHTML = filteredCategories
    .map((category) => {
      const meta = categoryMeta[category] || { icon: "Shop", image: PRODUCT_FALLBACK_IMAGE, summary: "" };
      const count = appState.products.filter((product) => product.category === category).length;
      return `
        <button class="department-link" type="button" data-category-link="${category}">
          <img class="department-photo" src="${meta.image}" alt="${category}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
          <span class="department-copy">
            <span class="department-icon">${meta.icon}</span>
            <strong>${category}</strong>
            <small>${meta.summary}</small>
            <small>${copy.departmentCount.replace("{count}", count)}</small>
          </span>
        </button>
      `;
    })
    .join("");

  elements.departmentMenu.querySelectorAll("[data-category-link]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.selectedCategory = button.dataset.categoryLink;
      elements.categoryFilter.value = appState.selectedCategory;
      renderProducts();
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderCategoryShowcase() {
  const categories = [...new Set(appState.products.map((product) => product.category))];
  const copy = translations[appState.language] || translations.en;

  elements.categoryShowcase.innerHTML = categories
    .map((category) => {
      const meta = categoryMeta[category] || {
        icon: "Shop",
        colorClass: "",
        summary: "",
        image: PRODUCT_FALLBACK_IMAGE,
      };
      const count = appState.products.filter((product) => product.category === category).length;
      return `
        <article class="showcase-card ${meta.colorClass}" data-category-card="${category}">
          <div class="showcase-media">
            <img src="${meta.image}" alt="${category}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
          </div>
          <div class="showcase-icon">${meta.icon}</div>
          <div class="showcase-copy">
            <p class="eyebrow">${category}</p>
            <h3>${category}</h3>
            <p>${meta.summary}</p>
          </div>
          <div class="showcase-footer">
            <span class="chip">${copy.categoryItems.replace("{count}", count)}</span>
            <button class="ghost-button" type="button">${copy.shopCategory}</button>
          </div>
        </article>
      `;
    })
    .join("");

  elements.categoryShowcase.querySelectorAll("[data-category-card]").forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.dataset.categoryCard;
      appState.selectedCategory = category;
      elements.categoryFilter.value = category;
      renderProducts();
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderPromoSections() {
  const copy = translations[appState.language] || translations.en;
  const promoSlides = getPromoSlides();
  const featuredTiles = getPromoTiles();

  if (!promoSlides.length) {
    elements.promoCarousel.innerHTML = "";
    elements.promoTiles.innerHTML = "";
    return;
  }

  appState.promoIndex = appState.promoIndex % promoSlides.length;
  const activeSlide = promoSlides[appState.promoIndex];

  elements.promoCarousel.innerHTML = `
    <article class="promo-slide">
      <div class="promo-slide-copy">
        <span class="chip promo-chip">${activeSlide.badge}</span>
        <h3>${activeSlide.title}</h3>
        <p>${activeSlide.text}</p>
        <div class="promo-actions">
          <button class="primary-button" type="button" data-promo-category="${activeSlide.category}">${copy.promoPrimaryAction}</button>
          <a class="ghost-button" href="#catalog">${copy.promoSecondaryAction}</a>
        </div>
        <div class="promo-dots">
          ${promoSlides
            .map(
              (_, index) => `
                <button class="promo-dot ${index === appState.promoIndex ? "active" : ""}" type="button" aria-label="Show banner ${index + 1}" data-promo-dot="${index}"></button>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="promo-slide-card">
        <img src="${activeSlide.product.image}" alt="${activeSlide.product.name}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
        <div class="promo-card-copy">
          <span class="eyebrow">${activeSlide.product.category}</span>
          <h4>${activeSlide.product.name}</h4>
          <p>${activeSlide.product.description}</p>
          <strong>${formatCurrency(activeSlide.product.price)}</strong>
        </div>
      </div>
    </article>
  `;

  elements.promoTiles.innerHTML = featuredTiles
    .map(
      (product) => `
        <article class="promo-tile">
          <div>
            <span class="chip">${product.badge}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>
          <div class="promo-tile-footer">
            <strong>${formatCurrency(product.price)}</strong>
            <a class="ghost-button" href="product.html?id=${product.id}">${copy.quickView}</a>
          </div>
        </article>
      `
    )
    .join("");

  elements.promoCarousel.querySelector("[data-promo-category]")?.addEventListener("click", (event) => {
    appState.selectedCategory = event.currentTarget.dataset.promoCategory;
    elements.categoryFilter.value = appState.selectedCategory;
    renderProducts();
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  elements.promoCarousel.querySelectorAll("[data-promo-dot]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.promoIndex = Number(button.dataset.promoDot);
      renderPromoSections();
      restartPromoAutoplay();
    });
  });
}

function getPromoSlides() {
  const products = appState.products;
  if (!products.length) return [];

  const cheapest = [...products].sort((a, b) => a.price - b.price)[0];
  const family = products.find((product) => product.category === "Baby & Family") || products[0];
  const premium = [...products].sort((a, b) => b.price - a.price)[0];

  return [
    {
      badge: "Weekly value drop",
      title: "Save on everyday basket staples",
      text: "Budget-friendly pantry and drink options are easier to find before shoppers start scrolling the full catalog.",
      category: cheapest.category,
      product: cheapest,
    },
    {
      badge: "Family bundle",
      title: "Make larger family orders feel guided",
      text: "Pair family care products with daily food and hydration essentials in a more convincing marketplace flow.",
      category: family.category,
      product: family,
    },
    {
      badge: "Premium pick",
      title: "Give higher-value products a stronger spotlight",
      text: "Larger banners help expensive or gift-worthy items stand out instead of getting lost in the grid.",
      category: premium.category,
      product: premium,
    },
  ];
}

function getPromoTiles() {
  return [...appState.products]
    .filter((product) => product.category === "Electronics" || product.category === "Food Products" || product.category === "Non-Alcoholic Drinks")
    .slice(0, 3);
}

function rotatePromo(direction) {
  const slides = getPromoSlides();
  if (!slides.length) return;

  appState.promoIndex = (appState.promoIndex + direction + slides.length) % slides.length;
  renderPromoSections();
  restartPromoAutoplay();
}

function startPromoAutoplay() {
  if (appState.promoTimer || !getPromoSlides().length) return;
  appState.promoTimer = window.setInterval(() => rotatePromo(1), 5000);
}

function restartPromoAutoplay() {
  if (appState.promoTimer) window.clearInterval(appState.promoTimer);
  appState.promoTimer = null;
  startPromoAutoplay();
}

function renderFeaturedShelf() {
  const copy = translations[appState.language] || translations.en;
  const featured = [...appState.products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);

  elements.featuredShelf.innerHTML = featured
    .map(
      (product) => `
        <article class="featured-card">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
          <div class="featured-overlay">
            <span class="chip">${copy.featuredShelfTitle}</span>
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <div class="featured-meta">
              <strong>${formatCurrency(product.price)}</strong>
              <button class="primary-button featured-add" type="button" data-id="${product.id}">${copy.addToCart}</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  elements.featuredShelf.querySelectorAll(".featured-add").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      addToCart(button.dataset.id);
    });
  });
}

function renderShoppingRows() {
  const copy = translations[appState.language] || translations.en;
  const fillRow = (items) => {
    const seen = new Set(items.map((product) => product.id));
    const fallback = appState.products.filter((product) => !seen.has(product.id));
    return items.concat(fallback).slice(0, 4);
  };

  const rows = [
    {
      title: copy.bestRowTitle,
      description: copy.bestRowText,
      products: fillRow(
        [...appState.products].filter((product) => /best|top|fresh/i.test(product.badge))
      ),
    },
    {
      title: copy.budgetRowTitle,
      description: copy.budgetRowText,
      products: fillRow([...appState.products].sort((a, b) => a.price - b.price)),
      badgeOverride: copy.budgetBadge,
    },
    {
      title: copy.familyRowTitle,
      description: copy.familyRowText,
      products: fillRow(
        [...appState.products]
          .filter(
            (product) =>
              product.category === "Baby & Family" ||
              product.category === "Food Products" ||
              product.category === "Cleaning & Sanitary"
          )
          .sort((a, b) => a.price - b.price)
      ),
      badgeOverride: copy.familyBadge,
    },
  ];

  elements.shoppingRows.innerHTML = rows
    .map(
      (row, rowIndex) => `
        <section class="market-row">
          <div class="market-row-header">
            <div>
              <h3>${row.title}</h3>
              <p>${row.description}</p>
            </div>
            <a class="ghost-button" href="#catalog">${copy.browseCatalog}</a>
          </div>
          <div class="row-products">
            ${row.products
              .map((product) => createRowProductCard(product, copy, row.badgeOverride || product.badge, rowIndex))
              .join("")}
          </div>
        </section>
      `
    )
    .join("");

  elements.shoppingRows.querySelectorAll(".row-add").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.id));
  });
}

function createRowProductCard(product, copy, badgeLabel, rowIndex) {
  return `
    <article class="row-product-card row-variant-${rowIndex + 1}">
      <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
      <div class="row-product-copy">
        <span class="chip">${badgeLabel}</span>
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <div class="row-product-footer">
          <strong>${formatCurrency(product.price)}</strong>
          <div class="row-product-actions">
            <button class="primary-button row-add" type="button" data-id="${product.id}">${copy.addToCart}</button>
            <a class="ghost-button" href="product.html?id=${product.id}">${copy.details}</a>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderElectronicsSpotlight() {
  const copy = translations[appState.language] || translations.en;
  const electronics = appState.products.filter((product) => product.category === "Electronics").slice(0, 3);

  if (!electronics.length) {
    elements.electronicsSpotlight.innerHTML = "";
    return;
  }

  elements.electronicsSpotlight.innerHTML = electronics
    .map(
      (product, index) => `
        <article class="electronics-card ${index === 0 ? "electronics-card-large" : ""}">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
          <div class="electronics-card-copy">
            <span class="chip">${product.badge}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="featured-meta">
              <strong>${formatCurrency(product.price)}</strong>
              <div class="electronics-actions">
                <button class="primary-button electronics-add" type="button" data-id="${product.id}">${copy.addToCart}</button>
                <a class="ghost-button" href="product.html?id=${product.id}">${copy.details}</a>
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  elements.electronicsSpotlight.querySelectorAll(".electronics-add").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.id));
  });
}

function renderProducts() {
  const filteredProducts = appState.products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(appState.searchQuery);
    const matchesCategory =
      appState.selectedCategory === "all" || product.category === appState.selectedCategory;
    const matchesPrice = product.price <= appState.maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  elements.loadingState.classList.add("hidden");
  elements.emptyState.classList.toggle("hidden", filteredProducts.length > 0);
  elements.productsByCategory.innerHTML = "";

  const copy = translations[appState.language] || translations.en;
  elements.resultsSummary.textContent = copy.itemsFound.replace("{count}", filteredProducts.length);

  if (!filteredProducts.length) return;

  const groupedProducts = filteredProducts.reduce((groups, product) => {
    if (!groups[product.category]) groups[product.category] = [];
    groups[product.category].push(product);
    return groups;
  }, {});

  Object.entries(groupedProducts).forEach(([category, products]) => {
    const section = document.createElement("section");
    section.className = "category-section";
    section.innerHTML = `
      <div class="category-heading">
        <div>
          <p class="eyebrow">${category}</p>
          <h3>${category}</h3>
        </div>
        <span class="chip">${copy.categoryItems.replace("{count}", products.length)}</span>
      </div>
      <div class="category-products"></div>
    `;

    const productContainer = section.querySelector(".category-products");
    products.forEach((product) => productContainer.appendChild(createProductCard(product, copy)));
    elements.productsByCategory.appendChild(section);
  });
}

function createProductCard(product, copy) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-top">
      <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
      <div class="chip-row">
        <span class="chip">${product.badge}</span>
        <span class="chip">${copy.inStock}</span>
      </div>
      <div>
        <h4 class="product-name">${product.name}</h4>
        <p class="product-meta">${product.category}</p>
      </div>
    </div>
    <p class="product-snippet">${product.description}</p>
    <div class="product-actions">
      <div>
        <div class="price">${formatCurrency(product.price)}</div>
      </div>
      <button class="primary-button" type="button">${copy.addToCart}</button>
    </div>
    <a class="ghost-button full-width" href="product.html?id=${product.id}">${copy.details}</a>
  `;

  card.querySelector(".primary-button").addEventListener("click", () => addToCart(product.id));
  return card;
}

function addToCart(productId) {
  const existingItem = appState.cart.find((item) => item.id === productId);
  if (existingItem) existingItem.quantity += 1;
  else appState.cart.push({ id: productId, quantity: 1 });

  persistCart();
  renderCart();
  openCart();
}

function renderCart() {
  const copy = translations[appState.language] || translations.en;
  elements.cartCount.textContent = appState.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!appState.cart.length) {
    elements.cartItems.innerHTML = `<div class="state-panel"><p>${copy.emptyCart}</p></div>`;
    elements.cartSubtotal.textContent = formatCurrency(0);
    return;
  }

  elements.cartItems.innerHTML = appState.cart
    .map((item) => {
      const product = appState.products.find((entry) => entry.id === item.id);
      if (!product) return "";
      return `
        <article class="cart-item">
          <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
          <div>
            <strong>${product.name}</strong>
            <p class="cart-item-meta">${formatCurrency(product.price)}</p>
            <div class="qty-controls">
              <button class="qty-button" type="button" data-action="decrease" data-id="${product.id}">-</button>
              <span>${copy.quantity}: ${item.quantity}</span>
              <button class="qty-button" type="button" data-action="increase" data-id="${product.id}">+</button>
            </div>
            <button class="remove-button" type="button" data-action="remove" data-id="${product.id}">${copy.remove}</button>
          </div>
        </article>
      `;
    })
    .join("");

  const subtotal = appState.cart.reduce((sum, item) => {
    const product = appState.products.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  elements.cartSubtotal.textContent = formatCurrency(subtotal);

  elements.cartItems.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => updateCartItem(button.dataset.id, button.dataset.action));
  });
}

function updateCartItem(productId, action) {
  const item = appState.cart.find((entry) => entry.id === productId);
  if (!item) return;

  if (action === "increase") item.quantity += 1;
  if (action === "decrease") item.quantity -= 1;
  if (action === "remove" || item.quantity <= 0) {
    appState.cart = appState.cart.filter((entry) => entry.id !== productId);
  }

  persistCart();
  renderCart();
}

function persistCart() {
  saveToStorage(STORAGE_KEYS.cart, appState.cart);
}

function openCart() {
  elements.cartDrawer.classList.add("open");
  elements.cartDrawer.setAttribute("aria-hidden", "false");
  elements.overlay.hidden = false;
}

function closeCart() {
  elements.cartDrawer.classList.remove("open");
  elements.cartDrawer.setAttribute("aria-hidden", "true");
  elements.overlay.hidden = true;
}

function updatePriceLabel() {
  elements.priceValue.textContent = formatCurrency(appState.maxPrice);
}

function formatCurrency(value) {
  return `FRw ${new Intl.NumberFormat("en-RW", {
    maximumFractionDigits: 0,
  }).format(value)}`;
}

function loadFromStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
