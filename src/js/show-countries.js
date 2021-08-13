console.log("hello show Countries");
import * as Handlebars from "handlebars";

import debounce from 'lodash.debounce';
import API from './fetchCountries';
import getRefs from './get-refs';
import onAlertNotification from './notification';
import '../templates/country-tmpl.hbs';

const refs = getRefs();

refs.inputEl.addEventListener('input', debounce(onSearchCountries, 500));
refs.inputEl.addEventListener('change', debounce(onSearchCountries, 500));
refs.inputEl.addEventListener('keydown', onControlInput);



function onControlInput(e) {    
    if ((this.value.length === 0 && e.which === 32)
        || (e.which >= 96 && e.which <= 105))
    e.preventDefault();
}


let searchQuery = " ";

function onSearchCountries(e) {

      searchQuery = e.target.value;        
    
    API.fetchCountries(searchQuery)
        .then(showResultSearchCountries)              
        .catch(onFetchError)                 
        // .finally(onClearCountriesList)       
  
}

// function onFetchError(eror) {
//     const messageError = "incorrect name"
//     refs.countriesList.innerHTML = messageError;   
// }

function showResultSearchCountries(countries) {    
        
    
        if (countries.length > 10) {
            console.log(countries.length)
            refs.countriesList.innerHTML = ' '; 
            onAlertNotification()                    
        }

        if (countries.length > 1 && countries.length < 11) {
            const countriesHTML = countries
                .map((country) => `<h1>${country.name}</h1>`)
                .join('')
            refs.countriesList.innerHTML = countriesHTML;
            // refs.countriesList.innerHTML = countriesListTmpl(country);
            refs.countriesList.addEventListener('click', onSelectCountry)
                     
        } if (countries.length === 1) {            
            const countriesHTML = countries
                .map((country) => `<h1>${country.name}</><h2>${country.capital}</h2>`)
                .join('')
            refs.countriesList.innerHTML = countriesHTML;                    
        }                
    }

    
function onSelectCountry(e) {
    const  selectCountry = e.target.innerHTML;
    
    console.log(selectCountry);
    console.log(refs.inputEl);

    refs.inputEl.value = selectCountry;

    searchQuery = selectCountry;
}

function onFetchError(eror) {    
    refs.countriesList.innerHTML = messageError;   
}


