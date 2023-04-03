// ! Get dates 
const d = new Date();

const lastModification = new Date(document.lastModified);

dynamicTimeStamp = document.getElementById("dynamic-time-stamp");

dynamicTimeStamp.innerHTML = lastModification.toLocaleDateString("en-US", 
{weekday: "long", year: "numeric", month: "long", day: "numeric"});