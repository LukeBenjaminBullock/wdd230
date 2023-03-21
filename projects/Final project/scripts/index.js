// ! This could be a useful way to avoid errors in the future. 
// if (window.location.pathname === '/index.html') {
// }

// ! Display weather information. 

var temp;
var forecasts; 

const windTemp = document.querySelector("#wind-temp"); 
const windSpeed = document.querySelector("#wind-speed"); 
const weatherIcon = document.querySelector('#weather-icon'); 
const weatherType = document.querySelector("#weather-type");
const humidityLevel = document.querySelector("#humidity");
const section = document.querySelector("#weather-section");

const url = "https://api.openweathermap.org/data/2.5/forecast?q=Los Angeles,California,USA&appid=fa9c74595e97f0d6cd624a4541611170&units=imperial"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(weatherData) {
    section.innerHTML = '';

    const temp = weatherData.list[0].main.temp.toFixed(0);

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;
    const humidity = weatherData.list[0].main.humidity;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    windTemp.innerHTML = temp + " °F";
    weatherType.innerHTML = desc;
    humidityLevel.innerHTML = "Humidity: " + humidity;

    if (weatherData.list && weatherData.list.length > 0) {
        const forecasts = weatherData.list.slice(0, 5);
        forecasts.forEach(forecast => {
        const date = new Date(forecast.dt_txt);
        const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });
        const forecastTemp = forecast.main.temp.toFixed(0);

        const div = document.createElement('div');
        const dayNumber = document.createElement('p');
        const tempElem = document.createElement('p');
        const descElem = document.createElement('p');

        dayNumber.textContent = dayOfWeek;
        tempElem.textContent = `${forecastTemp} °F`;

        if (forecast.weather && forecast.weather.length > 0) {
            const desc = forecast.weather[0].description;
            descElem.textContent = desc;
        } else {
            descElem.textContent = 'N/A';
        }

        div.appendChild(dayNumber);
        div.appendChild(tempElem);
        div.appendChild(descElem);

        section.appendChild(div);
        });
    }
} 
apiFetch();

// Todo: Display the number of drinks ordered. 