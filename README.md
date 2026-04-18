# Simba Supermarket

A modern, responsive e-commerce website for Rwanda's popular online supermarket.

## Features

- Product catalog loaded from `products.json`
- 9 product categories
- Search by product name
- Filter by category
- Filter by maximum price
- Shopping cart with add, remove, and quantity update
- Cart persistence with `localStorage`
- Product detail page
- Checkout page
- Simulated Mobile Money payment form
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
- `products.json` - Product dataset

## How to Run

Because the project loads product data from JSON, run it with a local server instead of opening `index.html` directly.

### Option 1: VS Code Live Server

1. Install the Live Server extension.
2. Right-click `index.html`.
3. Click `Open with Live Server`.

### Option 2: Python

If Python is installed:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Deployment Ideas

- Netlify: drag and drop the folder
- Vercel: import the project as a static site
- GitHub Pages: push the files to a repository and publish from the main branch
