document.addEventListener("DOMContentLoaded", function () {
    fetch("../footer common/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const footerContainer = document.getElementById("footer-container");
            if (footerContainer) {
                footerContainer.innerHTML = data;

                // Load CSS for footer
                let footerStyles = document.createElement("link");
                footerStyles.rel = "stylesheet";
                footerStyles.href = "../footer common/footer.css";
                document.head.appendChild(footerStyles);
            } else {
                console.error("Footer container not found!");
            }
        })
        .catch(error => console.error("Error loading footer:", error));
});