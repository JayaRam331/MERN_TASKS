document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const poorPasswordField = document.getElementById("poorPassword");
    const strongPasswordField = document.getElementById("strongPassword");
    const poorError = document.getElementById("poorError"); // New error element

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const poorPassword = poorPasswordField.value;
        const strongPassword = strongPasswordField.value;

        // Check poor password (e.g., length less than 6 characters)
        if (poorPassword.length < 6) {
            poorError.textContent = "Poor"; // Display "Poor" next to the field
            alert("Poor password: Password must be at least 6 characters long.");
            return;
        } else {
            // Clear the error message if it's not needed
            poorError.textContent = "";
        }

        // Check strong password (e.g., contains at least one uppercase letter and one digit)
        if (!/(?=.*[A-Z])(?=.*\d)/.test(strongPassword)) {
            alert("Strong password: Password must contain at least one uppercase letter and one digit.");
            return;
        }

        // If both passwords pass validation, you can proceed with form submission
        alert("Form submitted successfully!");
        form.reset(); // Optionally, reset the form after successful submission
    });
});
