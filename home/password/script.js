// Get references to necessary DOM elements
const passwordInput = document.getElementById('passwordInput');
const toggleVisibilityBtn = document.getElementById('toggleVisibilityBtn');
const strengthBar = document.querySelector('.strength-bar');
const strengthText = document.getElementById('strengthText');

// Event listener for password input to check strength
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);
    updateStrengthIndicator(strength);
});

// Toggle password visibility on button click
toggleVisibilityBtn.addEventListener('click', () => {
    // Toggle between 'password' and 'text' input types
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    // Ensure the input field retains the same styles
    passwordInput.style.backgroundColor = '#333'; // Keep the background consistent
    passwordInput.style.color = '#fff'; // Keep the text color consistent
    passwordInput.style.border = '1px solid #444'; // Keep the border consistent

    // Update the button text based on the input type
    toggleVisibilityBtn.textContent = type === 'password' ? 'Show' : 'Hide';
});

// Function to calculate password strength based on different criteria
function calculatePasswordStrength(password) {
    let strength = 0;

    // Check password length
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) strength += 1;

    // Check for lowercase letters
    if (/[a-z]/.test(password)) strength += 1;

    // Check for numbers
    if (/[0-9]/.test(password)) strength += 1;

    // Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    return strength;
}

// Function to update the strength indicator based on calculated strength
function updateStrengthIndicator(strength) {
    let color = 'red';
    let text = 'Very Weak';

    // Set color and text based on strength level
    if (strength >= 1) {
        color = 'orange';
        text = 'Weak';
    }
    if (strength >= 2) {
        color = 'yellow';
        text = 'Medium';
    }
    if (strength >= 3) {
        color = 'green';
        text = 'Strong';
    }
    if (strength >= 4) {
        color = 'darkgreen';
        text = 'Very Strong';
    }

    // Update the strength bar width and color
    strengthBar.style.width = `${(strength / 5) * 100}%`; // Divide by 5 since the strength can go up to 5
    strengthBar.style.backgroundColor = color;  // Set the color of the strength bar

    // Update the text indicating password strength
    strengthText.textContent = `Password Strength: ${text}`;
}
