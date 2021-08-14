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
}

function onFetchError(eror) {     
    refs.countriesList.innerHTML = '';   
}

function showResultSearchCountries(countries) {            
    
        if (countries.length > 10) {                       
            onAlertNotification()                    
        }

        if (countries.length > 1 && countries.length < 11) {         
            refs.countriesList.innerHTML = countriesListTmpl(countries);
            refs.countriesList.style.pointerEvents = 'auto';
            refs.countriesList.addEventListener('click', onSelectCountry)
                     
    } if (countries.length === 1) {        
        refs.countriesList.innerHTML = countriesTmpl(countries);       
        refs.countriesList.style.pointerEvents = 'none';
        onClearCountriesInput()
        refs.inputEl.addEventListener('keydown', onControlDelete);
        }                
} 
    
function onSelectCountry(e) {
    const  selectCountry = e.target.innerHTML;
    refs.inputEl.value = selectCountry;
    searchQuery = selectCountry;
}


function onClearCountriesInput() {
    refs.inputEl.value = ' '
}


function onControlDelete(e) {    
    if ((this.value.length === 1 && e.which === 8))       
        e.preventDefault();   
}