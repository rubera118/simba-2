const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const { URL } = require("url");

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "0.0.0.0";
const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, "data");
const SOURCE_PRODUCTS_PATH = path.join(ROOT_DIR, "products.json");
const PRODUCTS_PATH = path.join(DATA_DIR, "products.json");
const ORDERS_PATH = path.join(DATA_DIR, "orders.json");
const CUSTOMERS_PATH = path.join(DATA_DIR, "customers.json");
const BRANCHES_PATH = path.join(DATA_DIR, "branches.json");
const DELIVERY_FEE = 2000;
const ADMIN_PASSWORD = process.env.SIMBA_ADMIN_PASSWORD || "simba-admin-2026";
const TOKEN_SECRET = process.env.SIMBA_TOKEN_SECRET || "simba-demo-secret";
const GROQ_API_KEY = process.env.SIMBA_GROQ_API_KEY || "";
const GROQ_MODEL = process.env.SIMBA_GROQ_MODEL || "llama-3.3-70b-versatile";
const ORDER_STATUSES = ["received", "accepted", "preparing", "ready-for-pickup", "completed", "cancelled", "delivered"];
const ALLOWED_ORIGINS = (process.env.SIMBA_ALLOWED_ORIGINS || "*")
  .split(",")
  .map((entry) => entry.trim())
  .filter(Boolean);

const STATIC_FILES = {
  "/": "index.html",
  "/index.html": "index.html",
  "/branches.html": "branches.html",
  "/about.html": "about.html",
  "/contact.html": "contact.html",
  "/product.html": "product.html",
  "/checkout.html": "checkout.html",
  "/account.html": "account.html",
  "/admin.html": "admin.html",
  "/branches.js": "branches.js",
  "/branches-data.js": "branches-data.js",
  "/config.js": "config.js",
  "/groq-client.js": "groq-client.js",
  "/script.js": "script.js",
  "/product.js": "product.js",
  "/checkout.js": "checkout.js",
  "/account.js": "account.js",
  "/admin.js": "admin.js",
  "/styles.css": "styles.css",
  "/products.json": "products.json",
  "/products-data.js": "products-data.js",
};

const DEFAULT_BRANCHES = [
  {
    id: "remera",
    name: "Simba Supermarket Remera",
    address: "3336+MHV Union Trade Centre, 1 KN 4 Ave, Kigali",
    city: "Kigali",
    hours: "Open daily, 7:00 AM - 10:00 PM",
    deliveryFee: 2000,
    pickup: true,
    phone: "+250 788 000 001",
    active: true,
  },
  {
    id: "kimironko",
    name: "Simba Supermarket Kimironko",
    address: "24XF+XVV, KG 192 St, Kigali",
    city: "Kigali",
    hours: "Open daily, 7:00 AM - 10:00 PM",
    deliveryFee: 1800,
    pickup: true,
    phone: "+250 788 000 002",
    active: true,
  },
  {
    id: "kacyiru",
    name: "Simba Supermarket Kacyiru",
    address: "KG 541 St, Kigali",
    city: "Kigali",
    hours: "Open daily, 7:30 AM - 9:30 PM",
    deliveryFee: 2200,
    pickup: true,
    phone: "+250 788 000 003",
    active: true,
  },
  {
    id: "nyamirambo",
    name: "Simba Supermarket Nyamirambo",
    address: "23H4+26V, Kigali",
    city: "Kigali",
    hours: "Open daily, 7:00 AM - 9:30 PM",
    deliveryFee: 2200,
    pickup: true,
    phone: "+250 788 000 004",
    active: true,
  },
  {
    id: "gikondo",
    name: "Simba Supermarket Gikondo",
    address: "24G3+MCV, Kigali",
    city: "Kigali",
    hours: "Open daily, 7:30 AM - 9:30 PM",
    deliveryFee: 2200,
    pickup: true,
    phone: "+250 788 000 005",
    active: true,
  },
  {
    id: "kanombe",
    name: "Simba Supermarket Kanombe",
    address: "KN 5 Rd, Kigali",
    city: "Kigali",
    hours: "Open daily, 7:00 AM - 10:00 PM",
    deliveryFee: 2000,
    pickup: true,
    phone: "+250 788 000 006",
    active: true,
  },
  {
    id: "kinyinya",
    name: "Simba Supermarket Kinyinya",
    address: "KK 35 Ave, Kigali",
    city: "Kigali",
    hours: "Open daily, 7:30 AM - 9:30 PM",
    deliveryFee: 2300,
    pickup: true,
    phone: "+250 788 000 007",
    active: true,
  },
  {
    id: "kibagabaga",
    name: "Simba Supermarket Kibagabaga",
    address: "24Q5+R2R, Kigali",
    city: "Kigali",
    hours: "Open daily, 7:00 AM - 9:30 PM",
    deliveryFee: 2000,
    pickup: true,
    phone: "+250 788 000 008",
    active: true,
  },
  {
    id: "nyanza",
    name: "Simba Supermarket Nyanza",
    address: "24J3+Q3, Kigali",
    city: "Kigali",
    hours: "Open daily, 7:00 AM - 9:30 PM",
    deliveryFee: 2100,
    pickup: true,
    phone: "+250 788 000 009",
    active: true,
  },
];

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

async function ensureDataFiles() {
  await fsp.mkdir(DATA_DIR, { recursive: true });

  try {
    await fsp.access(BRANCHES_PATH);
  } catch {
    await fsp.writeFile(BRANCHES_PATH, JSON.stringify(DEFAULT_BRANCHES, null, 2) + "\n", "utf8");
  }

  try {
    await fsp.access(PRODUCTS_PATH);
  } catch {
    const rawProducts = JSON.parse(await fsp.readFile(SOURCE_PRODUCTS_PATH, "utf8"));
    const products = rawProducts.map((product) => normalizeProduct(product));
    await fsp.writeFile(PRODUCTS_PATH, JSON.stringify(products, null, 2) + "\n", "utf8");
  }

  try {
    await fsp.access(ORDERS_PATH);
  } catch {
    await fsp.writeFile(ORDERS_PATH, "[]\n", "utf8");
  }

  try {
    await fsp.access(CUSTOMERS_PATH);
  } catch {
    await fsp.writeFile(CUSTOMERS_PATH, "[]\n", "utf8");
  }
}

function normalizeBranch(branch) {
  return {
    id: String(branch.id || ""),
    name: String(branch.name || ""),
    address: String(branch.address || ""),
    city: String(branch.city || ""),
    hours: String(branch.hours || "Open daily"),
    deliveryFee: Number.isFinite(Number(branch.deliveryFee)) ? Math.max(0, Number(branch.deliveryFee)) : DELIVERY_FEE,
    pickup: branch.pickup !== false,
    phone: String(branch.phone || ""),
    active: branch.active !== false,
  };
}

function createBranchStock(totalStock) {
  const branches = DEFAULT_BRANCHES.map(normalizeBranch).filter((branch) => branch.active);
  const total = Math.max(0, Number(totalStock || 0));
  if (!branches.length) return {};

  const base = Math.floor(total / branches.length);
  let remainder = total % branches.length;
  return Object.fromEntries(
    branches.map((branch, index) => [branch.id, base + (index < remainder ? 1 : 0)])
  );
}

function normalizeProduct(product) {
  const stock = Number.isFinite(Number(product.stock)) ? Math.max(0, Number(product.stock)) : 25;
  const branchStock = product.branchStock && typeof product.branchStock === "object"
    ? product.branchStock
    : createBranchStock(stock);

  return {
    id: String(product.id),
    name: String(product.name || ""),
    category: String(product.category || "General"),
    subcategory: String(product.subcategory || ""),
    price: Number(product.price || 0),
    image: String(product.image || "assets/product-fallback.svg"),
    description: String(product.description || ""),
    badge: String(product.badge || "Featured"),
    stock,
    branchStock: Object.fromEntries(
      Object.entries(branchStock).map(([branchId, quantity]) => [branchId, Math.max(0, Number(quantity || 0))])
    ),
    active: product.active !== false,
    featured: product.featured === true,
    updatedAt: product.updatedAt || new Date().toISOString(),
  };
}

function normalizeOrder(order) {
  return {
    ...order,
    createdAt: order.createdAt || new Date().toISOString(),
    notes: order.notes || "",
    status: ORDER_STATUSES.includes(order.status) ? order.status : "received",
  };
}

function normalizeCustomer(customer) {
  return {
    id: String(customer.id || ""),
    name: String(customer.name || ""),
    email: String(customer.email || "").trim().toLowerCase(),
    phone: String(customer.phone || ""),
    address: String(customer.address || ""),
    passwordHash: String(customer.passwordHash || ""),
    createdAt: customer.createdAt || new Date().toISOString(),
  };
}

async function readProducts() {
  await ensureDataFiles();
  const raw = await fsp.readFile(PRODUCTS_PATH, "utf8");
  return JSON.parse(raw).map(normalizeProduct);
}

async function readBranches() {
  await ensureDataFiles();
  const raw = await fsp.readFile(BRANCHES_PATH, "utf8");
  return JSON.parse(raw).map(normalizeBranch);
}

async function writeBranches(branches) {
  await ensureDataFiles();
  await fsp.writeFile(BRANCHES_PATH, JSON.stringify(branches.map(normalizeBranch), null, 2) + "\n", "utf8");
}

async function writeProducts(products) {
  await ensureDataFiles();
  const normalized = products.map(normalizeProduct);
  await fsp.writeFile(PRODUCTS_PATH, JSON.stringify(normalized, null, 2) + "\n", "utf8");
}

async function readOrders() {
  await ensureDataFiles();
  const raw = await fsp.readFile(ORDERS_PATH, "utf8");
  return JSON.parse(raw).map(normalizeOrder);
}

async function writeOrders(orders) {
  await ensureDataFiles();
  const normalized = orders.map(normalizeOrder);
  await fsp.writeFile(ORDERS_PATH, JSON.stringify(normalized, null, 2) + "\n", "utf8");
}

async function readCustomers() {
  await ensureDataFiles();
  const raw = await fsp.readFile(CUSTOMERS_PATH, "utf8");
  return JSON.parse(raw).map(normalizeCustomer);
}

async function writeCustomers(customers) {
  await ensureDataFiles();
  const normalized = customers.map(normalizeCustomer);
  await fsp.writeFile(CUSTOMERS_PATH, JSON.stringify(normalized, null, 2) + "\n", "utf8");
}

function sendJson(request, response, statusCode, payload) {
  response.writeHead(statusCode, {
    ...getCorsHeaders(request),
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function sendText(request, response, statusCode, message) {
  response.writeHead(statusCode, {
    ...getCorsHeaders(request),
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(message);
}

function getCorsHeaders(request) {
  const origin = request.headers.origin || "";
  const allowAny = ALLOWED_ORIGINS.includes("*");
  const allowedOrigin = allowAny
    ? "*"
    : ALLOWED_ORIGINS.includes(origin)
      ? origin
      : ALLOWED_ORIGINS[0] || "";

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS",
  };
}

function createOrderId() {
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomPart = crypto.randomBytes(3).toString("hex").toUpperCase();
  return `SIMBA-${datePart}-${randomPart}`;
}

function createCustomerId() {
  return `CUST-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
}

function getAuthToken(payload) {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto.createHmac("sha256", TOKEN_SECRET).update(body).digest("base64url");
  return `${body}.${signature}`;
}

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function sanitizeCustomer(customer) {
  return {
    id: customer.id,
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    address: customer.address,
    createdAt: customer.createdAt,
  };
}

function verifyAuthToken(token) {
  if (!token || !token.includes(".")) return null;
  const [body, signature] = token.split(".");
  const expected = crypto.createHmac("sha256", TOKEN_SECRET).update(body).digest("base64url");
  if (signature !== expected) return null;

  const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
  if (!payload.exp || Date.now() > payload.exp) return null;
  return payload;
}

function getBearerToken(request) {
  const authHeader = request.headers.authorization || "";
  if (!authHeader.startsWith("Bearer ")) return "";
  return authHeader.slice("Bearer ".length).trim();
}

function summarizeOrders(orders) {
  const totalRevenue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  const totalItems = orders.reduce(
    (sum, order) => sum + order.items.reduce((itemSum, item) => itemSum + Number(item.quantity || 0), 0),
    0
  );

  return {
    orderCount: orders.length,
    totalRevenue,
    totalItems,
    latestOrderAt: orders[0]?.createdAt || null,
    deliveredCount: orders.filter((order) => order.status === "delivered").length,
  };
}

function summarizeProducts(products) {
  return {
    productCount: products.length,
    activeCount: products.filter((product) => product.active).length,
    lowStockCount: products.filter((product) => product.active && product.stock <= 5).length,
    outOfStockCount: products.filter((product) => product.active && product.stock <= 0).length,
  };
}

function getBranchById(branches, branchId) {
  return branches.find((branch) => branch.id === branchId && branch.active) || branches[0] || null;
}

function getProductStockForBranch(product, branchId) {
  if (!product) return 0;
  if (product.branchStock && typeof product.branchStock === "object") {
    return Math.max(0, Number(product.branchStock[branchId] || 0));
  }
  return Math.max(0, Number(product.stock || 0));
}

function withBranchContext(product, branchId) {
  if (!branchId) return product;
  return {
    ...product,
    stock: getProductStockForBranch(product, branchId),
    selectedBranchId: branchId,
  };
}

function collectRequestBody(request) {
  return new Promise((resolve, reject) => {
    let raw = "";
    request.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) {
        reject(new Error("Request body too large"));
        request.destroy();
      }
    });
    request.on("end", () => {
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    request.on("error", reject);
  });
}

function requireAdmin(request, response) {
  const token = getBearerToken(request);
  const payload = verifyAuthToken(token);

  if (!payload || payload.role !== "admin") {
    sendJson(request, response, 401, { error: "Unauthorized" });
    return null;
  }

  return payload;
}

function requireCustomer(request, response) {
  const token = getBearerToken(request);
  const payload = verifyAuthToken(token);

  if (!payload || payload.role !== "customer" || !payload.customerId) {
    sendJson(request, response, 401, { error: "Unauthorized" });
    return null;
  }

  return payload;
}

async function handleProductsApi(request, response, pathname) {
  const requestUrl = new URL(request.url, `http://${request.headers.host || `${HOST}:${PORT}`}`);
  const branchId = requestUrl.searchParams.get("branchId") || "";
  const branches = await readBranches();
  const selectedBranch = getBranchById(branches, branchId);
  const products = (await readProducts())
    .filter((product) => product.active)
    .map((product) => withBranchContext(product, selectedBranch?.id));

  if (pathname === "/api/products") {
    sendJson(request, response, 200, { products, count: products.length, branch: selectedBranch });
    return;
  }

  const productId = pathname.split("/").pop();
  const product = products.find((entry) => entry.id === productId);
  if (!product) {
    sendJson(request, response, 404, { error: "Product not found" });
    return;
  }

  sendJson(request, response, 200, { product, branch: selectedBranch });
}

async function handleCreateOrder(request, response) {
  const body = await collectRequestBody(request);
  const customer = body.customer || {};
  const payment = body.payment || {};
  const fulfilment = body.fulfilment || {};
  const items = Array.isArray(body.items) ? body.items : [];
  const branches = await readBranches();
  const fallbackBranch = getBranchById(branches, String(body.branchId || ""));
  const mode = String(fulfilment.mode || "pickup");
  const resolvedAddress = String(customer.address || "").trim() || (mode === "pickup" ? fallbackBranch?.address || "" : "");

  if (!customer.name || !customer.phone || !resolvedAddress || !payment.network || !payment.momoNumber) {
    sendJson(request, response, 400, { error: "Missing customer or payment details" });
    return;
  }

  if (!items.length) {
    sendJson(request, response, 400, { error: "Cart is empty" });
    return;
  }

  const token = getBearerToken(request);
  const accountPayload = verifyAuthToken(token);
  let customerId = null;
  if (accountPayload?.role === "customer" && accountPayload.customerId) {
    customerId = accountPayload.customerId;
  }

  const products = await readProducts();
  const normalizedItems = items
    .map((item) => ({
      id: String(item.id || ""),
      quantity: Math.max(1, Number(item.quantity || 0)),
      branchId: getBranchById(branches, String(item.branchId || fallbackBranch?.id || ""))?.id,
    }))
    .filter((item) => item.id && item.branchId);

  const orderItems = normalizedItems.map((item) => {
    const product = products.find((entry) => entry.id === item.id && entry.active);
    if (!product) {
      throw new Error(`Unknown product ${item.id}`);
    }

    const availableStock = getProductStockForBranch(product, item.branchId);
    if (availableStock < item.quantity) {
      throw new Error(`${product.name} only has ${availableStock} item(s) left in stock at this branch`);
    }

    product.branchStock[item.branchId] = availableStock - item.quantity;
    product.stock -= item.quantity;
    product.updatedAt = new Date().toISOString();

    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: item.quantity,
      branchId: item.branchId,
      branch: getBranchById(branches, item.branchId),
      lineTotal: product.price * item.quantity,
    };
  });

  await writeProducts(products);

  const subtotal = orderItems.reduce((sum, item) => sum + item.lineTotal, 0);
  const orderBranch = getBranchById(branches, String(body.branchId || orderItems[0]?.branchId || ""));
  const deliveryFee = mode === "delivery" ? orderBranch?.deliveryFee ?? DELIVERY_FEE : 0;
  const deposit = Math.max(0, Number(payment.deposit || 0));
  const order = normalizeOrder({
    id: createOrderId(),
    customerId,
    branchId: orderBranch?.id || "",
    branch: orderBranch,
    customer: {
      name: customer.name,
      phone: customer.phone,
      address: resolvedAddress,
      email: customer.email || "",
    },
    notes: customer.notes || "",
    payment: {
      network: payment.network,
      momoNumber: payment.momoNumber,
      deposit,
      status: "simulated-authorized",
    },
    fulfilment: {
      mode,
      pickupTime: String(fulfilment.pickupTime || ""),
    },
    items: orderItems,
    subtotal,
    deliveryFee,
    total: subtotal + deliveryFee + deposit,
    status: "received",
    managerName: "",
    staffName: "",
    source: "web",
  });

  const orders = await readOrders();
  orders.unshift(order);
  await writeOrders(orders);

  sendJson(request, response, 201, {
    message: "Order placed successfully.",
    order,
  });
}

async function handleCustomerRegister(request, response) {
  const body = await collectRequestBody(request);
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const phone = String(body.phone || "").trim();
  const address = String(body.address || "").trim();

  if (!name || !email || !password) {
    sendJson(request, response, 400, { error: "Name, email, and password are required" });
    return;
  }

  const customers = await readCustomers();
  if (customers.some((customer) => customer.email === email)) {
    sendJson(request, response, 409, { error: "An account with that email already exists" });
    return;
  }

  const customer = normalizeCustomer({
    id: createCustomerId(),
    name,
    email,
    phone,
    address,
    passwordHash: hashPassword(password),
  });

  customers.unshift(customer);
  await writeCustomers(customers);

  const token = getAuthToken({
    role: "customer",
    customerId: customer.id,
    exp: Date.now() + 1000 * 60 * 60 * 24 * 7,
  });

  sendJson(request, response, 201, {
    token,
    customer: sanitizeCustomer(customer),
  });
}

async function handleCustomerLogin(request, response) {
  const body = await collectRequestBody(request);
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const customers = await readCustomers();
  const customer = customers.find((entry) => entry.email === email);

  if (!customer || customer.passwordHash !== hashPassword(password)) {
    sendJson(request, response, 401, { error: "Invalid email or password" });
    return;
  }

  const token = getAuthToken({
    role: "customer",
    customerId: customer.id,
    exp: Date.now() + 1000 * 60 * 60 * 24 * 7,
  });

  sendJson(request, response, 200, {
    token,
    customer: sanitizeCustomer(customer),
  });
}

async function handleCustomerForgotPassword(request, response) {
  const body = await collectRequestBody(request);
  const email = String(body.email || "").trim().toLowerCase();

  if (!email) {
    sendJson(request, response, 400, { error: "Email is required" });
    return;
  }

  sendJson(request, response, 200, {
    message: "If that account exists, a password reset link has been prepared for demo use.",
  });
}

async function handleCustomerGoogleAuth(request, response) {
  const body = await collectRequestBody(request);
  const email = String(body.email || "").trim().toLowerCase();
  const name = String(body.name || "").trim() || "Simba Google Customer";
  const phone = String(body.phone || "").trim();
  const address = String(body.address || "").trim();

  if (!email) {
    sendJson(request, response, 400, { error: "Google account email is required" });
    return;
  }

  const customers = await readCustomers();
  let customer = customers.find((entry) => entry.email === email);

  if (!customer) {
    customer = normalizeCustomer({
      id: createCustomerId(),
      name,
      email,
      phone,
      address,
      passwordHash: hashPassword(`google-demo-${email}`),
    });
    customers.unshift(customer);
    await writeCustomers(customers);
  }

  const token = getAuthToken({
    role: "customer",
    customerId: customer.id,
    exp: Date.now() + 1000 * 60 * 60 * 24 * 7,
  });

  sendJson(request, response, 200, {
    token,
    customer: sanitizeCustomer(customer),
  });
}

function buildAssistantFallback(query, products, language = "en") {
  function getAssistantFollowUps(currentLanguage, categoryName) {
    const prompts = {
      en: ["Show cheaper options", "Fresh options only", categoryName && categoryName !== "all" ? `More in ${categoryName}` : "What goes with this?"],
      fr: ["Montrer moins cher", "Options fraiches seulement", categoryName && categoryName !== "all" ? `Plus dans ${categoryName}` : "Que va avec ceci ?"],
      rw: ["Nyereka ibihendutse", "Nyereka ibishya gusa", categoryName && categoryName !== "all" ? `${categoryName} byinshi` : "Ni iki najyana na byo?"],
    };
    return (prompts[currentLanguage] || prompts.en).filter(Boolean);
  }

  const normalizedQuery = String(query || "").trim().toLowerCase();
  const intentMap = [
    {
      pattern: /breakfast|morning|tea|coffee|bread|cereal/,
      keywords: ["milk", "bread", "tea", "coffee", "juice"],
      category: "Food Products",
      message: {
        en: "Breakfast options are ready for quick shopping.",
        fr: "Les options de petit-dejeuner sont pretes pour un achat rapide.",
        rw: "Ibyo kurya bya breakfast byateguwe kugira ngo ubibone vuba.",
      },
    },
    {
      pattern: /fresh|fruit|vegetable|produce|milk/,
      keywords: ["fresh", "fruit", "vegetable", "tomato", "banana", "apple", "milk"],
      category: null,
      message: {
        en: "Here are fresher everyday picks from the selected branch.",
        fr: "Voici des choix plus frais de la branche selectionnee.",
        rw: "Dore amahitamo mashya ava ku ishami wahisemo.",
      },
    },
    {
      pattern: /clean|detergent|soap|sanitary|laundry/,
      keywords: ["detergent", "soap", "clean", "laundry"],
      category: "Cleaning and Sanitary",
      message: {
        en: "I filtered the catalog to cleaning and sanitary essentials.",
        fr: "J'ai filtre le catalogue vers les essentiels d'entretien et sanitaires.",
        rw: "Nayunguruye catalog kugira ngo yerekane ibikoresho by'isuku gusa.",
      },
    },
    {
      pattern: /drink|juice|water|soda|beverage/,
      keywords: ["juice", "water", "drink", "soda"],
      category: "Non-Alcoholic Drinks",
      message: {
        en: "These drink options match refreshment needs at this branch.",
        fr: "Ces boissons correspondent aux besoins de rafraichissement de cette branche.",
        rw: "Ibi binyobwa bihuye n'ibyo ushakira kuri iri shami.",
      },
    },
    {
      pattern: /beauty|cosmetic|shampoo|lotion|skin/,
      keywords: ["shampoo", "lotion", "beauty", "cosmetic"],
      category: "Cosmetics",
      message: {
        en: "I narrowed the view to beauty and personal care products.",
        fr: "J'ai reduit la vue aux produits de beaute et de soin personnel.",
        rw: "Nashyize imbere ibicuruzwa by'ubwiza n'isuku bw'umubiri.",
      },
    },
  ];

  const matchedIntent = intentMap.find((intent) => intent.pattern.test(normalizedQuery));
  const keywords = new Set(
    normalizedQuery
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((token) => token.length > 2)
  );
  (matchedIntent?.keywords || []).forEach((keyword) => keywords.add(keyword));

  const searchQuery = Array.from(keywords).join(" ").trim();
  const category = matchedIntent?.category || "all";
  const matches = products
    .map((product) => {
      const haystack = `${product.name} ${product.category} ${product.subcategory} ${product.description} ${product.badge}`.toLowerCase();
      let score = 0;
      keywords.forEach((keyword) => {
        if (haystack.includes(keyword)) score += 3;
      });
      if (matchedIntent?.category && product.category === matchedIntent.category) score += 4;
      if (product.stock > 0) score += 1;
      return { product, score };
    })
    .filter(({ product, score }) => {
      const categoryMatch = category === "all" || product.category === category;
      return categoryMatch && (score > 0 || !keywords.size);
    })
    .sort((a, b) => b.score - a.score || a.product.price - b.product.price)
    .slice(0, 6)
    .map(({ product }) => product);

  const fallbackMessage = {
    en: `Simba found ${matches.length} matching product(s).`,
    fr: `Simba a trouve ${matches.length} produit(s) correspondants.`,
    rw: `Simba yabonye ibicuruzwa ${matches.length} bihuye n'ibyo ushaka.`,
  };
  const baseMessage = matchedIntent?.message?.[language] || fallbackMessage[language] || fallbackMessage.en;

  return {
    query: normalizedQuery,
    searchQuery,
    category,
    matches,
    message: baseMessage,
    followUps: getAssistantFollowUps(language, category),
    source: "fallback",
  };
}

async function requestGroqAssistantResult(query, branch, products, language) {
  if (!GROQ_API_KEY || typeof fetch !== "function") {
    return null;
  }

  const catalogContext = products.slice(0, 30).map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    description: product.description,
    price: product.price,
    stock: product.stock,
  }));

  const completionResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content:
            "You are Simba Supermarket's shopping assistant. Reply with JSON only using keys: message, category, searchQuery, productIds, followUps. Keep message under 28 words, warm and helpful, and grounded only in the provided catalog. searchQuery should be a short keyword query for filtering. category should be a catalog category string or 'all'. productIds must be an array of ids from the catalog context only. followUps must be an array of 3 short follow-up shopper prompts.",
        },
        {
          role: "user",
          content: JSON.stringify({
            language,
            branch: branch?.name || "",
            query,
            catalog: catalogContext,
          }),
        },
      ],
      response_format: { type: "json_object" },
    }),
  });

  if (!completionResponse.ok) {
    throw new Error("Groq request failed");
  }

  const completionBody = await completionResponse.json();
  const rawContent = completionBody.choices?.[0]?.message?.content || "{}";
  const parsed = JSON.parse(rawContent);
  const requestedIds = Array.isArray(parsed.productIds) ? parsed.productIds.map((value) => String(value)) : [];
  const matches = requestedIds
    .map((productId) => products.find((product) => product.id === productId))
    .filter(Boolean)
    .slice(0, 6);

  return {
    query: String(query || ""),
    searchQuery: String(parsed.searchQuery || ""),
    category: String(parsed.category || "all"),
    matches,
    message: String(parsed.message || ""),
    followUps: Array.isArray(parsed.followUps) ? parsed.followUps.map((value) => String(value || "").trim()).filter(Boolean).slice(0, 3) : [],
    source: "groq",
  };
}

async function handleAssistantSearch(request, response) {
  const body = await collectRequestBody(request);
  const query = String(body.query || "").trim();
  const language = String(body.language || "en").toLowerCase();
  const branchId = String(body.branchId || "");

  if (!query) {
    sendJson(request, response, 400, { error: "Search query is required" });
    return;
  }

  const [products, branches] = await Promise.all([readProducts(), readBranches()]);
  const branch = getBranchById(branches, branchId);
  const branchProducts = products
    .filter((product) => product.active)
    .map((product) => withBranchContext(product, branch?.id || ""))
    .filter((product) => Number(product.stock || 0) > 0);

  const fallback = buildAssistantFallback(query, branchProducts, language);

  try {
    const groqResult = await requestGroqAssistantResult(query, branch, branchProducts, language);
    if (groqResult) {
      sendJson(request, response, 200, groqResult);
      return;
    }
  } catch {
    // Fall back silently so demo usage keeps working.
  }

  sendJson(request, response, 200, fallback);
}

async function handleAccountGet(request, response, pathname) {
  const payload = requireCustomer(request, response);
  if (!payload) return;

  const customers = await readCustomers();
  const customer = customers.find((entry) => entry.id === payload.customerId);
  if (!customer) {
    sendJson(request, response, 404, { error: "Customer not found" });
    return;
  }

  if (pathname === "/api/account/profile") {
    sendJson(request, response, 200, { customer: sanitizeCustomer(customer) });
    return;
  }

  if (pathname === "/api/account/orders") {
    const orders = (await readOrders()).filter((order) => order.customerId === customer.id);
    sendJson(request, response, 200, { orders });
    return;
  }

  sendJson(request, response, 404, { error: "Account endpoint not found" });
}

async function handleAdminLogin(request, response) {
  const body = await collectRequestBody(request);
  if (body.password !== ADMIN_PASSWORD) {
    sendJson(request, response, 401, { error: "Invalid admin password" });
    return;
  }

  const token = getAuthToken({
    role: "admin",
    exp: Date.now() + 1000 * 60 * 60 * 8,
  });

  sendJson(request, response, 200, { token });
}

async function handleAdminGet(request, response, pathname) {
  if (!requireAdmin(request, response)) return;

  const [orders, products, branches] = await Promise.all([readOrders(), readProducts(), readBranches()]);

  if (pathname === "/api/admin/orders") {
    sendJson(request, response, 200, { orders });
    return;
  }

  if (pathname === "/api/admin/products") {
    sendJson(request, response, 200, { products });
    return;
  }

  if (pathname === "/api/admin/branches") {
    sendJson(request, response, 200, { branches });
    return;
  }

  if (pathname === "/api/admin/stats") {
    sendJson(request, response, 200, {
      stats: {
        ...summarizeOrders(orders),
        ...summarizeProducts(products),
        branchCount: branches.filter((branch) => branch.active).length,
      },
    });
    return;
  }

  sendJson(request, response, 404, { error: "Admin endpoint not found" });
}

async function handleAdminPatch(request, response, pathname) {
  if (!requireAdmin(request, response)) return;

  if (pathname.startsWith("/api/admin/orders/")) {
    const orderId = pathname.split("/").pop();
    const body = await collectRequestBody(request);
    const status = String(body.status || "");
    if (!ORDER_STATUSES.includes(status)) {
      sendJson(request, response, 400, { error: "Invalid order status" });
      return;
    }

    const orders = await readOrders();
    const order = orders.find((entry) => entry.id === orderId);
    if (!order) {
        sendJson(request, response, 404, { error: "Order not found" });
        return;
      }

    order.status = status;
    if (body.managerName !== undefined) order.managerName = String(body.managerName || "");
    if (body.staffName !== undefined) order.staffName = String(body.staffName || "");
    await writeOrders(orders);
    sendJson(request, response, 200, { order });
    return;
  }

  if (pathname.startsWith("/api/admin/products/")) {
    const productId = pathname.split("/").pop();
    const body = await collectRequestBody(request);
    const products = await readProducts();
    const product = products.find((entry) => entry.id === productId);

    if (!product) {
      sendJson(request, response, 404, { error: "Product not found" });
      return;
    }

    const nextPrice = body.price !== undefined ? Number(body.price) : product.price;
    const nextStock = body.stock !== undefined ? Number(body.stock) : product.stock;

    if (!Number.isFinite(nextPrice) || nextPrice < 0 || !Number.isFinite(nextStock) || nextStock < 0) {
      sendJson(request, response, 400, { error: "Price and stock must be valid positive numbers" });
      return;
    }

    product.price = nextPrice;
    product.stock = Math.max(0, Math.floor(nextStock));
    if (body.branchStock && typeof body.branchStock === "object") {
      product.branchStock = Object.fromEntries(
        Object.entries(body.branchStock).map(([branchId, quantity]) => [branchId, Math.max(0, Math.floor(Number(quantity || 0)))])
      );
      product.stock = Object.values(product.branchStock).reduce((sum, quantity) => sum + Number(quantity || 0), 0);
    }
    product.badge = body.badge !== undefined ? String(body.badge || product.badge) : product.badge;
    product.description =
      body.description !== undefined ? String(body.description || product.description) : product.description;
    product.active = body.active !== undefined ? Boolean(body.active) : product.active;
    product.featured = body.featured !== undefined ? Boolean(body.featured) : product.featured;
    product.updatedAt = new Date().toISOString();

    await writeProducts(products);
    sendJson(request, response, 200, { product });
    return;
  }

  if (pathname.startsWith("/api/admin/branches/")) {
    const branchId = pathname.split("/").pop();
    const body = await collectRequestBody(request);
    const branches = await readBranches();
    const branch = branches.find((entry) => entry.id === branchId);
    if (!branch) {
      sendJson(request, response, 404, { error: "Branch not found" });
      return;
    }

    branch.name = body.name !== undefined ? String(body.name || branch.name) : branch.name;
    branch.address = body.address !== undefined ? String(body.address || branch.address) : branch.address;
    branch.city = body.city !== undefined ? String(body.city || branch.city) : branch.city;
    branch.hours = body.hours !== undefined ? String(body.hours || branch.hours) : branch.hours;
    branch.phone = body.phone !== undefined ? String(body.phone || branch.phone) : branch.phone;
    branch.deliveryFee =
      body.deliveryFee !== undefined ? Math.max(0, Number(body.deliveryFee || branch.deliveryFee)) : branch.deliveryFee;
    branch.pickup = body.pickup !== undefined ? Boolean(body.pickup) : branch.pickup;
    branch.active = body.active !== undefined ? Boolean(body.active) : branch.active;

    await writeBranches(branches);
    sendJson(request, response, 200, { branch });
    return;
  }

  sendJson(request, response, 404, { error: "Admin endpoint not found" });
}

async function handleAdminCreateProduct(request, response) {
  if (!requireAdmin(request, response)) return;

  const body = await collectRequestBody(request);
  const name = String(body.name || "").trim();
  const category = String(body.category || "").trim();
  if (!name || !category) {
    sendJson(request, response, 400, { error: "Product name and category are required" });
    return;
  }

  const [products, branches] = await Promise.all([readProducts(), readBranches()]);
  const branchStock =
    body.branchStock && typeof body.branchStock === "object"
      ? body.branchStock
      : Object.fromEntries(branches.map((branch) => [branch.id, 0]));
  const product = normalizeProduct({
    id: body.id || String(Date.now()),
    name,
    category,
    subcategory: body.subcategory || "",
    price: Number(body.price || 0),
    image: body.image || "assets/product-fallback.svg",
    description: body.description || "",
    badge: body.badge || "New",
    stock: Number(body.stock || 0),
    branchStock,
    active: body.active !== false,
    featured: body.featured === true,
    updatedAt: new Date().toISOString(),
  });

  if (products.some((entry) => entry.id === product.id)) {
    sendJson(request, response, 409, { error: "A product with that ID already exists" });
    return;
  }

  products.unshift(product);
  await writeProducts(products);
  sendJson(request, response, 201, { product });
}

async function handleAdminCreateBranch(request, response) {
  if (!requireAdmin(request, response)) return;

  const body = await collectRequestBody(request);
  const name = String(body.name || "").trim();
  const address = String(body.address || "").trim();
  if (!name || !address) {
    sendJson(request, response, 400, { error: "Branch name and address are required" });
    return;
  }

  const branches = await readBranches();
  const branch = normalizeBranch({
    id: body.id || name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    address,
    city: body.city || "",
    hours: body.hours || "Open daily",
    phone: body.phone || "",
    deliveryFee: Number(body.deliveryFee || DELIVERY_FEE),
    pickup: body.pickup !== false,
    active: body.active !== false,
  });

  if (branches.some((entry) => entry.id === branch.id)) {
    sendJson(request, response, 409, { error: "A branch with that ID already exists" });
    return;
  }

  branches.unshift(branch);
  await writeBranches(branches);

  const products = await readProducts();
  const updatedProducts = products.map((product) => ({
    ...product,
    branchStock: {
      ...product.branchStock,
      [branch.id]: 0,
    },
  }));
  await writeProducts(updatedProducts);

  sendJson(request, response, 201, { branch });
}

function getStaticPath(pathname) {
  if (STATIC_FILES[pathname]) {
    return path.join(ROOT_DIR, STATIC_FILES[pathname]);
  }

  if (pathname.startsWith("/assets/")) {
    return path.join(ROOT_DIR, pathname.slice(1));
  }

  return null;
}

async function serveStatic(request, response, pathname) {
  const staticPath = getStaticPath(pathname);
  if (!staticPath) {
    sendText(request, response, 404, "Not found");
    return;
  }

  const resolved = path.resolve(staticPath);
  if (!resolved.startsWith(path.resolve(ROOT_DIR))) {
    sendText(request, response, 403, "Forbidden");
    return;
  }

  try {
    const stat = await fsp.stat(resolved);
    if (!stat.isFile()) {
      sendText(request, response, 404, "Not found");
      return;
    }

    const ext = path.extname(resolved).toLowerCase();
    response.writeHead(200, {
      ...getCorsHeaders(request),
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
    });
    fs.createReadStream(resolved).pipe(response);
  } catch {
    sendText(request, response, 404, "Not found");
  }
}

async function requestListener(request, response) {
  const requestUrl = new URL(request.url, `http://${request.headers.host || `${HOST}:${PORT}`}`);
  const pathname = requestUrl.pathname;

  try {
    if (request.method === "OPTIONS") {
      response.writeHead(204, getCorsHeaders(request));
      response.end();
      return;
    }

    if (request.method === "GET" && pathname === "/api/health") {
      sendJson(request, response, 200, { ok: true });
      return;
    }

    if (request.method === "GET" && pathname === "/api/branches") {
      const branches = (await readBranches()).filter((branch) => branch.active);
      sendJson(request, response, 200, { branches, count: branches.length });
      return;
    }

    if (request.method === "GET" && (pathname === "/api/products" || pathname.startsWith("/api/products/"))) {
      await handleProductsApi(request, response, pathname);
      return;
    }

    if (request.method === "POST" && pathname === "/api/orders") {
      await handleCreateOrder(request, response);
      return;
    }

    if (request.method === "POST" && pathname === "/api/assistant-search") {
      await handleAssistantSearch(request, response);
      return;
    }

    if (request.method === "POST" && pathname === "/api/customers/register") {
      await handleCustomerRegister(request, response);
      return;
    }

    if (request.method === "POST" && pathname === "/api/customers/login") {
      await handleCustomerLogin(request, response);
      return;
    }

    if (request.method === "POST" && pathname === "/api/customers/forgot-password") {
      await handleCustomerForgotPassword(request, response);
      return;
    }

    if (request.method === "POST" && pathname === "/api/customers/google") {
      await handleCustomerGoogleAuth(request, response);
      return;
    }

    if (request.method === "POST" && pathname === "/api/admin/login") {
      await handleAdminLogin(request, response);
      return;
    }

    if (request.method === "POST" && pathname === "/api/admin/products") {
      await handleAdminCreateProduct(request, response);
      return;
    }

    if (request.method === "POST" && pathname === "/api/admin/branches") {
      await handleAdminCreateBranch(request, response);
      return;
    }

    if (request.method === "GET" && pathname.startsWith("/api/account/")) {
      await handleAccountGet(request, response, pathname);
      return;
    }

    if (request.method === "GET" && pathname.startsWith("/api/admin/")) {
      await handleAdminGet(request, response, pathname);
      return;
    }

    if (request.method === "PATCH" && pathname.startsWith("/api/admin/")) {
      await handleAdminPatch(request, response, pathname);
      return;
    }

    if (request.method === "GET") {
      await serveStatic(request, response, pathname);
      return;
    }

    sendText(request, response, 405, "Method not allowed");
  } catch (error) {
    const statusCode =
      error.message.startsWith("Unknown product") || error.message.includes("stock") ? 400 : 500;
    sendJson(request, response, statusCode, { error: error.message || "Server error" });
  }
}

async function start() {
  await ensureDataFiles();
  const server = http.createServer(requestListener);
  server.listen(PORT, HOST, () => {
    console.log(`Simba Supermarket server running at http://${HOST}:${PORT}`);
  });
}

start();
