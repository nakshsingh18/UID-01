let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(this);
    // You can handle formData with an AJAX request or fetch API to send data to the server
    console.log("Order Placed:", Object.fromEntries(formData.entries()));
    alert('Thank you for your order!');
    // Clear the form after submission
    this.reset();
});

function calculateBill() {
    const foodName = document.getElementById('food-name').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    let pricePerItem;

    switch (foodName.toLowerCase()) {
        case 'burger':
            pricePerItem = 5;
            break;
        case 'pizza':
            pricePerItem = 7;
            break;
        case 'ice-cream':
            pricePerItem = 3;
            break;
        default:
            alert("Please enter a valid food name (burger, pizza, or ice-cream).");
            return;
    }

    const total = pricePerItem * quantity;
    var newWindow = window.open('', '_blank', 'width=400,height=400,resizeable,scrollbars');

    newWindow.document.write('<html><head><title>Bill</title><style>');
    newWindow.document.write(`
        html, body { font-family: 'Arial', sans-serif; background-color: #f9f9f9; margin: 0; padding: 20px; color: #333; }
        h2 { color: #2c3e50; text-align: center; }
        p { font-size: 16px; line-height: 1.6; text-align: center; margin: 10px 0; }
        #bill-container { max-width: 400px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); border: 1px solid #ddd; }
    `);
    newWindow.document.write('</style></head><body>');
    newWindow.document.write('<div id="bill-container"><h2>Bill Details</h2>');
    newWindow.document.write(`<p>Food Item: ${foodName}</p>`);
    newWindow.document.write(`<p>Quantity: ${quantity}</p>`);
    newWindow.document.write(`<p>Total Cost: $${total}</p></div>`);
    newWindow.document.write('</body></html>');
    newWindow.document.close(); // Finish writing
}


// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll behavior
    });
}

// Show or hide the scroll-to-top button based on scroll position
window.onscroll = function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Show loader when the page starts loading
window.onload = function() {
    document.getElementById('loader').style.display = 'flex';
};

// Hide loader when the page finishes loading
window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
});