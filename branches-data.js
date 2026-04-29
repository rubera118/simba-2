(function attachSimbaBranches() {
  const STORAGE_KEY = "simba-selected-branch";
  const branchBranding = {
    remera: {
      heroImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
      specialty: "Busy city-centre branch with strong pantry and household availability.",
    },
    kimironko: {
      heroImage: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?auto=format&fit=crop&w=1600&q=80",
      specialty: "Fresh produce heavy branch with strong breakfast and vegetable picks.",
    },
    kacyiru: {
      heroImage: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=80",
      specialty: "Home essentials and quick-stop convenience for residential shoppers.",
    },
  };

  const branches = [
    {
      id: "remera",
      name: "Simba Supermarket Remera",
      address: "3336+MHV Union Trade Centre, 1 KN 4 Ave, Kigali",
      city: "Kigali",
      hours: "Open daily, 7:00 AM - 10:00 PM",
      deliveryFee: 2000,
      pickup: true,
      phone: "+250 788 000 001",
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
    },
  ].map((branch) => ({
    ...branch,
    heroImage: branchBranding[branch.id]?.heroImage || "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    specialty: branchBranding[branch.id]?.specialty || "Branch-based pickup, delivery context, and localized stock visibility.",
    mapQuery: branch.address,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`,
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(branch.address)}&output=embed`,
  }));

  function safeGetSelectedId() {
    try {
      return localStorage.getItem(STORAGE_KEY) || "";
    } catch {
      return "";
    }
  }

  function getBranches() {
    return branches.slice();
  }

  function getDefaultBranch() {
    return branches[0];
  }

  function getBranchById(branchId) {
    return branches.find((branch) => branch.id === branchId) || getDefaultBranch();
  }

  function getSelectedBranch() {
    return getBranchById(safeGetSelectedId());
  }

  function saveSelectedBranch(branchId) {
    const branch = getBranchById(branchId);
    try {
      localStorage.setItem(STORAGE_KEY, branch.id);
    } catch {
      // Ignore storage failures and keep the branch in memory-only usage.
    }
    return branch;
  }

  function distributeStock(totalStock) {
    const total = Math.max(0, Number(totalStock || 0));
    if (!total) {
      return Object.fromEntries(branches.map((branch) => [branch.id, 0]));
    }

    const base = Math.floor(total / branches.length);
    let remainder = total % branches.length;
    return Object.fromEntries(
      branches.map((branch, index) => [
        branch.id,
        base + (index < remainder ? 1 : 0),
      ])
    );
  }

  function createBranchStock(totalStock) {
    return distributeStock(totalStock);
  }

  function getBranchStockMap(product) {
    if (product && product.branchStock && typeof product.branchStock === "object") {
      return Object.fromEntries(
        branches.map((branch) => [branch.id, Math.max(0, Number(product.branchStock[branch.id] || 0))])
      );
    }

    return createBranchStock(product?.stock ?? 25);
  }

  function getProductBranchStock(product, branchId) {
    return getBranchStockMap(product)[getBranchById(branchId).id] || 0;
  }

  function getProductPriceForBranch(product, branchId) {
    if (product && product.branchPrices && typeof product.branchPrices === "object") {
      const branchPrice = Number(product.branchPrices[getBranchById(branchId).id]);
      if (Number.isFinite(branchPrice) && branchPrice >= 0) return branchPrice;
    }
    return Number(product?.price || 0);
  }

  function mergeProductForBranch(product, branchId) {
    const branch = getBranchById(branchId);
    return {
      ...product,
      branchStock: getBranchStockMap(product),
      stock: getProductBranchStock(product, branch.id),
      price: getProductPriceForBranch(product, branch.id),
      selectedBranchId: branch.id,
    };
  }

  function getCartItemKey(item) {
    return `${item.id}::${getBranchById(item.branchId).id}`;
  }

  function normalizeCart(cart, fallbackBranchId) {
    return (Array.isArray(cart) ? cart : []).map((item) => ({
      ...item,
      branchId: getBranchById(item.branchId || fallbackBranchId).id,
      quantity: Math.max(1, Number(item.quantity || 1)),
    }));
  }

  window.SIMBA_BRANCHES = {
    STORAGE_KEY,
    branches,
    getBranches,
    getDefaultBranch,
    getBranchById,
    getSelectedBranch,
    saveSelectedBranch,
    createBranchStock,
    getBranchStockMap,
    getProductBranchStock,
    getProductPriceForBranch,
    mergeProductForBranch,
    getCartItemKey,
    normalizeCart,
  };
})();
