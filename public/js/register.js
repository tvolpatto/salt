$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form#register-form");
    var emailInput = $("input#email");
    var passwordInput = $("input#password");
    var nameInput = $("input#name")
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        name: nameInput.val().trim(),
      };
  
      if (!userData.email || !userData.password || !userData.name) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password, userData.name);
      emailInput.val("");
      passwordInput.val("");
      nameInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, name) {
      $.post("/api/signup", {
        email: email,
        password: password,
        name: name,
      })
        .then(function(data) {
            console.log('signupUser')
        //   window.location.replace("/members");
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  