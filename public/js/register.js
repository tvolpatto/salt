$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form#register-form");
  var emailInput = $("input#email");
  var passwordInput = $("input#password");
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
    };

    if (!userData.email || !userData.password || !userData.name || !userData.phone) {
      return;
    }

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors

    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }


    function registerUser(email, password, name, phone) {
      $.post("/api/register", {
        email: email,
        password: password,
        name: name,
        phone: phone,
      })
        .then(function() {
          window.location.replace("/");
        })
        .catch(handleLoginErr);
    }


    // If we have an email and password, run the signUpUser function
    registerUser(userData.email, userData.password, userData.name, userData.phone);
    emailInput.val("");
    passwordInput.val("");
    nameInput.val("");
    phoneInput.val("");
  });

});
