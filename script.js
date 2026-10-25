// Welcome message
console.log("Dropshipping Website Loaded");

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Product Search
const searchInput = document.querySelector("#search");
const products = document.querySelectorAll(".product-card");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        const value = searchInput.value.toLowerCase();

        products.forEach(product => {
            const name = product.textContent.toLowerCase();

            if (name.includes(value)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}

// Add to Cart Button
const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});