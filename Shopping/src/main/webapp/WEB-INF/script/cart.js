// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Example data for cart items (replace with actual data from backend)
    const cartItems = [
        { id: 1, name: 'Product A', price: 20, quantity: 2 },
        { id: 2, name: 'Product B', price: 30, quantity: 1 }
    ];

    displayCartItems(cartItems);
    displayTotalPrice(cartItems);
});

function displayCartItems(items) {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';

    items.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: $${item.price}</p>
        `;
        cartContainer.appendChild(cartItem);
    });
}

function displayTotalPrice(items) {
    const totalPriceContainer = document.getElementById('total-price');
    const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalPriceContainer.innerHTML = `<p>Total Price: $${totalPrice.toFixed(2)}</p>`;
}

function checkout() {
    // Add logic for checkout process (e.g., redirect to payment page)
    console.log('Checkout button clicked!');
}
s