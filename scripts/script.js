'use strict'

// get elements by varibales
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// functions
// showError function
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// showSuccess function 
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}

// check email function
function checkEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// eventhandler
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'Email is required');
  }else if(!checkEmail(email.value)){
    showError(email, 'Email is invalid')
  }
   else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'password is required');
  } else {
    showSuccess(password);
  }

  if (confirmPassword.value === '') {
    showError(confirmPassword, 'Confirm Password is required');
  } else if (password.value !== confirmPassword.value){
    showError(confirmPassword, `Password don't match`);
  }
  else {
    showSuccess(confirmPassword);
  }
})

