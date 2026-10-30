// =========================================================
// MIDTERM TASK 3 - live search, price sort and Premium labels
// Plain JavaScript. It works with the product cards that are
// already in index.html; it never rebuilds them.
// =========================================================

const N = 58;                                   // last two digits of FA24-BCS-058

// Grab the elements we need from the page (the DOM)
const grid = document.getElementById('product-grid');
const searchBox = document.getElementById('search-box');
const sortBtn = document.getElementById('sort-btn');
const noResults = document.getElementById('no-results');
const categoryRadios = document.querySelectorAll('input[name="category"]');
const items = document.querySelectorAll('.product-item');   // the 12 product columns

// Reads the price from a card: "Rs. 3,499" -> 3499
// replace(/[^0-9]/g, '') deletes every character that is not a digit.
function getPrice(item) {
    const text = item.querySelector('.price').textContent;
    return Number(text.replace(/[^0-9]/g, ''));
}

// ---------- 1. "Premium" label, added once when the page loads ----------
// N x 100 = 5800, so any product above Rs. 5,800 gets the label.
items.forEach(function (item) {
    if (getPrice(item) > N * 100) {
        const label = document.createElement('span');   // make a new <span>
        label.className = 'premium-label';
        label.textContent = 'Premium';
        item.querySelector('.card-body').prepend(label); // put it at the top of the card body
    }
});

// ---------- 2. Live search (works together with the Task 1 category filter) ----------
function applySearch() {
    const typed = searchBox.value.trim().toLowerCase();
    let visibleCount = 0;

    items.forEach(function (item) {
        const name = item.querySelector('.product-name').textContent.toLowerCase();

        // hidden = true hides the card. Both sides are lowercase, so the search is not case-sensitive.
        item.hidden = !name.includes(typed);

        // A card is really visible only if the search did NOT hide it AND the CSS
        // category filter did not hide it. getComputedStyle tells us the final display value.
        if (getComputedStyle(item).display !== 'none') {
            visibleCount++;
        }
    });

    // Show "No products found" only when nothing is visible
    noResults.hidden = visibleCount > 0;
}

// 'input' fires on every key press, so the results update while the user types
searchBox.addEventListener('input', applySearch);

// When the category changes, check again, so "No products found" stays correct
categoryRadios.forEach(function (radio) {
    radio.addEventListener('change', applySearch);
});

// ---------- 3. Sort by price (low -> high, then high -> low, and so on) ----------
let lowToHigh = true;

sortBtn.addEventListener('click', function () {
    const cards = Array.from(grid.children);   // turn the grid's children into a real array

    cards.sort(function (a, b) {
        // negative result = a goes first, positive = b goes first
        return lowToHigh ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a);
    });

    // appendChild MOVES an element that is already on the page to the end of the grid.
    // Appending them in sorted order puts the whole grid in that order (no innerHTML).
    cards.forEach(function (card) {
        grid.appendChild(card);
    });

    sortBtn.textContent = lowToHigh ? 'Price: low to high' : 'Price: high to low';
    lowToHigh = !lowToHigh;                     // flip the direction for the next click
});