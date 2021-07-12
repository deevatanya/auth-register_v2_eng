import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login } from './services/auth.service';
import { register } from './services/register.service';
import { getCities, getCountries } from './services/city.services';
import { notify } from './views/notifications';
import { getNews } from './services/news.service';



const { formLogin, inputEmail, inputPassword, formRegistr, emailReg, passwordReg, nickname, phone, firstName, lastName, country, city, birth_date, genderCheckbox } = UI;

const inputsLog = [inputEmail, inputPassword];
const inputsReg = [emailReg, passwordReg, nickname, phone, firstName, lastName, birth_date];


// Events
formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  onLoginHandler();
});

formRegistr.addEventListener('submit', (e) => {
  e.preventDefault();
  onRegistrHandler();
});

inputsLog.forEach(el => el.addEventListener('focus', () => removeInputError(el)));
inputsReg.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

country.addEventListener('focus', () => {
  getCountries();

})
country.addEventListener('change', () => {
  const _id = country.options[country.selectedIndex].getAttribute('id');

  if (_id) {
    city.removeAttribute('disabled');
    city.innerHTML = '';
    getCities(_id);
  } else {
    city.innerHTML = '';
  };
});

// Handlers
async function onLoginHandler() {
  const isValidForm = inputsLog.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    formLogin.reset();

    // show success notify
    notify({ msg: 'You are login success!', className: 'alert-success'});
  } catch(err) {
    // show error notify
    notify({msg: 'Invalid login and/or password!', className: 'alert-danger'});
  }
}

async function onRegistrHandler() {
  const isValidForm = inputsReg.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    };

    return isValidInput;
  });

  if (!isValidForm) return;

  const birth_date_split = birth_date.value.split('.');
  let gender = "";
  for(let i = 0; i<genderCheckbox.length; i++) {
    if(genderCheckbox[i].checked) {
      gender = genderCheckbox[i].value;
    }
  }

  const userData = {
    email: emailReg.value,
    password: passwordReg.value,
    nickname: nickname.value,
    first_name: firstName.value,
    last_name: lastName.value,
    phone: phone.value,
    gender_orientation: gender,
    city: city.value,
    country: country.value,
    date_of_birth_day: Number(birth_date_split[0]),
    date_of_birth_month: Number(birth_date_split[1]),
    date_of_birth_year: Number(birth_date_split[2]),
  };
  console.log(userData);

  try {
    await register(userData);
    formRegistr.reset();
    city.innerHTML = '';
    // show success notify
    notify({ msg: "User created success. On your email sended link. Please verify your email.", className: 'alert-success'});
  } catch(err) {
    // show error notify
    notify({msg: "You are not registered. Please check your data.", className: 'alert-danger'});
  };
};


// Login: denis.m.pcspace@gmail.com
// Password: dmgame12345