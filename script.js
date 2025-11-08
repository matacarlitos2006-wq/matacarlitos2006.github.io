const searchBar = document.getElementById('search-bar');
const categoryList = document.getElementById('category-list');
const resultsDiv = document.getElementById('results');

// Example data (you can replace with real data or an API)
const data = [
  { name: 'iPhone 16', category: 'Electronics', url: '/products/iphone16' },
  { name: 'Harry Potter Book', category: 'Books', url: '/products/harry-potter' },
  { name: 'Blue T-Shirt', category: 'Clothing', url: '/products/blue-tshirt' },
  { name: 'LEGO Set', category: 'Toys', url: '/products/lego-set' }
];

// Show categories when clicking the search bar
searchBar.addEventListener('focus', () => {
  categoryList.classList.remove('hidden');
  resultsDiv.classList.add('hidden');
});

// Hide categories when typing
searchBar.addEventListener('input', () => {
  categoryList.classList.add('hidden');
  const searchValue = searchBar.value.toLowerCase();
  const results = data.filter(item => item.name.toLowerCase().includes(searchValue));

  // Show matching results
  if (searchValue.length > 0) {
    resultsDiv.innerHTML = results.map(r => `<div class="result" data-url="${r.url}">${r.name}</div>`).join('');
    resultsDiv.classList.remove('hidden');
  } else {
    resultsDiv.classList.add('hidden');
  }
});

// Handle click on results
resultsDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('result')) {
    const url = e.target.getAttribute('data-url');
    window.location.href = url; // Go directly to the page
  }
});

// Handle category clicks
categoryList.addEventListener('click', (e) => {
  if (e.target.classList.contains('category')) {
    searchBar.value = e.target.textContent;
    categoryList.classList.add('hidden');
  }
});

// Hide dropdowns if click outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-container')) {
    categoryList.classList.add('hidden');
    resultsDiv.classList.add('hidden');
  }
});
