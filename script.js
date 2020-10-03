var username = document.getElementById("username");
var password = document.getElementById("password");
var confirmpassword = document.getElementById("confirmpassword");
var email = document.getElementById("email");
var form = document.getElementById("form");
var details = [];

const showError = (input, message) => {
  console.log(message);
  const formcontrol = input.parentElement;
  formcontrol.classname = "form-control error";
  const small = formcontrol.querySelector("small");
  small.innerText = message;
};
const showSuccess = (input) => {
  const formcontrol = input.parentElement;
  console.log(formcontrol);
  formcontrol.classname = "form-control success";
};
const checkRequired = (input) => {
  console.log(input);
  input.forEach((item) => {
    if (item.value.trim() == "") {
      showError(item, `${item.id} is required.`);
    } else {
      showSuccess(item);
    }
  });
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, password, confirmpassword, email]);
  checkMinMaxlength(username, 3);
  checkMinMaxlength(password, 6);
  checkEmail(email);
  passwordMatch(password, confirmpassword);
});

const checkMinMaxlength = (input, x) => {
  if (input.value.length < 3) {
    showError(input, `Enter atleast ${x} charaters`);
  } else {
    showSuccess(input);
  }
};

function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, "email not valid");
  }
}

const passwordMatch = (x, y) => {
  if (x.value.trim() !== y.value.trim()) {
    showError(y, "passwords do not match");
  }else{
    showSuccess(y)
  }
};
