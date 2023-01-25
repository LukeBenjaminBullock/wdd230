// ! Get dates 
const d = new Date();
const year = d.getFullYear();
document.querySelector("#current-year").textContent = year;

const lastModification = new Date(document.lastModified);
document.getElementById("dynamic-time-stamp").innerHTML = lastModification; 

document.getElementById("date-head").innerHTML = lastModification.toLocaleDateString("en-US", 
{weekday: "long", year: "numeric", month: "long", day: "numeric"});

// ! Change hamburger icon
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;