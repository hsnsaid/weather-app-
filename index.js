const input = document.querySelector("input");
const search = document.querySelector("img");
const container = document.querySelector("section");
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const error=document.querySelector(".error");
input.value="";
input.addEventListener("change", function (event) {
    event.preventDefault(); 
    update(input.value);
});
search.addEventListener("click", function () {
    update(input.value);
});
async function update(searchQuery) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=85db2433a2247dc0ffbd94bc3e864132&units=metric`);
    const jsonData = await response.json();
    if (jsonData.cod === "404" ) {
        error.style.display="block";
        container.style.display = "none";
    } else {
        temp.innerText = `${Math.round(jsonData.main.temp)}`;
        city.innerText = `${jsonData.name}`;
        humidity.innerText = `${Math.round(jsonData.main.humidity)}%`;
        wind.innerText = `${jsonData.wind.speed} KM/H`;
        container.style.display = "block";
        error.style.display="none";
    }
}