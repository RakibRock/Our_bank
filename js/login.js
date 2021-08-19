document.getElementById("submitBtn").addEventListener("click", function () {
  const emailField = document.getElementById("email-field");
  const email = emailField.value;
  //password
  const passwordField = document.getElementById("password-field");
  const password = passwordField.value;
  if (email == "putu@gmail.com" && password == "123") {
    window.location.href = "bank.html";
  } else console.log("not crt");
});
