// script.js
window.addEventListener('load', function() {
    const video = document.getElementById('transition-video');
    const mainContent = document.getElementById('main-content');

    // Set a timeout to wait for the video to play for 2 seconds
    setTimeout(function() {
        // Hide the video after 2 seconds
        video.style.display = 'none';
        // Show the main content after the transition
        mainContent.style.display = 'block';
    }, 2000); // 2 seconds (2000ms)
});



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

