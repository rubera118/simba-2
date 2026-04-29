const STORAGE_KEYS = {
  cart: "simba-cart",
  theme: "simba-theme",
  language: "simba-language",
  orders: "simba-orders",
  customerToken: "simba-customer-token",
  customerProfile: "simba-customer-profile",
  selectedBranch: "simba-selected-branch",
  reviews: "simba-branch-reviews",
  postAuthAction: "simba-post-auth-action",
};

const PICKUP_DEPOSIT = 500;

const translations = {
  en: {
    checkoutPageTitle: "Checkout | Simba Supermarket",
    languageLabel: "Language",
    navBranches: "Branches",
    navAccount: "Account",
    theme: "Theme",
    checkoutBadge: "Safe and simple checkout",
    deliveryInfo: "Delivery details",
    pickupDetails: "Pickup details",
    checkoutTitle: "Complete your order",
    pickupBadge: "Pick-up first",
    pickupTitle: "Choose your branch and pick-up time",
    pickupBranch: "Pick-up branch",
    pickupTime: "Pick-up time",
    pickupMode: "Fulfilment mode",
    pickupOption: "Pick-up",
    deliveryOption: "Delivery",
    fullName: "Full name",
    fullNamePlaceholder: "Aline Uwimana",
    phoneNumber: "Phone number",
    phoneNumberPlaceholder: "+250 788 123 456",
    address: "Delivery address",
    addressPlaceholder: "Kigali, KG 11 Ave",
    notes: "Delivery notes",
    notesPlaceholder: "Apartment number, landmarks, preferred time",
    paymentEyebrow: "MoMo",
    paymentTitle: "MoMo deposit to confirm your order",
    depositText: "A small non-refundable deposit confirms the order so branch staff can start preparing it.",
    network: "Network",
    momoNumber: "MoMo number",
    momoNumberPlaceholder: "+250 78X XXX XXX",
    placeOrder: "Confirm order",
    paymentSimulationNote: "Demo payment simulation: the site will confirm the order after validating the form and deposit details.",
    orderSummary: "Order summary",
    cartTitle: "Shopping cart",
    subtotal: "Subtotal",
    deliveryFee: "Delivery fee",
    total: "Total",
    emptyCart: "Your cart is empty. Please return home and add products first.",
    checkoutSuccess: "Order placed successfully. Your branch has received the request.",
    home: "Continue shopping",
    orderNumber: "Order number",
    orderPlacedTitle: "Order received",
    orderPlacedText: "Your order has been recorded and sent through the storefront flow.",
    orderCustomer: "Customer",
    orderPayment: "Payment",
    orderDelivery: "Delivery",
    remove: "Remove",
    quantity: "Quantity",
    branchLabel: "Branch",
    branchSummary: "Selected branch",
    depositLabel: "MoMo deposit",
    depositRiskNotice: "Customers with previous no-shows may be asked for a higher confirmation deposit.",
    depositRequirement: "Required deposit",
    formError: "Please complete all delivery and payment fields before placing the order.",
    checkoutError: "We could not place the order right now. Please make sure the backend server is running.",
    checkoutProcessing: "Processing order...",
checkoutLocalSuccess: "Order saved locally for this device because the backend is unavailable.",
    checkoutPrintReceipt: "Print receipt",
    checkoutEstimatedTime: "Estimated preparation time",
    checkoutMinutes: "{count} minutes",
    checkoutWhatsNext: "What's next?",
    checkoutNextStep1: "Preparation started",
    checkoutNextStep1Text: "Our team is preparing your order right now.",
    checkoutNextStep2: "SMS confirmation",
    checkoutNextStep2Text: "You will receive an SMS when your order is ready for pickup.",
    checkoutNextStep3: "Pick up your order",
    checkoutNextStep3Text: "Visit the pickup counter with your receipt.",
  },
  fr: {
    checkoutPageTitle: "Paiement | Simba Supermarket",
    languageLabel: "Langue",
    navBranches: "Branches",
    navAccount: "Compte",
    theme: "Theme",
    checkoutBadge: "Paiement simple et sur",
    deliveryInfo: "Informations de livraison",
    pickupDetails: "Informations de retrait",
    checkoutTitle: "Finalisez votre commande",
    pickupBadge: "Retrait d'abord",
    pickupTitle: "Choisissez votre branche et l'heure de retrait",
    pickupBranch: "Branche de retrait",
    pickupTime: "Heure de retrait",
    pickupMode: "Mode de retrait",
    pickupOption: "Retrait",
    deliveryOption: "Livraison",
    fullName: "Nom complet",
    fullNamePlaceholder: "Aline Uwimana",
    phoneNumber: "Numero de telephone",
    phoneNumberPlaceholder: "+250 788 123 456",
    address: "Adresse de livraison",
    addressPlaceholder: "Kigali, KG 11 Ave",
    notes: "Notes de livraison",
    notesPlaceholder: "Appartement, point de repere, heure preferee",
    paymentEyebrow: "MoMo",
    paymentTitle: "Depot MoMo pour confirmer la commande",
    depositText: "Un petit depot non remboursable confirme la commande pour que l'equipe commence la preparation.",
    network: "Reseau",
    momoNumber: "Numero MoMo",
    momoNumberPlaceholder: "+250 78X XXX XXX",
    placeOrder: "Confirmer la commande",
    paymentSimulationNote: "Simulation de paiement demo : le site confirme la commande apres validation du formulaire et du depot.",
    orderSummary: "Resume de commande",
    cartTitle: "Panier",
    subtotal: "Sous-total",
    deliveryFee: "Frais de livraison",
    total: "Total",
    emptyCart: "Votre panier est vide. Retournez a l'accueil et ajoutez des produits.",
    checkoutSuccess: "Commande validee avec succes. La branche a bien recu la demande.",
    home: "Continuer vos achats",
    orderNumber: "Numero de commande",
    orderPlacedTitle: "Commande recue",
    orderPlacedText: "Votre commande a bien ete enregistree dans le parcours de la boutique.",
    orderCustomer: "Client",
    orderPayment: "Paiement",
    orderDelivery: "Livraison",
    remove: "Supprimer",
    quantity: "Quantite",
    branchLabel: "Branche",
    branchSummary: "Branche choisie",
    depositLabel: "Depot MoMo",
    depositRiskNotice: "Les clients avec des absences precedentes peuvent avoir un depot de confirmation plus eleve.",
    depositRequirement: "Depot requis",
    formError: "Veuillez remplir toutes les informations de livraison et de paiement avant de valider.",
    checkoutError: "Impossible d'envoyer la commande maintenant. Verifiez que le serveur backend fonctionne.",
    checkoutProcessing: "Traitement de la commande...",
checkoutLocalSuccess: "La commande a ete enregistree localement sur cet appareil car le backend est indisponible.",
    checkoutPrintReceipt: "Imprimer le recu",
    checkoutEstimatedTime: "Temps de preparation estime",
    checkoutMinutes: "{count} minutes",
    checkoutWhatsNext: "Et ensuite ?",
    checkoutNextStep1: "Preparation en cours",
    checkoutNextStep1Text: "Notre equipe prepare votre commande des maintenant.",
    checkoutNextStep2: "Confirmation par SMS",
    checkoutNextStep2Text: "Vous recevrez un SMS quand commande sera prete pour retrait.",
    checkoutNextStep3: "Retirez votre commande",
    checkoutNextStep3Text: "Presentez-vous au comptoir de retrait avec votre recu.",
  },
  rw: {
    checkoutPageTitle: "Checkout | Simba Supermarket",
    languageLabel: "Ururimi",
    navBranches: "Amashami",
    navAccount: "Konti",
    theme: "Insanganyamatsiko",
    checkoutBadge: "Kwishyura byoroshye kandi bitekanye",
    deliveryInfo: "Aho woherezwa",
    pickupDetails: "Amakuru ya pickup",
    checkoutTitle: "Rangiza gutumiza",
    pickupBadge: "Banza pickup",
    pickupTitle: "Hitamo ishami n'igihe cyo gufatiraho",
    pickupBranch: "Ishami ryo gufatiraho",
    pickupTime: "Igihe cyo gufatiraho",
    pickupMode: "Uburyo bwo guhabwa",
    pickupOption: "Pickup",
    deliveryOption: "Delivery",
    fullName: "Amazina yose",
    fullNamePlaceholder: "Aline Uwimana",
    phoneNumber: "Numero ya telefone",
    phoneNumberPlaceholder: "+250 788 123 456",
    address: "Aderesi yo koherezaho",
    addressPlaceholder: "Kigali, KG 11 Ave",
    notes: "Ubutumwa bwo kohereza",
    notesPlaceholder: "Apartment, ibyo umuntu yakwereka, cyangwa igihe wifuza",
    paymentEyebrow: "MoMo",
    paymentTitle: "Kubitsa MoMo kugira ngo wemeze order",
    depositText: "Ubwishyu buto butagaruka bwemeza order kugira ngo abakozi batangire kuyitegura.",
    network: "Umuyoboro",
    momoNumber: "Numero ya MoMo",
    momoNumberPlaceholder: "+250 78X XXX XXX",
    placeOrder: "Emeza order",
    paymentSimulationNote: "Igerageza rya payment: site yemeza order nyuma yo gusuzuma form na deposit.",
    orderSummary: "Incamake y'itumiza",
    cartTitle: "Agaseke",
    subtotal: "Igiteranyo mbere",
    deliveryFee: "Amafaranga yo kohereza",
    total: "Igiteranyo",
    emptyCart: "Agaseke karimo ubusa. Subira ahabanza wongere ibicuruzwa.",
    checkoutSuccess: "Itumiza ryakiriwe neza. Ishami ryabonye ubusabe bwawe.",
    home: "Komeza guhaha",
    orderNumber: "Nomero y'itumiza",
    orderPlacedTitle: "Itumiza ryakiriwe",
    orderPlacedText: "Itumiza ryawe ryanditswe neza mu rugendo rw'iduka.",
    orderCustomer: "Umukiriya",
    orderPayment: "Kwishyura",
    orderDelivery: "Kohereza",
    remove: "Kuramo",
    quantity: "Ingano",
    branchLabel: "Ishami",
    branchSummary: "Ishami ryatoranyijwe",
    depositLabel: "Ubwizigame bwa MoMo",
    depositRiskNotice: "Abakiriya bafite amateka yo kutaza gufata order bashobora gusabwa deposit iri hejuru.",
    depositRequirement: "Deposit isabwa",
    formError: "Uzuza amakuru yose yo kohereza no kwishyura mbere yo kohereza itumiza.",
    checkoutError: "Ntitwabashije kohereza itumiza ubu. Reba niba server ya backend iri gukora.",
    checkoutProcessing: "Birimo gutunganya order...",
checkoutLocalSuccess: "Order yabitswe kuri iki gikoresho kubera ko backend itaboneka.",
    checkoutPrintReceipt: "Fungura ikagaragambiro",
    checkoutEstimatedTime: "Igihe cyitegurushe",
    checkoutMinutes: "iminuti {count}",
    checkoutWhatsNext: "Ninde ugerageraho?",
    checkoutNextStep1: "Birategurwa",
    checkoutNextStep1Text: "Ikipe iri gutegura order yawe ubu.",
    checkoutNextStep2: "SMS yo kwemera",
    checkoutNextStep2Text: "Uzakira SMS iyo order yiteguye gufatwa.",
    checkoutNextStep3: "Fata order yawe",
    checkoutNextStep3Text: "Ijya ku compterret kugira ngo ufate order yawe.",
  },
};

const state = {
  cart: window.SIMBA_BRANCHES
    ? window.SIMBA_BRANCHES.normalizeCart(loadFromStorage(STORAGE_KEYS.cart, []), window.SIMBA_BRANCHES.getSelectedBranch().id)
    : loadFromStorage(STORAGE_KEYS.cart, []),
  language: loadFromStorage(STORAGE_KEYS.language, "en"),
  theme: loadFromStorage(STORAGE_KEYS.theme, "light"),
  products: [],
  lastOrder: null,
  customerToken: loadFromStorage(STORAGE_KEYS.customerToken, ""),
  customerProfile: loadFromStorage(STORAGE_KEYS.customerProfile, null),
  selectedBranchId: window.SIMBA_BRANCHES?.getSelectedBranch()?.id || "",
  deposit: getRequiredDeposit(loadFromStorage(STORAGE_KEYS.customerProfile, null)),
};

const DEFAULT_DELIVERY_FEE = 2000;
const UI_ALERT_STORAGE_KEY = "simba-ui-alert";

const PRODUCT_FALLBACK_IMAGE = "assets/product-fallback.svg";

document.addEventListener("DOMContentLoaded", initCheckoutPage);

async function initCheckoutPage() {
  if (!isCustomerSignedIn()) {
    redirectToLoginForCheckout();
    return;
  }

  await refreshCustomerProfile();
  applyTheme();
  applyLanguage();
  bindControls();
  window.markPreferencesReady?.();
  showPendingUiAlert();
  hydrateCustomerDetails();
  await renderCheckoutItems();
}

function showPendingUiAlert() {
  const alertElement = document.getElementById("checkoutAlert");
  if (!alertElement) return;

  try {
    const rawValue = sessionStorage.getItem(UI_ALERT_STORAGE_KEY);
    if (!rawValue) return;
    sessionStorage.removeItem(UI_ALERT_STORAGE_KEY);
    const payload = JSON.parse(rawValue);
    if (!payload?.message) return;
    alertElement.textContent = payload.message;
    alertElement.className = `site-alert site-alert-${payload.variant || "success"}`;
    alertElement.scrollIntoView({ block: "start", behavior: "smooth" });
    window.setTimeout(() => {
      alertElement.textContent = "";
      alertElement.className = "site-alert hidden";
    }, 4500);
  } catch {
    // Ignore storage errors for non-critical UI feedback.
  }
}

function bindControls() {
  const languageSelect = document.getElementById("languageSelect");
  const themeToggle = document.getElementById("themeToggle");
  const form = document.getElementById("checkoutForm");
  populatePickupBranches();
  syncPickupSummary();

  languageSelect.value = state.language;

  languageSelect.addEventListener("change", async (event) => {
    state.language = event.target.value;
    saveToStorage(STORAGE_KEYS.language, state.language);
    applyLanguage();
    await renderCheckoutItems();
  });

  themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveToStorage(STORAGE_KEYS.theme, state.theme);
    applyTheme();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitOrder(form);
  });

  form.elements.pickupBranch?.addEventListener("change", (event) => {
    state.selectedBranchId = event.target.value;
    window.SIMBA_BRANCHES?.saveSelectedBranch(state.selectedBranchId);
    syncPickupSummary();
    renderCheckoutItems();
  });

  form.elements.pickupTime?.addEventListener("change", syncPickupSummary);
  form.elements.fulfilmentMode?.addEventListener("change", () => {
    applyFulfilmentMode();
    syncPickupSummary();
    renderCheckoutItems();
  });
  applyFulfilmentMode();
}

function applyTheme() {
  const isDarkTheme = state.theme === "dark";
  document.documentElement.classList.toggle("dark", isDarkTheme);
  document.body.classList.toggle("dark", isDarkTheme);
}

function applyLanguage() {
  const copy = translations[state.language] || translations.en;
  document.documentElement.lang = state.language;
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

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (copy[key]) node.setAttribute("placeholder", copy[key]);
  });

  const confirmation = document.getElementById("orderConfirmation");
  if (state.lastOrder && !confirmation.classList.contains("hidden")) {
    renderOrderConfirmation();
  }
  applyFulfilmentMode();
}

async function renderCheckoutItems() {
  const copy = translations[state.language] || translations.en;
  const itemsContainer = document.getElementById("checkoutItems");
  const subtotalNode = document.getElementById("checkoutSubtotal");
  const totalNode = document.getElementById("checkoutTotal");
  const submitButton = document.querySelector('#checkoutForm button[type="submit"]');
  const deliveryNode = document.getElementById("deliveryFee");
  const depositNode = document.getElementById("depositFee");
  const branchSummary = document.getElementById("summaryBranch");
  const pickupSummary = document.getElementById("summaryPickupTime");
  const deliveryFee = getDeliveryFee();
  state.deposit = getRequiredDeposit(state.customerProfile);

  try {
    state.products = await loadProducts();
    state.cart = state.cart
      .map((item) => {
        const product = state.products.find((entry) => entry.id === item.id);
        const stock = getBranchStock(product, item.branchId);
        if (!product || stock <= 0) return null;
        return {
          ...item,
          quantity: Math.min(item.quantity, stock),
        };
      })
      .filter(Boolean);
    saveToStorage(STORAGE_KEYS.cart, state.cart);

    if (!state.cart.length) {
      itemsContainer.innerHTML = `
        <div class="state-panel">
          <p>${copy.emptyCart}</p>
          <a class="primary-button" href="index.html">${copy.home}</a>
        </div>
      `;
      subtotalNode.textContent = formatCurrency(0);
      deliveryNode.textContent = formatCurrency(deliveryFee);
      depositNode.textContent = formatCurrency(state.deposit);
      branchSummary.textContent = window.SIMBA_BRANCHES?.getBranchById(state.selectedBranchId).name || "-";
      pickupSummary.textContent = document.getElementById("pickupTimeSelect")?.value || "-";
      totalNode.textContent = formatCurrency(deliveryFee + state.deposit);
      if (submitButton) submitButton.disabled = true;
      return;
    }

    if (submitButton) submitButton.disabled = false;

    const itemsMarkup = state.cart
      .map((item) => {
        const product = state.products.find((entry) => entry.id === item.id);
        if (!product) return "";
        const branches = window.SIMBA_BRANCHES?.getBranches() || [];
        return `
          <article class="checkout-item">
            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
            <div>
              <strong>${product.name}</strong>
              <p>${item.quantity} x ${formatCurrency(product.price)}</p>
              <label class="field cart-branch-field">
                <span>${copy.branchLabel}</span>
                <select data-action="change-branch" data-id="${product.id}" data-branch-id="${item.branchId}">
                  ${branches
                    .map((branch) => `<option value="${branch.id}" ${branch.id === item.branchId ? "selected" : ""}>${branch.name}</option>`)
                    .join("")}
                </select>
              </label>
              <div class="qty-controls">
                <button class="qty-button" type="button" data-action="decrease" data-id="${product.id}" data-branch-id="${item.branchId}">-</button>
                <span>${copy.quantity}: ${item.quantity}</span>
                <button class="qty-button" type="button" data-action="increase" data-id="${product.id}" data-branch-id="${item.branchId}">+</button>
              </div>
              <button class="remove-button" type="button" data-action="remove" data-id="${product.id}" data-branch-id="${item.branchId}">${copy.remove}</button>
            </div>
          </article>
        `;
      })
      .join("");

    const subtotal = state.cart.reduce((sum, item) => {
      const product = state.products.find((entry) => entry.id === item.id);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    itemsContainer.innerHTML = itemsMarkup;
    subtotalNode.textContent = formatCurrency(subtotal);
    deliveryNode.textContent = formatCurrency(deliveryFee);
    depositNode.textContent = formatCurrency(state.deposit);
    branchSummary.textContent = window.SIMBA_BRANCHES?.getBranchById(state.selectedBranchId).name || "-";
    pickupSummary.textContent = document.getElementById("pickupTimeSelect")?.value || "-";
    totalNode.textContent = formatCurrency(subtotal + deliveryFee + state.deposit);
    itemsContainer.querySelectorAll('button[data-action]').forEach((button) => {
      button.addEventListener("click", () => updateCartItem(button.dataset.id, button.dataset.action, button.dataset.branchId));
    });
    itemsContainer.querySelectorAll('select[data-action="change-branch"]').forEach((select) => {
      select.addEventListener("change", () =>
        updateCartItem(select.dataset.id, "change-branch", select.dataset.branchId, select.value)
      );
    });
  } catch (error) {
    itemsContainer.innerHTML = `<div class="state-panel"><p>${copy.emptyCart}</p></div>`;
    console.error(error);
  }
}

function updateCartItem(productId, action, branchId, nextBranchId) {
  const item = state.cart.find((entry) => entry.id === productId && entry.branchId === branchId);
  if (!item) return;

  if (action === "increase") {
    const product = state.products.find((entry) => entry.id === productId);
    item.quantity = Math.min(getBranchStock(product, branchId) || item.quantity, item.quantity + 1);
  }
  if (action === "change-branch") {
    const existingTarget = state.cart.find((entry) => entry.id === productId && entry.branchId === nextBranchId);
    if (existingTarget && existingTarget !== item) {
      existingTarget.quantity += item.quantity;
      state.cart = state.cart.filter((entry) => entry !== item);
    } else {
      item.branchId = nextBranchId;
    }
    if (state.selectedBranchId === branchId) {
      state.selectedBranchId = nextBranchId;
      window.SIMBA_BRANCHES?.saveSelectedBranch(nextBranchId);
      populatePickupBranches();
      syncPickupSummary();
    }
  }
  if (action === "decrease") item.quantity -= 1;
  if (action === "remove" || item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => !(entry.id === productId && entry.branchId === branchId));
  }

  saveToStorage(STORAGE_KEYS.cart, state.cart);
  renderCheckoutItems();
}

async function submitOrder(form) {
  const message = document.getElementById("checkoutMessage");
  const confirmation = document.getElementById("orderConfirmation");
  const copy = translations[state.language] || translations.en;
  const submitButton = document.querySelector('#checkoutForm button[type="submit"]');

  if (!state.cart.length) {
    message.textContent = copy.emptyCart;
    confirmation.classList.add("hidden");
    return;
  }

  if (!form.reportValidity()) {
    message.textContent = copy.formError;
    confirmation.classList.add("hidden");
    return;
  }

  const formData = new FormData(form);
  const fulfilmentMode = String(formData.get("fulfilmentMode") || "pickup");
  const orderPayload = {
    customer: {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      address: String(formData.get("address") || ""),
      notes: String(formData.get("notes") || ""),
    },
    payment: {
      network: String(formData.get("network") || ""),
      momoNumber: String(formData.get("momoNumber") || ""),
      deposit: state.deposit,
    },
    branchId: state.selectedBranchId,
    fulfilment: {
      mode: fulfilmentMode,
      pickupTime: String(formData.get("pickupTime") || ""),
    },
    items: state.cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      branchId: item.branchId,
    })),
  };

  message.textContent = copy.checkoutProcessing;
  if (submitButton) submitButton.disabled = true;

  try {
    state.lastOrder = await submitOrderWithFallback(orderPayload, copy);
    const existingOrders = loadFromStorage(STORAGE_KEYS.orders, []);
    existingOrders.unshift(state.lastOrder);
    saveToStorage(STORAGE_KEYS.orders, existingOrders);

    message.textContent = state.lastOrder.localOnly ? copy.checkoutLocalSuccess : copy.checkoutSuccess;
    renderOrderConfirmation();
    confirmation.classList.remove("hidden");

    state.cart = [];
    saveToStorage(STORAGE_KEYS.cart, state.cart);
    form.reset();
    populatePickupBranches();
    applyFulfilmentMode();
    await renderCheckoutItems();
  } catch (error) {
    message.textContent = error.message || copy.checkoutError;
    confirmation.classList.add("hidden");
  } finally {
    if (submitButton && state.cart.length) submitButton.disabled = false;
  }
}

function renderOrderConfirmation() {
  const confirmation = document.getElementById("orderConfirmation");
  const copy = translations[state.language] || translations.en;
  if (!state.lastOrder) {
    confirmation.classList.add("hidden");
    confirmation.innerHTML = "";
    return;
  }

  confirmation.innerHTML = `
    <h2>${copy.orderPlacedTitle}</h2>
    <p>${copy.orderPlacedText}</p>
    <div class="summary-box">
      <div class="summary-row">
        <span>${copy.orderNumber}</span>
        <strong>${state.lastOrder.id}</strong>
      </div>
      <div class="summary-row">
        <span>${copy.orderCustomer}</span>
        <strong>${state.lastOrder.customer?.name || state.lastOrder.customer}</strong>
      </div>
      <div class="summary-row">
        <span>${copy.orderPayment}</span>
        <strong>${state.lastOrder.payment?.network || state.lastOrder.network} | ${copy.depositLabel}: ${formatCurrency(state.lastOrder.payment?.deposit || state.deposit)}</strong>
      </div>
      <div class="summary-row">
        <span>${copy.orderDelivery}</span>
        <strong>${state.lastOrder.customer?.address || state.lastOrder.address}</strong>
      </div>
      <div class="summary-row">
        <span>${copy.branchSummary}</span>
        <strong>${state.lastOrder.branch?.name || window.SIMBA_BRANCHES?.getBranchById(state.lastOrder.branchId).name || ""}</strong>
      </div>
      <div class="summary-row">
        <span>${copy.pickupTime}</span>
<strong>${state.lastOrder.fulfilment?.pickupTime || document.getElementById("pickupTimeSelect")?.value || ""}</strong>
      </div>
      <div class="summary-row total-row">
        <span>${copy.total}</span>
        <strong>${formatCurrency(state.lastOrder.total)}</strong>
      </div>
    </div>
    <div class="confirmation-next-steps">
      <h3>${copy.checkoutWhatsNext}</h3>
      <div class="next-step">
        <span class="step-icon">1</span>
        <div>
          <strong>${copy.checkoutNextStep1}</strong>
          <p>${copy.checkoutNextStep1Text}</p>
        </div>
      </div>
      <div class="next-step">
        <span class="step-icon">2</span>
        <div>
          <strong>${copy.checkoutNextStep2}</strong>
          <p>${copy.checkoutNextStep2Text}</p>
        </div>
      </div>
      <div class="next-step">
        <span class="step-icon">3</span>
        <div>
          <strong>${copy.checkoutNextStep3}</strong>
          <p>${copy.checkoutNextStep3Text}</p>
        </div>
      </div>
    </div>
    <div class="confirmation-actions">
      <a class="primary-button" href="index.html">${copy.home}</a>
      <button class="ghost-button" onclick="printReceipt()">${copy.checkoutPrintReceipt}</button>
    </div>
  `;
}

function printReceipt() {
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;

  const order = state.lastOrder;
  const copy = translations[state.language] || translations.en;

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${copy.orderNumber}: ${order.id}</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; max-width: 400px; margin: 0 auto; }
        h1 { font-size: 18px; margin-bottom: 5px; }
        .header { border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px; }
        .order-id { font-size: 24px; font-weight: bold; }
        .item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
        .total { font-weight: bold; font-size: 18px; margin-top: 20px; }
        .footer { margin-top: 30px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Simba Supermarket</h1>
        <p>${copy.orderNumber}: <span class="order-id">${order.id}</span></p>
      </div>
      <div class="items">
        ${order.items?.map(item => `
          <div class="item">
            <span>${item.name} x${item.quantity}</span>
            <span>${formatCurrency(item.lineTotal || item.price * item.quantity)}</span>
          </div>
        `).join("") || ""}
      </div>
      <div class="item">
        <span>${copy.subtotal}</span>
        <span>${formatCurrency(order.subtotal)}</span>
      </div>
      <div class="item">
        <span>${copy.deliveryFee}</span>
        <span>${formatCurrency(order.deliveryFee)}</span>
      </div>
      <div class="item">
        <span>${copy.depositLabel}</span>
        <span>${formatCurrency(order.payment?.deposit || state.deposit)}</span>
      </div>
      <div class="total">
        <span>${copy.total}</span>
        <span>${formatCurrency(order.total)}</span>
      </div>
      <div class="footer">
        <p><strong>${copy.branchSummary}:</strong> ${order.branch?.name || ""}</p>
        <p><strong>${copy.pickupTime}:</strong> ${order.fulfilment?.pickupTime || ""}</p>
        <p><strong>${copy.orderCustomer}:</strong> ${order.customer?.name || ""}</p>
        <p><strong>${copy.orderPayment}:</strong> ${order.payment?.network || ""}</p>
      </div>
    </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

function hydrateCustomerDetails() {
  if (!state.customerProfile) return;

  const form = document.getElementById("checkoutForm");
  if (!form) return;

  if (!form.elements.name.value) form.elements.name.value = state.customerProfile.name || "";
  if (!form.elements.phone.value) form.elements.phone.value = state.customerProfile.phone || "";
  if (!form.elements.address.value) form.elements.address.value = state.customerProfile.address || "";
}

function getRequiredDeposit(profile) {
  return Math.max(PICKUP_DEPOSIT, Number(profile?.requiredDeposit || PICKUP_DEPOSIT));
}

function populatePickupBranches() {
  const select = document.getElementById("pickupBranchSelect");
  if (!select || !window.SIMBA_BRANCHES) return;

  const branches = window.SIMBA_BRANCHES.getBranches();
  select.innerHTML = branches
    .map((branch) => `<option value="${branch.id}" ${branch.id === state.selectedBranchId ? "selected" : ""}>${branch.name}</option>`)
    .join("");
}

function syncPickupSummary() {
  const branchSummary = document.getElementById("summaryBranch");
  const pickupSummary = document.getElementById("summaryPickupTime");
  const pickupBranch = document.getElementById("pickupBranchSelect");
  const pickupTime = document.getElementById("pickupTimeSelect");

  if (pickupBranch?.value) {
    state.selectedBranchId = pickupBranch.value;
  }

  if (branchSummary) {
    branchSummary.textContent = window.SIMBA_BRANCHES?.getBranchById(state.selectedBranchId).name || "-";
  }
  if (pickupSummary) {
    pickupSummary.textContent = pickupTime?.value || "-";
  }
}

function applyFulfilmentMode() {
  const form = document.getElementById("checkoutForm");
  if (!form) return;

  const mode = form.elements.fulfilmentMode?.value || "pickup";
  const copy = translations[state.language] || translations.en;
  const deliveryLabel = document.querySelector('[data-i18n="deliveryInfo"]');
  const addressField = form.elements.address;
  const notesField = form.elements.notes;

  if (deliveryLabel) {
    deliveryLabel.textContent = mode === "pickup" ? copy.pickupDetails : copy.deliveryInfo;
  }

  if (addressField) {
    addressField.required = mode === "delivery";
    addressField.placeholder =
      mode === "pickup"
        ? {
            en: "Optional pickup note or meeting point",
            fr: "Note de retrait ou point de rencontre facultatif",
            rw: "Ubutumwa bwa pickup cyangwa aho muhura niba bikenewe",
          }[state.language] || "Optional pickup note or meeting point"
        : copy.addressPlaceholder;
  }

  if (notesField) {
    notesField.placeholder =
      mode === "pickup"
        ? {
            en: "Pickup contact, vehicle info, or any note for the branch team",
            fr: "Contact de retrait, infos du vehicule, ou note pour la branche",
            rw: "Uburyo bwo kuboneka kuri pickup, amakuru y'imodoka, cyangwa ubutumwa bwo ku ishami",
          }[state.language] || "Pickup contact, vehicle info, or any note for the branch team"
        : copy.notesPlaceholder;
  }
}

function getDeliveryFee() {
  const mode = document.getElementById("checkoutForm")?.elements.fulfilmentMode?.value || "pickup";
  if (mode !== "delivery") return 0;
  return window.SIMBA_BRANCHES?.getBranchById(state.selectedBranchId)?.deliveryFee ?? DEFAULT_DELIVERY_FEE;
}

async function submitOrderWithFallback(orderPayload, copy) {
  try {
    const response = await fetch(apiUrl("/api/orders"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(state.customerToken ? { Authorization: `Bearer ${state.customerToken}` } : {}),
      },
      body: JSON.stringify(orderPayload),
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload.error || copy.checkoutError);
    }

    return payload.order;
  } catch (error) {
    if (!shouldUseLocalCheckoutFallback(error)) {
      throw error;
    }

    return createLocalOrder(orderPayload);
  }
}

function shouldUseLocalCheckoutFallback(error) {
  if (!allowLocalCheckoutFallback()) {
    return false;
  }

  const message = String(error?.message || "");
  return (
    message.includes("Failed to fetch") ||
    message.includes("Load failed") ||
    message.includes("NetworkError") ||
    message.includes("backend")
  );
}

function allowLocalCheckoutFallback() {
  return !window.SIMBA_CONFIG?.API_BASE_URL?.trim();
}

function createLocalOrder(orderPayload) {
  const productsById = new Map(state.products.map((product) => [product.id, product]));
  const branch = window.SIMBA_BRANCHES?.getBranchById(orderPayload.branchId) || null;
  const items = orderPayload.items
    .map((item) => {
      const product = productsById.get(item.id);
      if (!product) return null;
      return {
        id: item.id,
        name: product.name,
        price: Number(product.price || 0),
        quantity: Number(item.quantity || 0),
        lineTotal: Number(product.price || 0) * Number(item.quantity || 0),
        branchId: item.branchId,
        image: product.image,
      };
    })
    .filter(Boolean);

  const subtotal = items.reduce((sum, item) => sum + Number(item.lineTotal || 0), 0);
  const deliveryFee = getDeliveryFee();
  const customerProfile = state.customerProfile || null;

  return {
    id: `LOCAL-${Date.now()}`,
    customerId: customerProfile?.id || "",
    branchId: orderPayload.branchId,
    branch,
    customer: {
      ...orderPayload.customer,
      email: customerProfile?.email || "",
    },
    payment: {
      ...orderPayload.payment,
      status: "simulated",
    },
    fulfilment: orderPayload.fulfilment,
    items,
    subtotal,
    deliveryFee,
    total: subtotal + deliveryFee + state.deposit,
    status: "received",
    createdAt: new Date().toISOString(),
    localOnly: true,
  };
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

function redirectToLoginForCheckout() {
  saveToStorage(STORAGE_KEYS.postAuthAction, {
    type: "checkout",
    redirectTo: "checkout.html",
  });
  window.location.href = "account.html?returnTo=checkout.html";
}

async function refreshCustomerProfile() {
  try {
    const response = await fetch(apiUrl("/api/account/profile"), {
      headers: {
        Authorization: `Bearer ${state.customerToken}`,
      },
    });
    if (!response.ok) return;
    const payload = await response.json();
    if (!payload?.customer) return;
    state.customerProfile = payload.customer;
    state.deposit = getRequiredDeposit(state.customerProfile);
    saveToStorage(STORAGE_KEYS.customerProfile, state.customerProfile);
  } catch {
    // Keep the locally cached profile if the backend is unavailable.
  }
}

function apiUrl(path) {
  const baseUrl = window.SIMBA_CONFIG?.API_BASE_URL?.trim();
  return baseUrl ? `${baseUrl}${path}` : path;
}

function getBranchStock(product, branchId) {
  if (!product) return 0;
  if (window.SIMBA_BRANCHES) return window.SIMBA_BRANCHES.getProductBranchStock(product, branchId);
  return Number(product.stock || 0);
}
