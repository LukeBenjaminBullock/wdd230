// ! Get dates 
const d = new Date();

const lastModification = new Date(document.lastModified);
document.getElementById("dynamic-time-stamp").innerHTML = lastModification; 

document.querySelector(".date-head").innerHTML = lastModification.toLocaleDateString("en-US", 
{weekday: "long", year: "numeric", month: "long", day: "numeric"});