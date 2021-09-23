const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show error
function showerror(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Shows green border
function showsuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Checks required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showerror(input, `${getFieldAt(input)} is required`);
    } else {
      showsuccess(input);
    }
  });
}

// Check length of input
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showerror(input, `${getFieldAt(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showerror(
      input,
      `${getFieldAt(input)} must be less than ${min} characters`
    );
  } else {
    showsuccess(input);
  }
}

// Check email is valid or not
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(input.value)) {
    showerror(input, "Email is not valid");
  } else {
    showsuccess;
  }
}

// Check Password
function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showerror(input2, "Passwords do not match");
  }
}

// Get id name for error
function getFieldAt(input) {
  console.log(input.id);
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPassword(password, password2);
});
