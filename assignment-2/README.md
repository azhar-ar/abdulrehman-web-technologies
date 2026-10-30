# Assignment 2 — Closmo: Static, Responsive Pages

**Student:** Muhammad Abdul Rehman Azhar (FA24-BCS-058) · **Course:** CSC336 Web Technologies

## Reference e-commerce site

- **Name:** Daraz Pakistan
- **URL:** https://www.daraz.pk/
- **Homepage screenshot:**

![Daraz homepage](daraz-homepage.jpg)

This same reference site is used for Assignments 3 and 4.

### What I modelled from it (layout and features only, no code copied)

- A header with the logo, a large search bar and a cart icon with an item count
- A row of category links under the header
- Product cards showing image, name, price, a struck-through old price and a discount badge
- A product page with a large image, price, description, quantity selector, Add to Cart, and delivery and returns information

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Homepage / product listing: header, sale banner, category tiles, 12 product cards, footer |
| `product.html` | Product detail page for the Classic Smartwatch: large image, name, price, description, quantity selector, Add to Cart, specifications table |
| `styles.css` | My own CSS on top of Bootstrap (brand colours, header, cards, footer) |
| `images/` | Product images (simple SVG illustrations) |

## How it is built

- **Bootstrap 5.3.3** (from the jsDelivr CDN) does the real layout work:
  - the 12-column grid (`container`, `row`, `col-*`) for the header, product grid, product page and footer
  - the navbar (`navbar navbar-expand`) for the category links
  - components: `card`, `badge`, `breadcrumb`, `input-group`, `table`
- **Bootstrap Icons** for the cart, search and small icons.
- **No JavaScript.** Bootstrap's JS bundle is not loaded. The navbar uses `navbar-expand`, so it never collapses and needs no hamburger script; on phones the link row scrolls sideways instead.
- The cart icon, search box, quantity selector and Add to Cart buttons are not functional yet (Assignment 3 adds JavaScript).

## Responsive behaviour

| Width | Header | Product grid (`col-6 col-md-4 col-lg-3`) | Product page |
| --- | --- | --- | --- |
| Phone (~375px) | Logo and cart on one row, search full width below | 2 per row | Image above details |
| Tablet (768px) | Logo, search and cart on one row | 3 per row | Image and details side by side |
| Desktop (992px+) | Same, wider search | 4 per row | Side by side |

12 products divide evenly into 2, 3 and 4 columns, so no row is left half empty at any width.

## How to run

Open `index.html` in a browser. An internet connection is needed for the Bootstrap and Bootstrap Icons CDN files.