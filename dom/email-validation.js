// valid email abc@gmail.com abc@yahoo.com
// invalid email abc
const emailInput = document.querySelector(".input");
emailInput.addEventListener("input", function (e) {
  const value = e.target.value;
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regexEmail.test(value.trim())) {
    console.log("Valid Email!");
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    console.log("Invalid Email");
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
  if (!value) {
    e.target.classList.remove("invalid");
  }
});
