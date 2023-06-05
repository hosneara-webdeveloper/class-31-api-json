// by using array function 

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

loadCountries();
// we will show this data into another array funcktion
const displayCountries = (countries) => {
    console.log(countries);
    const countryDiv = document.getElementById('country');

    countries.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('country-details')
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button >Show Details</button>

        ` 
       countryDiv.appendChild(div)
    })

}