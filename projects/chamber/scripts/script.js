// ! Get dates 
const d = new Date();
const year = d.getFullYear();
document.querySelector("#current-year").textContent = year;

const lastModification = new Date(document.lastModified);
document.getElementById("dynamic-time-stamp").innerHTML = lastModification; 

document.querySelector(".date-head").innerHTML = lastModification.toLocaleDateString("en-US", 
{weekday: "long", year: "numeric", month: "long", day: "numeric"});

// ! Change hamburger icon
window.onload = function() {
    const primaryNav = document.querySelector(".primaryNav");
    const hamburgerBtn = document.querySelector(".hamburgerBtn");
    const icons = document.querySelector(".icons");

    if (!primaryNav.classList.contains("open")) {
        hamburgerBtn.classList.add("closed");
        icons.classList.add("closed");
    }
  };

function toggleMenu() {
    const primaryNav = document.querySelector(".primaryNav");
    const hamburgerBtn = document.querySelector(".hamburgerBtn");
    const icons = document.querySelector(".icons");
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

const x = document.querySelector(".hamburgerBtn");
x.onclick = toggleMenu;

// ! display a message only on tusedays. 
const displayAd = document.querySelector(".meeting-ad");

const day = d.getDay(); 

if (day !== 3) {
    displayAd.style.display = "none";
}

console.log("1");


// ! Added functionality for the 404 page. 

function checkStatus() {
    if (document.title === "404 Error: Page Not Found") {
        window.location.href = "/404.html";
    }
}

checkStatus();