import {mbtiList} from "./database.mjs";
import {styleMain, stylePokemonImg, styleOutCome} from "./styleOutcomes.mjs";
import {createListOptions, createSubmitBtn, createResetBtn} from "./creation.mjs"

// Store child elements from div class named "main"
let displayBox = document.getElementsByClassName("main");
// console.log(displayBox);

// Get the button element within the HTML document
let btn = document.querySelector("button")
// console.log(btn);

styleMain();

// Event listener to the Start button
btn.addEventListener("click", pTypePage);

// Callback function for the Start button
// Changes displayed to a dropdown list of MBTIs to select and the Start button to a Submit button
function pTypePage() {
    // console.log("Event Fired")
    // console.log(displayBox[0]);

    // Changes introduction text to text that directs user on what to do on new page
    displayBox[0].childNodes[3].textContent = 
        "Please select your personlity from the dropdown list.";
    
    // Create dropdown list of the MBTI 16 personalities
    createListOptions();

    // Changes the Start buton to Submit button
    createSubmitBtn();

    // Get the button element within the HTML document
    let submitBtn = document.querySelector("button");
    // console.log(submitBtn);

    // Add new event listener funtionality to Submit button
    submitBtn.addEventListener("click", eggDisplay); 
}

// Create dropdown list of the MBTI 16 personalities
createListOptions;

// Create Submit button and Replace current Start button
createSubmitBtn;

// Asynchronous function to display Pokemon
async function eggDisplay(e) {
    // console.log("Egg")

    // Prevent page refresh
    e.preventDefault();

    // Get the form element within the HTML document
    let dropForm = document.querySelector("form");
    // console.log(dropForm);
    
    // console.log(e.target.form.elements.mbti.value);

    // Get the MBTI value that user selected from dropdown list
    const mbtiValue = e.target.form.elements.mbti.value;
    // console.log(mbtiValue);

    // Call function to fetch pokemon API
    const apiData = await pokemonAPI();
    // console.log(apiData);

    // Input user selected MBTI into mbtiList object as key to get 
    // it's corresponding value pair and assign to variable eggGroup
    const eggGroup = mbtiList[mbtiValue];
    // console.log(eggGroup);

    // Memory allocation for variable
    let pokemon = "";

    // for loop to iterate through API data
    for(let i = 0; i < apiData.length; i++) {
        // If variable eggGroup matches with API's Pokemon egg group:
        // 1) obtain the url for the egg group
        // 2) obtain the all pokemon within that egg group
        // 3) obtain the number of pokemon within that egg group
        // 4) Randomly select a Pokemon from that egg group
        // 5) Assign that Pokemon to a variable pokemon
        if(apiData[i].name == eggGroup) {
            // console.log(apiData[i].url);
            const eggGroupAPI = await fetch(apiData[i].url);
            const pokemonArr = await eggGroupAPI.json();
            // console.log(pokemon.pokemon_species.length);
            const numOfPokemon = pokemonArr.pokemon_species.length;
            const randomNum = getRNG(numOfPokemon);
            pokemon = pokemonArr.pokemon_species[randomNum].name;
            // console.log(pokemon);
        }
    }
    // Stylize specific pokemon image
    stylePokemonImg(pokemon);

    // Stylize text of Pokemon name
    styleOutCome(pokemon);
    
    // Create Reset button and replace current Submit button
    createResetBtn();

    // Remove form tag
    dropForm.remove();
}

// Asynchronous function to call Pokemon API
async function pokemonAPI() {
    // Fetch Pokemon Egg Groups from Pokemon API
    const apiResult = await fetch("https://pokeapi.co/api/v2/egg-group");
    // console.log(apiResult);

    // Obtain the data from API
    const data = await apiResult.json();
    // console.log(data);

    // Assign Egg Group results to results variable
    const results = await data.results;

    // console.log(results)
    return results;
}

// Random number generator function 
function getRNG(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

// Function to reload (refresh) current url 
// function resetWindow() {
//     window.location.reload();
// }