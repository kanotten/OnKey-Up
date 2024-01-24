function checkInputLength() {
    var input = document.getElementById('firstNameInput');
    var button = document.getElementById('submitButton');

    if (input.value.length > 5) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}