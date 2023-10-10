document.addEventListener("DOMContentLoaded", function () {
    const registration = document.getElementById("registration");

    registration.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("semail").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Password does not match");
            return;
        }
    });
});