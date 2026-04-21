const ACCOUNT_STORAGE_KEYS = {
  token: "simba-customer-token",
  profile: "simba-customer-profile",
};

const accountState = {
  token: loadFromStorage(ACCOUNT_STORAGE_KEYS.token, ""),
  profile: loadFromStorage(ACCOUNT_STORAGE_KEYS.profile, null),
};

document.addEventListener("DOMContentLoaded", initAccountPage);

function initAccountPage() {
  bindAccountControls();

  if (accountState.token) {
    loadAccountDashboard();
  }
}

function bindAccountControls() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const logoutButton = document.getElementById("logoutAccount");

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

  logoutButton?.addEventListener("click", () => {
    accountState.token = "";
    accountState.profile = null;
    localStorage.removeItem(ACCOUNT_STORAGE_KEYS.token);
    localStorage.removeItem(ACCOUNT_STORAGE_KEYS.profile);
    document.getElementById("accountDashboard").classList.add("hidden");
    document.getElementById("accountAuthView").classList.remove("hidden");
  });
}

async function authenticateCustomer(url, payload, messageId) {
  const message = document.getElementById(messageId);
  message.textContent = "Working...";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const body = await response.json();
    if (!response.ok) {
      throw new Error(body.error || "Authentication failed");
    }

    accountState.token = body.token;
    accountState.profile = body.customer;
    saveToStorage(ACCOUNT_STORAGE_KEYS.token, accountState.token);
    saveToStorage(ACCOUNT_STORAGE_KEYS.profile, accountState.profile);
    message.textContent = "";
    await loadAccountDashboard();
  } catch (error) {
    message.textContent = error.message;
  }
}

async function loadAccountDashboard() {
  try {
    const [profileResponse, ordersResponse] = await Promise.all([
      fetch(apiUrl("/api/account/profile"), { headers: getAuthHeaders() }),
      fetch(apiUrl("/api/account/orders"), { headers: getAuthHeaders() }),
    ]);

    if (profileResponse.status === 401 || ordersResponse.status === 401) {
      throw new Error("Your account session expired. Sign in again.");
    }

    const profilePayload = await profileResponse.json();
    const ordersPayload = await ordersResponse.json();
    accountState.profile = profilePayload.customer;
    saveToStorage(ACCOUNT_STORAGE_KEYS.profile, accountState.profile);

    renderProfile(accountState.profile);
    renderOrders(ordersPayload.orders || []);

    document.getElementById("accountAuthView").classList.add("hidden");
    document.getElementById("accountDashboard").classList.remove("hidden");
  } catch (error) {
    accountState.token = "";
    accountState.profile = null;
    localStorage.removeItem(ACCOUNT_STORAGE_KEYS.token);
    localStorage.removeItem(ACCOUNT_STORAGE_KEYS.profile);
    document.getElementById("accountAuthView").classList.remove("hidden");
    document.getElementById("accountDashboard").classList.add("hidden");
    document.getElementById("loginMessage").textContent = error.message;
  }
}

function renderProfile(profile) {
  document.getElementById("accountGreeting").textContent = `Welcome, ${profile.name}`;
  document.getElementById("accountProfile").innerHTML = `
    <article class="summary-box admin-stat-card">
      <span>Email</span>
      <strong>${profile.email}</strong>
    </article>
    <article class="summary-box admin-stat-card">
      <span>Phone</span>
      <strong>${profile.phone || "Not set"}</strong>
    </article>
    <article class="summary-box admin-stat-card">
      <span>Address</span>
      <strong>${profile.address || "Not set"}</strong>
    </article>
  `;
}

function renderOrders(orders) {
  const container = document.getElementById("accountOrders");
  if (!orders.length) {
    container.innerHTML = `<div class="state-panel"><p>You have not placed any orders yet.</p></div>`;
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
            <span class="chip">${order.status}</span>
          </div>
          <div class="admin-order-grid">
            <div class="summary-box">
              <span>Placed</span>
              <strong>${formatDate(order.createdAt)}</strong>
            </div>
            <div class="summary-box">
              <span>Payment</span>
              <strong>${order.payment.network}</strong>
            </div>
            <div class="summary-box">
              <span>Branch</span>
              <strong>${order.branch?.name || order.branchId || "Not set"}</strong>
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
        </article>
      `
    )
    .join("");
}

function getAuthHeaders() {
  return {
    Authorization: `Bearer ${accountState.token}`,
  };
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

function apiUrl(path) {
  const baseUrl = window.SIMBA_CONFIG?.API_BASE_URL?.trim();
  return baseUrl ? `${baseUrl}${path}` : path;
}
