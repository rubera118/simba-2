const ACCOUNT_STORAGE_KEYS = {
  token: "simba-customer-token",
  profile: "simba-customer-profile",
  branchReviews: "simba-branch-reviews",
  passwordResets: "simba-password-resets",
  customers: "simba-local-customers",
  cart: "simba-cart",
  postAuthAction: "simba-post-auth-action",
};

const REVIEW_ELIGIBLE_STATUSES = ["ready-for-pickup", "completed", "delivered"];

const ACCOUNT_LANGUAGE_KEY = "simba-language";
const ACCOUNT_THEME_KEY = "simba-theme";
const ACCOUNT_UI_ALERT_KEY = "simba-ui-alert";

const accountState = {
  token: loadFromStorage(ACCOUNT_STORAGE_KEYS.token, ""),
  profile: loadFromStorage(ACCOUNT_STORAGE_KEYS.profile, null),
  orders: [],
  language: loadFromStorage(ACCOUNT_LANGUAGE_KEY, "en"),
  theme: loadFromStorage(ACCOUNT_THEME_KEY, "light"),
};

const GOOGLE_DEMO_PROFILE = {
  name: "Aline Simba",
  email: "aline.google@simba-demo.rw",
  phone: "+250 788 555 100",
  address: "Kigali, KG 11 Ave",
};

const accountTranslations = {
  en: {
    accountPageTitle: "My Account | Simba Supermarket",
    accountTagline: "Customer account",
    accountNavStorefront: "Storefront",
    accountNavBranches: "Branches",
    accountNavCheckout: "Checkout",
    accountLanguageLabel: "Language",
    accountTheme: "Theme",
    accountAlertSignedIn: "Signed in successfully.",
    accountAlertAccountCreated: "Account created successfully.",
    accountAlertSignedOut: "Logged out successfully.",
    accountWelcomeBack: "Welcome back",
    accountSignInTitle: "Sign in",
    accountEmailLabel: "Email",
    accountEmailPlaceholder: "you@example.com",
    accountPasswordLabel: "Password",
    accountPasswordPlaceholder: "Your password",
    accountSignInAction: "Sign in",
    accountGoogleAction: "Continue with Google",
    accountResetEyebrow: "Reset access",
    accountForgotTitle: "Forgot your password?",
    accountResetAction: "Send reset code",
    accountResetCodeLabel: "Reset code",
    accountResetCodePlaceholder: "123456",
    accountResetNewPasswordLabel: "New password",
    accountResetNewPasswordPlaceholder: "Enter a new password",
    accountResetConfirmAction: "Verify code and reset password",
    accountNewCustomer: "New customer",
    accountCreateTitle: "Create account",
    accountFullNameLabel: "Full name",
    accountFullNamePlaceholder: "Aline Uwimana",
    accountPhoneLabel: "Phone number",
    accountPhonePlaceholder: "+250 788 123 456",
    accountAddressLabel: "Default address",
    accountAddressPlaceholder: "Kigali, KG 11 Ave",
    accountCreatePasswordPlaceholder: "Create a password",
    accountCreateAction: "Create account",
    accountDashboardEyebrow: "My account",
    accountDashboardTitle: "Your profile",
    accountLogoutAction: "Log out",
    accountOrdersEyebrow: "My orders",
    accountOrdersTitle: "Order history",
    accountWorking: "Working...",
    accountGoogleConnecting: "Connecting Google account...",
    accountSessionExpired: "Your account session expired. Sign in again.",
    accountGreeting: "Welcome, {name}",
    accountProfileEmail: "Email",
    accountProfilePhone: "Phone",
    accountProfileAddress: "Address",
    accountProfileDeposit: "Required deposit",
    accountNotSet: "Not set",
    accountNoOrders: "You have not placed any orders yet.",
    accountOrderPlaced: "Placed",
    accountOrderPayment: "Payment",
    accountOrderBranch: "Branch",
    accountOrderFulfilment: "Fulfilment",
    accountBranchReview: "Branch review",
    accountReviewThankYou: "Thank you for sharing your pickup experience.",
    accountReviewAvailableLater: "Available after pickup is completed",
    accountReviewTitle: "Rate your branch experience",
    accountReviewRating: "Rating",
    accountReviewComment: "Comment",
    accountReviewCommentPlaceholder: "Tell Simba how the pickup went.",
    accountReviewSubmit: "Submit review",
    accountResetEnterEmail: "Enter your email address first.",
    accountResetPreparing: "Sending reset code...",
    accountResetPrepared: "If that account exists, a reset code has been sent.",
    accountResetDemoSaved: "Reset code saved locally for demo mode. In production this would be emailed securely.",
    accountResetCodeEnter: "Enter the reset code sent to your email.",
    accountResetCodeInvalid: "Enter a valid 6-digit reset code.",
    accountResetPasswordUpdated: "Your password has been updated. You can sign in now.",
    accountResetPasswordUpdating: "Verifying code and updating password...",
    accountResetPasswordFailed: "Could not reset your password right now.",
    accountReviewChooseRating: "Choose a rating before submitting.",
    accountReviewSaved: "Thanks. Your branch review has been saved.",
    accountFulfilmentPickup: "Gufatira ku ishami",
    accountFulfilmentDelivery: "Kuzanirwa",
    accountBackendConnected: "Account services are connected to {url}.",
    accountBackendLocalMode: "Account creation and sign-in will use browser storage on this live site until a backend URL is connected in config.js.",
    accountBackendMissing: "The account API backend is not configured for this site. Add your deployed backend URL in config.js so signup and login can work.",
    accountBackendInvalid: "The account service returned an invalid response. Check that the backend is running and reachable from this site.",
    accountErrorEmailRequired: "Email address is required.",
    accountErrorEmailInvalid: "Enter a valid email address.",
    accountErrorNameRequired: "Full name is required.",
    accountErrorPasswordShort: "Password must be at least 6 characters long.",
    accountErrorPasswordRequired: "Password is required.",
    accountLocalRegisterSuccess: "Account created in browser storage for this device.",
    accountLocalLoginSuccess: "Signed in using browser storage for this device.",
    accountLocalSignedIn: "Signed in on this device.",
    accountLocalUnsupported: "Local account mode does not support this action.",
    accountLocalDuplicate: "An account with that email already exists on this device.",
    accountLocalMissing: "No account was found with that email on this device.",
    accountLocalWrongPassword: "Incorrect password. Please try again.",
    accountLocalGoogleName: "Simba Google Customer",
    accountLocalMissingCustomer: "This local account could not be found on this device anymore.",
    accountGoogleUnavailable: "Google sign-in is not available right now.",
    accountRequestFailed: "Account request failed.",
    accountProfileLoadFailed: "Could not load your account profile.",
    accountOrdersLoadFailed: "Could not load your order history.",
    accountResetFailed: "Could not prepare a reset link right now.",
    accountStatusReceived: "Received",
    accountStatusAccepted: "Accepted",
    accountStatusPreparing: "Preparing",
    accountStatusReadyForPickup: "Ready for pickup",
    accountStatusCompleted: "Completed",
    accountStatusCancelled: "Cancelled",
    accountStatusDelivered: "Delivered",
    accountRatingStars: "{count} stars",
    accountRatingStar: "{count} star",
  },
  fr: {
    accountPageTitle: "Mon Compte | Simba Supermarket",
    accountTagline: "Compte client",
    accountNavStorefront: "Boutique",
    accountNavBranches: "Branches",
    accountNavCheckout: "Paiement",
    accountLanguageLabel: "Langue",
    accountTheme: "Theme",
    accountAlertSignedIn: "Connexion reussie.",
    accountAlertAccountCreated: "Compte cree avec succes.",
    accountAlertSignedOut: "Deconnexion reussie.",
    accountWelcomeBack: "Bon retour",
    accountSignInTitle: "Se connecter",
    accountEmailLabel: "Email",
    accountEmailPlaceholder: "vous@example.com",
    accountPasswordLabel: "Mot de passe",
    accountPasswordPlaceholder: "Votre mot de passe",
    accountSignInAction: "Se connecter",
    accountGoogleAction: "Continuer avec Google",
    accountResetEyebrow: "Reinitialisation",
    accountForgotTitle: "Mot de passe oublie ?",
    accountResetAction: "Envoyer le code",
    accountResetCodeLabel: "Code de reinitialisation",
    accountResetCodePlaceholder: "123456",
    accountResetNewPasswordLabel: "Nouveau mot de passe",
    accountResetNewPasswordPlaceholder: "Entrez un nouveau mot de passe",
    accountResetConfirmAction: "Verifier le code et reinitialiser",
    accountNewCustomer: "Nouveau client",
    accountCreateTitle: "Creer un compte",
    accountFullNameLabel: "Nom complet",
    accountFullNamePlaceholder: "Aline Uwimana",
    accountPhoneLabel: "Numero de telephone",
    accountPhonePlaceholder: "+250 788 123 456",
    accountAddressLabel: "Adresse par defaut",
    accountAddressPlaceholder: "Kigali, KG 11 Ave",
    accountCreatePasswordPlaceholder: "Creez un mot de passe",
    accountCreateAction: "Creer un compte",
    accountDashboardEyebrow: "Mon compte",
    accountDashboardTitle: "Votre profil",
    accountLogoutAction: "Se deconnecter",
    accountOrdersEyebrow: "Mes commandes",
    accountOrdersTitle: "Historique des commandes",
    accountWorking: "Traitement en cours...",
    accountGoogleConnecting: "Connexion du compte Google...",
    accountSessionExpired: "Votre session a expire. Connectez-vous de nouveau.",
    accountGreeting: "Bienvenue, {name}",
    accountProfileEmail: "Email",
    accountProfilePhone: "Telephone",
    accountProfileAddress: "Adresse",
    accountProfileDeposit: "Depot requis",
    accountNotSet: "Non renseigne",
    accountNoOrders: "Vous n'avez pas encore passe de commande.",
    accountOrderPlaced: "Passee le",
    accountOrderPayment: "Paiement",
    accountOrderBranch: "Branche",
    accountOrderFulfilment: "Retrait",
    accountBranchReview: "Avis sur la branche",
    accountReviewThankYou: "Merci d'avoir partage votre experience de retrait.",
    accountReviewAvailableLater: "Disponible apres le retrait termine",
    accountReviewTitle: "Notez votre experience en branche",
    accountReviewRating: "Note",
    accountReviewComment: "Commentaire",
    accountReviewCommentPlaceholder: "Dites a Simba comment le retrait s'est passe.",
    accountReviewSubmit: "Envoyer l'avis",
    accountResetEnterEmail: "Entrez d'abord votre adresse email.",
    accountResetPreparing: "Envoi du code de reinitialisation...",
    accountResetPrepared: "Si ce compte existe, un code de reinitialisation a ete envoye.",
    accountResetDemoSaved: "Code de demo enregistre localement. En production, il serait envoye par email de maniere securisee.",
    accountResetCodeEnter: "Entrez le code de reinitialisation recu par email.",
    accountResetCodeInvalid: "Entrez un code de reinitialisation valide a 6 chiffres.",
    accountResetPasswordUpdated: "Votre mot de passe a ete mis a jour. Vous pouvez vous connecter maintenant.",
    accountResetPasswordUpdating: "Verification du code et mise a jour du mot de passe...",
    accountResetPasswordFailed: "Impossible de reinitialiser votre mot de passe pour le moment.",
    accountReviewChooseRating: "Choisissez une note avant d'envoyer.",
    accountReviewSaved: "Merci. Votre avis sur la branche a ete enregistre.",
    accountFulfilmentPickup: "Retrait",
    accountFulfilmentDelivery: "Livraison",
    accountBackendConnected: "Les services de compte sont connectes a {url}.",
    accountBackendLocalMode: "La creation de compte et la connexion utiliseront le stockage du navigateur sur ce site tant qu'aucune URL backend n'est configuree dans config.js.",
    accountBackendMissing: "Le backend du compte n'est pas configure pour ce site. Ajoutez l'URL de votre backend deploye dans config.js afin que l'inscription et la connexion fonctionnent.",
    accountBackendInvalid: "Le service de compte a renvoye une reponse invalide. Verifiez que le backend fonctionne et reste accessible depuis ce site.",
    accountErrorEmailRequired: "L'adresse email est obligatoire.",
    accountErrorEmailInvalid: "Entrez une adresse email valide.",
    accountErrorNameRequired: "Le nom complet est obligatoire.",
    accountErrorPasswordShort: "Le mot de passe doit contenir au moins 6 caracteres.",
    accountErrorPasswordRequired: "Le mot de passe est obligatoire.",
    accountLocalRegisterSuccess: "Compte cree dans le stockage du navigateur pour cet appareil.",
    accountLocalLoginSuccess: "Connexion effectuee via le stockage du navigateur pour cet appareil.",
    accountLocalSignedIn: "Connecte sur cet appareil.",
    accountLocalUnsupported: "Le mode local ne prend pas en charge cette action.",
    accountLocalDuplicate: "Un compte avec cet email existe deja sur cet appareil.",
    accountLocalMissing: "Aucun compte avec cet email n'a ete trouve sur cet appareil.",
    accountLocalWrongPassword: "Mot de passe incorrect. Veuillez reessayer.",
    accountLocalGoogleName: "Client Google Simba",
    accountLocalMissingCustomer: "Ce compte local est introuvable sur cet appareil.",
    accountGoogleUnavailable: "La connexion Google n'est pas disponible pour le moment.",
    accountRequestFailed: "La demande de compte a echoue.",
    accountProfileLoadFailed: "Impossible de charger votre profil.",
    accountOrdersLoadFailed: "Impossible de charger l'historique des commandes.",
    accountResetFailed: "Impossible de preparer un lien de reinitialisation maintenant.",
    accountStatusReceived: "Recue",
    accountStatusAccepted: "Acceptee",
    accountStatusPreparing: "Preparation",
    accountStatusReadyForPickup: "Pret pour le retrait",
    accountStatusCompleted: "Terminee",
    accountStatusCancelled: "Annulee",
    accountStatusDelivered: "Livree",
    accountRatingStars: "{count} etoiles",
    accountRatingStar: "{count} etoile",
  },
  rw: {
    accountPageTitle: "Konti Yanjye | Simba Supermarket",
    accountTagline: "Konti y'umukiriya",
    accountNavStorefront: "Iduka",
    accountNavBranches: "Amashami",
    accountNavCheckout: "Kwishyura",
    accountLanguageLabel: "Ururimi",
    accountTheme: "Insanganyamatsiko",
    accountAlertSignedIn: "Kwinjira byagenze neza.",
    accountAlertAccountCreated: "Konti yakozwe neza.",
    accountAlertSignedOut: "Gusohoka byagenze neza.",
    accountWelcomeBack: "Murakaza neza",
    accountSignInTitle: "Injira",
    accountEmailLabel: "Imeyili",
    accountEmailPlaceholder: "wowe@example.com",
    accountPasswordLabel: "Ijambobanga",
    accountPasswordPlaceholder: "Ijambobanga ryawe",
    accountSignInAction: "Injira",
    accountGoogleAction: "Komeza na Google",
    accountResetEyebrow: "Gusubirana uburenganzira",
    accountForgotTitle: "Wibagiwe ijambobanga?",
    accountResetAction: "Ohereza code",
    accountResetCodeLabel: "Code yo gusubiramo",
    accountResetCodePlaceholder: "123456",
    accountResetNewPasswordLabel: "Ijambobanga rishya",
    accountResetNewPasswordPlaceholder: "Andika ijambobanga rishya",
    accountResetConfirmAction: "Emeza code maze usubize ijambobanga",
    accountNewCustomer: "Umukiriya mushya",
    accountCreateTitle: "Kora konti",
    accountFullNameLabel: "Amazina yose",
    accountFullNamePlaceholder: "Aline Uwimana",
    accountPhoneLabel: "Numero ya telefone",
    accountPhonePlaceholder: "+250 788 123 456",
    accountAddressLabel: "Aderesi isanzwe",
    accountAddressPlaceholder: "Kigali, KG 11 Ave",
    accountCreatePasswordPlaceholder: "Kora ijambobanga",
    accountCreateAction: "Kora konti",
    accountDashboardEyebrow: "Konti yanjye",
    accountDashboardTitle: "Umwirondoro wawe",
    accountLogoutAction: "Sohoka",
    accountOrdersEyebrow: "Ama-order yanjye",
    accountOrdersTitle: "Amateka y'ama-order",
    accountWorking: "Birimo gukorwa...",
    accountGoogleConnecting: "Birimo guhuza konti ya Google...",
    accountSessionExpired: "Session yawe yarangiye. Ongera winjire.",
    accountGreeting: "Murakaza neza, {name}",
    accountProfileEmail: "Imeyili",
    accountProfilePhone: "Telefone",
    accountProfileAddress: "Aderesi",
    accountProfileDeposit: "Deposit isabwa",
    accountNotSet: "Ntabwo yashyizwemo",
    accountNoOrders: "Nta order urashyira kugeza ubu.",
    accountOrderPlaced: "Yashyizweho",
    accountOrderPayment: "Kwishyura",
    accountOrderBranch: "Ishami",
    accountOrderFulfilment: "Uburyo bwo guhabwa",
    accountBranchReview: "Isuzuma ry'ishami",
    accountReviewThankYou: "Murakoze gusangiza uko pickup yagenze.",
    accountReviewAvailableLater: "Bizaboneka nyuma yo gufata order",
    accountReviewTitle: "Suzuma uko wakiriwe ku ishami",
    accountReviewRating: "Amanota",
    accountReviewComment: "Igitekerezo",
    accountReviewCommentPlaceholder: "Bwira Simba uko pickup yagenze.",
    accountReviewSubmit: "Ohereza isuzuma",
    accountResetEnterEmail: "Banza wandike aderesi ya imeyili.",
    accountResetPreparing: "Birimo koherezwa code yo gusubirana ijambobanga...",
    accountResetPrepared: "Niba iyo konti ibaho, code yo gusubirana ijambobanga yoherejwe.",
    accountResetDemoSaved: "Code ya demo yabitswe kuri iki gikoresho. Mu buryo nyabwo, yoherezwa kuri email mu buryo bwizewe.",
    accountResetCodeEnter: "Andika code woherejwe kuri email.",
    accountResetCodeInvalid: "Andika code y'igitsina 6 yemewe.",
    accountResetPasswordUpdated: "Ijambobanga ryawe ryavuguruwe. Ushobora kwinjira ubu.",
    accountResetPasswordUpdating: "Turimo kwemeza code no kuvugurura ijambobanga...",
    accountResetPasswordFailed: "Ntibyashobotse gusubiza ijambobanga ubu.",
    accountReviewChooseRating: "Banza uhitemo amanota mbere yo kohereza.",
    accountReviewSaved: "Murakoze. Isuzuma ryanyu ryabitswe.",
    accountFulfilmentPickup: "Pickup",
    accountFulfilmentDelivery: "Delivery",
    accountBackendConnected: "Serivisi za konti zahujwe na {url}.",
    accountBackendLocalMode: "Gukora konti no kwinjira bizakoresha browser storage kuri iyi site kugeza igihe URL ya backend izashyirirwa muri config.js.",
    accountBackendMissing: "Backend ya konti ntabwo yashyizwe kuri iyi site. Ongeramo URL ya backend yawe muri config.js kugira ngo kwiyandikisha no kwinjira bikore.",
    accountBackendInvalid: "Serivisi ya konti yagaruye igisubizo kitari cyo. Reba niba backend iri gukora kandi ishobora kugerwaho n'iyi site.",
    accountErrorEmailRequired: "Aderesi ya imeyili irakenewe.",
    accountErrorEmailInvalid: "Shyiramo aderesi ya imeyili iboneye.",
    accountErrorNameRequired: "Amazina yose arakenewe.",
    accountErrorPasswordShort: "Ijambobanga rigomba kuba nibura rifite inyuguti 6.",
    accountErrorPasswordRequired: "Ijambobanga rirakenewe.",
    accountLocalRegisterSuccess: "Konti yakozwe muri browser storage kuri iki gikoresho.",
    accountLocalLoginSuccess: "Winjiye ukoresheje browser storage kuri iki gikoresho.",
    accountLocalSignedIn: "Winjiye kuri iki gikoresho.",
    accountLocalUnsupported: "Ubu buryo bwa local ntibushyigikira iki gikorwa.",
    accountLocalDuplicate: "Hari konti ifite iyi meyili kuri iki gikoresho.",
    accountLocalMissing: "Nta konti ifite iyi meyili yabonetse kuri iki gikoresho.",
    accountLocalWrongPassword: "Ijambobanga si ryo. Ongera ugerageze.",
    accountLocalGoogleName: "Umukiriya wa Google wa Simba",
    accountLocalMissingCustomer: "Iyi konti ya local ntikiboneka kuri iki gikoresho.",
    accountGoogleUnavailable: "Kwinjira ukoresheje Google ntibiboneka ubu.",
    accountRequestFailed: "Gusaba kwa konti byanze.",
    accountProfileLoadFailed: "Ntibishobotse gupakurura umwirondoro wawe.",
    accountOrdersLoadFailed: "Ntibishobotse gupakurura amateka y'ama-order.",
    accountResetFailed: "Ntibishobotse gutegura link yo gusubirana ijambobanga ubu.",
    accountStatusReceived: "Byakiriwe",
    accountStatusAccepted: "Byemejwe",
    accountStatusPreparing: "Birategurwa",
    accountStatusReadyForPickup: "Byiteguye gufatwa",
    accountStatusCompleted: "Byarangiye",
    accountStatusCancelled: "Byahagaritswe",
    accountStatusDelivered: "Byagejejwe",
    accountRatingStars: "Inyenyeri {count}",
    accountRatingStar: "Inyenyeri {count}",
  },
};

function t(key, variables = {}) {
  const copy = accountTranslations[accountState.language] || accountTranslations.en;
  const template = copy[key] ?? accountTranslations.en[key] ?? key;
  return Object.entries(variables).reduce(
    (message, [name, value]) => message.replaceAll(`{${name}}`, String(value)),
    template
  );
}

let accountAlertTimer = null;

function showAccountAlert(message, variant = "success") {
  const alertElement = document.getElementById("accountAlert");
  if (!alertElement || !message) return;

  if (accountAlertTimer) {
    window.clearTimeout(accountAlertTimer);
  }

  alertElement.textContent = message;
  alertElement.className = `site-alert site-alert-${variant}`;
  alertElement.scrollIntoView({ block: "start", behavior: "smooth" });
  accountAlertTimer = window.setTimeout(hideAccountAlert, 4500);
}

function hideAccountAlert() {
  const alertElement = document.getElementById("accountAlert");
  if (!alertElement) return;
  alertElement.textContent = "";
  alertElement.className = "site-alert hidden";
}

function savePendingUiAlert(message, variant = "success") {
  try {
    sessionStorage.setItem(
      ACCOUNT_UI_ALERT_KEY,
      JSON.stringify({ message, variant })
    );
  } catch {
    // Ignore storage errors for non-critical UI feedback.
  }
}

function consumePendingUiAlert() {
  try {
    const rawValue = sessionStorage.getItem(ACCOUNT_UI_ALERT_KEY);
    if (!rawValue) return null;
    sessionStorage.removeItem(ACCOUNT_UI_ALERT_KEY);
    return JSON.parse(rawValue);
  } catch {
    return null;
  }
}

function applyLanguage() {
  document.documentElement.lang = accountState.language;

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
  const isDarkTheme = accountState.theme === "dark";
  document.documentElement.classList.toggle("dark", isDarkTheme);
  document.body.classList.toggle("dark", isDarkTheme);
}

document.addEventListener("DOMContentLoaded", initAccountPage);

function initAccountPage() {
  applyTheme();
  applyLanguage();
  window.markPreferencesReady?.();
  renderAccountServiceNotice();
  bindAccountControls();

  const pendingAlert = consumePendingUiAlert();
  if (pendingAlert?.message) {
    showAccountAlert(pendingAlert.message, pendingAlert.variant || "success");
  }

  if (accountState.token) {
    loadAccountDashboard();
  }
}

function bindAccountControls() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const forgotPasswordForm = document.getElementById("forgotPasswordForm");
  const resetPasswordConfirmForm = document.getElementById("resetPasswordConfirmForm");
  const logoutButton = document.getElementById("logoutAccount");
  const googleSignInButton = document.getElementById("googleSignInButton");
  const languageSelect = document.getElementById("languageSelect");
  const themeToggle = document.getElementById("themeToggle");

  if (languageSelect) {
    languageSelect.value = accountState.language;
    languageSelect.addEventListener("change", (event) => {
      accountState.language = event.target.value;
      saveToStorage(ACCOUNT_LANGUAGE_KEY, accountState.language);
      applyLanguage();
      renderAccountServiceNotice();
      if (!document.getElementById("accountDashboard").classList.contains("hidden") && accountState.profile) {
        renderProfile(accountState.profile);
        renderOrders(accountState.orders);
      }
    });
  }

  themeToggle?.addEventListener("click", () => {
    accountState.theme = accountState.theme === "dark" ? "light" : "dark";
    saveToStorage(ACCOUNT_THEME_KEY, accountState.theme);
    applyTheme();
  });

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    await authenticateCustomer(apiUrl("/api/customers/login"), {
      email: String(formData.get("email") || ""),
      password: String(formData.get("password") || ""),
    }, "loginMessage");
  });

  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(registerForm);
    await authenticateCustomer(
      apiUrl("/api/customers/register"),
      {
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        address: String(formData.get("address") || ""),
        password: String(formData.get("password") || ""),
      },
      "registerMessage"
    );
  });

  forgotPasswordForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(forgotPasswordForm);
    await requestPasswordReset(String(formData.get("email") || ""));
  });

  resetPasswordConfirmForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(resetPasswordConfirmForm);
    await confirmPasswordReset({
      email: String(formData.get("email") || ""),
      code: String(formData.get("code") || ""),
      newPassword: String(formData.get("newPassword") || ""),
    });
  });

  googleSignInButton?.addEventListener("click", async () => {
    const message = document.getElementById("googleSignInMessage");
    message.textContent = t("accountGoogleConnecting");

    try {
      const response = await fetch(apiUrl("/api/customers/google"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(GOOGLE_DEMO_PROFILE),
      });

      const body = await parseApiResponse(response, t("accountGoogleUnavailable"));

      accountState.token = body.token;
      accountState.profile = body.customer;
      saveToStorage(ACCOUNT_STORAGE_KEYS.token, accountState.token);
      saveToStorage(ACCOUNT_STORAGE_KEYS.profile, accountState.profile);
      message.textContent = "";
      await loadAccountDashboard();
      showAccountAlert(t("accountAlertSignedIn"));
    } catch (error) {
      if (shouldUseLocalAccountFallback(error)) {
        try {
          const body = await signInWithLocalGoogleProfile(GOOGLE_DEMO_PROFILE);
          accountState.token = body.token;
          accountState.profile = body.customer;
          saveToStorage(ACCOUNT_STORAGE_KEYS.token, accountState.token);
          saveToStorage(ACCOUNT_STORAGE_KEYS.profile, accountState.profile);
          message.textContent = "";
          await loadAccountDashboard();
          showAccountAlert(t("accountAlertSignedIn"));
          return;
        } catch (fallbackError) {
          message.textContent = fallbackError.message;
          showAccountAlert(fallbackError.message, "error");
          return;
        }
      }

      message.textContent = error.message;
      showAccountAlert(error.message, "error");
    }
  });

  logoutButton?.addEventListener("click", () => {
    accountState.token = "";
    accountState.profile = null;
    accountState.orders = [];
    localStorage.removeItem(ACCOUNT_STORAGE_KEYS.token);
    localStorage.removeItem(ACCOUNT_STORAGE_KEYS.profile);
    document.getElementById("accountDashboard").classList.add("hidden");
    document.getElementById("accountAuthView").classList.remove("hidden");
    showAccountAlert(t("accountAlertSignedOut"));
  });
}

async function authenticateCustomer(url, payload, messageId) {
  const message = document.getElementById(messageId);
  message.textContent = t("accountWorking");

  try {
    validateAuthPayload(url, payload);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const body = await parseApiResponse(response, t("accountRequestFailed"));

    accountState.token = body.token;
    accountState.profile = body.customer;
    saveToStorage(ACCOUNT_STORAGE_KEYS.token, accountState.token);
    saveToStorage(ACCOUNT_STORAGE_KEYS.profile, accountState.profile);
    message.textContent = "";
    await loadAccountDashboard();
    showAccountAlert(getAuthSuccessBanner(url));
  } catch (error) {
    if (shouldUseLocalAccountFallback(error)) {
      try {
        const body = await handleLocalAccountAuth(url, payload);
        accountState.token = body.token;
        accountState.profile = body.customer;
        saveToStorage(ACCOUNT_STORAGE_KEYS.token, accountState.token);
        saveToStorage(ACCOUNT_STORAGE_KEYS.profile, accountState.profile);
        message.textContent = getLocalModeSuccessMessage(url);
        await loadAccountDashboard();
        showAccountAlert(getAuthSuccessBanner(url));
        message.textContent = "";
        return;
      } catch (fallbackError) {
        message.textContent = fallbackError.message;
        showAccountAlert(fallbackError.message, "error");
        return;
      }
    }

    message.textContent = error.message;
    showAccountAlert(error.message, "error");
  }
}

async function loadAccountDashboard() {
  try {
    if (isLocalAccountToken(accountState.token)) {
      loadLocalAccountDashboard();
      return;
    }

    const [profileResponse, ordersResponse] = await Promise.all([
      fetch(apiUrl("/api/account/profile"), { headers: getAuthHeaders() }),
      fetch(apiUrl("/api/account/orders"), { headers: getAuthHeaders() }),
    ]);

    if (profileResponse.status === 401 || ordersResponse.status === 401) {
      throw new Error(t("accountSessionExpired"));
    }

    const profilePayload = await parseApiResponse(profileResponse, t("accountProfileLoadFailed"));
    const ordersPayload = await parseApiResponse(ordersResponse, t("accountOrdersLoadFailed"));
    accountState.profile = profilePayload.customer;
    accountState.orders = ordersPayload.orders || [];
    saveToStorage(ACCOUNT_STORAGE_KEYS.profile, accountState.profile);

    renderProfile(accountState.profile);
    renderOrders(accountState.orders);

    document.getElementById("accountAuthView").classList.add("hidden");
    document.getElementById("accountDashboard").classList.remove("hidden");
    completePostLoginRedirect();
  } catch (error) {
    if (accountState.profile && shouldUseLocalAccountFallback(error)) {
      try {
        loadLocalAccountDashboard();
        return;
      } catch {
        // Fall through to sign-out cleanup if local recovery fails.
      }
    }

    accountState.token = "";
    accountState.profile = null;
    accountState.orders = [];
    localStorage.removeItem(ACCOUNT_STORAGE_KEYS.token);
    localStorage.removeItem(ACCOUNT_STORAGE_KEYS.profile);
    document.getElementById("accountAuthView").classList.remove("hidden");
    document.getElementById("accountDashboard").classList.add("hidden");
    document.getElementById("loginMessage").textContent = error.message;
  }
}

function renderProfile(profile) {
  document.getElementById("accountGreeting").textContent = t("accountGreeting", { name: profile.name });
  document.getElementById("accountProfile").innerHTML = `
    <article class="summary-box admin-stat-card">
      <span>${t("accountProfileEmail")}</span>
      <strong>${profile.email}</strong>
    </article>
    <article class="summary-box admin-stat-card">
      <span>${t("accountProfilePhone")}</span>
      <strong>${profile.phone || t("accountNotSet")}</strong>
    </article>
    <article class="summary-box admin-stat-card">
      <span>${t("accountProfileAddress")}</span>
      <strong>${profile.address || t("accountNotSet")}</strong>
    </article>
    <article class="summary-box admin-stat-card">
      <span>${t("accountProfileDeposit")}</span>
      <strong>${formatCurrency(profile.requiredDeposit || 500)}</strong>
    </article>
  `;
}

function renderOrders(orders) {
  const container = document.getElementById("accountOrders");
  if (!orders.length) {
    container.innerHTML = `<div class="state-panel"><p>${t("accountNoOrders")}</p></div>`;
    return;
  }

  container.innerHTML = orders
    .map(
      (order) => `
        <article class="showcase-panel admin-order-card">
          <div class="toolbar-header compact-header">
            <div>
              <p class="eyebrow">${order.id}</p>
              <h2>${formatCurrency(order.total)}</h2>
            </div>
            <span class="chip">${formatOrderStatus(order.status)}</span>
          </div>
          <div class="admin-order-grid">
            <div class="summary-box">
              <span>${t("accountOrderPlaced")}</span>
              <strong>${formatDate(order.createdAt)}</strong>
            </div>
            <div class="summary-box">
              <span>${t("accountOrderPayment")}</span>
              <strong>${order.payment.network}</strong>
            </div>
            <div class="summary-box">
              <span>${t("accountOrderBranch")}</span>
              <strong>${order.branch?.name || order.branchId || t("accountNotSet")}</strong>
            </div>
            <div class="summary-box">
              <span>${t("accountOrderFulfilment")}</span>
              <strong>${formatFulfilment(order)}</strong>
            </div>
          </div>
          <div class="admin-order-items">
            ${order.items
              .map(
                (item) => `
                  <div class="summary-row">
                    <span>${item.name} x ${item.quantity}</span>
                    <strong>${formatCurrency(item.lineTotal || item.price * item.quantity)}</strong>
                  </div>
                `
              )
              .join("")}
          </div>
          ${renderLocalizedReviewPanel(order)}
        </article>
      `
    )
    .join("");

  container.querySelectorAll("[data-submit-review]").forEach((button) => {
    button.addEventListener("click", () => submitReview(button.dataset.submitReview));
  });
}

function renderReviewPanel(order) {
  const existingReview = getReviewByOrderId(order.id);
  if (existingReview) {
    return `
      <div class="summary-box">
        <span>Branch review</span>
        <strong>${"★".repeat(existingReview.rating)}${"☆".repeat(5 - existingReview.rating)}</strong>
        <p>${existingReview.comment || "Thank you for sharing your pickup experience."}</p>
      </div>
    `;
  }

  if (!REVIEW_ELIGIBLE_STATUSES.includes(order.status)) {
    return `
      <div class="summary-box">
        <span>Branch review</span>
        <strong>Available after pickup is completed</strong>
      </div>
    `;
  }

  return `
    <div class="summary-box">
      <span>Rate your branch experience</span>
      <div class="checkout-form">
        <label class="field">
          <span>Rating</span>
          <select data-review-field="rating" data-order-id="${order.id}">
            <option value="5">5 stars</option>
            <option value="4">4 stars</option>
            <option value="3">3 stars</option>
            <option value="2">2 stars</option>
            <option value="1">1 star</option>
          </select>
        </label>
        <label class="field">
          <span>Comment</span>
          <textarea rows="3" data-review-field="comment" data-order-id="${order.id}" placeholder="Tell Simba how the pickup went."></textarea>
        </label>
        <button class="ghost-button" type="button" data-submit-review="${order.id}">Submit review</button>
        <p class="checkout-message" id="reviewMessage-${order.id}" aria-live="polite"></p>
      </div>
    </div>
  `;
}

function renderLocalizedReviewPanel(order) {
  const existingReview = getReviewByOrderId(order.id);
  if (existingReview) {
    return `
      <div class="summary-box">
        <span>${t("accountBranchReview")}</span>
        <strong>${getReviewStars(existingReview.rating)}</strong>
        <p>${existingReview.comment || t("accountReviewThankYou")}</p>
      </div>
    `;
  }

  if (!REVIEW_ELIGIBLE_STATUSES.includes(order.status)) {
    return `
      <div class="summary-box">
        <span>${t("accountBranchReview")}</span>
        <strong>${t("accountReviewAvailableLater")}</strong>
      </div>
    `;
  }

  return `
    <div class="summary-box">
      <span>${t("accountReviewTitle")}</span>
      <div class="checkout-form">
        <label class="field">
          <span>${t("accountReviewRating")}</span>
          <select data-review-field="rating" data-order-id="${order.id}">
            <option value="5">${formatRatingLabel(5)}</option>
            <option value="4">${formatRatingLabel(4)}</option>
            <option value="3">${formatRatingLabel(3)}</option>
            <option value="2">${formatRatingLabel(2)}</option>
            <option value="1">${formatRatingLabel(1)}</option>
          </select>
        </label>
        <label class="field">
          <span>${t("accountReviewComment")}</span>
          <textarea rows="3" data-review-field="comment" data-order-id="${order.id}" placeholder="${t("accountReviewCommentPlaceholder")}"></textarea>
        </label>
        <button class="ghost-button" type="button" data-submit-review="${order.id}">${t("accountReviewSubmit")}</button>
        <p class="checkout-message" id="reviewMessage-${order.id}" aria-live="polite"></p>
      </div>
    </div>
  `;
}

function getAuthHeaders() {
  return {
    Authorization: `Bearer ${accountState.token}`,
  };
}

async function requestPasswordReset(email) {
  const message = document.getElementById("forgotPasswordMessage");
  if (!message) return;

  if (!email.trim()) {
    message.textContent = t("accountResetEnterEmail");
    return;
  }

  message.textContent = t("accountResetPreparing");

  try {
    const response = await fetch(apiUrl("/api/customers/forgot-password"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    await parseApiResponse(response, t("accountResetFailed"));

    message.textContent = t("accountResetPrepared");
  } catch (error) {
    if (shouldShowBackendConfigurationHint(error)) {
      message.textContent = error.message;
      return;
    }

    if (shouldUseLocalAccountFallback(error)) {
      const requests = loadFromStorage(ACCOUNT_STORAGE_KEYS.passwordResets, []);
      requests.unshift({
        email,
        createdAt: new Date().toISOString(),
      });
      saveToStorage(ACCOUNT_STORAGE_KEYS.passwordResets, requests);
      message.textContent = t("accountResetDemoSaved");
      return;
    }

    message.textContent = error.message || t("accountResetFailed");
  }
}

async function confirmPasswordReset(payload) {
  const message = document.getElementById("resetPasswordConfirmMessage");
  if (!message) return;

  const email = String(payload.email || "").trim();
  const code = String(payload.code || "").trim();
  const newPassword = String(payload.newPassword || "");

  if (!email) {
    message.textContent = t("accountResetEnterEmail");
    return;
  }

  if (!/^\d{6}$/.test(code)) {
    message.textContent = t("accountResetCodeInvalid");
    return;
  }

  if (newPassword.length < 6) {
    message.textContent = t("accountErrorPasswordShort");
    return;
  }

  message.textContent = t("accountResetPasswordUpdating");

  try {
    const response = await fetch(apiUrl("/api/customers/reset-password"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, code, newPassword }),
    });

    await parseApiResponse(response, t("accountResetPasswordFailed"));
    message.textContent = t("accountResetPasswordUpdated");
  } catch (error) {
    if (shouldShowBackendConfigurationHint(error)) {
      message.textContent = error.message;
      return;
    }

    if (shouldUseLocalAccountFallback(error)) {
      message.textContent = t("accountLocalUnsupported");
      return;
    }

    message.textContent = error.message || t("accountResetPasswordFailed");
  }
}

function submitReview(orderId) {
  const message = document.getElementById(`reviewMessage-${orderId}`);
  const ratingField = document.querySelector(`[data-review-field="rating"][data-order-id="${orderId}"]`);
  const commentField = document.querySelector(`[data-review-field="comment"][data-order-id="${orderId}"]`);
  const targetOrder = accountState.orders.find((entry) => entry.id === orderId);

  if (!message || !ratingField || !commentField || !targetOrder) {
    return;
  }

  const rating = Math.max(1, Math.min(5, Number(ratingField.value || 0)));
  if (!rating) {
    message.textContent = t("accountReviewChooseRating");
    return;
  }

  const reviews = loadReviews().filter((entry) => entry.orderId !== orderId);
  reviews.unshift({
    orderId,
    branchId: targetOrder.branchId,
    branchName: targetOrder.branch?.name || "",
    customerId: accountState.profile?.id || "",
    customerName: accountState.profile?.name || t("accountLocalGoogleName"),
    rating,
    comment: commentField.value.trim(),
    createdAt: new Date().toISOString(),
  });
  saveReviews(reviews);
  message.textContent = t("accountReviewSaved");
  renderOrders(accountState.orders);
}

function loadReviews() {
  return loadFromStorage(ACCOUNT_STORAGE_KEYS.branchReviews, []);
}

function saveReviews(reviews) {
  saveToStorage(ACCOUNT_STORAGE_KEYS.branchReviews, reviews);
}

function getReviewByOrderId(orderId) {
  return loadReviews().find((review) => review.orderId === orderId) || null;
}

function formatFulfilment(order) {
  const mode = order.fulfilment?.mode || "delivery";
  const pickupTime = order.fulfilment?.pickupTime || "";
  if (mode === "pickup") {
    return pickupTime ? `${t("accountFulfilmentPickup")} | ${pickupTime}` : t("accountFulfilmentPickup");
  }
  return t("accountFulfilmentDelivery");
}

function formatCurrency(value) {
  return `RWF ${new Intl.NumberFormat("en-RW", {
    maximumFractionDigits: 0,
  }).format(value)}`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-RW", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
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

function completePostLoginRedirect() {
  const action = loadFromStorage(ACCOUNT_STORAGE_KEYS.postAuthAction, null);
  const returnTo = getSafeReturnTo();

  if (action) {
    applyPostAuthAction(action);
    localStorage.removeItem(ACCOUNT_STORAGE_KEYS.postAuthAction);
  }

  if (!action && !returnTo) {
    return;
  }

  savePendingUiAlert(t("accountAlertSignedIn"));
  window.location.href = action?.redirectTo || returnTo || "index.html";
}

function applyPostAuthAction(action) {
  if (!action || !action.productId || !action.branchId) {
    return;
  }

  const cart = loadFromStorage(ACCOUNT_STORAGE_KEYS.cart, []);
  const existingItem = cart.find((item) => item.id === action.productId && item.branchId === action.branchId);
  const quantity = Math.max(1, Number(action.quantity || 1));

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: action.productId,
      quantity,
      branchId: action.branchId,
    });
  }

  saveToStorage(ACCOUNT_STORAGE_KEYS.cart, cart);
}

function getSafeReturnTo() {
  const value = new URLSearchParams(window.location.search).get("returnTo");
  if (!value) return "";
  if (/^[a-z]+:/i.test(value) || value.startsWith("//")) return "";
  return value;
}

function apiUrl(path) {
  const baseUrl = window.SIMBA_CONFIG?.API_BASE_URL?.trim();
  return baseUrl ? `${baseUrl}${path}` : path;
}

function renderAccountServiceNotice() {
  const notice = document.getElementById("accountServiceNotice");
  if (!notice) return;

  const message = getBackendConfigurationMessage();
  notice.textContent = message;
  notice.classList.toggle("hidden", !message);
}

function getBackendConfigurationMessage() {
  const baseUrl = window.SIMBA_CONFIG?.API_BASE_URL?.trim();
  const isGitHubPages = window.location.hostname.endsWith("github.io");

  if (baseUrl) {
    return t("accountBackendConnected", { url: baseUrl });
  }

  if (isGitHubPages) {
    return t("accountBackendLocalMode");
  }

  return "";
}

function shouldShowBackendConfigurationHint(error) {
  return Boolean(error?.message && error.message.includes("API backend"));
}

function shouldUseLocalAccountFallback(error) {
  if (!allowLocalAccountFallback()) {
    return false;
  }

  const message = String(error?.message || "");
  return (
    isBackendUnavailableMessage(message) ||
    message.includes("Failed to fetch") ||
    message.includes("Load failed") ||
    message.includes("NetworkError")
  );
}

function allowLocalAccountFallback() {
  return !window.SIMBA_CONFIG?.API_BASE_URL?.trim();
}

function isBackendUnavailableMessage(message) {
  return (
    message.includes("account API backend is not configured") ||
    message.includes("account service returned an invalid response") ||
    message.includes("backend is running and reachable") ||
    message.includes("backend URL")
  );
}

async function parseApiResponse(response, fallbackMessage) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = await response.json();
    if (!response.ok) {
      throw new Error(body.error || fallbackMessage);
    }
    return body;
  }

  const text = await response.text();
  if (!response.ok) {
    throw new Error(extractResponseErrorMessage(text) || fallbackMessage);
  }

  if (text.trim().startsWith("<")) {
    throw new Error(getNonJsonResponseMessage());
  }

  throw new Error(fallbackMessage);
}

function extractResponseErrorMessage(text) {
  if (!text) return "";
  if (text.trim().startsWith("<")) return getNonJsonResponseMessage();
  return text.trim();
}

function getNonJsonResponseMessage() {
  const baseUrl = window.SIMBA_CONFIG?.API_BASE_URL?.trim();
  if (!baseUrl) {
    return t("accountBackendMissing");
  }

  return t("accountBackendInvalid");
}

function validateAuthPayload(url, payload) {
  const email = String(payload.email || "").trim().toLowerCase();
  if (!email) {
    throw new Error(t("accountErrorEmailRequired"));
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error(t("accountErrorEmailInvalid"));
  }

  if (url.includes("/register")) {
    if (!String(payload.name || "").trim()) {
      throw new Error(t("accountErrorNameRequired"));
    }
    if (String(payload.password || "").length < 6) {
      throw new Error(t("accountErrorPasswordShort"));
    }
  }

  if (url.includes("/login") && !String(payload.password || "")) {
    throw new Error(t("accountErrorPasswordRequired"));
  }
}

function getLocalModeSuccessMessage(url) {
  if (url.includes("/register")) {
    return t("accountLocalRegisterSuccess");
  }
  if (url.includes("/login")) {
    return t("accountLocalLoginSuccess");
  }
  return t("accountLocalSignedIn");
}

function getAuthSuccessBanner(url) {
  if (url.includes("/register")) {
    return t("accountAlertAccountCreated");
  }
  return t("accountAlertSignedIn");
}

async function handleLocalAccountAuth(url, payload) {
  if (url.includes("/register")) {
    return registerLocalCustomer(payload);
  }

  if (url.includes("/login")) {
    return loginLocalCustomer(payload);
  }

  throw new Error(t("accountLocalUnsupported"));
}

async function registerLocalCustomer(payload) {
  const customers = loadLocalCustomers();
  const email = String(payload.email || "").trim().toLowerCase();

  if (customers.some((customer) => customer.email === email)) {
    throw new Error(t("accountLocalDuplicate"));
  }

  const customer = {
    id: createLocalCustomerId(),
    name: String(payload.name || "").trim(),
    email,
    phone: String(payload.phone || "").trim(),
    address: String(payload.address || "").trim(),
    passwordHash: await hashLocalPassword(String(payload.password || "")),
    createdAt: new Date().toISOString(),
    provider: "password",
  };

  customers.unshift(customer);
  saveLocalCustomers(customers);

  return {
    token: createLocalAccountToken(customer),
    customer: sanitizeLocalCustomer(customer),
  };
}

async function loginLocalCustomer(payload) {
  const customers = loadLocalCustomers();
  const email = String(payload.email || "").trim().toLowerCase();
  const customer = customers.find((entry) => entry.email === email);

  if (!customer) {
    throw new Error(t("accountLocalMissing"));
  }

  const passwordHash = await hashLocalPassword(String(payload.password || ""));
  if (customer.passwordHash !== passwordHash) {
    throw new Error(t("accountLocalWrongPassword"));
  }

  return {
    token: createLocalAccountToken(customer),
    customer: sanitizeLocalCustomer(customer),
  };
}

async function signInWithLocalGoogleProfile(profile) {
  const customers = loadLocalCustomers();
  const email = String(profile.email || "").trim().toLowerCase();
  let customer = customers.find((entry) => entry.email === email);

  if (!customer) {
    customer = {
      id: createLocalCustomerId(),
      name: String(profile.name || "").trim() || t("accountLocalGoogleName"),
      email,
      phone: String(profile.phone || "").trim(),
      address: String(profile.address || "").trim(),
      passwordHash: "",
      createdAt: new Date().toISOString(),
      provider: "google-demo",
    };
    customers.unshift(customer);
    saveLocalCustomers(customers);
  }

  return {
    token: createLocalAccountToken(customer),
    customer: sanitizeLocalCustomer(customer),
  };
}

function loadLocalAccountDashboard() {
  const customer = getCustomerFromLocalToken(accountState.token) || accountState.profile;
  if (!customer?.id) {
    throw new Error(t("accountSessionExpired"));
  }

  const fullCustomer = loadLocalCustomers().find((entry) => entry.id === customer.id);
  if (!fullCustomer) {
    throw new Error(t("accountLocalMissingCustomer"));
  }

  accountState.profile = sanitizeLocalCustomer(fullCustomer);
  accountState.orders = loadLocalAccountOrders(accountState.profile);
  saveToStorage(ACCOUNT_STORAGE_KEYS.profile, accountState.profile);

  renderProfile(accountState.profile);
  renderOrders(accountState.orders);
  document.getElementById("accountAuthView").classList.add("hidden");
  document.getElementById("accountDashboard").classList.remove("hidden");
  completePostLoginRedirect();
}

function loadLocalAccountOrders(profile) {
  const orders = loadFromStorage("simba-orders", []);
  return orders.filter((order) => {
    const customerIdMatch = order.customerId && order.customerId === profile.id;
    const emailMatch = order.customer?.email && order.customer.email === profile.email;
    return customerIdMatch || emailMatch;
  });
}

function loadLocalCustomers() {
  return loadFromStorage(ACCOUNT_STORAGE_KEYS.customers, []);
}

function saveLocalCustomers(customers) {
  saveToStorage(ACCOUNT_STORAGE_KEYS.customers, customers);
}

function sanitizeLocalCustomer(customer) {
  return {
    id: customer.id,
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    address: customer.address,
    createdAt: customer.createdAt,
  };
}

function createLocalCustomerId() {
  return `local-customer-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function createLocalAccountToken(customer) {
  return `local-demo.${btoa(JSON.stringify(sanitizeLocalCustomer(customer)))}`;
}

function isLocalAccountToken(token) {
  return String(token || "").startsWith("local-demo.");
}

function getCustomerFromLocalToken(token) {
  if (!isLocalAccountToken(token)) return null;
  try {
    const encoded = String(token).slice("local-demo.".length);
    return JSON.parse(atob(encoded));
  } catch {
    return null;
  }
}

async function hashLocalPassword(password) {
  const content = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", content);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function formatOrderStatus(status) {
  const normalized = String(status || "").trim().toLowerCase();
  const statusMap = {
    received: "accountStatusReceived",
    accepted: "accountStatusAccepted",
    preparing: "accountStatusPreparing",
    "ready-for-pickup": "accountStatusReadyForPickup",
    completed: "accountStatusCompleted",
    cancelled: "accountStatusCancelled",
    delivered: "accountStatusDelivered",
  };

  const translationKey = statusMap[normalized];
  if (!translationKey) return status;
  return t(translationKey);
}

function formatRatingLabel(value) {
  return t(value === 1 ? "accountRatingStar" : "accountRatingStars", { count: value });
}

function getReviewStars(rating) {
  const normalized = Math.max(1, Math.min(5, Number(rating || 0)));
  return `${String.fromCharCode(9733).repeat(normalized)}${String.fromCharCode(9734).repeat(5 - normalized)}`;
}
