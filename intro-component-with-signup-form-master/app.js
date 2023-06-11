function validateForm(event) {
    event.preventDefault();

//reset error messages
const errorMessages = document.getElementsByClassName('error-message');
for (let i = 0; i<errorMessages.length; i++) {
    errorMessages[i].textContent = '';
}

//reset input border color
const inputs = document.getElementsByTagName('input');
for (let i = 0; i< inputs.length; i++) {
    inputs[i].style.borderColor = '';
}

//validate each input field
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('pass');

if (firstName.value === '') {
    firstName.style.borderColor = 'hsl(0, 100%, 74%)';
    document.getElementById('firstNameError').textContent = 'First Name cannot be empty';
}

if (lastName.value === '') {
    lastName.style.borderColor = 'hsl(0, 100%, 74%)';
    document.getElementById('lastNameError').textContent = 'Last Name cannot be empty';
}

if (email.value === '') {
    email.style.borderColor = 'hsl(0, 100%, 74%)';
    document.getElementById('emailError').textContent = 'Email cannot be empty';
}

if (password.value === '') {
    password.style.borderColor = 'hsl(0, 100%, 74%)';
    document.getElementById('passError').textContent = 'Password cannot be empty';
}

//submit if there are no errors
if (
    firstName.value !== '' &&
    lastName.value !== '' &&
    email.value !== '' &&
    password.value !== ''
) {
    document.getElementById('myForm').submit();
}
}

var button = document.getElementById('submit');
button.addEventListener('click', validateForm);