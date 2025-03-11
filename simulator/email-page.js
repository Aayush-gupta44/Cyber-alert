// Get the email ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const emailId = urlParams.get('id');

// Email content based on ID (simulate email details)
const emailContent = {
    "email-1": {
        subject: "InstaGraph",
        title: "Your InstaGraph account has been accessed",
        content: `
            <p>Hi, we noticed a new login to your InstaGraph account from a new device. If this was you, no further action is required.</p>
            <p>If you did not perform this action, please visit the <a href="https://www.instagram.com/accounts/login" class="button" target="_blank">Instagram login page</a> to secure your account.</p>
        `,
        isPhishing: false
    },
    "email-2": {
        subject: "InstaGraph - Urgent",
        title: "Urgent: Your account is about to be locked!",
        content: `
            <p>Dear customer, we noticed suspicious activity on your account. Please <a href="http://example.com/fake-page" class="phishing-link" target="_blank">click here</a> to verify your identity and prevent your account from being locked.</p>
            <p>If you do not act quickly, your account may be locked permanently!</p>
        `,
        isPhishing: true
    },
    "email-3": {
        subject: "FacePoke",
        title: "Security Alert: Unusual login attempt",
        content: `
            <p>Hi, we noticed a new login to your FacePoke account from a new device. If this was you, no further action is required.</p>
            <p>If you did not perform this action, please visit <a href="https://www.facebook.com/login" class="button" target="_blank">Facebook login page</a> to secure your account.</p>
        `,
        isPhishing: false
    },
    // Add more emails as needed
};

// Function to load the email content based on the email ID
function loadEmailContent() {
    if (emailContent[emailId]) {
        const email = emailContent[emailId];

        document.getElementById("email-content").innerHTML = `
            <h3>${email.subject}</h3>
            <p><strong>Subject:</strong> ${email.title}</p>
            ${email.content}
        `;

        document.getElementById("email-actions").style.display = "block";

        // Handle phishing content
        if (email.isPhishing) {
            document.body.style.backgroundColor = "#f8d7da"; // Red background for phishing
            document.getElementById("action-alert").innerHTML = "Warning: This is a phishing email!";
            document.getElementById("action-alert").style.display = "block";
        }
    }
}

// Call function to load email content
loadEmailContent();

// Handle user actions (Reply, Trash, Spam)
document.getElementById("reply-button").onclick = function() {
    showFeedback("reply");
};
document.getElementById("trash-button").onclick = function() {
    showFeedback("trash");
};
document.getElementById("spam-button").onclick = function() {
    showFeedback("spam");
};

// Provide feedback based on user action
function showFeedback(action) {
    let message = "You clicked on " + action;
    document.getElementById("action-alert").innerHTML = message;
    document.getElementById("action-alert").style.display = "block";
}
