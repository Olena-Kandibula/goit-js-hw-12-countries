console.log("hello show Countries");


import debounce from 'lodash.debounce';
import API from './fetchCountries';
import getRefs from './get-refs';
import onAlertNotification from './notification';
import countriesListTmpl from '../templates/countries-list-tmpl.hbs';
import countriesTmpl from'../templates/country-tmpl.hbs';

const refs = getRefs();

refs.inputEl.addEventListener('input', debounce(onSearchCountries, 500));
refs.inputEl.addEventListener('change', debounce(onSearchCountries, 500));
refs.inputEl.addEventListener('keydown', onControlInput);

// console.log(countriesListTmpl)

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

function onFetchError(eror) {
    // const messageError = "incorrect name"
    // refs.countriesList.innerHTML = messageError; 
    refs.countriesList.innerHTML = '';   
}

function showResultSearchCountries(countries) {    
        console.log(countries)
    
        if (countries.length > 10) {
            console.log(countries.length)
            // refs.countriesList.innerHTML = ' '; 
            onAlertNotification()                    
        }

        if (countries.length > 1 && countries.length < 11) {         
            refs.countriesList.innerHTML = countriesListTmpl(countries);
            refs.countriesList.addEventListener('click', onSelectCountry)
                     
    } if (countries.length === 1) {
            console.log(refs.inputEl.value)
        refs.countriesList.innerHTML = countriesTmpl(countries);       
        refs.countriesList.style.pointerEvents = 'none';
        }                
}
    


    
function onSelectCountry(e) {
    const  selectCountry = e.target.innerHTML;
    
    console.log(selectCountry);
    console.log(refs.inputEl);

    refs.inputEl.value = selectCountry;

    searchQuery = selectCountry;
}

// function onFetchError(eror) {    
//     // refs.countriesList.innerHTML = messageError;
//     refs.countriesList.innerHTML = ''; 
// }


