$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $("form#reg-form");
    var emailInput = $("input#email");
    var passwordInput = $("input#password");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
      console.log(userData)
      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      })
        .then(function() {
         console.log("Pinged Database with User info")
        })
        .catch(function(err) {
          alert('Invalid Login Credentials')
        });
    }
  });
  