const CONTACT_LANGUAGE_KEY = "simba-language";
const CONTACT_THEME_KEY = "simba-theme";

const contactState = {
  language: loadFromStorage(CONTACT_LANGUAGE_KEY, "en"),
  theme: loadFromStorage(CONTACT_THEME_KEY, "light"),
};

const contactTranslations = {
  en: {
    contactPageTitle: "Contact | Simba Supermarket",
    contactTagline: "Contact us",
    contactNavHome: "Home",
    contactNavBranches: "Branches",
    contactNavAbout: "About",
    contactLanguageLabel: "Language",
    contactTheme: "Theme",
    contactHeroEyebrow: "Contact",
    contactHeroTitle: "Reach Simba Supermarket",
    contactHeroText: "Use the branch page to find your nearest store, or contact the team for delivery, pickup, and order support.",
    contactSupportEyebrow: "Customer care",
    contactSupportTitle: "Support details",
    contactSupportEmail: "Email: support@simbasupermarket.rw",
    contactSupportPhone: "Phone: +250 788 000 111",
    contactSupportHours: "Hours: 7:00 AM - 10:00 PM every day",
    contactBranchEyebrow: "Need a branch?",
    contactBranchTitle: "Visit the branch directory",
    contactBranchPointOne: "See all available Simba locations across Rwanda.",
    contactBranchPointTwo: "Choose a branch for pickup or branch-based shopping.",
    contactBranchPointThree: "Open Google Maps directly from the branches page.",
    contactBranchAction: "Open branches",
  },
  fr: {
    contactPageTitle: "Contact | Simba Supermarket",
    contactTagline: "Contactez-nous",
    contactNavHome: "Accueil",
    contactNavBranches: "Branches",
    contactNavAbout: "A propos",
    contactLanguageLabel: "Langue",
    contactTheme: "Theme",
    contactHeroEyebrow: "Contact",
    contactHeroTitle: "Joindre Simba Supermarket",
    contactHeroText: "Utilisez la page des branches pour trouver votre magasin le plus proche, ou contactez l'equipe pour la livraison, le retrait et l'assistance commande.",
    contactSupportEyebrow: "Service client",
    contactSupportTitle: "Details du support",
    contactSupportEmail: "Email : support@simbasupermarket.rw",
    contactSupportPhone: "Telephone : +250 788 000 111",
    contactSupportHours: "Horaires : 7:00 - 22:00 tous les jours",
    contactBranchEyebrow: "Besoin d'une branche ?",
    contactBranchTitle: "Visitez le repertoire des branches",
    contactBranchPointOne: "Voyez toutes les branches Simba disponibles au Rwanda.",
    contactBranchPointTwo: "Choisissez une branche pour le retrait ou un shopping lie a la branche.",
    contactBranchPointThree: "Ouvrez Google Maps directement depuis la page des branches.",
    contactBranchAction: "Ouvrir les branches",
  },
  rw: {
    contactPageTitle: "Twandikire | Simba Supermarket",
    contactTagline: "Twandikire",
    contactNavHome: "Ahabanza",
    contactNavBranches: "Amashami",
    contactNavAbout: "Ibyacu",
    contactLanguageLabel: "Ururimi",
    contactTheme: "Insanganyamatsiko",
    contactHeroEyebrow: "Twandikire",
    contactHeroTitle: "Vugana na Simba Supermarket",
    contactHeroText: "Koresha urupapuro rw'amashami ushake iduka rikwegereye, cyangwa wandikire ikipe ku bijyanye na delivery, pickup n'ubufasha bwa order.",
    contactSupportEyebrow: "Ubufasha bw'abakiriya",
    contactSupportTitle: "Amakuru y'ubufasha",
    contactSupportEmail: "Imeyili: support@simbasupermarket.rw",
    contactSupportPhone: "Telefone: +250 788 000 111",
    contactSupportHours: "Amasaha: 7:00 AM - 10:00 PM buri munsi",
    contactBranchEyebrow: "Ukeneye ishami?",
    contactBranchTitle: "Sura urutonde rw'amashami",
    contactBranchPointOne: "Reba amashami yose ya Simba aboneka mu Rwanda.",
    contactBranchPointTwo: "Hitamo ishami rya pickup cyangwa guhaha gushingiye ku ishami.",
    contactBranchPointThree: "Fungura Google Maps uturutse ku rupapuro rw'amashami.",
    contactBranchAction: "Fungura amashami",
  },
};

document.addEventListener("DOMContentLoaded", initContactPage);

function initContactPage() {
  applyTheme();
  applyLanguage();
  const languageSelect = document.getElementById("languageSelect");
  const themeToggle = document.getElementById("themeToggle");
  if (languageSelect) {
    languageSelect.value = contactState.language;
    languageSelect.addEventListener("change", (event) => {
      contactState.language = event.target.value;
      saveToStorage(CONTACT_LANGUAGE_KEY, contactState.language);
      applyLanguage();
    });
  }
  themeToggle?.addEventListener("click", () => {
    contactState.theme = contactState.theme === "dark" ? "light" : "dark";
    saveToStorage(CONTACT_THEME_KEY, contactState.theme);
    applyTheme();
  });
}

function t(key) {
  return contactTranslations[contactState.language]?.[key] ?? contactTranslations.en[key] ?? key;
}

function applyLanguage() {
  document.documentElement.lang = contactState.language;
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
  document.body.classList.toggle("dark", contactState.theme === "dark");
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
