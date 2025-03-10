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


