const STORAGE_KEYS = {
  cart: "simba-cart",
  theme: "simba-theme",
  language: "simba-language",
  orders: "simba-orders",
  customerToken: "simba-customer-token",
  customerProfile: "simba-customer-profile",
  selectedBranch: "simba-selected-branch",
};

const translations = {
  en: {
    theme: "Theme",
    checkoutBadge: "Safe and simple checkout",
    deliveryInfo: "Delivery details",
    checkoutTitle: "Complete your order",
    fullName: "Full name",
    phoneNumber: "Phone number",
    address: "Delivery address",
    notes: "Delivery notes",
    paymentTitle: "Simulated Mobile Money payment",
    network: "Network",
    momoNumber: "MoMo number",
    placeOrder: "Place order",
    orderSummary: "Order summary",
    cartTitle: "Shopping cart",
    subtotal: "Subtotal",
    deliveryFee: "Delivery fee",
    total: "Total",
    emptyCart: "Your cart is empty. Please return home and add products first.",
    checkoutSuccess: "Order placed successfully. This is a simulated MoMo experience for demonstration only.",
    home: "Continue shopping",
    orderNumber: "Order number",
    orderPlacedTitle: "Order received",
    orderPlacedText: "We saved this order on the device so you can show a complete working storefront demo.",
    orderCustomer: "Customer",
    orderPayment: "Payment",
    orderDelivery: "Delivery",
    remove: "Remove",
    quantity: "Quantity",
    branchLabel: "Branch",
    branchSummary: "Selected branch",
    formError: "Please complete all delivery and payment fields before placing the order.",
    checkoutError: "We could not place the order right now. Please make sure the backend server is running.",
  },
  fr: {
    theme: "Theme",
    checkoutBadge: "Paiement simple et sur",
    deliveryInfo: "Informations de livraison",
    checkoutTitle: "Finalisez votre commande",
    fullName: "Nom complet",
    phoneNumber: "Numero de telephone",
    address: "Adresse de livraison",
    notes: "Notes de livraison",
    paymentTitle: "Paiement Mobile Money simule",
    network: "Reseau",
    momoNumber: "Numero MoMo",
    placeOrder: "Valider la commande",
    orderSummary: "Resume de commande",
    cartTitle: "Panier",
    subtotal: "Sous-total",
    deliveryFee: "Frais de livraison",
    total: "Total",
    emptyCart: "Votre panier est vide. Retournez a l'accueil et ajoutez des produits.",
    checkoutSuccess: "Commande validee avec succes. Ceci est une simulation MoMo pour la demonstration.",
    home: "Continuer vos achats",
    orderNumber: "Numero de commande",
    orderPlacedTitle: "Commande recue",
    orderPlacedText: "Nous avons enregistre cette commande sur l'appareil pour une demonstration complete de la boutique.",
    orderCustomer: "Client",
    orderPayment: "Paiement",
    orderDelivery: "Livraison",
    remove: "Supprimer",
    quantity: "Quantite",
    branchLabel: "Branche",
    branchSummary: "Branche choisie",
    formError: "Veuillez remplir toutes les informations de livraison et de paiement avant de valider.",
    checkoutError: "Impossible d'envoyer la commande maintenant. Verifiez que le serveur backend fonctionne.",
  },
  rw: {
    theme: "Insanganyamatsiko",
    checkoutBadge: "Kwishyura byoroshye kandi bitekanye",
    deliveryInfo: "Aho woherezwa",
    checkoutTitle: "Rangiza gutumiza",
    fullName: "Amazina yose",
    phoneNumber: "Numero ya telefone",
    address: "Aderesi yo koherezaho",
    notes: "Ubutumwa bwo kohereza",
    paymentTitle: "Kwishyura kwa Mobile Money ko kwigereranya",
    network: "Umuyoboro",
    momoNumber: "Numero ya MoMo",
    placeOrder: "Ohereza itumiza",
    orderSummary: "Incamake y'itumiza",
    cartTitle: "Agaseke",
    subtotal: "Igiteranyo mbere",
    deliveryFee: "Amafaranga yo kohereza",
    total: "Igiteranyo",
    emptyCart: "Agaseke karimo ubusa. Subira ahabanza wongere ibicuruzwa.",
    checkoutSuccess: "Itumiza ryakiriwe neza. Ibi ni ukwigereranya kwa MoMo gusa.",
    home: "Komeza guhaha",
    orderNumber: "Nomero y'itumiza",
    orderPlacedTitle: "Itumiza ryakiriwe",
    orderPlacedText: "Iri tumiza ryabitswe kuri iki gikoresho kugira ngo demo y'iduka igaragare ikora neza.",
    orderCustomer: "Umukiriya",
    orderPayment: "Kwishyura",
    orderDelivery: "Kohereza",
    remove: "Kuramo",
    quantity: "Ingano",
    branchLabel: "Ishami",
    branchSummary: "Ishami ryatoranyijwe",
    formError: "Uzuza amakuru yose yo kohereza no kwishyura mbere yo kohereza itumiza.",
    checkoutError: "Ntitwabashije kohereza itumiza ubu. Reba niba server ya backend iri gukora.",
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
};

const PRODUCT_FALLBACK_IMAGE = "assets/product-fallback.svg";

document.addEventListener("DOMContentLoaded", initCheckoutPage);

async function initCheckoutPage() {
  applyTheme();
  applyLanguage();
  bindControls();
  hydrateCustomerDetails();
  await renderCheckoutItems();
}

function bindControls() {
  const languageSelect = document.getElementById("languageSelect");
  const themeToggle = document.getElementById("themeToggle");
  const form = document.getElementById("checkoutForm");

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
}

function applyTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
}

function applyLanguage() {
  const copy = translations[state.language] || translations.en;
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) node.textContent = copy[key];
  });

  const confirmation = document.getElementById("orderConfirmation");
  if (state.lastOrder && !confirmation.classList.contains("hidden")) {
    renderOrderConfirmation();
  }
}

async function renderCheckoutItems() {
  const copy = translations[state.language] || translations.en;
  const itemsContainer = document.getElementById("checkoutItems");
  const subtotalNode = document.getElementById("checkoutSubtotal");
  const totalNode = document.getElementById("checkoutTotal");
  const submitButton = document.querySelector('#checkoutForm button[type="submit"]');
  const deliveryFee = 2000;

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
      totalNode.textContent = formatCurrency(deliveryFee);
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
    totalNode.textContent = formatCurrency(subtotal + deliveryFee);
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
    },
    branchId: state.selectedBranchId,
    items: state.cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      branchId: item.branchId,
    })),
  };

  message.textContent = "Processing order...";
  if (submitButton) submitButton.disabled = true;

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

    state.lastOrder = payload.order;
    const existingOrders = loadFromStorage(STORAGE_KEYS.orders, []);
    existingOrders.unshift(state.lastOrder);
    saveToStorage(STORAGE_KEYS.orders, existingOrders);

    message.textContent = copy.checkoutSuccess;
    renderOrderConfirmation();
    confirmation.classList.remove("hidden");

    state.cart = [];
    saveToStorage(STORAGE_KEYS.cart, state.cart);
    form.reset();
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
        <strong>${state.lastOrder.payment?.network || state.lastOrder.network}</strong>
      </div>
      <div class="summary-row">
        <span>${copy.orderDelivery}</span>
        <strong>${state.lastOrder.customer?.address || state.lastOrder.address}</strong>
      </div>
      <div class="summary-row">
        <span>${copy.branchSummary}</span>
        <strong>${state.lastOrder.branch?.name || window.SIMBA_BRANCHES?.getBranchById(state.lastOrder.branchId).name || ""}</strong>
      </div>
      <div class="summary-row total-row">
        <span>${copy.total}</span>
        <strong>${formatCurrency(state.lastOrder.total)}</strong>
      </div>
    </div>
    <a class="primary-button" href="index.html">${copy.home}</a>
  `;
}

function hydrateCustomerDetails() {
  if (!state.customerProfile) return;

  const form = document.getElementById("checkoutForm");
  if (!form) return;

  if (!form.elements.name.value) form.elements.name.value = state.customerProfile.name || "";
  if (!form.elements.phone.value) form.elements.phone.value = state.customerProfile.phone || "";
  if (!form.elements.address.value) form.elements.address.value = state.customerProfile.address || "";
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

function apiUrl(path) {
  const baseUrl = window.SIMBA_CONFIG?.API_BASE_URL?.trim();
  return baseUrl ? `${baseUrl}${path}` : path;
}

function getBranchStock(product, branchId) {
  if (!product) return 0;
  if (window.SIMBA_BRANCHES) return window.SIMBA_BRANCHES.getProductBranchStock(product, branchId);
  return Number(product.stock || 0);
}
