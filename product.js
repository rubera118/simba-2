const STORAGE_KEYS = {
  cart: "simba-cart",
  theme: "simba-theme",
  language: "simba-language",
  selectedBranch: "simba-selected-branch",
  customerToken: "simba-customer-token",
  postAuthAction: "simba-post-auth-action",
};

const translations = {
  en: {
    productPageTitle: "Product Details | Simba Supermarket",
    languageLabel: "Language",
    navBranches: "Branches",
    navAccount: "Account",
    theme: "Theme",
    checkout: "Proceed to checkout",
    loadingProduct: "Loading product details...",
    inStock: "In stock",
    outOfStock: "Out of stock",
    onlyLeft: "Only {count} left",
    addToCart: "Add to cart",
    details: "View details",
    backHome: "Back to home",
    productMissing: "We could not find that product.",
    browseAgain: "Browse products",
    home: "Home",
    department: "Department",
    soldBy: "Sold by Simba Market Direct",
    storeBadge: "Verified store",
    deliveryTitle: "Delivery and pickup",
    deliveryFast: "Same-day delivery in Kigali",
    deliveryPickup: "Store pickup available",
    paymentTitle: "Payment options",
    paymentText: "Mobile Money, cards, and cash on delivery where available.",
    quantity: "Quantity",
    buyNow: "Add and go to checkout",
    productHighlights: "Why shoppers buy this",
    highlightFresh: "Reliable quality picked for daily shopping",
    highlightReturn: "Simple support if anything is wrong",
    highlightSpeed: "Fast reorder flow from detail page to checkout",
    marketplaceNote: "Marketplace-style details",
    marketplaceText: "We surfaced seller trust, delivery info, and related discovery to make this feel closer to a real ecommerce product page.",
    recommendedTitle: "Similar picks shoppers also view",
    recommendedText: "Keep discovery going with products from the same aisle and nearby price range.",
    moreToExplore: "More to explore",
    detailsLabel: "Product details",
    categoryLabel: "Category",
    badgeLabel: "Shelf tag",
    priceLabel: "Price",
    branchLabel: "Branch",
    branchStockTitle: "Stock at your branch",
    branchPrompt: "Select the branch you want to shop from for more accurate stock and pickup details.",
  },
  fr: {
    productPageTitle: "Details du produit | Simba Supermarket",
    languageLabel: "Langue",
    navBranches: "Branches",
    navAccount: "Compte",
    theme: "Theme",
    checkout: "Passer au paiement",
    loadingProduct: "Chargement des details du produit...",
    inStock: "En stock",
    outOfStock: "Rupture de stock",
    onlyLeft: "Plus que {count}",
    addToCart: "Ajouter au panier",
    details: "Voir details",
    backHome: "Retour a l'accueil",
    productMissing: "Produit introuvable.",
    browseAgain: "Voir les produits",
    home: "Accueil",
    department: "Departement",
    soldBy: "Vendu par Simba Market Direct",
    storeBadge: "Boutique verifiee",
    deliveryTitle: "Livraison et retrait",
    deliveryFast: "Livraison le jour meme a Kigali",
    deliveryPickup: "Retrait en magasin disponible",
    paymentTitle: "Moyens de paiement",
    paymentText: "Mobile Money, cartes et paiement a la livraison selon disponibilite.",
    quantity: "Quantite",
    buyNow: "Ajouter et aller au paiement",
    productHighlights: "Pourquoi les clients l'achetent",
    highlightFresh: "Qualite fiable pour les achats du quotidien",
    highlightReturn: "Support simple en cas de probleme",
    highlightSpeed: "Parcours rapide de la fiche produit au paiement",
    marketplaceNote: "Fiche style marketplace",
    marketplaceText: "Nous avons ajoute la confiance vendeur, la livraison et des produits lies pour se rapprocher d'une vraie page ecommerce.",
    recommendedTitle: "Selections similaires aussi consultees",
    recommendedText: "Continuez la decouverte avec des produits du meme rayon et d'un prix proche.",
    moreToExplore: "A explorer",
    detailsLabel: "Details produit",
    categoryLabel: "Categorie",
    badgeLabel: "Etiquette",
    priceLabel: "Prix",
    branchLabel: "Branche",
    branchStockTitle: "Stock dans votre branche",
    branchPrompt: "Choisissez la branche ou vous souhaitez acheter pour un stock plus precis.",
  },
  rw: {
    productPageTitle: "Ibisobanuro by'igicuruzwa | Simba Supermarket",
    languageLabel: "Ururimi",
    navBranches: "Amashami",
    navAccount: "Konti",
    theme: "Insanganyamatsiko",
    checkout: "Komeza wishyure",
    loadingProduct: "Turimo gupakurura ibisobanuro by'igicuruzwa...",
    inStock: "Birahari",
    outOfStock: "Ntibihari",
    onlyLeft: "Hasigaye {count} gusa",
    addToCart: "Shyira mu gaseke",
    details: "Reba ibisobanuro",
    backHome: "Subira ahabanza",
    productMissing: "Icyo gicuruzwa ntikibashije kuboneka.",
    browseAgain: "Reba ibicuruzwa",
    home: "Ahabanza",
    department: "Ishami",
    soldBy: "Bigurishwa na Simba Market Direct",
    storeBadge: "Iduka ryizewe",
    deliveryTitle: "Kohereza no kwakirira aho bagurira",
    deliveryFast: "Kohereza umunsi umwe i Kigali",
    deliveryPickup: "Kubifatira ku iduka birahari",
    paymentTitle: "Uburyo bwo kwishyura",
    paymentText: "Mobile Money, amakarita, cyangwa kwishyura wakiriye aho bishoboka.",
    quantity: "Ingano",
    buyNow: "Shyira mu gaseke uhite wishyura",
    productHighlights: "Impamvu abantu bayigura",
    highlightFresh: "Ubwiza bwizewe ku kugura buri munsi",
    highlightReturn: "Ubufasha bworoshye igihe hari ikibazo",
    highlightSpeed: "Kuva ku rupapuro rw'igicuruzwa kugera kuri checkout vuba",
    marketplaceNote: "Ibisobanuro bya marketplace",
    marketplaceText: "Twashyizemo amakuru y'uwigurisha, kohereza n'ibindi bicuruzwa bisa kugira ngo rirusheho gusa n'urupapuro nyarwo rwa ecommerce.",
    recommendedTitle: "Ibisa nabyo abantu bareba",
    recommendedText: "Komeza kureba ibicuruzwa byo muri icyo cyiciro no hafi y'igiciro cyacyo.",
    moreToExplore: "Ibindi wareba",
    detailsLabel: "Ibisobanuro by'igicuruzwa",
    categoryLabel: "Icyiciro",
    badgeLabel: "Ikirango",
    priceLabel: "Igiciro",
    branchLabel: "Ishami",
    branchStockTitle: "Stock ku ishami wahisemo",
    branchPrompt: "Hitamo ishami ushaka kuguriramo kugira ngo ubone stock nyayo.",
  },
};

const state = {
  language: loadFromStorage(STORAGE_KEYS.language, "en"),
  theme: loadFromStorage(STORAGE_KEYS.theme, "light"),
  cart: window.SIMBA_BRANCHES
    ? window.SIMBA_BRANCHES.normalizeCart(loadFromStorage(STORAGE_KEYS.cart, []), window.SIMBA_BRANCHES.getSelectedBranch().id)
    : loadFromStorage(STORAGE_KEYS.cart, []),
  quantity: 1,
  selectedBranchId: window.SIMBA_BRANCHES?.getSelectedBranch()?.id || "",
};

const PRODUCT_FALLBACK_IMAGE = "assets/product-fallback.svg";

document.addEventListener("DOMContentLoaded", initProductPage);

async function initProductPage() {
  applyTheme();
  bindControls();
  applyLanguage();
  await renderProductDetail();
}

function bindControls() {
  const languageSelect = document.getElementById("languageSelect");
  const themeToggle = document.getElementById("themeToggle");

  languageSelect.value = state.language;
  languageSelect.addEventListener("change", (event) => {
    state.language = event.target.value;
    saveToStorage(STORAGE_KEYS.language, state.language);
    applyLanguage();
    renderProductDetail();
  });

  themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveToStorage(STORAGE_KEYS.theme, state.theme);
    applyTheme();
  });
}

function applyLanguage() {
  const copy = translations[state.language] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) node.textContent = copy[key];
  });
  document.querySelectorAll("[data-i18n-document-title]").forEach((node) => {
    const key = node.dataset.i18nDocumentTitle;
    if (copy[key]) {
      node.textContent = copy[key];
      document.title = copy[key];
    }
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const key = node.dataset.i18nAriaLabel;
    if (copy[key]) node.setAttribute("aria-label", copy[key]);
  });
  document.documentElement.lang = state.language;
}

function applyTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
}

async function renderProductDetail() {
  const container = document.getElementById("productDetail");
  const loading = document.getElementById("detailLoading");
  const recommendationsSection = document.getElementById("detailRecommendations");
  const recommendationsContainer = document.getElementById("recommendedProducts");
  loading?.classList.remove("hidden");
  state.quantity = 1;

  const copy = translations[state.language] || translations.en;
  const productId = new URLSearchParams(window.location.search).get("id");

  try {
    const products = await loadProducts();
    const product = products.find((item) => item.id === productId);

    if (!product) {
      recommendationsSection.classList.add("hidden");
      container.innerHTML = `
        <section class="state-panel">
          <h2>${copy.productMissing}</h2>
          <a class="primary-button" href="index.html">${copy.browseAgain}</a>
        </section>
      `;
      return;
    }

    const relatedProducts = products
      .filter((item) => item.id !== product.id)
      .sort((a, b) => getProductDistance(product, a) - getProductDistance(product, b))
      .slice(0, 4);

    container.innerHTML = `
      <article class="detail-card marketplace-detail-card">
        <nav class="breadcrumb-trail" aria-label="Breadcrumb">
          <a href="index.html">${copy.home}</a>
          <span>/</span>
          <a href="index.html#aisles">${copy.department}</a>
          <span>/</span>
          <span>${product.category}</span>
        </nav>

        <div class="detail-layout marketplace-detail-layout">
          <section class="detail-gallery">
            <div class="detail-image-frame">
              <img class="detail-image" src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
            </div>
            <div class="detail-highlights-grid">
              <article class="detail-mini-card">
                <span class="eyebrow">${copy.storeBadge}</span>
                <strong>${copy.soldBy}</strong>
              </article>
              <article class="detail-mini-card">
                <span class="eyebrow">${copy.branchStockTitle}</span>
                <strong>${window.SIMBA_BRANCHES?.getBranchById(state.selectedBranchId).name || ""}</strong>
              </article>
              <article class="detail-mini-card">
                <span class="eyebrow">${copy.paymentTitle}</span>
                <strong>${copy.paymentText}</strong>
              </article>
            </div>
          </section>

          <section class="detail-summary marketplace-summary">
            <p class="eyebrow">${copy.detailsLabel}</p>
            <h1 class="product-name">${product.name}</h1>
            <div class="chip-row">
              <span class="chip">${product.badge}</span>
              <span class="chip">${getAvailabilityLabel(product, copy)}</span>
            </div>
            <div class="detail-price-line">
              <div>
                <small>${copy.priceLabel}</small>
                <div class="price">${formatCurrency(product.price)}</div>
              </div>
              <span class="detail-stock-pill">${copy.deliveryPickup}</span>
            </div>
            <p class="detail-description">${product.description}</p>

            <div class="detail-meta-grid">
              <article class="summary-box">
                <span>${copy.categoryLabel}</span>
                <strong>${product.category}</strong>
              </article>
              <article class="summary-box">
                <span>${copy.badgeLabel}</span>
                <strong>${product.badge}</strong>
              </article>
            </div>

            <div class="purchase-panel">
              <label class="field">
                <span>${copy.branchLabel}</span>
                <select id="detailBranchSelect">
                  ${(window.SIMBA_BRANCHES?.getBranches() || [])
                    .map(
                      (branch) => `<option value="${branch.id}" ${branch.id === state.selectedBranchId ? "selected" : ""}>${branch.name}</option>`
                    )
                    .join("")}
                </select>
                <small>${copy.branchPrompt}</small>
              </label>
              <div class="qty-picker">
                <span>${copy.quantity}</span>
                <div class="qty-stepper">
                  <button class="qty-button" type="button" data-qty="decrease">-</button>
                  <strong id="detailQuantityValue">1</strong>
                  <button class="qty-button" type="button" data-qty="increase" ${product.stock <= 1 ? "disabled" : ""}>+</button>
                </div>
              </div>
              <div class="detail-action-grid">
                <button id="detailAddToCart" class="primary-button" type="button" ${product.stock <= 0 ? "disabled" : ""}>${product.stock > 0 ? copy.addToCart : copy.outOfStock}</button>
                <button id="detailBuyNow" class="ghost-button" type="button" ${product.stock <= 0 ? "disabled" : ""}>${copy.buyNow}</button>
              </div>
            </div>

            <section class="marketplace-note">
              <p class="eyebrow">${copy.marketplaceNote}</p>
              <p>${copy.marketplaceText}</p>
            </section>
          </section>
        </div>

        <section class="detail-lower-grid">
          <article class="showcase-panel detail-info-panel">
            <div class="toolbar-header compact-header">
              <div>
                <p class="eyebrow">${copy.productHighlights}</p>
                <h2>${product.name}</h2>
              </div>
            </div>
            <div class="detail-points">
              <div class="detail-point">${copy.highlightFresh}</div>
              <div class="detail-point">${copy.highlightReturn}</div>
              <div class="detail-point">${copy.highlightSpeed}</div>
            </div>
          </article>

          <article class="showcase-panel detail-info-panel">
            <div class="toolbar-header compact-header">
              <div>
                <p class="eyebrow">${copy.deliveryTitle}</p>
                <h2>${copy.paymentTitle}</h2>
              </div>
            </div>
            <div class="detail-checklist">
              <p>${copy.deliveryFast}</p>
              <p>${copy.deliveryPickup}</p>
              <p>${copy.paymentText}</p>
            </div>
          </article>
        </section>
      </article>
    `;

    bindDetailActions(product);
    renderRecommendations(relatedProducts, recommendationsSection, recommendationsContainer);
  } catch (error) {
    recommendationsSection.classList.add("hidden");
    container.innerHTML = `<section class="state-panel"><p>${copy.productMissing}</p></section>`;
    console.error(error);
  }
}

function bindDetailActions(product) {
  const quantityValue = document.getElementById("detailQuantityValue");
  const branchSelect = document.getElementById("detailBranchSelect");
  const syncQuantity = () => {
    quantityValue.textContent = String(state.quantity);
  };

  branchSelect?.addEventListener("change", () => {
    state.selectedBranchId = branchSelect.value;
    window.SIMBA_BRANCHES?.saveSelectedBranch(state.selectedBranchId);
    window.location.search = `?id=${encodeURIComponent(product.id)}`;
  });

  document.querySelectorAll("[data-qty]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.qty === "increase") state.quantity = Math.min(product.stock, state.quantity + 1);
      if (button.dataset.qty === "decrease") state.quantity = Math.max(1, state.quantity - 1);
      syncQuantity();
    });
  });

  document.getElementById("detailAddToCart")?.addEventListener("click", () => {
    if (
      !ensureSignedInForCartAction({
        type: "add-to-cart",
        productId: product.id,
        quantity: state.quantity,
        branchId: state.selectedBranchId,
        redirectTo: "index.html?openCart=1",
      })
    ) {
      return;
    }

    addProductToCart(product.id, state.quantity, state.selectedBranchId);
  });

  document.getElementById("detailBuyNow")?.addEventListener("click", () => {
    if (
      !ensureSignedInForCartAction({
        type: "buy-now",
        productId: product.id,
        quantity: state.quantity,
        branchId: state.selectedBranchId,
        redirectTo: "checkout.html",
      })
    ) {
      return;
    }

    addProductToCart(product.id, state.quantity, state.selectedBranchId);
    window.location.href = "checkout.html";
  });
}

function renderRecommendations(products, section, container) {
  if (!products.length) {
    section.classList.add("hidden");
    container.innerHTML = "";
    return;
  }

  const copy = translations[state.language] || translations.en;
  section.classList.remove("hidden");
  container.innerHTML = products
    .map(
      (product) => `
        <article class="row-product-card">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
          <div class="row-product-copy">
            <span class="chip">${product.badge}</span>
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <div class="row-product-footer">
              <strong>${formatCurrency(product.price)}</strong>
              <div class="row-product-actions">
                <a class="ghost-button" href="product.html?id=${product.id}">${copy.details}</a>
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function addProductToCart(productId, quantity, branchId) {
  const existingItem = state.cart.find((item) => item.id === productId && item.branchId === branchId);
  if (existingItem) existingItem.quantity += quantity;
  else state.cart.push({ id: productId, quantity, branchId });
  saveToStorage(STORAGE_KEYS.cart, state.cart);
}

function getProductDistance(baseProduct, candidate) {
  const categoryPenalty = baseProduct.category === candidate.category ? 0 : 100000;
  return categoryPenalty + Math.abs(baseProduct.price - candidate.price);
}

function formatCurrency(value) {
  return `RWF ${new Intl.NumberFormat("en-RW", {
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

function isCustomerSignedIn() {
  return Boolean(loadFromStorage(STORAGE_KEYS.customerToken, ""));
}

function ensureSignedInForCartAction(action) {
  if (isCustomerSignedIn()) {
    return true;
  }

  saveToStorage(STORAGE_KEYS.postAuthAction, action);
  window.location.href = `account.html?returnTo=${encodeURIComponent(action.redirectTo || "index.html?openCart=1")}`;
  return false;
}

function getAvailabilityLabel(product, copy) {
  if (product.stock <= 0) return copy.outOfStock;
  if (product.stock <= 5) return copy.onlyLeft.replace("{count}", product.stock);
  return copy.inStock;
}

async function loadProducts() {
  const branchId = encodeURIComponent(state.selectedBranchId || "");
  try {
    const response = await fetch(apiUrl(`/api/products${branchId ? `?branchId=${branchId}` : ""}`));
    if (response.ok) {
      const payload = await response.json();
      if (Array.isArray(payload.products)) return payload.products;
    }
  } catch {
    // Fall back to bundled product data when the backend is unavailable.
  }

  if (Array.isArray(window.SIMBA_PRODUCTS) && window.SIMBA_PRODUCTS.length) {
    return window.SIMBA_PRODUCTS.map((product) =>
      window.SIMBA_BRANCHES ? window.SIMBA_BRANCHES.mergeProductForBranch(product, state.selectedBranchId) : product
    );
  }

  const response = await fetch("products.json");
  const products = await response.json();
  return products.map((product) =>
    window.SIMBA_BRANCHES ? window.SIMBA_BRANCHES.mergeProductForBranch(product, state.selectedBranchId) : product
  );
}

function apiUrl(path) {
  const baseUrl = window.SIMBA_CONFIG?.API_BASE_URL?.trim();
  return baseUrl ? `${baseUrl}${path}` : path;
}
