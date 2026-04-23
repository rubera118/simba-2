const ACCOUNT_STORAGE_KEYS = {
  token: "simba-customer-token",
  profile: "simba-customer-profile",
  branchReviews: "simba-branch-reviews",
  passwordResets: "simba-password-resets",
};

const REVIEW_ELIGIBLE_STATUSES = ["ready-for-pickup", "completed", "delivered"];

const accountState = {
  token: loadFromStorage(ACCOUNT_STORAGE_KEYS.token, ""),
  profile: loadFromStorage(ACCOUNT_STORAGE_KEYS.profile, null),
  orders: [],
};

const GOOGLE_DEMO_PROFILE = {
  name: "Aline Simba",
  email: "aline.google@simba-demo.rw",
  phone: "+250 788 555 100",
  address: "Kigali, KG 11 Ave",
};

document.addEventListener("DOMContentLoaded", initAccountPage);

function initAccountPage() {
  renderAccountServiceNotice();
  bindAccountControls();

  if (accountState.token) {
    loadAccountDashboard();
  }
}

function bindAccountControls() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const forgotPasswordForm = document.getElementById("forgotPasswordForm");
  const logoutButton = document.getElementById("logoutAccount");
  const googleSignInButton = document.getElementById("googleSignInButton");

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
    forgotPasswordForm.reset();
  });

  googleSignInButton?.addEventListener("click", async () => {
    const message = document.getElementById("googleSignInMessage");
    message.textContent = "Connecting Google account...";

    try {
      const response = await fetch(apiUrl("/api/customers/google"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(GOOGLE_DEMO_PROFILE),
      });

      const body = await parseApiResponse(response, "Google sign-in is not available right now.");

      accountState.token = body.token;
      accountState.profile = body.customer;
      saveToStorage(ACCOUNT_STORAGE_KEYS.token, accountState.token);
      saveToStorage(ACCOUNT_STORAGE_KEYS.profile, accountState.profile);
      message.textContent = "";
      await loadAccountDashboard();
    } catch (error) {
      message.textContent = error.message;
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

    const body = await parseApiResponse(response, "Account request failed.");

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

    const profilePayload = await parseApiResponse(profileResponse, "Could not load your account profile.");
    const ordersPayload = await parseApiResponse(ordersResponse, "Could not load your order history.");
    accountState.profile = profilePayload.customer;
    accountState.orders = ordersPayload.orders || [];
    saveToStorage(ACCOUNT_STORAGE_KEYS.profile, accountState.profile);

    renderProfile(accountState.profile);
    renderOrders(accountState.orders);

    document.getElementById("accountAuthView").classList.add("hidden");
    document.getElementById("accountDashboard").classList.remove("hidden");
  } catch (error) {
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
            <div class="summary-box">
              <span>Fulfilment</span>
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
          ${renderReviewPanel(order)}
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

function getAuthHeaders() {
  return {
    Authorization: `Bearer ${accountState.token}`,
  };
}

async function requestPasswordReset(email) {
  const message = document.getElementById("forgotPasswordMessage");
  if (!message) return;

  if (!email.trim()) {
    message.textContent = "Enter your email address first.";
    return;
  }

  message.textContent = "Preparing reset link...";

  try {
    const response = await fetch(apiUrl("/api/customers/forgot-password"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    await parseApiResponse(response, "Could not prepare a reset link right now.");

    message.textContent = "If that account exists, a reset link has been prepared for demo use.";
  } catch (error) {
    if (shouldShowBackendConfigurationHint(error)) {
      message.textContent = error.message;
      return;
    }

    const requests = loadFromStorage(ACCOUNT_STORAGE_KEYS.passwordResets, []);
    requests.unshift({
      email,
      createdAt: new Date().toISOString(),
    });
    saveToStorage(ACCOUNT_STORAGE_KEYS.passwordResets, requests);
    message.textContent = "Demo reset saved locally. In production this would email a secure reset link.";
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
    message.textContent = "Choose a rating before submitting.";
    return;
  }

  const reviews = loadReviews().filter((entry) => entry.orderId !== orderId);
  reviews.unshift({
    orderId,
    branchId: targetOrder.branchId,
    branchName: targetOrder.branch?.name || "",
    customerId: accountState.profile?.id || "",
    customerName: accountState.profile?.name || "Simba customer",
    rating,
    comment: commentField.value.trim(),
    createdAt: new Date().toISOString(),
  });
  saveReviews(reviews);
  message.textContent = "Thanks. Your branch review has been saved.";
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
    return pickupTime ? `Pickup | ${pickupTime}` : "Pickup";
  }
  return "Delivery";
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
    return `Account services are connected to ${baseUrl}.`;
  }

  if (isGitHubPages) {
    return "Account services are not connected on this live site yet. Set window.SIMBA_CONFIG.API_BASE_URL to your deployed Node backend so signup, login, and password reset can work.";
  }

  return "";
}

function shouldShowBackendConfigurationHint(error) {
  return Boolean(error?.message && error.message.includes("API backend"));
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
    return "The account API backend is not configured for this site. Add your deployed backend URL in config.js so signup and login can work.";
  }

  return "The account service returned an invalid response. Check that the backend is running and reachable from this site.";
}
