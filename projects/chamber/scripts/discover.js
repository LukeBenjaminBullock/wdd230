// ! lazy load on the discover homepage. 

let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
        });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
        });
    } else {
        imagesToLoad.forEach((img) => {
            loadImages(img);
        });
}

// ! Display time since last visit 

var lastVisit = localStorage.getItem('lastVisit');
var currentTime = Date.now();

localStorage.clear()
console.log(localStorage)

    if (!lastVisit) {
        localStorage.setItem('lastVisit', currentTime);
        document.querySelector('.visit-time').textContent = "This is your first visit!";
    } else {
        var timeSinceLastVisit = currentTime - lastVisit;
        var daysSinceLastVisit = Math.round(timeSinceLastVisit / (1000 * 60 * 60 * 24));
        document.querySelector('.visit-time').textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        localStorage.setItem('lastVisit', currentTime);
    }