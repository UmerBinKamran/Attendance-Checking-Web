function login() {
  var emailInput = document.getElementById("email").value;
  var passwordInput = document.getElementById("password").value;

  var storedEmail = "admin@gmail.com";
  var storedPassword = "admin123";

  if (emailInput === storedEmail && passwordInput === storedPassword) {
    alert("Login Successful!");

    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Email or Password");
  }
}
var button = document.getElementById("loginBtn");
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    login();
  }
});
