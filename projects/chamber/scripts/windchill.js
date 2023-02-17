var temp = 20;
var windSpeed = 4;

function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2);
    } else {
        return "N/A";
    }
}

var windChill = calculateWindChill(temp, windSpeed);

document.querySelector("#wind-temp").innerHTML = temp + " &#176;F";
document.querySelector("#wind-speed").innerHTML = "Windspeed: " + windSpeed + "mph";
document.querySelector("#wind-chill").innerHTML = "Windchill: " + windChill;
