const ABOUT_LANGUAGE_KEY = "simba-language";
const ABOUT_THEME_KEY = "simba-theme";

const aboutState = {
  language: loadFromStorage(ABOUT_LANGUAGE_KEY, "en"),
  theme: loadFromStorage(ABOUT_THEME_KEY, "light"),
};

const aboutTranslations = {
  en: {
    aboutPageTitle: "About | Simba Supermarket",
    aboutTagline: "About Simba",
    aboutNavHome: "Home",
    aboutNavBranches: "Branches",
    aboutNavContact: "Contact",
    aboutLanguageLabel: "Language",
    aboutTheme: "Theme",
    aboutHeroEyebrow: "About us",
    aboutHeroTitle: "Simba Supermarket for modern everyday shopping",
    aboutHeroText:
      "Simba Supermarket brings groceries, household essentials, beauty, drinks, kitchenware, and trusted family products together in one convenient shopping experience.",
    aboutOfferEyebrow: "What we offer",
    aboutOfferTitle: "Fresh choices, home essentials, and easy ordering",
    aboutOfferPointOne: "A wide supermarket catalog based on real Simba products and departments.",
    aboutOfferPointTwo: "Branch-aware shopping with branch selection for stock, pickup, and delivery context.",
    aboutOfferPointThree: "Mobile-friendly browsing, cleaner search, and faster ordering for everyday customers.",
    aboutFocusEyebrow: "Our focus",
    aboutFocusTitle: "Convenience, trust, and local relevance",
    aboutFocusPointOne: "Designed around the way supermarket customers shop in Rwanda.",
    aboutFocusPointTwo: "Built to support delivery, pickup, Mobile Money, and clear branch communication.",
    aboutFocusPointThree: "Structured as a storefront that can keep growing with admin tools and backend APIs.",
  },
  fr: {
    aboutPageTitle: "A propos | Simba Supermarket",
    aboutTagline: "A propos de Simba",
    aboutNavHome: "Accueil",
    aboutNavBranches: "Branches",
    aboutNavContact: "Contact",
    aboutLanguageLabel: "Langue",
    aboutTheme: "Theme",
    aboutHeroEyebrow: "A propos",
    aboutHeroTitle: "Simba Supermarket pour un shopping quotidien moderne",
    aboutHeroText:
      "Simba Supermarket rassemble les courses, les essentiels de maison, la beaute, les boissons, les ustensiles de cuisine et les produits familiaux de confiance dans une experience simple et pratique.",
    aboutOfferEyebrow: "Ce que nous proposons",
    aboutOfferTitle: "Des produits frais, les essentiels de maison et une commande facile",
    aboutOfferPointOne: "Un large catalogue de supermarche base sur de vrais produits et departements Simba.",
    aboutOfferPointTwo: "Un shopping lie a la branche avec choix de branche pour le stock, le retrait et la livraison.",
    aboutOfferPointThree: "Une navigation mobile plus claire, une meilleure recherche et une commande plus rapide pour les clients du quotidien.",
    aboutFocusEyebrow: "Notre priorite",
    aboutFocusTitle: "Confort, confiance et pertinence locale",
    aboutFocusPointOne: "Concu autour de la facon dont les clients de supermarche achetent au Rwanda.",
    aboutFocusPointTwo: "Pense pour la livraison, le retrait, Mobile Money et une communication claire par branche.",
    aboutFocusPointThree: "Structure comme une boutique qui peut continuer a grandir avec des outils admin et des APIs backend.",
  },
  rw: {
    aboutPageTitle: "Ibyerekeye | Simba Supermarket",
    aboutTagline: "Ibyerekeye Simba",
    aboutNavHome: "Ahabanza",
    aboutNavBranches: "Amashami",
    aboutNavContact: "Twandikire",
    aboutLanguageLabel: "Ururimi",
    aboutTheme: "Insanganyamatsiko",
    aboutHeroEyebrow: "Ibyerekeye twe",
    aboutHeroTitle: "Simba Supermarket igenewe guhaha kwa buri munsi mu buryo bwa none",
    aboutHeroText:
      "Simba Supermarket ihuriza hamwe ibiribwa, ibikenerwa mu rugo, ubwiza, ibinyobwa, ibikoresho byo mu gikoni n'ibicuruzwa byizewe by'umuryango mu buryo bworoshye kandi bworohereza abakiriya.",
    aboutOfferEyebrow: "Ibyo dutanga",
    aboutOfferTitle: "Ibyatoranyijwe bishya, ibikenerwa mu rugo n'ugutumiza byoroshye",
    aboutOfferPointOne: "Catalog nini ya supermarket yubakiye ku bicuruzwa n'amashami nyayo bya Simba.",
    aboutOfferPointTwo: "Guhaha gushingiye ku ishami hamwe no guhitamo ishami kugira ngo ubone stock, pickup na delivery neza.",
    aboutOfferPointThree: "Gukoresha neza kuri telefoni, ubushakashatsi busukuye n'ugutumiza vuba ku bakiriya ba buri munsi.",
    aboutFocusEyebrow: "Icyo twibandaho",
    aboutFocusTitle: "Korohereza abakiriya, kwizerana no gukorera aho turi",
    aboutFocusPointOne: "Byubakiye ku buryo abakiriya ba supermarket bahaha mu Rwanda.",
    aboutFocusPointTwo: "Byateguriwe delivery, pickup, Mobile Money n'itumanaho risobanutse rya buri shami.",
    aboutFocusPointThree: "Byubatswe nk'iduka rishobora gukomeza gukura rongerwamo ibikoresho bya admin na backend APIs.",
  },
};

document.addEventListener("DOMContentLoaded", initAboutPage);

function initAboutPage() {
  applyTheme();
  applyLanguage();
  window.markPreferencesReady?.();
  const languageSelect = document.getElementById("languageSelect");
  const themeToggle = document.getElementById("themeToggle");
  if (languageSelect) {
    languageSelect.value = aboutState.language;
    languageSelect.addEventListener("change", (event) => {
      aboutState.language = event.target.value;
      saveToStorage(ABOUT_LANGUAGE_KEY, aboutState.language);
      applyLanguage();
    });
  }
  themeToggle?.addEventListener("click", () => {
    aboutState.theme = aboutState.theme === "dark" ? "light" : "dark";
    saveToStorage(ABOUT_THEME_KEY, aboutState.theme);
    applyTheme();
  });
}

function t(key) {
  return aboutTranslations[aboutState.language]?.[key] ?? aboutTranslations.en[key] ?? key;
}

function applyLanguage() {
  document.documentElement.lang = aboutState.language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
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
  const isDarkTheme = aboutState.theme === "dark";
  document.documentElement.classList.toggle("dark", isDarkTheme);
  document.body.classList.toggle("dark", isDarkTheme);
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
