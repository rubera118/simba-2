const ADMIN_STORAGE_KEYS = {
  token: "simba-admin-token",
  mode: "simba-admin-mode",
  demoProducts: "simba-admin-demo-products",
  demoBranches: "simba-admin-demo-branches",
  roleView: "simba-admin-role-view",
  viewerName: "simba-admin-viewer-name",
};
const ADMIN_LANGUAGE_KEY = "simba-language";
const ADMIN_THEME_KEY = "simba-theme";

const adminState = {
  token: loadFromStorage(ADMIN_STORAGE_KEYS.token, ""),
  mode: loadFromStorage(ADMIN_STORAGE_KEYS.mode, ""),
  orders: [],
  products: [],
  branches: [],
  productQuery: "",
  language: loadFromStorage(ADMIN_LANGUAGE_KEY, "en"),
  theme: loadFromStorage(ADMIN_THEME_KEY, "light"),
  roleView: loadFromStorage(ADMIN_STORAGE_KEYS.roleView, "manager"),
  viewerName: loadFromStorage(ADMIN_STORAGE_KEYS.viewerName, "Alice"),
};

const ORDER_STATUSES = ["received", "accepted", "preparing", "ready-for-pickup", "completed", "cancelled", "delivered"];
const DEMO_ADMIN_PASSWORD = "simba-admin-2026";
const CUSTOMER_ORDER_STORAGE_KEY = "simba-orders";
const MANAGER_OPTIONS = ["Alice", "Claude", "Diane", "Eric"];
const STAFF_OPTIONS = ["Grace", "Jean", "Kevin", "Merveille", "Sandrine"];

const adminTranslations = {
  en: {
    adminPageTitle: "Market Rep Dashboard | Simba Supermarket",
    adminTagline: "Market rep dashboard",
    adminNavStorefront: "Storefront",
    adminNavBranches: "Branches",
    adminNavCheckout: "Checkout",
    adminLanguageLabel: "Language",
    adminTheme: "Theme",
    adminAccessEyebrow: "Market rep access",
    adminLoginTitle: "Sign in to review orders",
    adminPasswordLabel: "Admin password",
    adminPasswordPlaceholder: "Enter admin password",
    adminOpenDashboard: "Open dashboard",
    adminPasswordNote: "Use the `SIMBA_ADMIN_PASSWORD` environment variable. For local demo only, the fallback password is `simba-admin-2026`.",
    adminOperationsEyebrow: "Market operations",
    adminDashboardTitle: "Orders, inventory, and store controls",
    adminRefreshAction: "Refresh",
    adminLogoutAction: "Log out",
    adminOrderDeskEyebrow: "Order desk",
    adminOrderDeskTitle: "Incoming pickup orders",
    adminOrderDeskNote: "Branch managers can assign staff, then staff can move orders to ready for pickup.",
    adminRoleViewLabel: "Dashboard view",
    adminRoleManager: "Manager",
    adminRoleStaff: "Staff",
    adminViewerLabel: "Current teammate",
    adminCatalogEyebrow: "Catalog control",
    adminCatalogTitle: "Products and stock",
    adminNewItemEyebrow: "New item",
    adminCreateProductTitle: "Create product",
    adminFieldName: "Name",
    adminFieldCategory: "Category",
    adminFieldSubcategory: "Subcategory",
    adminFieldPrice: "Price",
    adminFieldStock: "Stock",
    adminFieldBadge: "Badge",
    adminFieldImagePath: "Image path",
    adminFieldDescription: "Description",
    adminVisibleInStore: "Visible in store",
    adminCreateProductAction: "Create product",
    adminSearchProductsPlaceholder: "Search products or categories",
    adminBranchEyebrow: "Branch control",
    adminBranchTitle: "Branches and delivery zones",
    adminFieldAddress: "Address",
    adminFieldCity: "City",
    adminFieldDeliveryFee: "Delivery fee",
    adminFieldHours: "Hours",
    adminFieldPhone: "Phone",
    adminPickupAvailable: "Pickup available",
    adminCreateBranchAction: "Create branch",
    adminSigningIn: "Signing in...",
    adminInvalidPassword: "Invalid admin password",
    adminLoginFailed: "Login failed",
    adminCreatingProduct: "Creating product...",
    adminProductCreated: "Created {name}",
    adminCreatingBranch: "Creating branch...",
    adminBranchCreated: "Created {name}",
    adminSessionExpired: "Your admin session expired. Sign in again.",
    adminStatOrders: "Orders",
    adminStatRevenue: "Revenue",
    adminStatProducts: "Products",
    adminStatBranches: "Branches",
    adminStatActive: "Active",
    adminStatLowStock: "Low stock",
    adminStatOutOfStock: "Out of stock",
    adminNoOrders: "No orders yet. Place one from checkout to populate this dashboard.",
    adminOrderPhone: "Phone",
    adminOrderPayment: "Payment",
    adminOrderTotal: "Total",
    adminOrderBranch: "Branch",
    adminOrderPlaced: "Placed",
    adminOrderPickupTime: "Pickup time",
    adminOrderDeposit: "MoMo deposit",
    adminOrderDeliveryAddress: "Delivery address",
    adminManagerLabel: "Branch manager",
    adminManagerPlaceholder: "Select manager",
    adminStaffLabel: "Assigned staff",
    adminStaffPlaceholder: "Select staff",
    adminAssignTeam: "Assign team",
    adminMarkReady: "Mark ready for pickup",
    adminMarkComplete: "Mark picked up",
    adminFlagNoShow: "Flag no-show",
    adminCustomerRisk: "Customer risk",
    adminCustomerFlags: "{count} no-show flag(s)",
    adminAssignedOrdersOnly: "Staff only see orders assigned to them.",
    adminSaving: "Saving...",
    adminUpdating: "Updating...",
    adminNoProducts: "No products match the current search.",
    adminInStockSuffix: "in stock",
    adminSaveProduct: "Save product",
    adminDeleteProduct: "Delete",
    adminDeleteConfirm: "Delete this product?",
    adminNoBranches: "No branches created yet.",
    adminActiveStatus: "Active",
    adminHiddenStatus: "Hidden",
    adminSaveBranch: "Save branch",
    adminUpdateFailed: "Update failed",
    adminNoOrderDate: "No orders yet",
    adminCreateProductFailed: "Could not create product",
    adminCreateBranchFailed: "Could not create branch",
    adminStatusReceived: "Received",
    adminStatusAccepted: "Accepted",
    adminStatusPreparing: "Preparing",
    adminStatusReady: "Ready for pickup",
    adminStatusCompleted: "Completed",
    adminStatusCancelled: "Cancelled",
    adminStatusDelivered: "Delivered",
  },
  fr: {
    adminPageTitle: "Tableau Market Rep | Simba Supermarket",
    adminTagline: "Tableau market rep",
    adminNavStorefront: "Boutique",
    adminNavBranches: "Branches",
    adminNavCheckout: "Paiement",
    adminLanguageLabel: "Langue",
    adminTheme: "Theme",
    adminAccessEyebrow: "Acces market rep",
    adminLoginTitle: "Connectez-vous pour verifier les commandes",
    adminPasswordLabel: "Mot de passe admin",
    adminPasswordPlaceholder: "Entrez le mot de passe admin",
    adminOpenDashboard: "Ouvrir le tableau",
    adminPasswordNote: "Utilisez la variable d'environnement `SIMBA_ADMIN_PASSWORD`. Pour la demo locale seulement, le mot de passe de secours est `simba-admin-2026`.",
    adminOperationsEyebrow: "Operations market",
    adminDashboardTitle: "Commandes, stock et controles magasin",
    adminRefreshAction: "Actualiser",
    adminLogoutAction: "Se deconnecter",
    adminOrderDeskEyebrow: "Poste commandes",
    adminOrderDeskTitle: "Commandes retrait entrantes",
    adminOrderDeskNote: "Les managers de branche peuvent assigner le staff, puis le staff peut passer a pret pour retrait.",
    adminRoleViewLabel: "Vue du tableau",
    adminRoleManager: "Manager",
    adminRoleStaff: "Staff",
    adminViewerLabel: "Collaborateur actuel",
    adminCatalogEyebrow: "Controle catalogue",
    adminCatalogTitle: "Produits et stock",
    adminNewItemEyebrow: "Nouvel article",
    adminCreateProductTitle: "Creer un produit",
    adminFieldName: "Nom",
    adminFieldCategory: "Categorie",
    adminFieldSubcategory: "Sous-categorie",
    adminFieldPrice: "Prix",
    adminFieldStock: "Stock",
    adminFieldBadge: "Badge",
    adminFieldImagePath: "Chemin d'image",
    adminFieldDescription: "Description",
    adminVisibleInStore: "Visible dans la boutique",
    adminCreateProductAction: "Creer le produit",
    adminSearchProductsPlaceholder: "Rechercher des produits ou categories",
    adminBranchEyebrow: "Controle branches",
    adminBranchTitle: "Branches et zones de livraison",
    adminFieldAddress: "Adresse",
    adminFieldCity: "Ville",
    adminFieldDeliveryFee: "Frais de livraison",
    adminFieldHours: "Horaires",
    adminFieldPhone: "Telephone",
    adminPickupAvailable: "Retrait disponible",
    adminCreateBranchAction: "Creer la branche",
    adminSigningIn: "Connexion...",
    adminInvalidPassword: "Mot de passe admin invalide",
    adminLoginFailed: "Connexion echouee",
    adminCreatingProduct: "Creation du produit...",
    adminProductCreated: "{name} cree",
    adminCreatingBranch: "Creation de la branche...",
    adminBranchCreated: "{name} creee",
    adminSessionExpired: "Votre session admin a expire. Connectez-vous de nouveau.",
    adminStatOrders: "Commandes",
    adminStatRevenue: "Revenu",
    adminStatProducts: "Produits",
    adminStatBranches: "Branches",
    adminStatActive: "Actifs",
    adminStatLowStock: "Stock faible",
    adminStatOutOfStock: "Rupture de stock",
    adminNoOrders: "Aucune commande pour le moment. Passez une commande depuis le checkout pour remplir ce tableau.",
    adminOrderPhone: "Telephone",
    adminOrderPayment: "Paiement",
    adminOrderTotal: "Total",
    adminOrderBranch: "Branche",
    adminOrderPlaced: "Creee le",
    adminOrderPickupTime: "Heure de retrait",
    adminOrderDeposit: "Depot MoMo",
    adminOrderDeliveryAddress: "Adresse de livraison",
    adminManagerLabel: "Manager de branche",
    adminManagerPlaceholder: "Choisir un manager",
    adminStaffLabel: "Staff assigne",
    adminStaffPlaceholder: "Choisir le staff",
    adminAssignTeam: "Assigner l'equipe",
    adminMarkReady: "Marquer pret pour retrait",
    adminMarkComplete: "Marquer retiree",
    adminFlagNoShow: "Signaler absent",
    adminCustomerRisk: "Risque client",
    adminCustomerFlags: "{count} absence(s)",
    adminAssignedOrdersOnly: "Le staff ne voit que les commandes qui lui sont assignees.",
    adminSaving: "Enregistrement...",
    adminUpdating: "Mise a jour...",
    adminNoProducts: "Aucun produit ne correspond a la recherche actuelle.",
    adminInStockSuffix: "en stock",
    adminSaveProduct: "Enregistrer le produit",
    adminDeleteProduct: "Supprimer",
    adminDeleteConfirm: "Supprimer ce produit?",
    adminNoBranches: "Aucune branche creee pour le moment.",
    adminActiveStatus: "Active",
    adminHiddenStatus: "Masquee",
    adminSaveBranch: "Enregistrer la branche",
    adminUpdateFailed: "Mise a jour echouee",
    adminNoOrderDate: "Pas encore de commandes",
    adminCreateProductFailed: "Impossible de creer le produit",
    adminCreateBranchFailed: "Impossible de creer la branche",
    adminStatusReceived: "Recue",
    adminStatusAccepted: "Acceptee",
    adminStatusPreparing: "Preparation",
    adminStatusReady: "Pret pour le retrait",
    adminStatusCompleted: "Terminee",
    adminStatusCancelled: "Annulee",
    adminStatusDelivered: "Livree",
  },
  rw: {
    adminPageTitle: "Dashboard ya Market Rep | Simba Supermarket",
    adminTagline: "Dashboard ya market rep",
    adminNavStorefront: "Iduka",
    adminNavBranches: "Amashami",
    adminNavCheckout: "Checkout",
    adminLanguageLabel: "Ururimi",
    adminTheme: "Insanganyamatsiko",
    adminAccessEyebrow: "Uburyo bwa market rep",
    adminLoginTitle: "Injira urebe ama-order",
    adminPasswordLabel: "Ijambobanga rya admin",
    adminPasswordPlaceholder: "Andika ijambobanga rya admin",
    adminOpenDashboard: "Fungura dashboard",
    adminPasswordNote: "Koresha environment variable `SIMBA_ADMIN_PASSWORD`. Ku demo ya local gusa, ijambobanga risanzwe ni `simba-admin-2026`.",
    adminOperationsEyebrow: "Ibikorwa bya market rep",
    adminDashboardTitle: "Ama-order, stock n'igenzura ry'iduka",
    adminRefreshAction: "Ongera usubize",
    adminLogoutAction: "Sohoka",
    adminOrderDeskEyebrow: "Aho order zicungwa",
    adminOrderDeskTitle: "Ama-order ya pickup yinjiye",
    adminOrderDeskNote: "Abayobozi b'amashami bashobora guha staff, hanyuma staff ikayashyira kuri ready for pickup.",
    adminRoleViewLabel: "Uburyo bwa dashboard",
    adminRoleManager: "Manager",
    adminRoleStaff: "Staff",
    adminViewerLabel: "Umukozi ukoresha",
    adminCatalogEyebrow: "Igenzura rya catalog",
    adminCatalogTitle: "Ibicuruzwa na stock",
    adminNewItemEyebrow: "Igicuruzwa gishya",
    adminCreateProductTitle: "Kora igicuruzwa",
    adminFieldName: "Izina",
    adminFieldCategory: "Category",
    adminFieldSubcategory: "Subcategory",
    adminFieldPrice: "Igiciro",
    adminFieldStock: "Stock",
    adminFieldBadge: "Badge",
    adminFieldImagePath: "Inzira y'ifoto",
    adminFieldDescription: "Ibisobanuro",
    adminVisibleInStore: "Kigaragara mu iduka",
    adminCreateProductAction: "Kora igicuruzwa",
    adminSearchProductsPlaceholder: "Shakisha ibicuruzwa cyangwa category",
    adminBranchEyebrow: "Igenzura ry'amashami",
    adminBranchTitle: "Amashami n'ahoherezwa",
    adminFieldAddress: "Aderesi",
    adminFieldCity: "Umujyi",
    adminFieldDeliveryFee: "Amafaranga yo kohereza",
    adminFieldHours: "Amasaha",
    adminFieldPhone: "Telefone",
    adminPickupAvailable: "Pickup irahari",
    adminCreateBranchAction: "Kora ishami",
    adminSigningIn: "Birimo kwinjira...",
    adminInvalidPassword: "Ijambobanga rya admin si ryo",
    adminLoginFailed: "Kwinjira byanze",
    adminCreatingProduct: "Birimo gukora igicuruzwa...",
    adminProductCreated: "{name} yakozwe",
    adminCreatingBranch: "Birimo gukora ishami...",
    adminBranchCreated: "{name} ryakozwe",
    adminSessionExpired: "Session ya admin yarangiye. Ongera winjire.",
    adminStatOrders: "Ama-order",
    adminStatRevenue: "Amafaranga yinjiye",
    adminStatProducts: "Ibicuruzwa",
    adminStatBranches: "Amashami",
    adminStatActive: "Bikora",
    adminStatLowStock: "Stock iri hasi",
    adminStatOutOfStock: "Ntibirimo",
    adminNoOrders: "Nta ma-order arabonetse. Shyira order muri checkout kugira ngo dashboard yuzure.",
    adminOrderPhone: "Telefone",
    adminOrderPayment: "Kwishyura",
    adminOrderTotal: "Igiteranyo",
    adminOrderBranch: "Ishami",
    adminOrderPlaced: "Byashyizweho",
    adminOrderPickupTime: "Igihe cya pickup",
    adminOrderDeposit: "Ubwizigame bwa MoMo",
    adminOrderDeliveryAddress: "Aho byoherezwa",
    adminManagerLabel: "Umuyobozi w'ishami",
    adminManagerPlaceholder: "Hitamo umuyobozi",
    adminStaffLabel: "Staff yahawe",
    adminStaffPlaceholder: "Hitamo staff",
    adminAssignTeam: "Ha ikipe",
    adminMarkReady: "Shyira kuri ready for pickup",
    adminMarkComplete: "Shyira kuri picked up",
    adminFlagNoShow: "Emeza ko ataje",
    adminCustomerRisk: "Ibyago by'umukiriya",
    adminCustomerFlags: "No-show {count}",
    adminAssignedOrdersOnly: "Staff ibona gusa ama-order yayiherejwe.",
    adminSaving: "Birimo kubika...",
    adminUpdating: "Birimo kuvugurura...",
    adminNoProducts: "Nta bicuruzwa bihuye n'ibyo washakishije.",
    adminInStockSuffix: "biri muri stock",
    adminSaveProduct: "Bika igicuruzwa",
    adminDeleteProduct: "Kuraho",
    adminDeleteConfirm: "Kuraho igicuruzwa?",
    adminNoBranches: "Nta mashami arakorwa.",
    adminActiveStatus: "Rikora",
    adminHiddenStatus: "Rihishe",
    adminSaveBranch: "Bika ishami",
    adminUpdateFailed: "Ivugurura ryanzwe",
    adminNoOrderDate: "Nta ma-order arabonetse",
    adminCreateProductFailed: "Ntibishobotse gukora igicuruzwa",
    adminCreateBranchFailed: "Ntibishobotse gukora ishami",
    adminStatusReceived: "Byakiriwe",
    adminStatusAccepted: "Byemejwe",
    adminStatusPreparing: "Birategurwa",
    adminStatusReady: "Byiteguye gufatwa",
    adminStatusCompleted: "Byarangiye",
    adminStatusCancelled: "Byahagaritswe",
    adminStatusDelivered: "Byagejejwe",
  },
};

document.addEventListener("DOMContentLoaded", initAdminPage);

function initAdminPage() {
  applyTheme();
  applyLanguage();
  window.markPreferencesReady?.();
  bindAdminControls();

  if (adminState.token) {
    loadDashboard();
  }
}

function t(key, variables = {}) {
  const copy = adminTranslations[adminState.language] || adminTranslations.en;
  const template = copy[key] ?? adminTranslations.en[key] ?? key;
  return Object.entries(variables).reduce(
    (message, [name, value]) => message.replaceAll(`{${name}}`, String(value)),
    template
  );
}

function applyLanguage() {
  document.documentElement.lang = adminState.language;
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
  const isDarkTheme = adminState.theme === "dark";
  document.documentElement.classList.toggle("dark", isDarkTheme);
  document.body.classList.toggle("dark", isDarkTheme);
}

function getCurrentStats() {
  return {
    orderCount: adminState.orders.length,
    totalRevenue: adminState.orders.reduce((sum, order) => sum + Number(order.total || 0), 0),
    productCount: adminState.products.length,
    branchCount: adminState.branches.length,
    activeCount: adminState.products.filter((product) => product.active !== false).length,
    lowStockCount: adminState.products.filter((product) => Number(product.stock || 0) > 0 && Number(product.stock || 0) <= 5).length,
    outOfStockCount: adminState.products.filter((product) => Number(product.stock || 0) <= 0).length,
  };
}

function bindAdminControls() {
  const form = document.getElementById("adminLoginForm");
  const refreshButton = document.getElementById("refreshOrders");
  const logoutButton = document.getElementById("logoutAdmin");
  const productSearch = document.getElementById("productSearch");
  const createProductForm = document.getElementById("createProductForm");
  const createBranchForm = document.getElementById("createBranchForm");
  const languageSelect = document.getElementById("languageSelect");
  const themeToggle = document.getElementById("themeToggle");
  const roleViewSelect = document.getElementById("adminRoleView");
  const viewerNameSelect = document.getElementById("adminViewerName");

  if (languageSelect) {
    languageSelect.value = adminState.language;
    languageSelect.addEventListener("change", (event) => {
      adminState.language = event.target.value;
      saveToStorage(ADMIN_LANGUAGE_KEY, adminState.language);
      applyLanguage();
      renderStats(getCurrentStats());
      syncRoleControls();
      renderOrders(adminState.orders);
      renderProducts(adminState.products);
      renderBranches(adminState.branches);
    });
  }

  themeToggle?.addEventListener("click", () => {
    adminState.theme = adminState.theme === "dark" ? "light" : "dark";
    saveToStorage(ADMIN_THEME_KEY, adminState.theme);
    applyTheme();
  });

  if (roleViewSelect) {
    roleViewSelect.value = adminState.roleView;
    roleViewSelect.addEventListener("change", (event) => {
      adminState.roleView = String(event.target.value || "manager");
      saveToStorage(ADMIN_STORAGE_KEYS.roleView, adminState.roleView);
      syncRoleControls();
      renderOrders(adminState.orders);
    });
  }

  if (viewerNameSelect) {
    viewerNameSelect.addEventListener("change", (event) => {
      adminState.viewerName = String(event.target.value || "");
      saveToStorage(ADMIN_STORAGE_KEYS.viewerName, adminState.viewerName);
      renderOrders(adminState.orders);
    });
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = document.getElementById("adminLoginMessage");
    const formData = new FormData(form);
    message.textContent = t("adminSigningIn");

    try {
      const password = String(formData.get("password") || "");

      if (shouldUseDemoAdmin()) {
        if (password !== DEMO_ADMIN_PASSWORD) {
          throw new Error(t("adminInvalidPassword"));
        }

        adminState.token = "demo-admin-token";
        adminState.mode = "demo";
        saveToStorage(ADMIN_STORAGE_KEYS.token, adminState.token);
        saveToStorage(ADMIN_STORAGE_KEYS.mode, adminState.mode);
      } else {
        const response = await fetch(apiUrl("/api/admin/login"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        });

        const payload = await response.json();
        if (!response.ok) {
          throw new Error(payload.error || t("adminLoginFailed"));
        }

        adminState.token = payload.token;
        adminState.mode = "server";
        saveToStorage(ADMIN_STORAGE_KEYS.token, adminState.token);
        saveToStorage(ADMIN_STORAGE_KEYS.mode, adminState.mode);
      }
      message.textContent = "";
      form.reset();
      await loadDashboard();
    } catch (error) {
      message.textContent = error.message;
    }
  });

  refreshButton?.addEventListener("click", () => {
    loadDashboard();
  });

  logoutButton?.addEventListener("click", () => {
    adminState.token = "";
    adminState.mode = "";
    adminState.orders = [];
    adminState.products = [];
    localStorage.removeItem(ADMIN_STORAGE_KEYS.token);
    localStorage.removeItem(ADMIN_STORAGE_KEYS.mode);
    document.getElementById("adminDashboard").classList.add("hidden");
    document.getElementById("adminLoginCard").classList.remove("hidden");
  });

  productSearch?.addEventListener("input", (event) => {
    adminState.productQuery = String(event.target.value || "").trim().toLowerCase();
    renderProducts(adminState.products);
  });

  createProductForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = document.getElementById("createProductMessage");
    const formData = new FormData(createProductForm);
    message.textContent = t("adminCreatingProduct");

    try {
      const payload = {
        name: String(formData.get("name") || ""),
        category: String(formData.get("category") || ""),
        subcategory: String(formData.get("subcategory") || ""),
        price: Number(formData.get("price") || 0),
        stock: Number(formData.get("stock") || 0),
        badge: String(formData.get("badge") || "New"),
        image: String(formData.get("image") || "assets/product-fallback.svg"),
        description: String(formData.get("description") || ""),
        active: formData.get("active") === "on",
      };

      const body = adminState.mode === "demo"
        ? createDemoProduct(payload)
        : await createServerProduct(payload);

      createProductForm.reset();
      createProductForm.elements.badge.value = "New";
      createProductForm.elements.image.value = "assets/product-fallback.svg";
      createProductForm.elements.active.checked = true;
      message.textContent = t("adminProductCreated", { name: body.product.name });
      await loadDashboard();
    } catch (error) {
      message.textContent = error.message;
    }
  });

  createBranchForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = document.getElementById("createBranchMessage");
    const formData = new FormData(createBranchForm);
    message.textContent = t("adminCreatingBranch");

    try {
      const payload = {
        name: String(formData.get("name") || ""),
        address: String(formData.get("address") || ""),
        city: String(formData.get("city") || ""),
        deliveryFee: Number(formData.get("deliveryFee") || 0),
        hours: String(formData.get("hours") || ""),
        phone: String(formData.get("phone") || ""),
        pickup: formData.get("pickup") === "on",
      };
      const body = adminState.mode === "demo"
        ? createDemoBranch(payload)
        : await createServerBranch(payload);
      createBranchForm.reset();
      createBranchForm.elements.deliveryFee.value = "2000";
      createBranchForm.elements.hours.value = "Open daily";
      createBranchForm.elements.pickup.checked = true;
      message.textContent = t("adminBranchCreated", { name: body.branch.name });
      await loadDashboard();
    } catch (error) {
      message.textContent = error.message;
    }
  });
}

async function loadDashboard() {
  const loginCard = document.getElementById("adminLoginCard");
  const dashboard = document.getElementById("adminDashboard");
  const ordersContainer = document.getElementById("adminOrders");

  try {
    if (adminState.mode === "demo") {
      const demoData = loadDemoDashboardData();
      adminState.orders = demoData.orders;
      adminState.products = demoData.products;
      adminState.branches = demoData.branches;

      syncRoleControls();
      renderStats(demoData.stats);
      renderOrders(adminState.orders);
      renderProducts(adminState.products);
      renderBranches(adminState.branches);

      loginCard.classList.add("hidden");
      dashboard.classList.remove("hidden");
      return;
    }

    const [statsResponse, ordersResponse, productsResponse, branchesResponse] = await Promise.all([
      fetch(apiUrl("/api/admin/stats"), { headers: getAuthHeaders() }),
      fetch(apiUrl("/api/admin/orders"), { headers: getAuthHeaders() }),
      fetch(apiUrl("/api/admin/products"), { headers: getAuthHeaders() }),
      fetch(apiUrl("/api/admin/branches"), { headers: getAuthHeaders() }),
    ]);

    if ([statsResponse, ordersResponse, productsResponse, branchesResponse].some((response) => response.status === 401)) {
      throw new Error(t("adminSessionExpired"));
    }

    const statsPayload = await statsResponse.json();
    const ordersPayload = await ordersResponse.json();
    const productsPayload = await productsResponse.json();
    const branchesPayload = await branchesResponse.json();

    adminState.orders = ordersPayload.orders || [];
    adminState.products = productsPayload.products || [];
    adminState.branches = branchesPayload.branches || [];

    syncRoleControls();
    renderStats(statsPayload.stats);
    renderOrders(adminState.orders);
    renderProducts(adminState.products);
    renderBranches(adminState.branches);

    loginCard.classList.add("hidden");
    dashboard.classList.remove("hidden");
  } catch (error) {
    ordersContainer.innerHTML = `<div class="state-panel"><p>${error.message}</p></div>`;
    dashboard.classList.remove("hidden");
    loginCard.classList.add("hidden");
    if (error.message.includes("expired")) {
      adminState.token = "";
      adminState.mode = "";
      localStorage.removeItem(ADMIN_STORAGE_KEYS.token);
      localStorage.removeItem(ADMIN_STORAGE_KEYS.mode);
      loginCard.classList.remove("hidden");
    }
  }
}

function renderStats(stats = {}) {
  const container = document.getElementById("adminStats");
  const cards = [
    { label: t("adminStatOrders"), value: String(stats.orderCount || 0) },
    { label: t("adminStatRevenue"), value: formatCurrency(stats.totalRevenue || 0) },
    { label: t("adminStatProducts"), value: String(stats.productCount || 0) },
    { label: t("adminStatBranches"), value: String(stats.branchCount || 0) },
    { label: t("adminStatActive"), value: String(stats.activeCount || 0) },
    { label: t("adminStatLowStock"), value: String(stats.lowStockCount || 0) },
    { label: t("adminStatOutOfStock"), value: String(stats.outOfStockCount || 0) },
  ];

  container.innerHTML = cards
    .map(
      (card) => `
        <article class="summary-box admin-stat-card">
          <span>${card.label}</span>
          <strong>${card.value}</strong>
        </article>
      `
    )
    .join("");
}

function renderOrders(orders) {
  const container = document.getElementById("adminOrders");
  const visibleOrders = orders.filter((order) => {
    if (adminState.roleView !== "staff") return true;
    return !adminState.viewerName || order.staffName === adminState.viewerName;
  });

  if (!visibleOrders.length) {
    container.innerHTML = `<div class="state-panel"><p>${t("adminNoOrders")}</p></div>`;
    return;
  }

  container.innerHTML = `
    ${adminState.roleView === "staff" ? `<p class="toolbar-note">${t("adminAssignedOrdersOnly")}</p>` : ""}
    ${visibleOrders
    .map(
      (order) => `
        <article class="showcase-panel admin-order-card">
          <div class="toolbar-header compact-header">
            <div>
              <p class="eyebrow">${order.id}</p>
              <h2>${order.customer.name}</h2>
            </div>
            <select class="admin-status-select" data-order-status="${order.id}">
              ${ORDER_STATUSES.map(
                (status) => `<option value="${status}" ${status === order.status ? "selected" : ""}>${formatOrderStatus(status)}</option>`
              ).join("")}
            </select>
          </div>
          <div class="admin-order-grid">
            <div class="summary-box">
              <span>${t("adminOrderPhone")}</span>
              <strong>${order.customer.phone}</strong>
            </div>
            <div class="summary-box">
              <span>${t("adminOrderPayment")}</span>
              <strong>${order.payment.network}</strong>
            </div>
            <div class="summary-box">
              <span>${t("adminOrderTotal")}</span>
              <strong>${formatCurrency(order.total)}</strong>
            </div>
            <div class="summary-box">
              <span>${t("adminOrderBranch")}</span>
              <strong>${order.branch?.name || order.branchId || "-"}</strong>
            </div>
            <div class="summary-box">
              <span>${t("adminOrderPlaced")}</span>
              <strong>${formatDate(order.createdAt)}</strong>
            </div>
            <div class="summary-box">
              <span>${t("adminOrderPickupTime")}</span>
              <strong>${order.fulfilment?.pickupTime || "-"}</strong>
            </div>
            <div class="summary-box">
              <span>${t("adminOrderDeposit")}</span>
              <strong>${formatCurrency(order.payment?.deposit || 0)}</strong>
            </div>
            <div class="summary-box">
              <span>${t("adminCustomerRisk")}</span>
              <strong>${t("adminCustomerFlags", { count: Number(order.customer?.noShowCount || 0) })}</strong>
            </div>
          </div>
          <div class="summary-box">
            <span>${t("adminOrderDeliveryAddress")}</span>
            <strong>${order.customer.address}</strong>
          </div>
          <div class="admin-product-grid ${adminState.roleView === "staff" ? "hidden" : ""}">
            <label class="field">
              <span>${t("adminManagerLabel")}</span>
              <select data-order-field="managerName" data-order-id="${order.id}">
                <option value="">${t("adminManagerPlaceholder")}</option>
                ${MANAGER_OPTIONS.map(
                  (name) => `<option value="${name}" ${order.managerName === name ? "selected" : ""}>${name}</option>`
                ).join("")}
              </select>
            </label>
            <label class="field">
              <span>${t("adminStaffLabel")}</span>
              <select data-order-field="staffName" data-order-id="${order.id}">
                <option value="">${t("adminStaffPlaceholder")}</option>
                ${STAFF_OPTIONS.map(
                  (name) => `<option value="${name}" ${order.staffName === name ? "selected" : ""}>${name}</option>`
                ).join("")}
              </select>
            </label>
          </div>
          <div class="admin-product-actions">
            ${adminState.roleView === "staff" ? "" : `<button class="ghost-button" type="button" data-assign-order="${order.id}">${t("adminAssignTeam")}</button>`}
            <button class="primary-button" type="button" data-ready-order="${order.id}">${t("adminMarkReady")}</button>
            <button class="ghost-button" type="button" data-complete-order="${order.id}">${t("adminMarkComplete")}</button>
            <button class="ghost-button" type="button" data-noshow-order="${order.id}" ${order.noShowFlagged ? "disabled" : ""}>${t("adminFlagNoShow")}</button>
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
        </article>
      `
    )
    .join("")}
  `;

  container.querySelectorAll("[data-order-status]").forEach((select) => {
    select.addEventListener("change", async () => {
      await patchAdmin(apiUrl(`/api/admin/orders/${select.dataset.orderStatus}`), {
        status: select.value,
        id: select.dataset.orderStatus,
      });
      await loadDashboard();
    });
  });

  container.querySelectorAll("[data-assign-order]").forEach((button) => {
    button.addEventListener("click", async () => {
      const orderId = button.dataset.assignOrder;
      button.disabled = true;
      button.textContent = t("adminSaving");
      try {
        await patchAdmin(apiUrl(`/api/admin/orders/${orderId}`), {
          id: orderId,
          managerName: getOrderFieldValue(orderId, "managerName"),
          staffName: getOrderFieldValue(orderId, "staffName"),
          status: getOrderStatusValue(orderId),
        });
        await loadDashboard();
      } finally {
        button.disabled = false;
        button.textContent = t("adminAssignTeam");
      }
    });
  });

  container.querySelectorAll("[data-ready-order]").forEach((button) => {
    button.addEventListener("click", async () => {
      const orderId = button.dataset.readyOrder;
      button.disabled = true;
      button.textContent = t("adminUpdating");
      try {
        await patchAdmin(apiUrl(`/api/admin/orders/${orderId}`), {
          id: orderId,
          managerName: getOrderFieldValue(orderId, "managerName"),
          staffName: getOrderFieldValue(orderId, "staffName"),
          status: "ready-for-pickup",
        });
        await loadDashboard();
      } finally {
        button.disabled = false;
        button.textContent = t("adminMarkReady");
      }
    });
  });

  container.querySelectorAll("[data-complete-order]").forEach((button) => {
    button.addEventListener("click", async () => {
      const orderId = button.dataset.completeOrder;
      button.disabled = true;
      button.textContent = t("adminUpdating");
      try {
        await patchAdmin(apiUrl(`/api/admin/orders/${orderId}`), {
          id: orderId,
          managerName: getOrderFieldValue(orderId, "managerName"),
          staffName: getOrderFieldValue(orderId, "staffName"),
          status: "completed",
        });
        await loadDashboard();
      } finally {
        button.disabled = false;
        button.textContent = t("adminMarkComplete");
      }
    });
  });

  container.querySelectorAll("[data-noshow-order]").forEach((button) => {
    button.addEventListener("click", async () => {
      const orderId = button.dataset.noshowOrder;
      button.disabled = true;
      button.textContent = t("adminUpdating");
      try {
        await patchAdmin(apiUrl(`/api/admin/orders/${orderId}`), {
          id: orderId,
          managerName: getOrderFieldValue(orderId, "managerName"),
          staffName: getOrderFieldValue(orderId, "staffName"),
          status: "cancelled",
          noShowFlagged: true,
        });
        await loadDashboard();
      } finally {
        button.disabled = false;
        button.textContent = t("adminFlagNoShow");
      }
    });
  });

  syncRoleControls();
}

function syncRoleControls() {
  const roleViewSelect = document.getElementById("adminRoleView");
  const viewerNameSelect = document.getElementById("adminViewerName");
  if (roleViewSelect) {
    roleViewSelect.value = adminState.roleView;
  }
  if (!viewerNameSelect) return;

  const options = adminState.roleView === "staff" ? STAFF_OPTIONS : MANAGER_OPTIONS;
  if (!options.includes(adminState.viewerName)) {
    adminState.viewerName = options[0] || "";
    saveToStorage(ADMIN_STORAGE_KEYS.viewerName, adminState.viewerName);
  }

  viewerNameSelect.innerHTML = options
    .map((name) => `<option value="${name}" ${name === adminState.viewerName ? "selected" : ""}>${name}</option>`)
    .join("");
}

function getOrderFieldValue(orderId, field) {
  return document.querySelector(`[data-order-field="${field}"][data-order-id="${orderId}"]`)?.value || "";
}

function getOrderStatusValue(orderId) {
  return document.querySelector(`[data-order-status="${orderId}"]`)?.value || "received";
}

function renderProducts(products) {
  const container = document.getElementById("adminProducts");
  const filteredProducts = products.filter((product) => {
    const haystack = `${product.name} ${product.category} ${product.subcategory} ${product.badge}`.toLowerCase();
    return haystack.includes(adminState.productQuery);
  });

  if (!filteredProducts.length) {
    container.innerHTML = `<div class="state-panel"><p>${t("adminNoProducts")}</p></div>`;
    return;
  }

  const branchFields = (product) =>
    adminState.branches
      .map(
        (branch) => `
          <label class="field">
            <span>${branch.name}</span>
            <input
              type="number"
              min="0"
              step="1"
              value="${Number(product.branchStock?.[branch.id] || 0)}"
              data-product-branch-stock="${branch.id}"
              data-product-id="${product.id}"
            />
          </label>
        `
      )
      .join("");

  container.innerHTML = filteredProducts
    .slice(0, 80)
    .map(
      (product) => `
        <article class="showcase-panel admin-product-card">
          <div class="admin-product-head">
            <div>
              <p class="eyebrow">${product.category}</p>
              <h3>${product.name}</h3>
            </div>
            <span class="chip ${product.stock <= 0 ? "chip-warning" : ""}">${product.stock} ${t("adminInStockSuffix")}</span>
          </div>
          <div class="admin-product-grid">
            <label class="field">
              <span>${t("adminFieldPrice")}</span>
              <input type="number" min="0" step="100" value="${product.price}" data-product-field="price" data-product-id="${product.id}" />
            </label>
            <label class="field">
              <span>${t("adminFieldStock")}</span>
              <input type="number" min="0" step="1" value="${product.stock}" data-product-field="stock" data-product-id="${product.id}" />
            </label>
            <label class="field">
              <span>${t("adminFieldBadge")}</span>
              <input type="text" value="${escapeHtml(product.badge)}" data-product-field="badge" data-product-id="${product.id}" />
            </label>
          </div>
          <label class="field">
            <span>${t("adminFieldDescription")}</span>
            <textarea rows="3" data-product-field="description" data-product-id="${product.id}">${escapeHtml(
              product.description
            )}</textarea>
          </label>
          <div class="admin-product-grid">
            ${branchFields(product)}
          </div>
          <div class="admin-product-actions">
            <label class="admin-toggle">
              <input type="checkbox" data-product-field="active" data-product-id="${product.id}" ${product.active ? "checked" : ""} />
              <span>${t("adminVisibleInStore")}</span>
            </label>
            <button class="primary-button" type="button" data-save-product="${product.id}">${t("adminSaveProduct")}</button>
            <button class="ghost-button" type="button" data-delete-product="${product.id}">${t("adminDeleteProduct")}</button>
          </div>
        </article>
      `
    )
    .join("");

  container.querySelectorAll("[data-save-product]").forEach((button) => {
    button.addEventListener("click", async () => {
      const productId = button.dataset.saveProduct;
      const payload = gatherProductPayload(productId);
      button.disabled = true;
      button.textContent = t("adminSaving");
      try {
        await patchAdmin(apiUrl(`/api/admin/products/${productId}`), { ...payload, id: productId });
        await loadDashboard();
      } finally {
        button.disabled = false;
        button.textContent = t("adminSaveProduct");
      }
    });
  });

  container.querySelectorAll("[data-delete-product]").forEach((button) => {
    button.addEventListener("click", async () => {
      const productId = button.dataset.deleteProduct;
      if (!confirm(t("adminDeleteConfirm"))) return;
      button.disabled = true;
      button.textContent = t("adminSaving");
      try {
        const products = adminState.products.filter(p => p.id !== productId);
        await patchAdmin(apiUrl(`/api/admin/products/${productId}`), { active: false });
        await loadDashboard();
      } finally {
        button.disabled = false;
        button.textContent = t("adminDeleteProduct");
      }
    });
  });

}

function gatherProductPayload(productId) {
  const getNode = (field) =>
    document.querySelector(`[data-product-field="${field}"][data-product-id="${productId}"]`);

  const branchStock = Object.fromEntries(
    adminState.branches.map((branch) => {
      const field = document.querySelector(`[data-product-branch-stock="${branch.id}"][data-product-id="${productId}"]`);
      return [branch.id, Number(field?.value || 0)];
    })
  );

  return {
    price: Number(getNode("price").value),
    stock: Number(getNode("stock").value),
    badge: getNode("badge").value,
    description: getNode("description").value,
    active: getNode("active").checked,
    branchStock,
  };
}

function renderBranches(branches) {
  const container = document.getElementById("adminBranches");
  if (!container) return;

  if (!branches.length) {
    container.innerHTML = `<div class="state-panel"><p>${t("adminNoBranches")}</p></div>`;
    return;
  }

  container.innerHTML = branches
    .map(
      (branch) => `
        <article class="showcase-panel admin-product-card">
          <div class="admin-product-head">
            <div>
              <p class="eyebrow">${branch.city}</p>
              <h3>${branch.name}</h3>
            </div>
            <span class="chip">${branch.active ? t("adminActiveStatus") : t("adminHiddenStatus")}</span>
          </div>
          <div class="admin-product-grid">
            <label class="field">
              <span>${t("adminFieldName")}</span>
              <input type="text" value="${escapeHtml(branch.name)}" data-branch-field="name" data-branch-id="${branch.id}" />
            </label>
            <label class="field">
              <span>${t("adminFieldCity")}</span>
              <input type="text" value="${escapeHtml(branch.city)}" data-branch-field="city" data-branch-id="${branch.id}" />
            </label>
            <label class="field">
              <span>${t("adminFieldPhone")}</span>
              <input type="text" value="${escapeHtml(branch.phone || "")}" data-branch-field="phone" data-branch-id="${branch.id}" />
            </label>
            <label class="field">
              <span>${t("adminFieldHours")}</span>
              <input type="text" value="${escapeHtml(branch.hours || "")}" data-branch-field="hours" data-branch-id="${branch.id}" />
            </label>
            <label class="field">
              <span>${t("adminFieldDeliveryFee")}</span>
              <input type="number" min="0" step="100" value="${Number(branch.deliveryFee || 0)}" data-branch-field="deliveryFee" data-branch-id="${branch.id}" />
            </label>
          </div>
          <label class="field">
            <span>${t("adminFieldAddress")}</span>
            <textarea rows="2" data-branch-field="address" data-branch-id="${branch.id}">${escapeHtml(branch.address)}</textarea>
          </label>
          <div class="admin-product-actions">
            <label class="admin-toggle">
              <input type="checkbox" data-branch-field="pickup" data-branch-id="${branch.id}" ${branch.pickup ? "checked" : ""} />
              <span>${t("adminPickupAvailable")}</span>
            </label>
            <button class="primary-button" type="button" data-save-branch="${branch.id}">${t("adminSaveBranch")}</button>
          </div>
        </article>
      `
    )
    .join("");

  container.querySelectorAll("[data-save-branch]").forEach((button) => {
    button.addEventListener("click", async () => {
      const branchId = button.dataset.saveBranch;
      button.disabled = true;
      button.textContent = t("adminSaving");
      try {
        await patchAdmin(apiUrl(`/api/admin/branches/${branchId}`), {
          ...gatherBranchPayload(branchId),
          id: branchId,
        });
        await loadDashboard();
      } finally {
        button.disabled = false;
        button.textContent = t("adminSaveBranch");
      }
    });
  });
}

function gatherBranchPayload(branchId) {
  const getNode = (field) =>
    document.querySelector(`[data-branch-field="${field}"][data-branch-id="${branchId}"]`);

  return {
    name: getNode("name").value,
    city: getNode("city").value,
    phone: getNode("phone").value,
    hours: getNode("hours").value,
    deliveryFee: Number(getNode("deliveryFee").value),
    address: getNode("address").value,
    pickup: getNode("pickup").checked,
  };
}

async function patchAdmin(url, payload) {
  if (adminState.mode === "demo") {
    return patchDemo(payload);
  }

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      ...getAuthHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.error || t("adminUpdateFailed"));
  }

  return body;
}

function getAuthHeaders() {
  return {
    Authorization: `Bearer ${adminState.token}`,
  };
}

function formatCurrency(value) {
  return `RWF ${new Intl.NumberFormat("en-RW", {
    maximumFractionDigits: 0,
  }).format(value)}`;
}

function formatDate(value) {
  if (!value) return t("adminNoOrderDate");
  return new Intl.DateTimeFormat("en-RW", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
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

function formatOrderStatus(status) {
  const statusMap = {
    received: "adminStatusReceived",
    accepted: "adminStatusAccepted",
    preparing: "adminStatusPreparing",
    "ready-for-pickup": "adminStatusReady",
    completed: "adminStatusCompleted",
    cancelled: "adminStatusCancelled",
    delivered: "adminStatusDelivered",
  };

  return t(statusMap[String(status || "").trim().toLowerCase()] || status);
}

function apiUrl(path) {
  const baseUrl = window.SIMBA_CONFIG?.API_BASE_URL?.trim();
  return baseUrl ? `${baseUrl}${path}` : path;
}

function shouldUseDemoAdmin() {
  return !window.SIMBA_CONFIG?.API_BASE_URL?.trim();
}

function loadDemoDashboardData() {
  const orders = loadFromStorage(CUSTOMER_ORDER_STORAGE_KEY, []);
  const products = loadDemoProducts();
  const branches = loadDemoBranches();

  return {
    orders,
    products,
    branches,
    stats: {
      orderCount: orders.length,
      totalRevenue: orders.reduce((sum, order) => sum + Number(order.total || 0), 0),
      productCount: products.length,
      branchCount: branches.length,
      activeCount: products.filter((product) => product.active !== false).length,
      lowStockCount: products.filter((product) => Number(product.stock || 0) > 0 && Number(product.stock || 0) <= 5).length,
      outOfStockCount: products.filter((product) => Number(product.stock || 0) <= 0).length,
    },
  };
}

function loadDemoProducts() {
  const stored = loadFromStorage(ADMIN_STORAGE_KEYS.demoProducts, null);
  if (Array.isArray(stored) && stored.length) return stored;

  const source = Array.isArray(window.SIMBA_PRODUCTS) ? window.SIMBA_PRODUCTS : [];
  const branches = loadDemoBranches();
  const products = source.map((product) => {
    const branchStock = product.branchStock && typeof product.branchStock === "object"
      ? product.branchStock
      : Object.fromEntries(
          branches.map((branch, index) => [
            branch.id,
            Math.max(0, Math.floor(Number(product.stock || 25) / Math.max(branches.length, 1)) + (index === 0 ? 1 : 0)),
          ])
        );
    const stock = Object.values(branchStock).reduce((sum, value) => sum + Number(value || 0), 0);
    return {
      ...product,
      branchStock,
      stock,
      active: product.active !== false,
    };
  });

  saveToStorage(ADMIN_STORAGE_KEYS.demoProducts, products);
  return products;
}

function saveDemoProducts(products) {
  saveToStorage(ADMIN_STORAGE_KEYS.demoProducts, products);
}

function loadDemoBranches() {
  const stored = loadFromStorage(ADMIN_STORAGE_KEYS.demoBranches, null);
  if (Array.isArray(stored) && stored.length) return stored;

  const branches = window.SIMBA_BRANCHES?.getBranches() || [];
  saveToStorage(ADMIN_STORAGE_KEYS.demoBranches, branches);
  return branches;
}

function saveDemoBranches(branches) {
  saveToStorage(ADMIN_STORAGE_KEYS.demoBranches, branches);
}

function createDemoProduct(payload) {
  const products = loadDemoProducts();
  const branches = loadDemoBranches();
  const branchStock = Object.fromEntries(branches.map((branch) => [branch.id, 0]));
  const product = {
    id: String(Date.now()),
    ...payload,
    branchStock,
    featured: false,
    updatedAt: new Date().toISOString(),
  };
  products.unshift(product);
  saveDemoProducts(products);
  return { product };
}

function createDemoBranch(payload) {
  const branches = loadDemoBranches();
  const branch = {
    id: payload.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    ...payload,
    active: true,
  };
  branches.unshift(branch);
  saveDemoBranches(branches);

  const products = loadDemoProducts().map((product) => ({
    ...product,
    branchStock: {
      ...(product.branchStock || {}),
      [branch.id]: 0,
    },
  }));
  saveDemoProducts(products);
  return { branch };
}

function patchDemo(payload) {
  if (payload.status && payload.id) {
    const orders = loadFromStorage(CUSTOMER_ORDER_STORAGE_KEY, []).map((order) =>
      order.id === payload.id
        ? {
            ...order,
            status: payload.status,
            managerName: payload.managerName !== undefined ? payload.managerName : order.managerName,
            staffName: payload.staffName !== undefined ? payload.staffName : order.staffName,
          }
        : order
    );
    saveToStorage(CUSTOMER_ORDER_STORAGE_KEY, orders);
    return { ok: true };
  }

  if (payload.branchStock && payload.id) {
    const products = loadDemoProducts().map((product) => {
      if (product.id !== payload.id) return product;
      const branchStock = payload.branchStock;
      return {
        ...product,
        ...payload,
        branchStock,
        stock: Object.values(branchStock).reduce((sum, value) => sum + Number(value || 0), 0),
      };
    });
    saveDemoProducts(products);
    return { ok: true };
  }

  if (payload.address && payload.id) {
    const branches = loadDemoBranches().map((branch) =>
      branch.id === payload.id ? { ...branch, ...payload } : branch
    );
    saveDemoBranches(branches);
    return { ok: true };
  }

  return { ok: true };
}

async function createServerProduct(payload) {
  const response = await fetch(apiUrl("/api/admin/products"), {
    method: "POST",
    headers: {
      ...getAuthHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  if (!response.ok) throw new Error(body.error || t("adminCreateProductFailed"));
  return body;
}

async function createServerBranch(payload) {
  const response = await fetch(apiUrl("/api/admin/branches"), {
    method: "POST",
    headers: {
      ...getAuthHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  if (!response.ok) throw new Error(body.error || t("adminCreateBranchFailed"));
  return body;
}
