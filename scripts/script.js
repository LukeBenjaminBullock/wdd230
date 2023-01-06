const d = new Date();
const year = d.getFullYear();
document.querySelector("#currentYear").textContent = year;

const lastModification = new Date(document.lastModified);
document.getElementById("dynamicTimeStamp").innerHTML = lastModification; 