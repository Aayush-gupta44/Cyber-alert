// Email interactions - Expand email content and perform actions (Reply, Trash, Spam)
document.getElementById("email-1").addEventListener('click', function() {
    expandEmail("InstaGraph", "Your InstaGraph account has been accessed", `
        <p>Hi, we noticed a new login to your InstaGraph account from a new device. If this was you, no further action is required.</p>
        <p>If you did not perform this action, please visit the <a href="https://www.instagram.com/accounts/login" class="button" target="_blank">Instagram login page</a> to secure your account.</p>
    `, false); // false indicates this is a legit email
});

document.getElementById("email-2").addEventListener('click', function() {
    expandEmail("InstaGraph - Urgent", "Urgent: Your account is about to be locked!", `
        <p>Dear customer, we noticed suspicious activity on your account. Please <a href="http://example.com/fake-page" class="phishing-link" target="_blank">click here</a> to verify your identity and prevent your account from being locked.</p>
        <p>If you do not act quickly, your account may be locked permanently!</p>
    `, true); // true indicates this is a phishing email
});

document.getElementById("email-3").addEventListener('click', function() {
    expandEmail("FacePoke", "Security Alert: Unusual login attempt", `
        <p>Hi, we noticed a new login to your FacePoke account from a new device. If this was you, no further action is required.</p>
        <p>If you did not perform this action, please visit <a href="https://www.facebook.com/login" class="button" target="_blank">Facebook login page</a> to secure your account.</p>
    `, false); // legit email
});

// Expand the email with the given content
function expandEmail(subject, title, content, isPhishing) {
    document.getElementById("email-content").innerHTML = `
        <h3>${subject}</h3>
        <p><strong>Subject:</strong> ${title}</p>
        ${content}
    `;
    document.getElementById("email-actions").style.display = "block";
    document.getElementById("action-alert").style.display = "none";

    document.getElementById("email-content").classList.add("open");

    // Handling the actions for the email
    document.getElementById("reply-button").onclick = function() {
        showFeedback(isPhishing, "reply");
    };
    document.getElementById("trash-button").onclick = function() {
        showFeedback(isPhishing, "trash");
    };
    document.getElementById("spam-button").onclick = function() {
        showFeedback(isPhishing, "spam");
    };
}

// Show feedback based on user action (reply, trash, spam)
function showFeedback(isPhishing, action) {
    let message;
    if (isPhishing) {
        if (action === "reply") {
            message = "Oops! You were wrong. Replying to a phishing email is a bad idea!";
        } else {
            message = "Great job! You've correctly marked the phishing email as trash or spam!";
        }
    } else {
        if (action === "reply") {
            message = "Great job! This is a legitimate email.";
        } else {
            message = "Oops! This is a legitimate email. Deleting or marking it as spam is a mistake!";
        }
    }

    document.getElementById("action-alert").style.display = "block";
    document.getElementById("action-alert").className = isPhishing ? "error" : "success";
    document.getElementById("action-alert").innerHTML = message;
}
