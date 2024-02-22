// Function to validate email address
function validateEmail(email) {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email against the regex
    if (emailRegex.test(email)) {
        return true; // Valid email
    } else {
        return false; // Invalid email
    }
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get the input value
    const emailInput = document.getElementById('email').value.trim();
    const errorMessage = document.querySelector('#error-message')

    // Check if the email is valid
    if (validateEmail(emailInput)) {
        errorMessage.innerHTML = ""
        // You can perform additional actions here if the email is valid
    } else {
        errorMessage.innerHTML = 'Your email is not valid ❌';
        // You can provide additional instructions or actions if the email is invalid
    }
}

// Attach the handleSubmit function to the form submission event
document.querySelector('.get-started-mail').addEventListener('click', handleSubmit);
