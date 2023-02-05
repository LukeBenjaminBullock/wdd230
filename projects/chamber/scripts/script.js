// ! Get dates 
const d = new Date();
const year = d.getFullYear();
document.querySelector("#current-year").textContent = year;

const lastModification = new Date(document.lastModified);
document.getElementById("dynamic-time-stamp").innerHTML = lastModification; 

document.getElementById("date-head").innerHTML = lastModification.toLocaleDateString("en-US", 
{weekday: "long", year: "numeric", month: "long", day: "numeric"});

// ! Change hamburger icon
window.onload = function() {
    const primaryNav = document.getElementById("primaryNav");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const icons = document.getElementById("icons");
  
    if (!primaryNav.classList.contains("open")) {
      hamburgerBtn.classList.add("closed");
      icons.classList.add("closed");
    }
  };

function toggleMenu() {
    const primaryNav = document.getElementById("primaryNav");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const icons = document.getElementById("icons");
    primaryNav.classList.toggle("open");
    hamburgerBtn.classList.toggle("open");
    icons.classList.toggle("open");
    if (!primaryNav.classList.contains("open")) {
        hamburgerBtn.classList.add("closed");
        icons.classList.add("closed");
        
    } else {
        hamburgerBtn.classList.remove("closed");
        icons.classList.remove("closed");
    }
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// ! display a message only on tusedays. 
const displayAd = document.getElementById("meeting-ad");

const day = d.getDay(); 

if (day !== 2) {
    displayAd.style.display = "none";
}