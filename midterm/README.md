# Lab Mid Term — Upgrade Your E-commerce Listing and Product Pages

- **Name:** Muhammad Abdul Rehman Azhar
- **Roll number:** FA24-BCS-058
- **Course:** CSC336 Web Technologies (FA26 BCS A)

## My personal numbers

| Value | Formula | Result |
| --- | --- | --- |
| N | last two digits of the roll number | **58** |
| BP | 600 + N | **658px** |
| H | (N × 7) mod 360 = 406 mod 360 | **46** → accent colour `hsl(46, 70%, 45%)` |
| K | (N mod 3) + 3 = 1 + 3 | **4** |
| Sticky top | (N mod 40) + 70 = 18 + 70 | **88px** |
| Premium price | N × 100 | **above Rs. 5,800** |

Starting point: a copy of my `assignment-2/` (Closmo store, Bootstrap 5.3.3). Bootstrap is still used and the header, product cards and footer are unchanged.

## Files I changed

| File | Task | Change |
| --- | --- | --- |
| `index.html` | 1, 3 | Added the category radio buttons and a category class on every product column (Task 1). Added the search box, the sort button, the "No products found" message, `id="product-grid"` and the `<script>` tag (Task 3). |
| `product.html` | 2 | Replaced the Bootstrap two-column row with one CSS Grid (`.product-layout`) that has three named areas. Moved the description and specifications into their own full-width area and made the description longer. |
| `styles.css` | 1, 2, 3 | Added a MIDTERM section at the end: the accent colour, the filter rules, the grid areas, the sticky details box, and styles for the Premium label and the no-results message. |
| `script.js` | 3 | New file containing the live search, the price sort and the Premium labels. |
| `images/` | — | Fixed the product image file names, which had been mixed up in my baseline copy. |

## Task 1 — CSS-only category filter

- I put the 12 products into K = 4 categories (Electronics, Fashion, Accessories, Home) by adding a class such as `cat-electronics` to each product column. I also added K + 1 = 5 radio buttons with the same `name`, and **All** is `checked` on load.
- The rule `#products:has(#cat-electronics:checked) .product-item:not(.cat-electronics) { display: none; }` hides every card that doesn't match the checked radio. `display: none` removes the column completely, so Bootstrap's flex row leaves no empty gaps.
- `input:checked + label` gives the selected filter the accent colour `hsl(46, 70%, 45%)`. No JavaScript is used.

## Task 2 — Product page grid with a sticky details box

- `.product-layout` is a CSS Grid with three named areas: `image`, `details` and `description`. Below 658px, `grid-template-areas: "image" "details" "description"` stacks them in one column.
- From `@media (min-width: 658px)` up, the layout uses two columns, `"image details"` and `"description description"`. The image and details sit side by side, and the description spans the full width underneath.
- At that width, the details box (name, price, quantity, Add to Cart) has `position: sticky; top: 88px;`, so it stays on screen while the long description scrolls past.

## Task 3 — JavaScript: live search and price sort

- **Search:** every key press (the `input` event) compares the lowercase product name with the lowercase typed text and sets `item.hidden` on each card. A card counts as visible only if `getComputedStyle(item).display` is not `none`. This means it has to pass both the search and the CSS category filter. When none are visible, the "No products found" message is shown.
- **Sort:** the sort button reads each price from the card's own `.price` text and sorts the existing columns with `Array.sort`. It then moves them with `appendChild`, so `innerHTML` is never used. Each click flips the order between low to high and high to low.
- **Premium:** when the page loads, the script adds a "Premium" `<span>` to every product priced above N × 100 = Rs. 5,800 (the Classic Smartwatch and the Over-Ear Headphones).

## Testing

I checked each task at 375px, exactly 658px, and 1280px. The screenshots are in `FA24-BCS-058-midterm.pdf`.

## AI tools used

- Claude (Anthropic)