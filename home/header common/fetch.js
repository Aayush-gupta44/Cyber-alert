document.addEventListener("DOMContentLoaded", function () {
    fetch("../header common/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const headerContainer = document.getElementById("header-container");
            if (headerContainer) {
                headerContainer.innerHTML = data;

                // Load CSS for header
                let headerStyles = document.createElement("link");
                headerStyles.rel = "stylesheet";
                headerStyles.href = "../header common/header.css";
                document.head.appendChild(headerStyles);

                // Load JavaScript for header
                let headerScript = document.createElement("script");
                headerScript.src = "../header common/header.js";
                headerScript.onload = () => {
                    console.log("Header script loaded successfully.");
                    document.dispatchEvent(new Event("Cyber4LifeHeaderLoaded")); // Notify that header is loaded
                };
                document.body.appendChild(headerScript);
            } else {
                console.error("Header container not found!");
            }
        })
        .catch(error => console.error("Error loading header:", error));
});



