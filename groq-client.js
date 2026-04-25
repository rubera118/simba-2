/**
 * Browser-side Groq AI search for Simba Supermarket on GitHub Pages.
 *
 * This file intercepts the storefront's assistant-search request and, when a
 * browser-side Groq key is configured, calls Groq directly. If no key is
 * present or the call fails, the storefront falls back to local catalog
 * matching.
 */

(function () {
  "use strict";

  const GROQ_MODEL = "llama-3.3-70b-versatile";
  const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";
  const MAX_CATALOG_PRODUCTS = 80;
  const HISTORY_MAX_TURNS = 4;
  const conversationHistory = [];

  function getGroqKey() {
    return (window.SIMBA_CONFIG && window.SIMBA_CONFIG.GROQ_API_KEY) || "";
  }

  function getProducts() {
    if (window.appState && Array.isArray(window.appState.products) && window.appState.products.length) {
      return window.appState.products;
    }
    if (window.SIMBA_PRODUCTS && Array.isArray(window.SIMBA_PRODUCTS)) {
      return window.SIMBA_PRODUCTS;
    }
    return [];
  }

  function getBranch() {
    if (window.appState && window.appState.selectedBranchId) {
      return { id: window.appState.selectedBranchId, name: window.appState.selectedBranchId };
    }
    return null;
  }

  function getLanguage() {
    return (window.appState && window.appState.language) || "en";
  }

  function buildCatalogContext(products) {
    return products.slice(0, MAX_CATALOG_PRODUCTS).map((product) => ({
      id: String(product.id || ""),
      name: String(product.name || ""),
      category: String(product.category || ""),
      price: Number(product.price) || 0,
      description: String(product.description || "").slice(0, 80),
    }));
  }

  function buildSystemPrompt(language) {
    const langMap = { en: "English", fr: "French", rw: "Kinyarwanda" };
    const langName = langMap[language] || "English";

    return `You are Simba, the shopping assistant for Simba Supermarket in Kigali, Rwanda. Always respond in ${langName}.

Return JSON only with keys: message, searchQuery, category, productIds, followUps.

Rules:
- message: warm, helpful, max 30 words
- searchQuery: short keyword string for catalog filtering
- category: exact category from the catalog or "all"
- productIds: array of ids from the provided catalog only, max 6
- followUps: 3 short follow-up shopper prompts
- if nothing matches, return an empty productIds array
- never invent products that are not in the catalog`;
  }

  async function callGroq(query, products, language) {
    const apiKey = getGroqKey();
    if (!apiKey) throw new Error("No Groq API key");

    while (conversationHistory.length > HISTORY_MAX_TURNS * 2) {
      conversationHistory.splice(0, 2);
    }

    const payload = JSON.stringify({
      language,
      branch: getBranch()?.name || "Kigali",
      query,
      catalog: buildCatalogContext(products),
    });

    conversationHistory.push({ role: "user", content: payload });

    const response = await fetch(GROQ_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        temperature: 0.2,
        max_tokens: 600,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: buildSystemPrompt(language) },
          ...conversationHistory,
        ],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      throw new Error(`Groq error ${response.status}: ${errorBody?.error?.message || "unknown"}`);
    }

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content || "{}";
    conversationHistory.push({ role: "assistant", content: raw });
    return JSON.parse(raw);
  }

  function resolveProducts(productIds, allProducts) {
    if (!Array.isArray(productIds)) return [];
    return productIds
      .map((id) => allProducts.find((product) => String(product.id) === String(id)))
      .filter(Boolean)
      .slice(0, 6);
  }

  const originalFetch = window.fetch.bind(window);

  window.fetch = async function (input, init) {
    const url = typeof input === "string" ? input : input?.url || "";
    if (!url.includes("/api/assistant-search")) {
      return originalFetch(input, init);
    }

    const apiKey = getGroqKey();
    if (!apiKey) {
      return originalFetch(input, init);
    }

    try {
      const body = init?.body ? JSON.parse(init.body) : {};
      const query = String(body.query || "").trim();
      const language = String(body.language || getLanguage()).toLowerCase();
      const products = getProducts();
      const parsed = await callGroq(query, products, language);
      const requestedIds = Array.isArray(parsed.productIds)
        ? parsed.productIds.map((value) => String(value))
        : [];
      const matches = resolveProducts(requestedIds, products);
      const translations = window.translations || {};
      const copy = translations[language] || translations.en || {};

      return new Response(
        JSON.stringify({
          searchQuery: String(parsed.searchQuery || ""),
          category: String(parsed.category || "all"),
          matches,
          message: String(parsed.message || copy.assistantFound?.replace("{count}", matches.length) || ""),
          followUps: Array.isArray(parsed.followUps)
            ? parsed.followUps.map((value) => String(value || "").trim()).filter(Boolean).slice(0, 3)
            : [],
          source: "groq",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.warn("[Simba Groq] fetch intercept error:", error.message);
      return new Response(JSON.stringify({ error: "groq_unavailable" }), {
        status: 503,
        headers: { "Content-Type": "application/json" },
      });
    }
  };

  function injectGroqStatusBadge() {
    const panel = document.querySelector(".conversation-panel");
    if (!panel) return;

    panel.querySelector(".groq-status-badge")?.remove();

    const badge = document.createElement("div");
    badge.className = "groq-status-badge";
    badge.style.cssText = [
      "display:inline-flex",
      "align-items:center",
      "gap:6px",
      "margin-top:8px",
      "padding:4px 10px",
      "border-radius:999px",
      "font-size:0.75rem",
      "font-weight:700",
      "border:1px solid",
      "width:fit-content",
    ].join(";");

    if (getGroqKey()) {
      badge.style.background = "rgba(15,118,110,0.1)";
      badge.style.borderColor = "rgba(15,118,110,0.25)";
      badge.style.color = "var(--accent, #0f766e)";
      badge.innerHTML = '<span style="width:6px;height:6px;border-radius:50%;background:currentColor;display:inline-block"></span> Powered by Groq AI';
    } else {
      badge.style.background = "rgba(240,180,41,0.1)";
      badge.style.borderColor = "rgba(240,180,41,0.3)";
      badge.style.color = "#b45309";
      badge.textContent = "Add GROQ_API_KEY to config.js for live AI search";
    }

    panel.appendChild(badge);
  }

  function init() {
    injectGroqStatusBadge();
    document.getElementById("languageSelect")?.addEventListener("change", () => {
      setTimeout(injectGroqStatusBadge, 50);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    setTimeout(init, 200);
  }

  window.simbaGroqClient = {
    clearHistory: () => conversationHistory.splice(0),
    getGroqKey,
  };
})();
