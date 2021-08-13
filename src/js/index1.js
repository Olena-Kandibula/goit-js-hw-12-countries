// import fetchCountries from './fetchCountries';
import './show-countries';




// console.log("index -fetchCountries")
// import debounce from 'lodash.debounce';

// const refs = {
//     inputEl: document.querySelector('.input'),
//     countriesList: document.querySelector('#countries-result')    
// }

// refs.inputEl.addEventListener('input', debounce(onSearchCountries, 500));
// refs.inputEl.addEventListener('change', debounce(onSearchCountries, 500));
// let searchQuery = " ";


// function onSearchCountries(e) {

//     // const searchQuery = e.target.value;
//       searchQuery = e.target.value;
//     console.log(searchQuery);    
    
//      const urlApi = `https://restcountries.eu/rest/v2/name/${searchQuery}?fields=name;capital;population;languages;flag`;
//     console.log(urlApi);

//     if (refs.inputEl.value !== ' ') {
//         fetch(urlApi)
//             .then((response) => response.json())
//             // .then(console.log)
//             // .then(console.log(query.status))

//             .then(countries => {
//                 console.log(countries.length)
//                 // var size = Object.keys(countries).length;
//                 // console.log(size)

//                 if (countries.length > 10) {
//                     // notification()
//                     refs.countriesList.innerHTML = ' ';
//                     console.log('big size')

//                     onAlertNotification()
//                     //                     function onAlertNotification() {
//                     //                         alert({
//                     //   text: "Notice that's positioned in its own stack.",
//                     //   stack: new Stack({
//                     //     dir1: 'down', dir2: 'right', // Position from the top left corner.
//                     //     firstpos1: 90, firstpos2: 90 // 90px from the top, 90px from the left.
//                     //   })
//                     // });
                    
//                 }

//                 if (countries.length > 1 && countries.length < 11) {
//                     const countriesHTML = countries
//                         .map((country) => `<h1>${country.name}</h1>`)
//                         .join('')
//                     refs.countriesList.innerHTML = countriesHTML;
//                     refs.countriesList.addEventListener('click', onSelectCountry)
                     
//                 } if (countries.length === 1) {
                
//                     const countriesHTML = countries
//                         .map((country) => `<h1>${country.name}</><h2>${country.capital}</h2>`)
//                         .join('')
//                     refs.countriesList.innerHTML = countriesHTML;
                    
//                     //                     refs.countriesList.addEventListener('click', function(e) {
//                     //   e.preventDefault()
//                     //   return false;
//                     // })
//                 }
//             })

//             .finally(() => {
//                 onClearCountriesList();
//             });
//     } else {

//         console.log('go out')
//     }
// }

// function onAlertNotification() {
//     console.log('notification')
//     alert({
//         text: "Notice that's positioned in its own stack.",
    //     // stack: new Stack({
    //     //     dir1: 'down', dir2: 'right', // Position from the top left corner.
    //     //     firstpos1: 90, firstpos2: 90 // 90px from the top, 90px from the left.
    //     // })
//     })

// }
    
// function onSelectCountry(e) {
//     const  selectCountry = e.target.innerHTML;
    
//     console.log(selectCountry);
//     console.log(refs.inputEl);

//     refs.inputEl.value = selectCountry;

//     searchQuery = selectCountry;
//     // console.log(document.querySelector('#countries-result').getAttribute('onclick'));
//     // document.getElementById('test').onclick.toString()
//     // countries-result
// }

// function notification() {
//        console.log('too many matches...')
// }
   
// function onClearCountriesList() {
//     if (refs.inputEl.value === '') {
//     refs.countriesList.innerHTML = '';
//   }
// }

