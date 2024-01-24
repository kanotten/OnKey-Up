const firstNameInput = document.getElementById("first-name");
const signUpButton = document.getElementById("signup-BTN");
const errorMessage = document.getElementById("error-Message");

console.log("firstNameInput: ", firstNameInput);
console.log("signUpBTN: ", signUpButton);

firstNameInput.onkeyup = function (event) {
    let firstNameInputValue = event.target.value;

    if (firstNameInputValue.length >= 5) {
      signUpButton.disabled = false;
      errorMessage.innerHTML = "Your name is suitable";
      errorMessage.style.backgroundColor = "green";
    } else {
      signUpButton.disabled = true;
      errorMessage.innerHTML = "Your name is too short";
      errorMessage.style.backgroundColor = "red";
    }
};
