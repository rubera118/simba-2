# Simba Supermarket

A modern, responsive ecommerce website for Rwanda's popular online supermarket, now backed by a lightweight Node server.

## Features

- Product catalog API at `/api/products`
- Backend-managed product records with stock and visibility state
- 9 product categories
- Search by product name
- Filter by category
- Filter by maximum price
- Shopping cart with add, remove, and quantity update
- Cart persistence with `localStorage`
- Product detail page
- Checkout page with editable order summary
- Order submission API at `/api/orders`
- Disk-backed order storage in `data/orders.json`
- Customer account signup, login, session persistence, and order history
- Account dashboard at `/account.html`
- Admin dashboard at `/admin.html` for private store operations
- Admin login and protected order/stats endpoints
- Admin product editing for price, stock, description, badge, and visibility
- Admin product creation from the browser
- Admin order status updates for fulfillment tracking
- English, French, and Kinyarwanda language switcher
- Dark mode toggle

## Project Structure

- `index.html` - Home page and product catalog
- `product.html` - Product detail page
- `checkout.html` - Checkout page
- `styles.css` - Shared responsive styling
- `script.js` - Home page logic
- `product.js` - Product details logic
- `checkout.js` - Checkout page logic
- `account.html` - Customer account page
- `account.js` - Customer account logic
- `admin.html` - Admin dashboard
- `admin.js` - Admin dashboard logic
- `server.js` - Node backend for static hosting and APIs
- `data/orders.json` - Stored orders
- `data/products.json` - Runtime-managed product inventory generated on first server start
- `data/customers.json` - Runtime-managed customer accounts generated on first server start
- `products.json` - Product dataset

## How to Run

For the full backend-enabled experience, run the Node server:

```bash
node server.js
```

Then open `http://127.0.0.1:3000`.

You can still open `index.html` directly for a front-end-only preview, but real order creation and the admin dashboard require the server.

## GitHub Pages + Backend

Your GitHub Pages workflow in `.github/workflows/deploy-pages.yml` already redeploys the frontend when you push to `main`.

To make the live GitHub Pages site use the full-stack backend:

1. Deploy the Node backend with `server.js` to a host such as Render.
2. Set `SIMBA_ADMIN_PASSWORD`.
3. Set `SIMBA_ALLOWED_ORIGINS` to your GitHub Pages URL.
   Example: `https://yourusername.github.io`
4. Open [config.js](C:/Users/user/OneDrive/Desktop/simbasupermarket/config.js) and set:

```js
window.SIMBA_CONFIG = {
  API_BASE_URL: "https://your-backend-host.onrender.com",
};
```

5. Commit and push to `main`.

After that, your live GitHub Pages site will keep updating from GitHub pushes, and it will send account/order/admin requests to your deployed backend.

## Render Option

This repo includes [render.yaml](C:/Users/user/OneDrive/Desktop/simbasupermarket/render.yaml) for an easy backend deployment on Render.

## Admin Login

Admin is intentionally not linked from the public storefront navigation. Open `/admin.html` directly when you need store operations access.

Local fallback admin password:

```text
simba-admin-2026
```

For production, set your own password before running:

```bash
set SIMBA_ADMIN_PASSWORD=your-secure-password
node server.js
```

## Deployment Ideas

- Render, Railway, or DigitalOcean for the Node app
- A VPS or Windows server for simple self-hosting
- Any host that can run a Node HTTP server and persist the `data/` folder
