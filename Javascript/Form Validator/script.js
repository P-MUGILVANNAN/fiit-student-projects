document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const submitBtn = document.getElementById('submitBtn');
    
    // Form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    // Error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirmPassword-error');
    
    // Validation functions
    function validateName() {
        const name = nameInput.value.trim();
        if (name === '') {
            showError(nameInput, nameError, 'Name is required');
            return false;
        } else if (name.length < 2) {
            showError(nameInput, nameError, 'Name must be at least 2 characters');
            return false;
        } else {
            showSuccess(nameInput, nameError);
            return true;
        }
    }
    
    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            showError(emailInput, emailError, 'Email is required');
            return false;
        } else if (!emailRegex.test(email)) {
            showError(emailInput, emailError, 'Please enter a valid email');
            return false;
        } else {
            showSuccess(emailInput, emailError);
            return true;
        }
    }
    
    function validatePassword() {
        const password = passwordInput.value;
        
        if (password === '') {
            showError(passwordInput, passwordError, 'Password is required');
            return false;
        } else if (password.length < 6) {
            showError(passwordInput, passwordError, 'Password must be at least 6 characters');
            return false;
        } else {
            showSuccess(passwordInput, passwordError);
            return true;
        }
    }
    
    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (confirmPassword === '') {
            showError(confirmPasswordInput, confirmPasswordError, 'Please confirm your password');
            return false;
        } else if (password !== confirmPassword) {
            showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match');
            return false;
        } else {
            showSuccess(confirmPasswordInput, confirmPasswordError);
            return true;
        }
    }
    
    // Helper functions
    function showError(input, errorElement, message) {
        input.classList.add('input-error');
        input.classList.remove('input-success');
        errorElement.textContent = message;
    }
    
    function showSuccess(input, errorElement) {
        input.classList.remove('input-error');
        input.classList.add('input-success');
        errorElement.textContent = '';
    }
    
    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        
        return isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
    }
    
    function updateSubmitButton() {
        submitBtn.disabled = !validateForm();
    }
    
    // Event listeners
    nameInput.addEventListener('input', () => {
        validateName();
        updateSubmitButton();
    });
    
    emailInput.addEventListener('input', () => {
        validateEmail();
        updateSubmitButton();
    });
    
    passwordInput.addEventListener('input', () => {
        validatePassword();
        // Re-validate confirm password when password changes
        if (confirmPasswordInput.value) {
            validateConfirmPassword();
        }
        updateSubmitButton();
    });
    
    confirmPasswordInput.addEventListener('input', () => {
        validateConfirmPassword();
        updateSubmitButton();
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Form is valid, you can submit it here
            alert('Form submitted successfully!');
            // form.submit(); // Uncomment to actually submit the form
        }
    });
    
    // Initial validation check
    updateSubmitButton();
});