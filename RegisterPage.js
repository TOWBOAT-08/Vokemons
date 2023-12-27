function validateForm(event) {
    event.preventDefault();
    clearErrors();
    validateName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    validateGender();

    if (isFormValid()) {
        alert("Registration successful! Welcome to vokemonS.");
    }
}

function isFormValid() {
    const errorElements = document.querySelectorAll(".error");
    for (const errorElement of errorElements) {
        if (errorElement.innerText !== "") {
            return false;
        }
    }
    return true;
}

function clearErrors() {
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
    document.getElementById("genderError").innerText = "";
}

function validateName() {
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");

    if (nameInput.value.trim() === "") {
        nameError.innerText = "Name is required";
    }
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    if (emailInput.value.trim() === "") {
        emailError.innerText = "Email is required";
        return;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.innerText = "Please enter a valid Gmail address";
    }
}

function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");

    if (passwordInput.value.trim() === "") {
        passwordError.innerText = "Password is required";
        return;
    }
    const hasUpperCase = /[A-Z]/.test(passwordInput.value);
    const hasLowerCase = /[a-z]/.test(passwordInput.value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput.value);
    const hasDigit = /\d/.test(passwordInput.value);

    if (!(hasUpperCase && hasLowerCase && hasSpecialChar && hasDigit && passwordInput.value.length >= 8)) {
        passwordError.innerText = "Password must have at least 8 characters and contain at least one uppercase letter, one lowercase letter, one special character, and one digit.";
    }
}

function validateConfirmPassword() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    if (confirmPasswordInput.value.trim() === "") {
        confirmPasswordError.innerText = "Confirm Password is required";
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.innerText = "Passwords do not match";
    }
}

function validateGender() {
    const genderError = document.getElementById("genderError");

    const male = document.getElementById("male");
    const female = document.getElementById("female");

    if (!male.checked && !female.checked) {
        genderError.innerText = "Please select a gender";
    }
    window.location.href="VokemonS.html"
}

