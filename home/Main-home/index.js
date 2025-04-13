// script.js



// Down code is for Three lines Menu
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const menu = document.getElementById("mylist");

    // Toggle menu when button is clicked
    toggleButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent immediate closing
        menu.classList.toggle("show");
    });

    // Hide menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && event.target !== toggleButton) {
            menu.classList.remove("show");
        }
    });
});
const typingTarget = document.getElementById("typing-text");
const message = "Welcome to My Cyber Shield";
let i = 0;

function typeEffect() {
    if (i < message.length) {
        typingTarget.textContent += message.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

// Delay typing by 2 seconds
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});