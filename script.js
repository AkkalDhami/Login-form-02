const passwordInput = document.getElementById("loginPassword");
const hideIcon = document.querySelector(".hideIcon");

// Add an event listener to the hide icon
hideIcon.addEventListener("click", () => {
  // Toggle the visibility of the password
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  // Update the icon class
  if (passwordInput.type === "password") {
    hideIcon.classList.remove("fa-eye");
    hideIcon.classList.add("fa-eye-slash");
  } else {
    hideIcon.classList.remove("fa-eye-slash");
    hideIcon.classList.add("fa-eye");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login");
  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  const loginError = document.getElementById("loginError");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear any previous error messages
    loginError.textContent = "";

    const email = loginEmail.value.trim();
    const password = loginPassword.value;

    if (!validateEmail(email)) {
      showError("Please enter a valid email address.");
      return;
    }
    performLogin(email, password);
  });

  function validateEmail(email) {
    // Basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePassword(password) {
    if (password.length < 6 || password.length > 20) {
      return "invalid";
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);

    if (hasUppercase && hasLowercase && hasNumbers) {
      return "strong";
    }

    return "weak";
  }

  function showError(message) {
    loginError.textContent = message;
    loginError.style.color = "green";
  }

  function performLogin(email, password) {
    const storedEmail = "test@example.com"; // Example stored email
    const storedPassword = "Test123"; // Example stored password

    if (email === storedEmail && password === storedPassword) {
      alert("Login successful!");
      let formControl = document.getElementsByClassName("formControl");
      Array.from(formControl).forEach((curElem) => (curElem.value = ""));
    } else {
      showError("Invalid email or password.");
    }
  }
});
