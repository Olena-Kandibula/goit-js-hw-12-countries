const BASE_URL = 'https://restcountries.eu/rest/v2'


    function fetchCountries(searchQuery) {

    return fetch(`${BASE_URL}/name/${searchQuery}?fields=name;capital;population;languages;flag`)        
    
        // .then(checkForError)
        // // .catch(error => {
        // //     console.log("error", error)               
        // // })     
        .then((response) => {
            if (!response.ok) throw Error(response.status);
            // console.log(response)
            // console.log(response.json())
            return response.json();
        })
        // .then((response) => {
        //     if (!response.ok)
        //     {
        //         // error({text:`error: ${response.status}});
        //         return;
        //     }
        //     return response.json()
        // })
    }
                
// function checkForError  (response)  {
//     if (!response.ok) throw Error(response.status);
//     // console.log(response.json())
//     return response.json();
// }

export default {fetchCountries}