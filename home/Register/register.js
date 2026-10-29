document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-password");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Find the corresponding input field inside the same parent .input-group
            const passwordInput = this.closest(".input-group").querySelector("input");

            // Toggle password visibility
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                this.textContent = "Hide"; // Hide icon
            } else {
                passwordInput.type = "password";
                this.textContent = "Show"; // Show icon
            }
        });
    });
});


