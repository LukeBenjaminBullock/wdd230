const gridbutton = document.querySelector("#grid-button");
const listbutton = document.querySelector("#list-button");
const display = document.querySelector("article");

const file = "json/data.json"

displayBuisinesses("grid");


gridbutton.addEventListener("click", 
() => {
    displayBuisinesses("grid");
})

listbutton.addEventListener("click",
() => {
    displayBuisinesses("list"); 
})

async function displayBuisinesses(type) {
    const response = await fetch(file);
    const data = await response.json();
    
    if (type === "grid")
    {
        displayDataInGrid(data.businesses);
    } 
    else if (type === "list")
    {
        displayDataInList(data.businesses);
    }
}

function displayDataInGrid(data) {
    display.innerHTML = " ";
    display.classList.remove("list");
    display.classList.add("grid");

    data.forEach((business) => {
        const businessCard = document.createElement("div"); 
        businessCard.classList.add('business-card');

        const businessImage = document.createElement("img");
        businessImage.src = business.imageFile;
        businessImage.alt = business.businessName;
        businessCard.appendChild(businessImage);

        const businessName = document.createElement("p");
        businessName.innerText = business.name;
        businessCard.appendChild(businessName);

        const membershipLevel = document.createElement("p"); 
        membershipLevel.innerText = "Membership Level: " + business.membershipLevel;
        if (business.membershipLevel === "Silver")
        {
            membershipLevel.style = "color: white;"
        }
        else if (business.membershipLevel == "Copper")
        {
            membershipLevel.style = "color: rgb(217, 177, 122);"
        }
        businessCard.appendChild(membershipLevel);

        const businessAdress = document.createElement("h2");
        businessAdress.innerText = business.address;
        businessCard.appendChild(businessAdress);

        const businessPhoneNumber = document.createElement("h2");
        businessPhoneNumber.innerText = business.phoneNumber;
        businessCard.appendChild(businessPhoneNumber);

        const businessWebsight = document.createElement("a");
        businessWebsight.href = business.websight;
        businessWebsight.innerText = "Visit Site";
        businessCard.appendChild(businessWebsight);

        display.appendChild(businessCard);

    })
}

function displayDataInList(data) {
    display.innerHTML = " ";
    display.classList.remove("grid");
    display.classList.add("list");

    data.forEach((business) => {
        const businessListItem = document.createElement("li"); 
        businessListItem.classList.add('business-card');

        const businessName = document.createElement("h2");
        businessName.innerText = business.name;
        businessListItem.appendChild(businessName);

        const businessAdress = document.createElement("h2");
        businessAdress.innerText = business.address;
        businessListItem.appendChild(businessAdress);

        const businessPhoneNumber = document.createElement("h2");
        businessPhoneNumber.innerText = business.phoneNumber;
        businessListItem.appendChild(businessPhoneNumber);

        const businessWebsight = document.createElement("a");
        businessWebsight.href = business.websight;
        businessWebsight.innerText = business.websight;
        businessListItem.appendChild(businessWebsight);

        display.appendChild(businessListItem);

    })
}