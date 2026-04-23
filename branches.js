document.addEventListener("DOMContentLoaded", () => {
  const selectedPanel = document.getElementById("selectedBranchPanel");
  const grid = document.getElementById("branchGrid");
  const REVIEW_STORAGE_KEY = "simba-branch-reviews";

  function loadReviews() {
    try {
      const stored = localStorage.getItem(REVIEW_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  function getBranchReviews(branchId) {
    return loadReviews().filter((review) => review.branchId === branchId);
  }

  function getReviewSummary(branchId) {
    const reviews = getBranchReviews(branchId);
    const average = reviews.length
      ? reviews.reduce((sum, review) => sum + Number(review.rating || 0), 0) / reviews.length
      : 0;

    return {
      reviews,
      average,
      count: reviews.length,
      stars: average ? `${"★".repeat(Math.round(average))}${"☆".repeat(5 - Math.round(average))}` : "No ratings yet",
    };
  }

  function renderReviewList(branchId) {
    const summary = getReviewSummary(branchId);
    if (!summary.count) {
      return `
        <article class="summary-box">
          <span>Customer reviews</span>
          <strong>No ratings yet</strong>
          <p>Your first completed pickup review will appear here.</p>
        </article>
      `;
    }

    return summary.reviews
      .slice(0, 2)
      .map(
        (review) => `
          <article class="summary-box">
            <span>${review.customerName || "Simba customer"}</span>
            <strong>${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</strong>
            <p>${review.comment || "Pickup went well."}</p>
          </article>
        `
      )
      .join("");
  }

  function render() {
    const currentBranch = window.SIMBA_BRANCHES.getSelectedBranch();
    const branches = window.SIMBA_BRANCHES.getBranches();
    const currentReviewSummary = getReviewSummary(currentBranch.id);

    selectedPanel.innerHTML = `
      <div class="toolbar-header">
        <div>
          <p class="eyebrow">Selected branch</p>
          <h2>${currentBranch.name}</h2>
        </div>
        <div class="topbar-actions">
          <a class="ghost-button" href="${currentBranch.mapUrl}" target="_blank" rel="noreferrer">Open map</a>
          <a class="primary-button" href="./index.html#catalog">Shop this branch</a>
        </div>
      </div>
      <div class="admin-order-grid">
        <article class="summary-box">
          <span>Address</span>
          <strong>${currentBranch.address}</strong>
        </article>
        <article class="summary-box">
          <span>Hours</span>
          <strong>${currentBranch.hours}</strong>
        </article>
        <article class="summary-box">
          <span>Delivery fee</span>
          <strong>RWF ${new Intl.NumberFormat("en-RW").format(currentBranch.deliveryFee)}</strong>
        </article>
        <article class="summary-box">
          <span>Customer rating</span>
          <strong>${currentReviewSummary.stars}</strong>
        </article>
        <article class="summary-box">
          <span>Review count</span>
          <strong>${currentReviewSummary.count}</strong>
        </article>
      </div>
      <div class="admin-order-grid">
        ${renderReviewList(currentBranch.id)}
      </div>
    `;

    grid.innerHTML = branches
      .map(
        (branch) => {
          const reviewSummary = getReviewSummary(branch.id);
          return `
          <article class="showcase-panel branch-card ${branch.id === currentBranch.id ? "branch-card-selected" : ""}">
            <div class="toolbar-header compact-header">
              <div>
                <p class="eyebrow">${branch.city}</p>
                <h2>${branch.name}</h2>
              </div>
              <span class="chip">${branch.pickup ? "Pickup available" : "Delivery only"}</span>
            </div>
            <p class="toolbar-note">${branch.address}</p>
            <div class="branch-map-frame">
              <iframe
                title="${branch.name} map"
                src="${branch.embedUrl}"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="admin-order-grid">
              <article class="summary-box">
                <span>Hours</span>
                <strong>${branch.hours}</strong>
              </article>
              <article class="summary-box">
                <span>Phone</span>
                <strong>${branch.phone}</strong>
              </article>
              <article class="summary-box">
                <span>Rating</span>
                <strong>${reviewSummary.stars}</strong>
              </article>
            </div>
            <div class="admin-product-actions">
              <a class="ghost-button" href="${branch.mapUrl}" target="_blank" rel="noreferrer">Open map</a>
              <button class="primary-button" type="button" data-branch-select="${branch.id}">
                ${branch.id === currentBranch.id ? "Selected branch" : "Select branch"}
              </button>
              <a class="ghost-button" href="./index.html#catalog" data-branch-shop="${branch.id}">Select and shop</a>
            </div>
          </article>
        `;
        }
      )
      .join("");

    grid.querySelectorAll("[data-branch-select]").forEach((button) => {
      button.addEventListener("click", () => {
        window.SIMBA_BRANCHES.saveSelectedBranch(button.dataset.branchSelect);
        render();
      });
    });

    grid.querySelectorAll("[data-branch-shop]").forEach((link) => {
      link.addEventListener("click", () => {
        window.SIMBA_BRANCHES.saveSelectedBranch(link.dataset.branchShop);
      });
    });
  }

  render();
});
