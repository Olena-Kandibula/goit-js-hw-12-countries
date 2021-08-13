// import fetchCountries from './fetchCountries'; 


// import './sass/main.scss';

console.log("index -fetchCountries")
import debounce from 'lodash.debounce';
// import CountriesApiService from './api-service';
// const countriesApiService = new CountriesApiService();

const refs = {
    inputEl: document.querySelector('.input'),
    countriesList: document.querySelector('#countries-result')    
}

// this.fetchCountries = this.fetchCountries.bind(this);
refs.inputEl.addEventListener('input', debounce(onSearchCountries, 500));


function onSearchCountries(e) {
//   countriesApiService.query = e.target.value;
    const  searchQuery = e.target.value;
    console.log(searchQuery);
    
    // function fetchCountries() {
        const urlApi = `https://restcountries.eu/rest/v2/name/${searchQuery}?fields=name;capital;population;languages;flag`;
    console.log(urlApi);

    if (refs.inputEl.value !== ' ') {
        fetch(urlApi)

            .then((response) => response.json())
        
            // .then(console.log)
            .then((countries) => {
                // console.log(typeof countries)
                // const countriesHTML = countries
                //     .map((country) => `<h1>${country.name}</>`)
                //     .join('')
                // refs.countriesList.innerHTML = countriesHTML;
                // console.log(countriesHTML)
                var size = Object.keys(countries).length;
                console.log(size)
                if (size > 10) {
                    notification()
                    refs.countriesList.innerHTML = ' ';
                }
                if (size > 1 && size < 11) {
                    const countriesHTML = countries
                        .map((country) => `<h1>${country.name}</h1>`)
                        .join('')
                    refs.countriesList.innerHTML = countriesHTML;
                }
                // else            {
                //     const countriesHTML = countries
                //     .map((country) => `<h1>${country.name}</><h2>${country.capital}</h2>`)
                //     .join('')
                // refs.countriesList.innerHTML = countriesHTML;
                // }

            })
            .finally(() => {
                onClearCountriesList();
            });
    }
   console.log('go out')
    }
function notification() {
       console.log('too many matches...')
}
   
function onClearCountriesList() {
    if (refs.inputEl.value === '') {
    refs.countriesList.innerHTML = '';
  }
}

    // countriesApiService.fetchCountries() 
    // fetchCountries(searchQuery)
// }