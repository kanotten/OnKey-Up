const firstNameInput = document.getElementById("first-name");
const signUpButton = document.getElementById("signup-BTN");
const errorMessage = document.getElementById("error-Message");
const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");

console.log("firstNameInput: ", firstNameInput);
console.log("signUpBTN: ", signUpButton);

firstNameInput.onkeyup = function (event) {
  let firstNameInputValue = event.target.value;

  if (firstNameInputValue.length >= 5) {
    signUpButton.disabled = false;
    errorMessage.innerHTML = "Your name is suitable";
    errorMessage.style.backgroundColor = "green";
    errorMessage.classList.add = "success";
  } else {
    signUpButton.disabled = true;
    errorMessage.innerHTML = "Your name is too short";
    errorMessage.style.backgroundColor = "red";
    errorMessage.classList.add = "error";
  }
};

// passwordInput.onkeyup = function (event) {
//   let passordValue = event.target.value;

//   // switch case
//   // i check on the total number of chars
//   //check value to change actions " if it is lower or higher then ex 5 do this etc"

//   let totalNumbersOfCharsInPassword = passordValue.length;
//   switch (totalNumbersOfCharsInPassword) {
//     case totalNumbersOfCharsInPassword === "123456":
//       passwordErrorMessage.innerHTML = " ☠️ you will be hacked easy";
//       break;
//     case totalNumbersOfCharsInPassword > 3:
//       passwordErrorMessage.innerHTML = " 😑 your password is Okey";
//       break;
//     case totalNumbersOfCharsInPassword > 5:
//       passwordErrorMessage.innerHTML = " 🙄 your password is average";
//       break;
//     case totalNumbersOfCharsInPassword > 8:
//       passwordErrorMessage.innerHTML = "🙏🏽 your password is very safe";
//       break;
//   }
// };




