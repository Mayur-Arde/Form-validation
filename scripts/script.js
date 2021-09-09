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

// check text empty function
function checkRequired (inputArry){
  inputArry.forEach(function(input) {
    if (input.value.trim() === ''){
      showError(input , `${getinputfield(input)} is required`);
    }else{
      showSuccess(input);
    }
  });
}

// getinput field function
function getinputfield(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1) ;
}

// check email function
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase());
  if (re.test(input.value.trim())){
    showSuccess(input);
  }else{
    showError(input, 'Email is invaild')
  }
}

// check password and confirm password same function
function checkPasswordsMatch(input1,input2){
  if (input1.value !== input2.value){
    showError(input2, `Passwords do not match`)
  }else{
    // showSuccess(input2);
  }
}

// check length of username and password
function checkInputLength (input, min, max){
  if (input.value.length < min){
    showError(input, `${getinputfield(input)} must be atleast ${min} characters`);
  }else if (input.value.length < min){
    showError(input, `${getinputfield(input)} must be less than ${max} characters`)
  }
}

// eventhandler
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // if (username.value === '') {
  //   showError(username, 'Username is required');
  // } else {
  //   showSuccess(username);
  // }

  // if (email.value === '') {
  //   showError(email, 'Email is required');
  // }else if(!checkEmail(email.value)){
  //   showError(email, 'Email is invalid')
  // }
  //  else {
  //   showSuccess(email);
  // }

  // if (password.value === '') {
  //   showError(password, 'password is required');
  // } else {
  //   showSuccess(password);
  // }

  // if (confirmPassword.value === '') {
  //   showError(confirmPassword, 'Confirm Password is required');
  // } else if (password.value !== confirmPassword.value){
  //   showError(confirmPassword, `Password don't match`);
  // }
  // else {
  //   showSuccess(confirmPassword);
  // }
  checkRequired([username , email , password , confirmPassword]);
  checkEmail(email);
  checkPasswordsMatch(password, confirmPassword);
  checkInputLength(username, 3 , 20);
  checkInputLength(password, 6 , 25);
})

