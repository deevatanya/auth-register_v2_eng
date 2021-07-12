const UI = {
  formLogin: document.forms['loginForm'],
  inputEmail: document.getElementById('email'),
  inputPassword: document.getElementById('password'),

  formRegistr: document.forms['regForm'],
  emailReg: document.getElementById('regEmail'),
  passwordReg: document.getElementById('regPassword'),
  nickname: document.getElementById('inputNickname'),
  phone: document.getElementById('inputPhone'),
  firstName: document.getElementById('inputFirstName'),
  lastName: document.getElementById('inputLastName'),
  country: document.getElementById('selectContry'),
  city: document.getElementById('selectCity'),
  birth_date: document.getElementById('birth_date'),
  genderCheckbox: document.getElementsByName('gender'),
};


export default UI;