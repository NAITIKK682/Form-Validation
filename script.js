function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
  
    let errors = "";
  
    if (!username || username.trim() === "") {
      errors += "❌ Username cannot be blank.\n";
    }
  
    if (!password || password.trim() === "") {
      errors += "❌ Password cannot be blank.\n";
    } else if (password.length < 8) {
      errors += "❌ Password must be at least 8 characters long.\n";
    }
  
    if (!email || email.trim() === "") {
      errors += "❌ Email cannot be blank.\n";
    } else if (!email.includes("@")) {
      errors += "❌ Email must contain '@'.\n";
    }
  
    if (errors === "") {
      alert("✅ All inputs are valid!");
    } else {
      alert("Errors:\n" + errors);
    }
  }