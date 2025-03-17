document.addEventListener("DOMContentLoaded", function () {
    function initializeMenu() {
        const toggleButton = document.getElementById("toggleButton");
        const menu = document.getElementById("mylist");

        if (!toggleButton || !menu) {
            console.error("Menu or ToggleButton not found!");
            return;
        }

        toggleButton.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent immediate closing
            menu.classList.toggle("show");
        });

        document.addEventListener("click", function (event) {
            if (!menu.contains(event.target) && event.target !== toggleButton) {
                menu.classList.remove("show");
            }
        });
    }

    // Check if header is already present; otherwise, wait for it to be loaded
    if (document.getElementById("toggleButton")) {
        initializeMenu();
    } else {
        document.addEventListener("Cyber4LifeHeaderLoaded", initializeMenu);
    }
});
