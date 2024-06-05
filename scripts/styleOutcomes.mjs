export {styleMain, stylePokemonImg, styleOutCome};

let displayBox = document.getElementsByClassName("main");
let submitBtn = document.querySelector("button");

// Stylize div with class "main"
function styleMain() {
    // Stylize background image of div class "main" 
    displayBox[0].style.backgroundImage='linear-gradient(to bottom right, yellow, blue)';

    // Set and stylize the border for div class "main"
    displayBox[0].style.border= '3px solid black';

    // console.log(displayBox[0]);
    let btn = document.querySelector("button")
    // console.log(btn);
    let dropForm = document.querySelector("form");
}

// Stylize image of Pokemon accepting pokemon name and Pokemon image URL
function stylePokemonImg(pokemon, pokeImgURL) {
    // Create anchor tag
    let anchor = document.createElement("a");
    // Set href attribute to Pokemon URL
    anchor.setAttribute("href", `https://pokemondb.net/pokedex/${pokemon}`)

    // Create image tag
    let img = document.createElement("img");

    //Set source attribute to pokemon image URL
    img.setAttribute("src", `https://img.pokemondb.net/sprites/home/normal/${pokemon}.png`);
    
    // Set alt attribute to pokemon name
    img.setAttribute("alt", pokemon);
    
    // Attach Pokemon image to anchor tag
    anchor.appendChild(img);
    
    // Attach anchor tag to div class "main"
    displayBox[0].appendChild(anchor);
}

function styleOutCome(pokemonName) {
    displayBox[0].childNodes[3].textContent = pokemonName;
    displayBox[0].childNodes[3].style.fontFamily = "cursive";
    displayBox[0].childNodes[3].style.fontSize = "xx-large";
    displayBox[0].childNodes[3].style.fontWeight = "bold";
    displayBox[0].style.backgroundImage='';
    displayBox[0].style.border= '';
    displayBox[0].getElementsByTagName("h1")[0].innerHTML = '';
}