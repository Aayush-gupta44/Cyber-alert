document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-password");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const passwordInput = this.previousElementSibling;
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                this.textContent = "🙈"; // Change icon to indicate hiding
            } else {
                passwordInput.type = "password";
                this.textContent = "👁️"; // Change icon to indicate showing
            }
        });
    });
});
