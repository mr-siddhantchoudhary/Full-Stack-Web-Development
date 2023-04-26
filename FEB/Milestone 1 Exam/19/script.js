function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const emailRegex = /\S+@\S+\.\S+/;
    
    if (!emailRegex.test(email)) {
      showError("Invalid email or password!");
      return;
    }
    
    if (password.length < 8) {
      showError("Invalid email or password!");
      return;
    }
    
    // Clear any existing error message
    const error = document.getElementById("error");
    error.innerHTML = "";
    
    // Form is valid, submit it
    document.getElementById("login-form").submit();
  }
  
  function showError(message) {
    const error = document.getElementById("error");
    error.style.color = "green";
    error.innerHTML = message;
  }