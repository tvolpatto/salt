$(document).ready(function() {

  $(".sidenav").sidenav();
  // Getting references to our form and input
  var signUpForm = $("form#register-form");
  var emailInput = $("input#email");
  var passwordInput = $("input#password");
  var passwordValidateInput = $("input#passwordValidate");
  var nameInput = $("input#name");
  var phoneInput = $("input#phone");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      name: nameInput.val().trim(),
      phone: phoneInput.val().trim(),
      passVal: passwordValidateInput.val().trim(),
    };

    if (!userData.email || !userData.password || !userData.name || !userData.phone) {
      return;
    }


    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function alertPassMatchError() {
      var x = document.getElementById("snackbar2");
      x.className = "show";
      setTimeout(function(){
        x.className = x.className.replace("show", "");
      }, 3000);
    }

    function alertLoginError() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){
        x.className = x.className.replace("show", "");
      }, 3000);
    }

    function registerUser(email, password, name, phone) {
      $.post("/api/register", {
        email: email,
        password: password,
        name: name,
        phone: phone,
      })
        .then(function() {
          emailInput.val("");
          passwordInput.val("");
          nameInput.val("");
          phoneInput.val("");
          passwordValidateInput.val("");
          window.location.replace("/");
        })
        .fail(function(){
          alertLoginError();
        });
    }

    function validatePasswordMatch(pass1, pass2) {
      if (pass1 !== pass2) {
        alertPassMatchError();
        passwordValidateInput.val("");
        passwordInput.val("");
      } else if (pass1 === pass2) {
        registerUser(userData.email, userData.password, userData.name, userData.phone);
      }
    }

    validatePasswordMatch(userData.password, userData.passVal);
  });

});
