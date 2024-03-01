
function togglePassword() {
  var passwordField = document.getElementById("password");
  var showPasswordCheckbox = document.getElementById("showPassword");

  if (showPasswordCheckbox.checked) {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

document.getElementById('menu-btn').addEventListener('click', function () {
  var sidebar = document.getElementById('sidebar');
  var content = document.getElementById('content');
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
    content.style.marginLeft = "250px";
    this.innerHTML = "&#10005;";
  } else {
    sidebar.style.left = "-250px";
    content.style.marginLeft = "0";
    this.innerHTML = "&#9776;";
  }
});

function appendToInput(value) {
  var displayInput = document.getElementById("display-input");
  displayInput.value += value;
}