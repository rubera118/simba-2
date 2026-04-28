/**
 * Branch Store Page - Simba Supermarket
 * Each branch acts like a mini store homepage with its own products
 */

const STORAGE_KEYS = {
  cart: "simba-cart",
  theme: "simba-theme",
  language: "simba-language",
  selectedBranch: "simba-selected-branch",
};

const translations = {
  en: {
    branchStoreTitle: "Branch Store | Simba Supermarket",
    branchStoreTagline: "Your local Simba branch",
    branchStoreAllBranches: "All branches",
    branchStoreEyebrow: "Simba branch",
    branchStoreDescription: "Your local Simba supermarket for fresh groceries and everyday essentials.",
    branchStoreShopNow: "Shop now",
    branchStoreChangeBranch: "Change branch",
    branchStoreAddress: "Address",
    branchStoreHours: "Hours",
    branchStorePhone: "Phone",
    branchStoreDelivery: "Delivery fee",
    branchStorePickupTitle: "Pickup available",
    branchStorePickupSubtitle: "Order online, pick up in store",
    branchStorePickupText: "Skip the queue. We prepare your order for fast in-store pickup.",
    branchStoreProductsEyebrow: "Available now",
    branchStoreProductsTitle: "Products at this branch",
    cartBadge: "Your basket",
    cartTitle: "Shopping cart",
    subtotal: "Subtotal",
    checkout: "Proceed to checkout",
    searchLabel: "Search",
    searchPlaceholder: "Search products...",
    categoryLabel: "Category",
    allCategories: "All categories",
    languageLabel: "Language",
    theme: "Theme",
    cart: "Cart",
    addToCart: "Add to cart",
    details: "View details",
    inStock: "In stock",
    outOfStock: "Out of stock",
    onlyLeft: "Only {count} left",
     emptyTitle: "No products found",
    emptyText: "Try a different search or category.",
  },
  fr: {
    branchStoreTitle: "Magasin | Simba Supermarket",
    branchStoreTagline: "Votre branche Simba locale",
    branchStoreAllBranches: "Toutes les branches",
    branchStoreEyebrow: "Branche Simba",
    branchStoreDescription: "Votre supermercado Simba local pour les courses quotidiennes.",
    branchStoreShopNow: "Acheter",
    branchStoreChangeBranch: "Changer de branche",
    branchStoreAddress: "Adresse",
    branchStoreHours: "Horaires",
    branchStorePhone: "Telephone",
    branchStoreDelivery: "Frais de livraison",
    branchStorePickupTitle: "Retrait disponible",
    branchStorePickupSubtitle: "Commandez en ligne, retirez en magasin",
    branchStorePickupText: "Skip la file. Nous preparons votre commande pour un retrait rapide.",
    branchStoreProductsEyebrow: "Disponible",
    branchStoreProductsTitle: "Produits dans cette branche",
    cartBadge: "Votre panier",
    cartTitle: "Panier",
    subtotal: "Sous-total",
    checkout: "Passer au paiement",
    searchLabel: "Rechercher",
    searchPlaceholder: "Rechercher produits...",
    categoryLabel: "Categorie",
    allCategories: "Toutes les categories",
    languageLabel: "Langue",
    theme: "Theme",
    cart: "Panier",
    addToCart: "Ajouter au panier",
    details: "Voir details",
    inStock: "En stock",
    outOfStock: "Rupture de stock",
    onlyLeft: "Plus que {count}",
    emptyTitle: "Aucun produit trouve",
    emptyText: "Essayez une autre recherche ou categorie.",
  },
  rw: {
    branchStoreTitle: "Iduka | Simba Supermarket",
    branchStoreTagline: "Ishami ryawe",
    branchStoreAllBranches: "Amashami yose",
    branchStoreEyebrow: "Ishami rya Simba",
    branchStoreDescription: "Iduka rya Simba mu murenge wawe kubicuruzwa buli munsi.",
    branchStoreShopNow: "Gura ubu",
    branchStoreChangeBranch: "Hindura ishami",
    branchStoreAddress: "Aderesi",
    branchStoreHours: "Amash和时间",
    branchStorePhone: "Telefone",
    branchStoreDelivery: "Frais yo kohereza",
    branchStorePickupTitle: "Pickup irahari",
    branchStorePickupSubtitle: "Order kuri internet, fatira kuri store",
    branchStorePickupText: "Tegereza abakozi bag Preparing order yawe.",
    branchStoreProductsEyebrow: "Birahari",
    branchStoreProductsTitle: "Ibicuruzwa muri iri shami",
    cartBadge: "Agaseke",
    cartTitle: "Agaseke",
    subtotal: "Igiteranyo",
    checkout: "Komeza wishyura",
    searchLabel: "Shaka",
    searchPlaceholder: "Shaka ibicuruzwa...",
    categoryLabel: "Icyiciro",
    allCategories: "Ibyiciro byose",
    languageLabel: "Ururimi",
    theme: "Insanganyamatsiko",
    cart: "Agaseke",
    addToCart: "Shyira mu gaseke",
    details: "Reba ibisobanuro",
    inStock: "Birahari",
    outOfStock: "Ntibihari",
    onlyLeft: "Hasigaye {count}",
    emptyTitle: "Nta bicuruzwa",
    emptyText: "Gerageza indi search cyangwa category.",
  },
};

const appState = {
  branchId: "",
  branch: null,
  products: [],
  cart: loadFromStorage(STORAGE_KEYS.cart, []),
  language: loadFromStorage(STORAGE_KEYS.language, "en"),
  theme: loadFromStorage(STORAGE_KEYS.theme, "light"),
  searchQuery: "",
  selectedCategory: "all",
};

const elements = {
  body: document.body,
  branchNameTitle: document.getElementById("branchNameTitle"),
  branchDescription: document.getElementById("branchDescription"),
  branchAddress: document.getElementById("branchAddress"),
  branchHours: document.getElementById("branchHours"),
  branchPhone: document.getElementById("branchPhone"),
  branchDeliveryFee: document.getElementById("branchDeliveryFee"),
  branchProductSearch: document.getElementById("branchProductSearch"),
  branchCategoryFilter: document.getElementById("branchCategoryFilter"),
  branchProductsGrid: document.getElementById("branchProductsGrid"),
  cartToggle: document.getElementById("cartToggle"),
  closeCart: document.getElementById("closeCart"),
  cartDrawer: document.getElementById("cartDrawer"),
  overlay: document.getElementById("overlay"),
  cartItems: document.getElementById("cartItems"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartCount: document.getElementById("cartCount"),
  languageSelect: document.getElementById("languageSelect"),
  themeToggle: document.getElementById("themeToggle"),
};

function t(key, vars = {}) {
  const copy = translations[appState.language] || translations.en;
  let text = copy[key] || translations.en[key] || key;
  Object.entries(vars).forEach(([k, v]) => text = text.replace(`{${k}}`, v));
  return text;
}

function loadFromStorage(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch { return fallback; }
}

function saveToStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

document.addEventListener("DOMContentLoaded", init);

async function init() {
  const params = new URLSearchParams(window.location.search);
  appState.branchId = params.get("branch") || loadFromStorage(STORAGE_KEYS.selectedBranch, "");
  
  if (!appState.branchId) {
    window.location.href = "branches.html";
    return;
  }
  
  appState.branch = window.SIMBA_BRANCHES?.getBranchById(appState.branchId);
  
  if (!appState.branch) {
    window.location.href = "branches.html";
    return;
  }
  
  saveToStorage(STORAGE_KEYS.selectedBranch, appState.branchId);
  
  applyTheme();
  applyLanguage();
  window.markPreferencesReady?.();
  
  await loadProducts();
  renderBranchInfo();
  renderProducts();
  renderCart();
  bindControls();
}

async function loadProducts() {
  if (typeof loadProductCatalog === "function") {
    appState.products = await loadProductCatalog();
  } else if (window.SIMBA_PRODUCTS) {
    appState.products = window.SIMBA_PRODUCTS;
  }
  populateCategoryFilter();
}

function renderBranchInfo() {
  const b = appState.branch;
  if (!b) return;
  
  document.title = t("branchStoreTitle").replace("{branchName}", b.name);
  document.documentElement.lang = appState.language;
  
  if (elements.branchNameTitle) elements.branchNameTitle.textContent = b.name;
  if (elements.branchAddress) elements.branchAddress.textContent = b.address;
  if (elements.branchHours) elements.branchHours.textContent = b.hours || "Open daily";
  if (elements.branchPhone) elements.branchPhone.textContent = b.phone || "";
  if (elements.branchDeliveryFee) elements.branchDeliveryFee.textContent = `RWF ${b.deliveryFee || 2000}`;
  
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (key.includes("Tagline")) el.textContent = t(key).replace("{branchName}", b.name);
    else if (copy[key]) el.textContent = t(key);
  });
  
  document.querySelectorAll("[data-i18n-document-title]").forEach(el => {
    el.textContent = t(el.dataset.i18nDocumentTitle).replace("{branchName}", b.name);
  });
}

function renderProducts() {
  let products = appState.products.filter(p => p.active);
  
  const branchId = appState.branchId;
  products = products.filter(p => {
    const stock = p.branchStock?.[branchId] ?? p.stock;
    return stock > 0;
  });
  
  if (appState.searchQuery) {
    const q = appState.searchQuery.toLowerCase();
    products = products.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q)
    );
  }
  
  if (appState.selectedCategory !== "all") {
    products = products.filter(p => p.category === appState.selectedCategory);
  }
  
  if (!products.length) {
    elements.branchProductsGrid.innerHTML = `
      <div class="state-panel">
        <h3>${t("emptyTitle")}</h3>
        <p>${t("emptyText")}</p>
      </div>
    `;
    return;
  }
  
  elements.branchProductsGrid.innerHTML = products.slice(0, 24).map(p => {
    const stock = p.branchStock?.[appState.branchId] ?? p.stock;
    const inCart = appState.cart.find(i => i.id === p.id && i.branchId === appState.branchId);
    const qty = inCart?.quantity || 0;
    
    return `
      <article class="market-mini-card">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='assets/product-fallback.svg'" />
        <div class="market-mini-body">
          <p class="eyebrow">${p.category}</p>
          <h3>${p.name}</h3>
          <div class="market-mini-meta">
            <strong>RWF ${new Intl.NumberFormat("en-RW").format(p.price)}</strong>
            <span class="${stock > 5 ? 'chip' : stock > 0 ? 'chip chip-warning' : 'chip chip-muted'}">
              ${stock > 0 ? t(stock > 5 ? "inStock" : "onlyLeft", {count: stock}) : t("outOfStock")}
            </span>
          </div>
          <div class="market-mini-actions">
            ${qty > 0 ? `
              <div class="qty-stepper">
                <button type="button" data-decrease="${p.id}">-</button>
                <strong>${qty}</strong>
                <button type="button" data-increase="${p.id}">+</button>
              </div>
            ` : `
              <button class="primary-button" type="button" data-add="${p.id}">${t("addToCart")}</button>
            `}
            <a class="ghost-button" href="product.html?id=${p.id}">${t("details")}</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
  
  bindProductActions();
}

function populateCategoryFilter() {
  const cats = [...new Set(appState.products.map(p => p.category))].sort();
  elements.branchCategoryFilter.innerHTML = `<option value="all">${t("allCategories")}</option>` + 
    cats.map(c => `<option value="${c}">${c}</option>`).join("");
}

function renderCart() {
  const branchItems = appState.cart.filter(i => i.branchId === appState.branchId);
  
  if (!branchItems.length) {
    elements.cartItems.innerHTML = `<p class="checkout-message">${t("emptyCart")}</p>`;
    elements.cartSubtotal.textContent = "RWF 0";
    elements.cartCount.textContent = "0";
    return;
  }
  
  const itemsHtml = branchItems.map(item => {
    const product = appState.products.find(p => p.id === item.id);
    if (!product) return "";
    const total = product.price * item.quantity;
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" />
        <div>
          <h4>${product.name}</h4>
          <p>RWF ${new Intl.NumberFormat("en-RW").format(product.price)} x ${item.quantity}</p>
        </div>
        <strong>RWF ${new Intl.NumberFormat("en-RW").format(total)}</strong>
        <button type="button" data-remove="${item.id}">${t("remove")}</button>
      </div>
    `;
  }).join("");
  
  elements.cartItems.innerHTML = itemsHtml;
  
  const subtotal = branchItems.reduce((sum, item) => {
    const p = appState.products.find(x => x.id === item.id);
    return sum + (p ? p.price * item.quantity : 0);
  }, 0);
  
  elements.cartSubtotal.textContent = `RWF ${new Intl.NumberFormat("en-RW").format(subtotal)}`;
  elements.cartCount.textContent = branchItems.reduce((s, i) => s + i.quantity, 0);
  
  elements.cartItems.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
      appState.cart = appState.cart.filter(i => !(i.id === btn.dataset.remove && i.branchId === appState.branchId));
      saveToStorage(STORAGE_KEYS.cart, appState.cart);
      renderCart();
    });
  });
}

function bindProductActions() {
  elements.branchProductsGrid.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", () => addToCart(btn.dataset.add));
  });
  
  elements.branchProductsGrid.querySelectorAll("[data-increase]").forEach(btn => {
    btn.addEventListener("click", () => updateQty(btn.dataset.increase, 1));
  });
  
  elements.branchProductsGrid.querySelectorAll("[data-decrease]").forEach(btn => {
    btn.addEventListener("click", () => updateQty(btn.dataset.decrease, -1));
  });
}

function addToCart(productId) {
  const existing = appState.cart.find(i => i.id === productId && i.branchId === appState.branchId);
  if (existing) {
    existing.quantity++;
  } else {
    appState.cart.push({ id: productId, quantity: 1, branchId: appState.branchId });
  }
  saveToStorage(STORAGE_KEYS.cart, appState.cart);
  renderProducts();
  renderCart();
}

function updateQty(productId, delta) {
  const item = appState.cart.find(i => i.id === productId && i.branchId === appState.branchId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    appState.cart = appState.cart.filter(i => !(i.id === productId && i.branchId === appState.branchId));
  }
  saveToStorage(STORAGE_KEYS.cart, appState.cart);
  renderProducts();
  renderCart();
}

function bindControls() {
  elements.cartToggle.addEventListener("click", openCart);
  elements.closeCart.addEventListener("click", closeCart);
  elements.overlay.addEventListener("click", closeCart);
  
  elements.languageSelect.value = appState.language;
  elements.languageSelect.addEventListener("change", e => {
    appState.language = e.target.value;
    saveToStorage(STORAGE_KEYS.language, appState.language);
    applyLanguage();
  });
  
  elements.themeToggle.addEventListener("click", () => {
    appState.theme = appState.theme === "dark" ? "light" : "dark";
    saveToStorage(STORAGE_KEYS.theme, appState.theme);
    applyTheme();
  });
  
  elements.branchProductSearch.addEventListener("input", e => {
    appState.searchQuery = e.target.value;
    renderProducts();
  });
  
  elements.branchCategoryFilter.addEventListener("change", e => {
    appState.selectedCategory = e.target.value;
    renderProducts();
  });
}

function openCart() {
  elements.cartDrawer.classList.remove("hidden");
  elements.overlay.classList.remove("hidden");
}

function closeCart() {
  elements.cartDrawer.classList.add("hidden");
  elements.overlay.classList.add("hidden");
}

function applyLanguage() {
  document.documentElement.lang = appState.language;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
}

function applyTheme() {
  const dark = appState.theme === "dark";
  document.documentElement.classList.toggle("dark", dark);
  elements.body.classList.toggle("dark", dark);
}

const PRODUCT_FALLBACK = "assets/product-fallback.svg";
function getProductImage(product) {
  return product.image || PRODUCT_FALLBACK;
}