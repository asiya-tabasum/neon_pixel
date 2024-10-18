document.addEventListener("DOMContentLoaded", function() {
    const mobileInput = document.getElementById('mobile');
    const errorMessage = document.getElementById('error-message');
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    mobileInput.addEventListener('input', function() {
        const mobileNumber = mobileInput.value;
        // Regular expression to check if the input contains exactly 10 digits
        const isValid = /^\d{10}$/.test(mobileNumber);

        if (!isValid && mobileNumber !== '') {
            errorMessage.textContent = 'Please enter a valid 10-digit mobile number.';
            errorMessage.style.display = 'block'; // Show the error message
        } else {
            errorMessage.style.display = 'none'; // Hide the error message
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Check if the mobile number is valid before showing success message
        const mobileNumber = mobileInput.value;
        const isValid = /^\d{10}$/.test(mobileNumber);

        if (isValid) {
            successMessage.style.display = 'block'; // Show success message
            form.reset(); // Reset the form fields
            errorMessage.style.display = 'none'; // Hide error message if previously shown
        } else {
            errorMessage.textContent = 'Please enter a valid 10-digit mobile number.';
            errorMessage.style.display = 'block'; // Show error message if mobile number is invalid
        }
    });
});
