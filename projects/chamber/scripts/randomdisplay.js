const display = document.querySelector("#spotlight-box")

const file = "json/data.json"

async function displayBuisinesses() {
    const response = await fetch(file); 
    const data = await response.json(); 
    randomDataDisplay(data.businesses); 
}

function randomDataDisplay(data) {
    const highMembershipLevels = data.filter(business => {
        return business.membershipLevel === "Silver" || business.membershipLevel === "Gold";
    })

    const selectedBusinesses = [];
    while (selectedBusinesses.length < 3) {
        const randomIndex = Math.floor(Math.random() * highMembershipLevels.length);
        const randomBusiness = highMembershipLevels[randomIndex];
        selectedBusinesses.push(randomBusiness);
        highMembershipLevels.splice(randomIndex, 1);
    } 

    selectedBusinesses.forEach((item, index) => {
        const spotlight = document.createElement("div");
        spotlight.id = `spotlight-${index + 1}`;

        const title = document.createElement("p");
        title.innerText = item.name;
        spotlight.appendChild(title);

        const image = document.createElement("img");
        image.src = item.imageFile; 
        image.alt = item.businessName; 
        spotlight.appendChild(image);

        const catchphrase = document.createElement("h2");
        catchphrase.innerText = item.catchPhrase;
        spotlight.appendChild(catchphrase);

        const divider = document.createElement("hr");
        spotlight.appendChild(divider);

        const bottomRow = document.createElement("div");
        bottomRow.classList.add("bottom-row");

        const phoneNumber = document.createElement("h2");
        phoneNumber.innerText = item.phoneNumber;
        bottomRow.appendChild(phoneNumber);

        const line = document.createElement("h2");
        line.innerText = " | ";
        bottomRow.appendChild(line);

        const link = document.createElement("a")
        link.href = item.websight;
        link.target ="_self"; 

        const linkTitle = document.createElement("h2");
        linkTitle.innerText = "Website";
        link.appendChild(linkTitle);

        bottomRow.appendChild(link);

        spotlight.appendChild(bottomRow);

        display.appendChild(spotlight);
    })

    console.log(selectedBusinesses);
}

displayBuisinesses(); 