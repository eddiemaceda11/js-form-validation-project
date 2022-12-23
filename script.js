// variables
const form = document.getElementById("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

// event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

// email.addEventListener("input", (e) => {
//   console.log(e.target.value);

//   validateInputs();
// });

// function that returns an error message if form input isn't valid
const setError = (element, message) => {
  const inputDiv = element.parentElement;
  const errorDisplay = inputDiv.querySelector(".error");

  errorDisplay.innerText = message;
  inputDiv.classList.add("error");
  inputDiv.classList.remove("success");
};

// function that displays green border around input box if the form input is valid
const setSuccess = (element) => {
  const inputDiv = element.parentElement;
  const errorDisplay = inputDiv.querySelector(".error");

  errorDisplay.innerText = "";
  inputDiv.classList.add("success");
  inputDiv.classList.remove("error");
};

// function that takes in the email value and checks whther email format is valid
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// validate email after each input
// const validateEmail = (email) => {
//   if (emailValue === "") {
//     setError(email, "*Email is required");
//   } else if (!isValidEmail(emailValue)) {
//     setError(email, "*Please enter a valid email address");
//   } else {
//     setSuccess(email);
//   }
// };

// the main function that will validate all inputs and send the information when form the is submitted
const validateInputs = () => {
  const emailValue = email.value.trim();
  const countryValue = country.value.trim();
  const zipValue = zip.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();

  if (emailValue === "") {
    setError(email, "*Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "*Please enter a valid email address");
  } else {
    setSuccess(email);
  }

  if (countryValue === "") {
    setError(country, "*Country is required");
  } else {
    setSuccess(country);
  }

  if (zipValue === "") {
    setError(zip, "*Zip Code is required");
  } else {
    setSuccess(zip);
  }

  if (password1Value === "") {
    setError(password1, "*Password is required");
  } else if (password1Value.length < 8) {
    setError(password1, "*Password must be at least 8 characters");
  } else if (password1Value != password2Value) {
    setError(password1, "*Passwords must match");
  } else {
    setSuccess(password1);
  }

  if (password2Value === "") {
    setError(password2, "*Password is required");
  } else if (password2Value.length < 8) {
    setError(password2, "*Password must be at least 8 characters");
  } else if (password2Value != password1Value) {
    setError(password2, "*Passwords must match");
  } else {
    setSuccess(password2);
  }

  const inputContainer = document.querySelector(".input-container");

  console.log(inputContainer.children[0]);
  console.log(inputContainer.children[1]);
  console.log(inputContainer.children[2]);
  console.log(inputContainer.children[3]);
  console.log(inputContainer.children[4]);

  if (
    inputContainer.children[0].classList.contains("success") &&
    inputContainer.children[1].classList.contains("success") &&
    inputContainer.children[2].classList.contains("success") &&
    inputContainer.children[3].classList.contains("success") &&
    inputContainer.children[4].classList.contains("success")
  ) {
    console.log("SUCCESS");
  }

  // inputDiv.forEach((input) => {
  //   if (input.classList.contains("success")) {
  //     console.log("High five!");
  //     console.log(form);
  //     form.reset();
  //   }
  // });
};
