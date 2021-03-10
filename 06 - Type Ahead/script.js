const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
let cities = [];
var xhttp = new XMLHttpRequest();
xhttp.responseType = "json";
xhttp.open("GET", endpoint, true); 
xhttp.onload = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        cities = xhttp.response;
        console.table(cities);
    }
}
xhttp.send();

function findWord(word, cities) {
    const matches = cities.filter(place => {
        if (place.city.toLowerCase().includes(word) || place.state.toLowerCase().includes(word)) {
            return place;
        }
    });
    return matches;
}

function displayMatches() {
    const matches = findWord(this.value, cities);
    const html = matches.map(place => {
        return `
            <li>
                <span class="name">${place.city}, ${place.state}</span>
                <span class="population">${place.population}</span>
            </li>
        `;
    }).join("");
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
