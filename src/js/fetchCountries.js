const BASE_URL = 'https://restcountries.eu/rest/v2'


    function fetchCountries(searchQuery) {

    return fetch(`${BASE_URL}/name/${searchQuery}?fields=name;capital;population;languages;flag`)        
    
        .then(checkForError)
        .catch(error => {
            console.log("error", error)               
        })           
    }

function checkForError  (response)  {
    if (!response.ok) throw Error(response.status);    
    return response.json();
}

export default {fetchCountries}