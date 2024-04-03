let container = document.getElementById("container");
let apiUrl = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries";
let data = [];

fetch(apiUrl)
    .then(function (res) {
        return res.json();
    })
    .then(function (res) {
        data = res.data;
        console.log("data:", data);
        displayData(data);
    });

function displayData(data) {
    container.innerHTML = ""; 
    data.forEach(function (country) {
        let div = document.createElement("div");
        let countryName = document.createElement("h1");
        countryName.innerText = country.country;
        let id = document.createElement("p");
        id.innerText = country.id;
        let rank = document.createElement("p");
        rank.innerText = country.Rank;
        let population = document.createElement("h2");
        population.innerText = country.population;
        div.append(countryName, rank, population, id);
        container.append(div);
    });
}

document.getElementById("btn").addEventListener("click", function () {
    fetch(apiUrl + "?sort=population&order=desc")
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            data = res.data;
            displayData(data);
        })
        .catch(function (error) {
            console.error("Error fetching sorted data:", error);
        });
},);








