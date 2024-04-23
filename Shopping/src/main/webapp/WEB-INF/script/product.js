// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch products from the FakeStoreAPI
    function fetchProducts() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => displayProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }

    // Function to display products on the products.html page
    function displayProducts(products) {
        const productContainer = document.getElementById('product-container');

        // Clear existing content
        productContainer.innerHTML = '';

        // Generate HTML for each product and append it to the container
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>Price: $${product.price}</p>
                <p>${product.description}</p>
            `;
            productContainer.appendChild(productCard);
        });
    }

    // Call fetchProducts function when the page is loaded
    fetchProducts();
});
