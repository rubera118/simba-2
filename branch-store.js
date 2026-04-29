const BRANCH_STORE_KEYS = {
  language: "simba-language",
  theme: "simba-theme",
  cart: "simba-cart",
};

const branchStoreState = {
  language: loadFromStorage(BRANCH_STORE_KEYS.language, "en"),
  theme: loadFromStorage(BRANCH_STORE_KEYS.theme, "light"),
  query: "",
  branchId: "",
  cart: loadFromStorage(BRANCH_STORE_KEYS.cart, []),
};

const branchStoreTranslations = {
  en: {
    branchStorePageTitle: "Branch Store | Simba Supermarket",
    branchStoreTagline: "Branch mini store",
    branchStoreNavHome: "Home",
    branchStoreNavBranches: "Branches",
    branchStoreNavCheckout: "Checkout",
    branchStoreLanguageLabel: "Language",
    branchStoreTheme: "Theme",
    branchStoreSearchEyebrow: "Branch search",
    branchStoreSearchTitle: "Ask this branch what you need",
    branchStoreSearchText: "Search this branch like a mini store homepage with branch stock already applied.",
    branchStoreSearchLabel: "Conversational search",
    branchStoreSearchPlaceholder: "I need something for breakfast",
    branchStoreSearchAction: "Search",
    branchStoreCheckoutAction: "Checkout",
    branchStoreInfoLocation: "Location",
    branchStoreInfoHours: "Working hours",
    branchStoreInfoContact: "Contact",
    branchStoreHeroEyebrow: "Selected branch",
    branchStoreHeroCta: "Open in Google Maps",
    branchStoreHeroSecondary: "Back to all branches",
    branchStoreAvailability: "Available now",
    branchStoreResults: "{count} product(s) available in this branch",
    branchStoreEmpty: "No matching branch products found.",
    branchStoreAdd: "Add to cart",
    branchStoreOut: "Out of stock",
    branchStoreIn: "{count} in stock",
  },
  fr: {
    branchStorePageTitle: "Boutique Branche | Simba Supermarket",
    branchStoreTagline: "Mini boutique de branche",
    branchStoreNavHome: "Accueil",
    branchStoreNavBranches: "Branches",
    branchStoreNavCheckout: "Paiement",
    branchStoreLanguageLabel: "Langue",
    branchStoreTheme: "Theme",
    branchStoreSearchEyebrow: "Recherche de branche",
    branchStoreSearchTitle: "Demandez ce dont vous avez besoin a cette branche",
    branchStoreSearchText: "Recherchez cette branche comme une mini page d'accueil avec le stock de la branche deja applique.",
    branchStoreSearchLabel: "Recherche conversationnelle",
    branchStoreSearchPlaceholder: "Je veux quelque chose pour le petit-dejeuner",
    branchStoreSearchAction: "Rechercher",
    branchStoreCheckoutAction: "Paiement",
    branchStoreInfoLocation: "Adresse",
    branchStoreInfoHours: "Horaires",
    branchStoreInfoContact: "Contact",
    branchStoreHeroEyebrow: "Branche choisie",
    branchStoreHeroCta: "Ouvrir dans Google Maps",
    branchStoreHeroSecondary: "Retour aux branches",
    branchStoreAvailability: "Disponible maintenant",
    branchStoreResults: "{count} produit(s) disponibles dans cette branche",
    branchStoreEmpty: "Aucun produit correspondant dans cette branche.",
    branchStoreAdd: "Ajouter au panier",
    branchStoreOut: "Rupture de stock",
    branchStoreIn: "{count} en stock",
  },
  rw: {
    branchStorePageTitle: "Iduka ry'Ishami | Simba Supermarket",
    branchStoreTagline: "Mini store y'ishami",
    branchStoreNavHome: "Ahabanza",
    branchStoreNavBranches: "Amashami",
    branchStoreNavCheckout: "Kwishyura",
    branchStoreLanguageLabel: "Ururimi",
    branchStoreTheme: "Insanganyamatsiko",
    branchStoreSearchEyebrow: "Gushakisha ishami",
    branchStoreSearchTitle: "Baza iri shami icyo ushaka",
    branchStoreSearchText: "Shakisha iri shami nk'aho ari homepage yaryo kandi stock yaryo ibe ari yo ikoreshwa.",
    branchStoreSearchLabel: "Gushakisha nk'ikiganiro",
    branchStoreSearchPlaceholder: "Nshaka icyo kurya mu gitondo",
    branchStoreSearchAction: "Shakisha",
    branchStoreCheckoutAction: "Checkout",
    branchStoreInfoLocation: "Aho riherereye",
    branchStoreInfoHours: "Amasaha y'akazi",
    branchStoreInfoContact: "Uko wabahamagara",
    branchStoreHeroEyebrow: "Ishami ryatoranyijwe",
    branchStoreHeroCta: "Fungura muri Google Maps",
    branchStoreHeroSecondary: "Garuka ku mashami yose",
    branchStoreAvailability: "Birahari ubu",
    branchStoreResults: "Ibicuruzwa {count} biboneka muri iri shami",
    branchStoreEmpty: "Nta bicuruzwa bihuye n'ibyo ushakisha muri iri shami.",
    branchStoreAdd: "Shyira mu gaseke",
    branchStoreOut: "Ntibihari",
    branchStoreIn: "{count} biri muri stock",
  },
};

document.addEventListener("DOMContentLoaded", initBranchStorePage);

function initBranchStorePage() {
  branchStoreState.branchId = getRequestedBranchId();
  window.SIMBA_BRANCHES?.saveSelectedBranch(branchStoreState.branchId);
  branchStoreState.branchId = window.SIMBA_BRANCHES?.getSelectedBranch()?.id || branchStoreState.branchId;
  branchStoreState.cart = window.SIMBA_BRANCHES?.normalizeCart(branchStoreState.cart, branchStoreState.branchId) || [];

  applyBranchStoreTheme();
  applyBranchStoreLanguage();
  window.markPreferencesReady?.();
  bindBranchStoreControls();
  renderBranchStorePage();
}

function bindBranchStoreControls() {
  const languageSelect = document.getElementById("languageSelect");
  const themeToggle = document.getElementById("themeToggle");
  const searchInput = document.getElementById("branchStoreSearchInput");
  const searchButton = document.getElementById("branchStoreSearchButton");

  if (languageSelect) {
    languageSelect.value = branchStoreState.language;
    languageSelect.addEventListener("change", (event) => {
      branchStoreState.language = event.target.value;
      saveToStorage(BRANCH_STORE_KEYS.language, branchStoreState.language);
      applyBranchStoreLanguage();
      renderBranchStorePage();
    });
  }

  themeToggle?.addEventListener("click", () => {
    branchStoreState.theme = branchStoreState.theme === "dark" ? "light" : "dark";
    saveToStorage(BRANCH_STORE_KEYS.theme, branchStoreState.theme);
    applyBranchStoreTheme();
  });

  searchInput?.addEventListener("input", (event) => {
    branchStoreState.query = String(event.target.value || "").trim().toLowerCase();
    renderBranchStoreProducts();
  });

  searchButton?.addEventListener("click", () => {
    branchStoreState.query = String(searchInput?.value || "").trim().toLowerCase();
    renderBranchStoreProducts();
  });

  document.querySelectorAll(".branch-store-prompt").forEach((button) => {
    button.addEventListener("click", () => {
      branchStoreState.query = String(button.dataset.query || "").trim().toLowerCase();
      if (searchInput) searchInput.value = branchStoreState.query;
      renderBranchStoreProducts();
    });
  });
}

function renderBranchStorePage() {
  renderBranchHero();
  renderBranchMeta();
  renderBranchStoreProducts();
}

function renderBranchHero() {
  const branch = window.SIMBA_BRANCHES?.getBranchById(branchStoreState.branchId);
  const hero = document.getElementById("branchHero");
  if (!branch || !hero) return;

  hero.innerHTML = `
    <img class="hero-banner-image" src="${escapeHtml(branch.heroImage)}" alt="${escapeHtml(branch.name)}" />
    <div class="hero-banner-overlay"></div>
    <div class="hero-banner-content">
      <div class="hero-copy">
        <p class="eyebrow hero-badge">${t("branchStoreHeroEyebrow")}</p>
        <h1>${escapeHtml(branch.name)}</h1>
        <p>${escapeHtml(branch.specialty || "")}</p>
        <div class="hero-cta">
          <a class="primary-button" href="${branch.mapUrl}" target="_blank" rel="noreferrer">${t("branchStoreHeroCta")}</a>
          <a class="ghost-button hero-ghost" href="./branches.html">${t("branchStoreHeroSecondary")}</a>
        </div>
      </div>
    </div>
  `;
}

function renderBranchMeta() {
  const branch = window.SIMBA_BRANCHES?.getBranchById(branchStoreState.branchId);
  if (!branch) return;
  document.getElementById("branchInfoAddress").textContent = branch.address;
  document.getElementById("branchInfoHours").textContent = branch.hours;
  document.getElementById("branchInfoPhone").textContent = branch.phone;
}

function renderBranchStoreProducts() {
  const container = document.getElementById("branchStoreProducts");
  const summary = document.getElementById("branchStoreResultsSummary");
  const branch = window.SIMBA_BRANCHES?.getBranchById(branchStoreState.branchId);
  if (!container || !branch) return;

  // Each branch page behaves like a mini storefront by merging branch-specific stock and price context into the shared catalog.
  const products = (window.SIMBA_PRODUCTS || [])
    .map((product) => window.SIMBA_BRANCHES.mergeProductForBranch(product, branch.id))
    .filter((product) => product.stock > 0)
    .filter((product) => matchesBranchQuery(product, branchStoreState.query))
    .slice(0, 30);

  summary.textContent = t("branchStoreResults", { count: products.length });

  if (!products.length) {
    container.innerHTML = `<div class="state-panel"><p>${t("branchStoreEmpty")}</p></div>`;
    return;
  }

  container.innerHTML = products
    .map(
      (product) => `
        <article class="product-card branch-store-card">
          <div class="product-media">
            <img src="${escapeHtml(product.image || "assets/product-fallback.svg")}" alt="${escapeHtml(product.name)}" />
          </div>
          <div class="product-copy">
            <p class="eyebrow">${escapeHtml(product.category || "")}</p>
            <h3>${escapeHtml(product.name)}</h3>
            <p class="product-snippet">${escapeHtml(product.description || "")}</p>
          </div>
          <div class="showcase-footer">
            <div>
              <strong>${formatCurrency(product.price || 0)}</strong>
              <p class="toolbar-note">${t("branchStoreIn", { count: Number(product.stock || 0) })}</p>
            </div>
            <button class="primary-button" type="button" data-add-branch-product="${product.id}">${t("branchStoreAdd")}</button>
          </div>
        </article>
      `
    )
    .join("");

  container.querySelectorAll("[data-add-branch-product]").forEach((button) => {
    button.addEventListener("click", () => {
      addBranchProductToCart(button.dataset.addBranchProduct, branch.id);
    });
  });
}

function matchesBranchQuery(product, query) {
  if (!query) return true;
  const haystack = `${product.name} ${product.category} ${product.subcategory} ${product.description} ${product.badge}`
    .toLowerCase();
  return haystack.includes(query);
}

function addBranchProductToCart(productId, branchId) {
  const product = (window.SIMBA_PRODUCTS || []).find((entry) => entry.id === productId);
  if (!product) return;

  const availableStock = window.SIMBA_BRANCHES?.getProductBranchStock(product, branchId) || 0;
  const existingItem = branchStoreState.cart.find((item) => item.id === productId && item.branchId === branchId);

  if (existingItem) {
    existingItem.quantity = Math.min(existingItem.quantity + 1, availableStock);
  } else {
    branchStoreState.cart.push({ id: productId, branchId, quantity: 1 });
  }

  saveToStorage(BRANCH_STORE_KEYS.cart, branchStoreState.cart);
}

function applyBranchStoreLanguage() {
  document.documentElement.lang = branchStoreState.language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-document-title]").forEach((element) => {
    const title = t(element.dataset.i18nDocumentTitle);
    element.textContent = title;
    document.title = title;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
}

function applyBranchStoreTheme() {
  const isDarkTheme = branchStoreState.theme === "dark";
  document.documentElement.classList.toggle("dark", isDarkTheme);
  document.body.classList.toggle("dark", isDarkTheme);
}

function getRequestedBranchId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("branchId") || window.SIMBA_BRANCHES?.getSelectedBranch()?.id || "remera";
}

function t(key, variables = {}) {
  const copy = branchStoreTranslations[branchStoreState.language] || branchStoreTranslations.en;
  const template = copy[key] ?? branchStoreTranslations.en[key] ?? key;
  return Object.entries(variables).reduce(
    (message, [name, value]) => message.replaceAll(`{${name}}`, String(value)),
    template
  );
}

function formatCurrency(value) {
  return `RWF ${new Intl.NumberFormat("en-RW", { maximumFractionDigits: 0 }).format(Number(value || 0))}`;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function loadFromStorage(key, fallback) {
  try {
    const rawValue = localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage failures for non-critical branch demo features.
  }
}
