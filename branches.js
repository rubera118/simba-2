const BRANCH_LANGUAGE_KEY = "simba-language";
const BRANCH_THEME_KEY = "simba-theme";
const BRANCH_REVIEW_STORAGE_KEY = "simba-branch-reviews";

const branchState = {
  language: loadFromStorage(BRANCH_LANGUAGE_KEY, "en"),
  theme: loadFromStorage(BRANCH_THEME_KEY, "light"),
  query: "",
  city: "all",
};

const branchTranslations = {
  en: {
    branchesPageTitle: "Branches | Simba Supermarket",
    branchesTagline: "Branches across Rwanda",
    branchesNavHome: "Home",
    branchesNavAbout: "About",
    branchesNavContact: "Contact",
    branchesLanguageLabel: "Language",
    branchesTheme: "Theme",
    branchesHeroEyebrow: "Store network",
    branchesHeroTitle: "Choose the Simba branch you want to shop from",
    branchesHeroText:
      "Select a branch for pickup, branch-based stock visibility, and more relevant delivery details during checkout.",
    branchesSearchLabel: "Search branches",
    branchesSearchPlaceholder: "Search by branch name or area",
    branchesFilterAll: "All cities",
    branchesSelectedEyebrow: "Selected branch",
    branchesOpenMap: "Open map",
    branchesShopBranch: "Shop this branch",
    branchesShopThisBranch: "Shop this branch",
    branchesAddress: "Address",
    branchesHours: "Hours",
    branchesDeliveryFee: "Delivery fee",
    branchesCustomerRating: "Customer rating",
    branchesReviewCount: "Review count",
    branchesCustomerReviews: "Customer reviews",
    branchesNoRatings: "No ratings yet",
    branchesNoRatingsText: "Your first completed pickup review will appear here.",
    branchesPickupGood: "Pickup went well.",
    branchesPickupAvailable: "Pickup available",
    branchesDeliveryOnly: "Delivery only",
    branchesPhone: "Phone",
    branchesRating: "Rating",
    branchesSelectedAction: "Selected branch",
    branchesSelectAction: "Select branch",
    branchesSelectShopAction: "Select and shop",
    branchesNoResults: "No branches match the current search.",
    branchesResultCount: "{count} branch(es)",
  },
  fr: {
    branchesPageTitle: "Branches | Simba Supermarket",
    branchesTagline: "Branches au Rwanda",
    branchesNavHome: "Accueil",
    branchesNavAbout: "A propos",
    branchesNavContact: "Contact",
    branchesLanguageLabel: "Langue",
    branchesTheme: "Theme",
    branchesHeroEyebrow: "Reseau de magasins",
    branchesHeroTitle: "Choisissez la branche Simba ou vous voulez acheter",
    branchesHeroText:
      "Selectionnez une branche pour le retrait, la visibilite du stock par branche et des details de livraison plus pertinents au checkout.",
    branchesSearchLabel: "Rechercher une branche",
    branchesSearchPlaceholder: "Chercher par nom ou quartier",
    branchesFilterAll: "Toutes les villes",
    branchesSelectedEyebrow: "Branche choisie",
    branchesOpenMap: "Ouvrir la carte",
    branchesShopBranch: "Acheter dans cette branche",
    branchesShopThisBranch: "Acheter dans cette branche",
    branchesAddress: "Adresse",
    branchesHours: "Horaires",
    branchesDeliveryFee: "Frais de livraison",
    branchesCustomerRating: "Note client",
    branchesReviewCount: "Nombre d'avis",
    branchesCustomerReviews: "Avis clients",
    branchesNoRatings: "Pas encore d'avis",
    branchesNoRatingsText: "Votre premier avis apres retrait apparaitra ici.",
    branchesPickupGood: "Le retrait s'est bien passe.",
    branchesPickupAvailable: "Retrait disponible",
    branchesDeliveryOnly: "Livraison seulement",
    branchesPhone: "Telephone",
    branchesRating: "Note",
    branchesSelectedAction: "Branche choisie",
    branchesSelectAction: "Choisir la branche",
    branchesSelectShopAction: "Choisir et acheter",
    branchesNoResults: "Aucune branche ne correspond a cette recherche.",
    branchesResultCount: "{count} branche(s)",
  },
  rw: {
    branchesPageTitle: "Amashami | Simba Supermarket",
    branchesTagline: "Amashami mu Rwanda",
    branchesNavHome: "Ahabanza",
    branchesNavAbout: "Ibyacu",
    branchesNavContact: "Twandikire",
    branchesLanguageLabel: "Ururimi",
    branchesTheme: "Insanganyamatsiko",
    branchesHeroEyebrow: "Urusobe rw'amashami",
    branchesHeroTitle: "Hitamo ishami rya Simba ushaka guhaha mo",
    branchesHeroText:
      "Hitamo ishami kugira ngo ubone pickup, kureba stock yaryo, n'amakuru ajyanye no kohereza igihe ugeze kuri checkout.",
    branchesSearchLabel: "Shakisha ishami",
    branchesSearchPlaceholder: "Shakisha izina ry'ishami cyangwa agace",
    branchesFilterAll: "Imijyi yose",
    branchesSelectedEyebrow: "Ishami ryatoranyijwe",
    branchesOpenMap: "Fungura ikarita",
    branchesShopBranch: "Gahahira kuri iri shami",
    branchesShopThisBranch: "Gahahira kuri iri shami",
    branchesAddress: "Aderesi",
    branchesHours: "Amasaha",
    branchesDeliveryFee: "Amafaranga yo kohereza",
    branchesCustomerRating: "Amanota y'abakiriya",
    branchesReviewCount: "Umubare w'isuzuma",
    branchesCustomerReviews: "Isuzuma ry'abakiriya",
    branchesNoRatings: "Nta manota arashyirwaho",
    branchesNoRatingsText: "Isuzuma rya mbere nyuma ya pickup ni ryo rizagaragara hano.",
    branchesPickupGood: "Pickup yagenze neza.",
    branchesPickupAvailable: "Pickup irahari",
    branchesDeliveryOnly: "Kohereza gusa",
    branchesPhone: "Telefone",
    branchesRating: "Amanota",
    branchesSelectedAction: "Ishami ryatoranyijwe",
    branchesSelectAction: "Hitamo ishami",
    branchesSelectShopAction: "Hitamo ugahageze",
    branchesNoResults: "Nta shami rihuye n'ibyo ushakisha.",
    branchesResultCount: "Amashami {count}",
  },
};

document.addEventListener("DOMContentLoaded", initBranchesPage);

function initBranchesPage() {
  applyTheme();
  applyLanguage();
  window.markPreferencesReady?.();
  bindControls();
  renderBranchesPage();
}

function bindControls() {
  const languageSelect = document.getElementById("languageSelect");
  const themeToggle = document.getElementById("themeToggle");
  const searchInput = document.getElementById("branchSearchInput");
  const cityFilter = document.getElementById("branchCityFilter");

  if (languageSelect) {
    languageSelect.value = branchState.language;
    languageSelect.addEventListener("change", (event) => {
      branchState.language = event.target.value;
      saveToStorage(BRANCH_LANGUAGE_KEY, branchState.language);
      applyLanguage();
      renderBranchesPage();
    });
  }

  themeToggle?.addEventListener("click", () => {
    branchState.theme = branchState.theme === "dark" ? "light" : "dark";
    saveToStorage(BRANCH_THEME_KEY, branchState.theme);
    applyTheme();
  });

  searchInput?.addEventListener("input", (event) => {
    branchState.query = String(event.target.value || "").trim().toLowerCase();
    renderBranchesPage();
  });

  cityFilter?.addEventListener("change", (event) => {
    branchState.city = String(event.target.value || "all");
    renderBranchesPage();
  });
}

function applyLanguage() {
  document.documentElement.lang = branchState.language;
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

function applyTheme() {
  const isDarkTheme = branchState.theme === "dark";
  document.documentElement.classList.toggle("dark", isDarkTheme);
  document.body.classList.toggle("dark", isDarkTheme);
}

function renderBranchesPage() {
  const selectedPanel = document.getElementById("selectedBranchPanel");
  const grid = document.getElementById("branchGrid");
  const branchCount = document.getElementById("branchResultCount");
  const cityFilter = document.getElementById("branchCityFilter");
  const currentBranch = window.SIMBA_BRANCHES.getSelectedBranch();
  const allBranches = window.SIMBA_BRANCHES.getBranches();
  const visibleBranches = filterBranches(allBranches);
  const currentReviewSummary = getReviewSummary(currentBranch.id);

  populateCityFilter(allBranches, cityFilter);

  if (branchCount) {
    branchCount.textContent = t("branchesResultCount", { count: visibleBranches.length });
  }

  selectedPanel.innerHTML = `
    <div class="toolbar-header">
      <div>
        <p class="eyebrow">${t("branchesSelectedEyebrow")}</p>
        <h2>${currentBranch.name}</h2>
      </div>
      <div class="topbar-actions">
        <a class="ghost-button" href="${currentBranch.mapUrl}" target="_blank" rel="noreferrer">${t("branchesOpenMap")}</a>
        <a class="primary-button" href="./branch-store.html?branch=${currentBranch.id}">${t("branchesShopBranch")}</a>
      </div>
    </div>
    <div class="admin-order-grid">
      <article class="summary-box">
        <span>${t("branchesAddress")}</span>
        <strong>${currentBranch.address}</strong>
      </article>
      <article class="summary-box">
        <span>${t("branchesHours")}</span>
        <strong>${currentBranch.hours}</strong>
      </article>
      <article class="summary-box">
        <span>${t("branchesDeliveryFee")}</span>
        <strong>${formatCurrency(currentBranch.deliveryFee)}</strong>
      </article>
      <article class="summary-box">
        <span>${t("branchesCustomerRating")}</span>
        <strong>${currentReviewSummary.stars}</strong>
      </article>
      <article class="summary-box">
        <span>${t("branchesReviewCount")}</span>
        <strong>${currentReviewSummary.count}</strong>
      </article>
    </div>
    <div class="admin-order-grid">
      ${renderReviewList(currentBranch.id)}
    </div>
  `;

  if (!visibleBranches.length) {
    grid.innerHTML = `<div class="state-panel"><p>${t("branchesNoResults")}</p></div>`;
    return;
  }

  grid.innerHTML = visibleBranches
    .map((branch) => {
      const reviewSummary = getReviewSummary(branch.id);
      const isSelected = branch.id === currentBranch.id;
      return `
        <article class="showcase-panel branch-card ${isSelected ? "branch-card-selected" : ""}">
          <div class="toolbar-header compact-header">
            <div>
              <p class="eyebrow">${branch.city}</p>
              <h2>${branch.name}</h2>
            </div>
            <span class="chip">${branch.pickup ? t("branchesPickupAvailable") : t("branchesDeliveryOnly")}</span>
          </div>
          <p class="toolbar-note">${branch.address}</p>
          <div class="branch-map-frame">
            <iframe
              title="${escapeHtml(`${branch.name} map`)}"
              src="${branch.embedUrl}"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="admin-order-grid">
            <article class="summary-box">
              <span>${t("branchesHours")}</span>
              <strong>${branch.hours}</strong>
            </article>
            <article class="summary-box">
              <span>${t("branchesPhone")}</span>
              <strong>${branch.phone}</strong>
            </article>
            <article class="summary-box">
              <span>${t("branchesRating")}</span>
              <strong>${reviewSummary.stars}</strong>
            </article>
          </div>
          <div class="admin-product-actions">
            <a class="ghost-button" href="${branch.mapUrl}" target="_blank" rel="noreferrer">${t("branchesOpenMap")}</a>
            <button class="primary-button" type="button" data-branch-select="${branch.id}">
              ${isSelected ? t("branchesSelectedAction") : t("branchesSelectAction")}
            </button>
            <a class="ghost-button" href="./index.html#catalog" data-branch-shop="${branch.id}">${t("branchesSelectShopAction")}</a>
          </div>
        </article>
      `;
    })
    .join("");

  grid.querySelectorAll("[data-branch-select]").forEach((button) => {
    button.addEventListener("click", () => {
      window.SIMBA_BRANCHES.saveSelectedBranch(button.dataset.branchSelect);
      renderBranchesPage();
    });
  });

  grid.querySelectorAll("[data-branch-shop]").forEach((link) => {
    link.addEventListener("click", () => {
      window.SIMBA_BRANCHES.saveSelectedBranch(link.dataset.branchShop);
    });
  });
}

function populateCityFilter(branches, select) {
  if (!select) return;
  const cities = [...new Set(branches.map((branch) => branch.city).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  select.innerHTML = [
    `<option value="all">${t("branchesFilterAll")}</option>`,
    ...cities.map((city) => `<option value="${escapeHtml(city)}">${escapeHtml(city)}</option>`),
  ].join("");
  select.value = branchState.city;
}

function filterBranches(branches) {
  return branches.filter((branch) => {
    const haystack = `${branch.name} ${branch.city} ${branch.address}`.toLowerCase();
    const queryMatch = !branchState.query || haystack.includes(branchState.query);
    const cityMatch = branchState.city === "all" || branch.city === branchState.city;
    return queryMatch && cityMatch;
  });
}

function loadReviews() {
  return loadFromStorage(BRANCH_REVIEW_STORAGE_KEY, []);
}

function getBranchReviews(branchId) {
  return loadReviews().filter((review) => review.branchId === branchId);
}

function getReviewSummary(branchId) {
  const reviews = getBranchReviews(branchId);
  const average = reviews.length
    ? reviews.reduce((sum, review) => sum + Number(review.rating || 0), 0) / reviews.length
    : 0;

  return {
    reviews,
    average,
    count: reviews.length,
    stars: average ? getStarString(Math.round(average)) : t("branchesNoRatings"),
  };
}

function renderReviewList(branchId) {
  const summary = getReviewSummary(branchId);
  if (!summary.count) {
    return `
      <article class="summary-box">
        <span>${t("branchesCustomerReviews")}</span>
        <strong>${t("branchesNoRatings")}</strong>
        <p>${t("branchesNoRatingsText")}</p>
      </article>
    `;
  }

  return summary.reviews
    .slice(0, 2)
    .map(
      (review) => `
        <article class="summary-box">
          <span>${escapeHtml(review.customerName || "Simba")}</span>
          <strong>${getStarString(review.rating)}</strong>
          <p>${escapeHtml(review.comment || t("branchesPickupGood"))}</p>
        </article>
      `
    )
    .join("");
}

function t(key, variables = {}) {
  const copy = branchTranslations[branchState.language] || branchTranslations.en;
  const template = copy[key] ?? branchTranslations.en[key] ?? key;
  return Object.entries(variables).reduce(
    (message, [name, value]) => message.replaceAll(`{${name}}`, String(value)),
    template
  );
}

function getStarString(rating) {
  const normalized = Math.max(1, Math.min(5, Number(rating || 0)));
  return `${String.fromCharCode(9733).repeat(normalized)}${String.fromCharCode(9734).repeat(5 - normalized)}`;
}

function formatCurrency(value) {
  return `RWF ${new Intl.NumberFormat("en-RW", { maximumFractionDigits: 0 }).format(Number(value || 0))}`;
}

function loadFromStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
