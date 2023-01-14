const d = new Date();
const year = d.getFullYear();
document.querySelector("#current-year").textContent = year;

const lastModification = new Date(document.lastModified);
document.getElementById("dynamic-time-stamp").innerHTML = lastModification; 