var temp;
var windSpeedNumber;

const windTemp = document.querySelector("#wind-temp");
const windSpeed = document.querySelector("#wind-speed"); 
const windChill = document.querySelector("#wind-chill");
const weatherIcon = document.querySelector('#weather-icon'); 
const weatherType = document.querySelector("#weather-type");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Lethbridge,Alberta,CA &appid=4d1c13712cf5dccb7d5aaa806274cf9b&units=imperial"

function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2);
    } else {
        return "N/A";
    }
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
        } catch (error) {
            console.log(error);
        }
    }

var windChillNumber = calculateWindChill(temp, windSpeed);

function displayResults(weatherData) {
    temp = weatherData.main.temp.toFixed(0)
    windSpeedNumber = weatherData.wind.speed;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    windTemp.innerHTML = temp + " &#176;F";
    windSpeed.innerHTML = "Windspeed: " + windSpeedNumber + "mph";
    windChill.innerHTML = "Windchill: " + windChillNumber;
    weatherType.innerHTML = desc;
}
apiFetch();

// document.querySelector("#wind-temp").innerHTML = temp + " &#176;F";
// document.querySelector("#wind-speed").innerHTML = "Windspeed: " + windSpeed + "mph";
// document.querySelector("#wind-chill").innerHTML = "Windchill: " + windChill;
