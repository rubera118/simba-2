const STORAGE_KEYS = {
  cart: "simba-cart",
  theme: "simba-theme",
  language: "simba-language",
};

const translations = {
  en: {
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
  },
  fr: {
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
  },
  rw: {
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
  },
};

const state = {
  cart: loadFromStorage(STORAGE_KEYS.cart, []),
  language: loadFromStorage(STORAGE_KEYS.language, "en"),
  theme: loadFromStorage(STORAGE_KEYS.theme, "light"),
};

const PRODUCT_FALLBACK_IMAGE = "assets/product-fallback.svg";

document.addEventListener("DOMContentLoaded", initCheckoutPage);

async function initCheckoutPage() {
  applyTheme();
  applyLanguage();
  bindControls();
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

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.getElementById("checkoutMessage");
    const copy = translations[state.language] || translations.en;

    if (!state.cart.length) {
      message.textContent = copy.emptyCart;
      return;
    }

    message.textContent = copy.checkoutSuccess;
    state.cart = [];
    saveToStorage(STORAGE_KEYS.cart, state.cart);
    form.reset();
    renderCheckoutItems();
  });
}

function applyTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
}

function applyLanguage() {
  const copy = translations[state.language] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) node.textContent = copy[key];
  });
}

async function renderCheckoutItems() {
  const copy = translations[state.language] || translations.en;
  const itemsContainer = document.getElementById("checkoutItems");
  const subtotalNode = document.getElementById("checkoutSubtotal");
  const totalNode = document.getElementById("checkoutTotal");
  const deliveryFee = 2000;

  try {
    const response = await fetch("products.json");
    const products = await response.json();

    if (!state.cart.length) {
      itemsContainer.innerHTML = `
        <div class="state-panel">
          <p>${copy.emptyCart}</p>
          <a class="primary-button" href="index.html">Home</a>
        </div>
      `;
      subtotalNode.textContent = formatCurrency(0);
      totalNode.textContent = formatCurrency(deliveryFee);
      return;
    }

    const itemsMarkup = state.cart
      .map((item) => {
        const product = products.find((entry) => entry.id === item.id);
        if (!product) return "";
        return `
          <article class="checkout-item">
            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
            <div>
              <strong>${product.name}</strong>
              <p>${item.quantity} x ${formatCurrency(product.price)}</p>
            </div>
          </article>
        `;
      })
      .join("");

    const subtotal = state.cart.reduce((sum, item) => {
      const product = products.find((entry) => entry.id === item.id);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    itemsContainer.innerHTML = itemsMarkup;
    subtotalNode.textContent = formatCurrency(subtotal);
    totalNode.textContent = formatCurrency(subtotal + deliveryFee);
  } catch (error) {
    itemsContainer.innerHTML = `<div class="state-panel"><p>${copy.emptyCart}</p></div>`;
    console.error(error);
  }
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
