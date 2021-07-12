import axios from '../plugins/axios';

export async function getCountries () {
  try {
    const response = await axios.get(
      '/location/get-countries',
    );

    const selectContry = document.getElementById('selectContry');

    Object.entries(response).forEach(country => {
      const optionCountry = document.createElement('option');
      optionCountry.id = country[0];
      optionCountry.textContent = country[1];
      selectContry.insertAdjacentElement('beforeend', optionCountry);
    }); 

    return response;
  } catch(err) {
    console.log(err);
    return Promise.reject(err);
  };
}; 

export async function getCities (countryIndex) {
  try {
    const response = await axios.get(
      `location/get-cities/${countryIndex}`,
    );
    const selectCity = document.getElementById('selectCity');
    Object.entries(response).forEach(city => {
      const optionCity = document.createElement('option');
      optionCity.id = city[0];
      optionCity.textContent = city[1];
      selectCity.insertAdjacentElement('beforeend', optionCity);
    }); 

    return response;
  } catch(err) {
    console.log(err);
    return Promise.reject(err);
  };
}; 