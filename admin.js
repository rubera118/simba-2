const ADMIN_STORAGE_KEYS = {
  token: "simba-admin-token",
};

const adminState = {
  token: loadFromStorage(ADMIN_STORAGE_KEYS.token, ""),
  orders: [],
  products: [],
  branches: [],
  productQuery: "",
};

const ORDER_STATUSES = ["received", "packed", "out-for-delivery", "delivered", "cancelled"];

document.addEventListener("DOMContentLoaded", initAdminPage);

function initAdminPage() {
  bindAdminControls();

  if (adminState.token) {
    loadDashboard();
  }
}

function bindAdminControls() {
  const form = document.getElementById("adminLoginForm");
  const refreshButton = document.getElementById("refreshOrders");
  const logoutButton = document.getElementById("logoutAdmin");
  const productSearch = document.getElementById("productSearch");
  const createProductForm = document.getElementById("createProductForm");
  const createBranchForm = document.getElementById("createBranchForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = document.getElementById("adminLoginMessage");
    const formData = new FormData(form);
    message.textContent = "Signing in...";

    try {
      const response = await fetch(apiUrl("/api/admin/login"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: String(formData.get("password") || ""),
        }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Login failed");
      }

      adminState.token = payload.token;
      saveToStorage(ADMIN_STORAGE_KEYS.token, adminState.token);
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
    adminState.orders = [];
    adminState.products = [];
    localStorage.removeItem(ADMIN_STORAGE_KEYS.token);
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
    message.textContent = "Creating product...";

    try {
      const response = await fetch(apiUrl("/api/admin/products"), {
        method: "POST",
        headers: {
          ...getAuthHeaders(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: String(formData.get("name") || ""),
          category: String(formData.get("category") || ""),
          subcategory: String(formData.get("subcategory") || ""),
          price: Number(formData.get("price") || 0),
          stock: Number(formData.get("stock") || 0),
          badge: String(formData.get("badge") || "New"),
          image: String(formData.get("image") || "assets/product-fallback.svg"),
          description: String(formData.get("description") || ""),
          active: formData.get("active") === "on",
        }),
      });

      const body = await response.json();
      if (!response.ok) {
        throw new Error(body.error || "Could not create product");
      }

      createProductForm.reset();
      createProductForm.elements.badge.value = "New";
      createProductForm.elements.image.value = "assets/product-fallback.svg";
      createProductForm.elements.active.checked = true;
      message.textContent = `Created ${body.product.name}`;
      await loadDashboard();
    } catch (error) {
      message.textContent = error.message;
    }
  });

  createBranchForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = document.getElementById("createBranchMessage");
    const formData = new FormData(createBranchForm);
    message.textContent = "Creating branch...";

    try {
      const response = await fetch(apiUrl("/api/admin/branches"), {
        method: "POST",
        headers: {
          ...getAuthHeaders(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: String(formData.get("name") || ""),
          address: String(formData.get("address") || ""),
          city: String(formData.get("city") || ""),
          deliveryFee: Number(formData.get("deliveryFee") || 0),
          hours: String(formData.get("hours") || ""),
          phone: String(formData.get("phone") || ""),
          pickup: formData.get("pickup") === "on",
        }),
      });

      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Could not create branch");
      createBranchForm.reset();
      createBranchForm.elements.deliveryFee.value = "2000";
      createBranchForm.elements.hours.value = "Open daily";
      createBranchForm.elements.pickup.checked = true;
      message.textContent = `Created ${body.branch.name}`;
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
    const [statsResponse, ordersResponse, productsResponse, branchesResponse] = await Promise.all([
      fetch(apiUrl("/api/admin/stats"), { headers: getAuthHeaders() }),
      fetch(apiUrl("/api/admin/orders"), { headers: getAuthHeaders() }),
      fetch(apiUrl("/api/admin/products"), { headers: getAuthHeaders() }),
      fetch(apiUrl("/api/admin/branches"), { headers: getAuthHeaders() }),
    ]);

    if ([statsResponse, ordersResponse, productsResponse, branchesResponse].some((response) => response.status === 401)) {
      throw new Error("Your admin session expired. Sign in again.");
    }

    const statsPayload = await statsResponse.json();
    const ordersPayload = await ordersResponse.json();
    const productsPayload = await productsResponse.json();
    const branchesPayload = await branchesResponse.json();

    adminState.orders = ordersPayload.orders || [];
    adminState.products = productsPayload.products || [];
    adminState.branches = branchesPayload.branches || [];

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
      localStorage.removeItem(ADMIN_STORAGE_KEYS.token);
      loginCard.classList.remove("hidden");
    }
  }
}

function renderStats(stats = {}) {
  const container = document.getElementById("adminStats");
  const cards = [
    { label: "Orders", value: String(stats.orderCount || 0) },
    { label: "Revenue", value: formatCurrency(stats.totalRevenue || 0) },
    { label: "Products", value: String(stats.productCount || 0) },
    { label: "Branches", value: String(stats.branchCount || 0) },
    { label: "Active", value: String(stats.activeCount || 0) },
    { label: "Low stock", value: String(stats.lowStockCount || 0) },
    { label: "Out of stock", value: String(stats.outOfStockCount || 0) },
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

  if (!orders.length) {
    container.innerHTML = `<div class="state-panel"><p>No orders yet. Place one from checkout to populate this dashboard.</p></div>`;
    return;
  }

  container.innerHTML = orders
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
                (status) => `<option value="${status}" ${status === order.status ? "selected" : ""}>${status}</option>`
              ).join("")}
            </select>
          </div>
          <div class="admin-order-grid">
            <div class="summary-box">
              <span>Phone</span>
              <strong>${order.customer.phone}</strong>
            </div>
            <div class="summary-box">
              <span>Payment</span>
              <strong>${order.payment.network}</strong>
            </div>
            <div class="summary-box">
              <span>Total</span>
              <strong>${formatCurrency(order.total)}</strong>
            </div>
            <div class="summary-box">
              <span>Branch</span>
              <strong>${order.branch?.name || order.branchId || "Not set"}</strong>
            </div>
            <div class="summary-box">
              <span>Placed</span>
              <strong>${formatDate(order.createdAt)}</strong>
            </div>
          </div>
          <div class="summary-box">
            <span>Delivery address</span>
            <strong>${order.customer.address}</strong>
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
    .join("");

  container.querySelectorAll("[data-order-status]").forEach((select) => {
    select.addEventListener("change", async () => {
      await patchAdmin(apiUrl(`/api/admin/orders/${select.dataset.orderStatus}`), { status: select.value });
      await loadDashboard();
    });
  });
}

function renderProducts(products) {
  const container = document.getElementById("adminProducts");
  const filteredProducts = products.filter((product) => {
    const haystack = `${product.name} ${product.category} ${product.subcategory} ${product.badge}`.toLowerCase();
    return haystack.includes(adminState.productQuery);
  });

  if (!filteredProducts.length) {
    container.innerHTML = `<div class="state-panel"><p>No products match the current search.</p></div>`;
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
            <span class="chip ${product.stock <= 0 ? "chip-warning" : ""}">${product.stock} in stock</span>
          </div>
          <div class="admin-product-grid">
            <label class="field">
              <span>Price</span>
              <input type="number" min="0" step="100" value="${product.price}" data-product-field="price" data-product-id="${product.id}" />
            </label>
            <label class="field">
              <span>Stock</span>
              <input type="number" min="0" step="1" value="${product.stock}" data-product-field="stock" data-product-id="${product.id}" />
            </label>
            <label class="field">
              <span>Badge</span>
              <input type="text" value="${escapeHtml(product.badge)}" data-product-field="badge" data-product-id="${product.id}" />
            </label>
          </div>
          <label class="field">
            <span>Description</span>
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
              <span>Visible in store</span>
            </label>
            <button class="primary-button" type="button" data-save-product="${product.id}">Save product</button>
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
      button.textContent = "Saving...";
      try {
        await patchAdmin(apiUrl(`/api/admin/products/${productId}`), payload);
        await loadDashboard();
      } finally {
        button.disabled = false;
        button.textContent = "Save product";
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
    container.innerHTML = `<div class="state-panel"><p>No branches created yet.</p></div>`;
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
            <span class="chip">${branch.active ? "Active" : "Hidden"}</span>
          </div>
          <div class="admin-product-grid">
            <label class="field">
              <span>Name</span>
              <input type="text" value="${escapeHtml(branch.name)}" data-branch-field="name" data-branch-id="${branch.id}" />
            </label>
            <label class="field">
              <span>City</span>
              <input type="text" value="${escapeHtml(branch.city)}" data-branch-field="city" data-branch-id="${branch.id}" />
            </label>
            <label class="field">
              <span>Phone</span>
              <input type="text" value="${escapeHtml(branch.phone || "")}" data-branch-field="phone" data-branch-id="${branch.id}" />
            </label>
            <label class="field">
              <span>Hours</span>
              <input type="text" value="${escapeHtml(branch.hours || "")}" data-branch-field="hours" data-branch-id="${branch.id}" />
            </label>
            <label class="field">
              <span>Delivery fee</span>
              <input type="number" min="0" step="100" value="${Number(branch.deliveryFee || 0)}" data-branch-field="deliveryFee" data-branch-id="${branch.id}" />
            </label>
          </div>
          <label class="field">
            <span>Address</span>
            <textarea rows="2" data-branch-field="address" data-branch-id="${branch.id}">${escapeHtml(branch.address)}</textarea>
          </label>
          <div class="admin-product-actions">
            <label class="admin-toggle">
              <input type="checkbox" data-branch-field="pickup" data-branch-id="${branch.id}" ${branch.pickup ? "checked" : ""} />
              <span>Pickup available</span>
            </label>
            <button class="primary-button" type="button" data-save-branch="${branch.id}">Save branch</button>
          </div>
        </article>
      `
    )
    .join("");

  container.querySelectorAll("[data-save-branch]").forEach((button) => {
    button.addEventListener("click", async () => {
      const branchId = button.dataset.saveBranch;
      button.disabled = true;
      button.textContent = "Saving...";
      try {
        await patchAdmin(apiUrl(`/api/admin/branches/${branchId}`), gatherBranchPayload(branchId));
        await loadDashboard();
      } finally {
        button.disabled = false;
        button.textContent = "Save branch";
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
    throw new Error(body.error || "Update failed");
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
  if (!value) return "No orders yet";
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

function apiUrl(path) {
  const baseUrl = window.SIMBA_CONFIG?.API_BASE_URL?.trim();
  return baseUrl ? `${baseUrl}${path}` : path;
}
