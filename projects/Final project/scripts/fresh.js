const display = document.querySelector("article");
const firstList = document.querySelector("#first-fruit");
const secondList = document.querySelector("#second-fruit");
const thirdList = document.querySelector("#third-fruit");

const file = "json/fruits.json"

displayFruits();

async function displayFruits() {
    const response = await fetch(file);
    const data = await response.json();
    
    displayData(data);
}

function displayData(data) {
    display.innerHTML = " ";
    
    data.forEach((fruit) => {
        const fruitCard = document.createElement("div");
        fruitCard.classList.add('fruit-card');

        const fruitName = document.createElement("h2");
        fruitName.innerText = fruit.name;
        fruitCard.appendChild(fruitName);

        const nutrition = document.createElement("h3");
        nutrition.innerText = "Nutrition facts: ";
        fruitCard.appendChild(nutrition);

        const carbohydrates = document.createElement("p");
        carbohydrates.innerText = "carbohydrates: " + fruit.nutritions.carbohydrates;
        fruitCard.appendChild(carbohydrates);

        const protein = document.createElement("p");
        protein.innerText = "protein: " + fruit.nutritions.protein;
        fruitCard.appendChild(protein);

        const fat = document.createElement("p");
        fat.innerText = "fat: " + fruit.nutritions.fat;
        fruitCard.appendChild(fat);

        const calories = document.createElement("p");
        calories.innerText = "calories: " + fruit.nutritions.calories;
        fruitCard.appendChild(calories);

        const sugar = document.createElement("p");
        sugar.innerText = "sugar: " + fruit.nutritions.sugar;
        fruitCard.appendChild(sugar);

        // ! add an event listener to the article element
        const article = document.createElement("article");
        article.appendChild(fruitCard);
        article.addEventListener('mouseover', () => {
        // ! hide all other articles and show the contents of this article
        const allArticles = document.querySelectorAll("article");
        allArticles.forEach((a) => {
            if (a !== article) {
            a.classList.remove('show');
            }
        });
        article.classList.add('show');
        });

        article.addEventListener('mouseleave', () => {
            // ! hide the contents of this article when the mouse leaves
            article.classList.remove('show');
        });

        display.appendChild(article);

        // ! Now I have to display all the fruits to the lists. 

        const firstFruitName = document.createElement("option");
        firstFruitName.innerText = fruit.name; 
        firstFruitName.value = fruit.name; 
        firstList.appendChild(firstFruitName);

        const secondFruitName = document.createElement("option");
        secondFruitName.innerText = fruit.name; 
        secondFruitName.value = fruit.name; 
        secondList.appendChild(secondFruitName);

        const thirdFruitName = document.createElement("option");
        thirdFruitName.innerText = fruit.name; 
        thirdFruitName.value = fruit.name; 
        thirdList.appendChild(thirdFruitName);
    })
}

// ! This is where I will print everything put through the form. 

var form = document.getElementById("fresh-form");
var submitButton = document.getElementById("submit-button");
const smallDisplay = document.querySelector("#output");
var submissionCount = parseInt(localStorage.getItem("submissionCount")) || 0;

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    smallDisplay.innerHTML = " ";
    
    // Get the values of the form fields
    var firstName = document.getElementById("first-name").value;

    localStorage.setItem("personsName", firstName);

    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var firstFruit = document.getElementById("first-fruit").value;
    var secondFruit = document.getElementById("second-fruit").value;
    var thirdFruit = document.getElementById("third-fruit").value;
    var instructions = document.getElementById("instructions-text-area").value;
    
    // Update the submission count
    submissionCount++;
    localStorage.setItem("submissionCount", submissionCount);
    
    // Create the HTML content for the results
    var firstResultsContainer = document.createElement("div");
    firstResultsContainer.classList.add("output")
    smallDisplay.style = "background-color: #25001e;";

    // const submissionCountParagraph = document.createElement("p");
    // submissionCountParagraph.innerText = submissionCount; 
    // firstResultsContainer.appendChild(submissionCountParagraph);

    const orderSummary = document.createElement("h1"); 
    orderSummary.innerText = "Order Summary"; 
    firstResultsContainer.appendChild(orderSummary);

    const firstNameParagraph = document.createElement("p");
    firstNameParagraph.innerText = "Name: " + firstName; 
    firstResultsContainer.appendChild(firstNameParagraph);

    const emailParagraph = document.createElement("p");
    emailParagraph.innerText = "Email adress: " + email; 
    firstResultsContainer.appendChild(emailParagraph);

    const telephoneParagraph = document.createElement("p");
    telephoneParagraph.innerText = "Phone number: " + telephone; 
    firstResultsContainer.appendChild(telephoneParagraph);

    const firstFruitParagraph = document.createElement("p");
    firstFruitParagraph.innerText = "Fruit one: " + firstFruit; 
    firstResultsContainer.appendChild(firstFruitParagraph);

    const secondFruitParagraph = document.createElement("p");
    secondFruitParagraph.innerText = "Fruit two: " + secondFruit; 
    firstResultsContainer.appendChild(secondFruitParagraph);

    const thirdFruitParagraph = document.createElement("p");
    thirdFruitParagraph.innerText = "Fruit three: " + thirdFruit; 
    firstResultsContainer.appendChild(thirdFruitParagraph);

    const instructionsTitle = document.createElement("h2");
    instructionsTitle.innerText = "Special Instructions:";
    firstResultsContainer.appendChild(instructionsTitle);

    const instructionsParagraph = document.createElement("p");
    instructionsParagraph.innerText = instructions; 
    firstResultsContainer.appendChild(instructionsParagraph);

    var secondResultsContainer = document.createElement("div");
    secondResultsContainer.classList.add("output");
    
    const d = new Date();
    const currentTime = new Date();
    
    var currentTimeParagraph = document.createElement("p");
    
    currentTimeParagraph.innerText = "Order Date: " + currentTime.toLocaleDateString("en-US", 
    {weekday: "long", year: "numeric", month: "long", day: "numeric"});
    
    secondResultsContainer.appendChild(currentTimeParagraph);
    
    
    // Update the HTML content of the result container
    smallDisplay.appendChild(firstResultsContainer);
    smallDisplay.appendChild(secondResultsContainer);
    
    // Call the displayMacronutrients function
    displayMacronutrients();
});

async function displayMacronutrients() {
    const response = await fetch(file);
    const data = await response.json();
    
    // Call the displayMacro function with the data
    displayMacro(data);
}

function displayMacro(data) {

    // Get the values of the form fields
    var firstFruit = document.getElementById("first-fruit").value;
    var secondFruit = document.getElementById("second-fruit").value;
    var thirdFruit = document.getElementById("third-fruit").value;
  
    // Calculate the total amount of macronutrients based on the fruit choices
    var totalCarbs = 0;
    var totalProtein = 0;
    var totalFat = 0;
    var totalSugar = 0;
    var totalCalories = 0;
  
    data.forEach((fruit) => {

        if (fruit.name === firstFruit) {
            totalCarbs += fruit.nutritions.carbohydrates;
            totalProtein += fruit.nutritions.protein;
            totalFat += fruit.nutritions.fat;
            totalSugar += fruit.nutritions.sugar;
            totalCalories += fruit.nutritions.calories;
        }
        else if (fruit.name === secondFruit){
            totalCarbs += fruit.nutritions.carbohydrates;
            totalProtein += fruit.nutritions.protein;
            totalFat += fruit.nutritions.fat;
            totalSugar += fruit.nutritions.sugar;
            totalCalories += fruit.nutritions.calories;
        }
        else if (fruit.name === thirdFruit) {
            totalCarbs += fruit.nutritions.carbohydrates;
            totalProtein += fruit.nutritions.protein;
            totalFat += fruit.nutritions.fat;
            totalSugar += fruit.nutritions.sugar;
            totalCalories += fruit.nutritions.calories;
        }
    });
  
    // Create the HTML content for the macronutrients
    var thirdResultsContainer = document.createElement("div");
    thirdResultsContainer.classList.add("output");
  
    const macronutrientsTitle = document.createElement("h2");
    macronutrientsTitle.innerText = "Macronutrients";
    thirdResultsContainer.appendChild(macronutrientsTitle);
  
    const totalCarbsParagraph = document.createElement("p");
    totalCarbsParagraph.innerText = "Total Carbs: " + Math.round(totalCarbs) + " g";
    thirdResultsContainer.appendChild(totalCarbsParagraph);
  
    const totalProteinParagraph = document.createElement("p");
    totalProteinParagraph.innerText = "Total Protein: " + Math.round(totalProtein) + " g";
    thirdResultsContainer.appendChild(totalProteinParagraph);
  
    const totalFatParagraph = document.createElement("p");
    totalFatParagraph.innerText = "Total Fat: " + Math.round(totalFat) + " g";
    thirdResultsContainer.appendChild(totalFatParagraph);
  
    const totalSugarParagraph = document.createElement("p");
    totalSugarParagraph.innerText = "Total Sugar: " + Math.round(totalSugar) + " g";
    thirdResultsContainer.appendChild(totalSugarParagraph);
  
    const totalCaloriesParagraph = document.createElement("p");
    totalCaloriesParagraph.innerText = "Total Calories: " + Math.round(totalCalories);
    thirdResultsContainer.appendChild(totalCaloriesParagraph);
  
    // Update the HTML content of the result container
    smallDisplay.appendChild(thirdResultsContainer);
  }