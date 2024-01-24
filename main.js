

const firstNameInput = document.getElementById("first-name");
const signUpButton = document.getElementById("submit");

console.log("firstNameInput: ", firstNameInput);
console.log("signUpBTN: ", signUpButton);

firstNameInput.onkeyup = function (event) {
  let firstNameInputValue = event.target.value.length;

  if (firstNameInputValue >= 5) {
    signUpButton.disabled = false;
  } else {
    signUpButton.disabled = true;
  }
};


const shortMessage = document.getElementById("shortName")
const suitableMessage = document.getElementById("suitableName")



//   firstNameInputValue,length >= 5 ? signUpButton.disabled = false : signUpButton.disabled = true;


// const input = document.getElementById('first-name');
// const button = document.getElementById('submit');

// console.log("firstNameInput: ",firstNameInput);
// console.log("formSignUpBTN: ",formSignupBTN);

// function

// if (input.value.length >= 5) {
//     button.disabled = false;
// } else {
//     button.disabled = true;
// }
