export default class CountriesApiService {
    constructor() {
        this.searchQuery = " ";
    }
    
    fetchCountries() {
        const urlApi = `https://restcountries.eu/rest/v2/name/${searchQuery}?fields=name;capital;population;languages;flag`;
    console.log(urlApi);
    
    fetch(urlApi)

        .then(response => response.json())
        .then(console.log)
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}