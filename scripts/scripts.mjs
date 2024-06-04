let displayBox = document.getElementsByClassName("main");
displayBox[0].style.backgroundImage='linear-gradient(to bottom right, yellow, blue)';
displayBox[0].style.border= '3px solid black';
// console.log(main);
// console.log(displayBox[0]);
let btn = document.querySelector("button")
// console.log(btn);
let dropForm = document.querySelector("form");
// console.log(dropForm);
let submitBtn;
let mbtiValue;
const mbtiList = {"INTJ": "ground", "INTP": "ground", "ENTJ": "dragon", "ENTP": "humanshape", 
                  "INFJ": "plant", "INFP": "fairy", "ENFJ": "humanshape", "ENFP": "ditto", 
                  "ISTJ": "water2", "ISFJ": "mineral", "ESTJ": "water1", "ESFJ": "flying", 
                  "ISTP": "indeterminate", "ISFP": "bug", "ESTP": "water3", "ESFP": "monster", 
};

btn.addEventListener("click", pTypePage);

function pTypePage() {
    // console.log("Event Fired")
    // console.log(displayBox);
    displayBox[0].childNodes[3].textContent = 
        "Please select your personlity from the dropdown menu.";
    createListOptions();
    createSubmitBtn();
    btn.style.display = "none";

    submitBtn = document.querySelector("button");
    // console.log(submitBtn);
    submitBtn.addEventListener("click", eggDisplay); 
    // const apiData = await pokemonAPI();
    // console.log(apiData);
}

function createListOptions() {
    const optionLabelEl = document.createElement("label");
    optionLabelEl.setAttribute("for", "mbti");
    optionLabelEl.innerText = "Select your MBTI: ";
    dropForm.appendChild(optionLabelEl);

    const optionSelectEl = document.createElement("select");
    optionSelectEl.setAttribute("name", "mbti");
    dropForm.appendChild(optionSelectEl);

    for(let key in mbtiList) {
        // console.log(key);
        const optionEl = document.createElement("option");
        optionEl.setAttribute("value", key);
        optionEl.innerText = key;
        optionSelectEl.appendChild(optionEl);
    };

    // console.log(dropForm);
}

function createSubmitBtn() {
    submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    // submitBtn.setAttribute("value", "Submit");
    submitBtn.setAttribute("form", "myForm")
    submitBtn.innerText = "Submit";
    // console.log(submitBtn);
    // const breakLine = document.createElement("br");
    // dropForm.appendChild(breakLine);
    const parentClass = dropForm.parentNode;
    parentClass.appendChild(submitBtn)
    parentClass.replaceChild(submitBtn, btn);
}

async function eggDisplay(e) {
    // console.log("Egg")
    e.preventDefault();
    // console.log(e.target.form.elements.mbti.value);
    mbtiValue = e.target.form.elements.mbti.value;
    // console.log(mbtiValue);
    // return mbtiValue;
    const apiData = await pokemonAPI();
    // console.log(apiData);
    const eggGroup = mbtiList[mbtiValue];
    // console.log(eggGroup);
    let pokemon = "";

    for(let i = 0; i < apiData.length; i++) {
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
    // console.log(pokemon);
    pokemonURL = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    // console.log(pokemonURL);
    pokemonData = await fetch(pokemonURL);
    const pokedex = await pokemonData.json();
    // console.log(pokedex.sprites.front_default);
    const pokeImgURL = pokedex.sprites.front_default;
    let pokeIMG = document.createElement("img");
    pokeIMG.setAttribute("src", pokeImgURL);
    pokeIMG.setAttribute("alt", `Image of ${pokemon}`);
    pokeIMG.style.width = "300px";
    pokeIMG.style.height = "300px";
    pokeIMG.style.position = "relative";
    pokeIMG.style.margin = "0 auto";
    pokeIMG.style.marginTop = "10vh"
    displayBox[0].appendChild(pokeIMG);
    submitBtn.remove();
    dropForm.remove();
    displayBox[0].childNodes[3].textContent = pokemon;
    displayBox[0].childNodes[3].style.fontFamily = "cursive";
    displayBox[0].childNodes[3].style.fontSize = "xx-large";
    displayBox[0].childNodes[3].style.fontWeight = "bold";
    let h1EL = displayBox[0].childNodes[3].textContent;
    displayBox[0].style.backgroundImage='';
    displayBox[0].style.border= '';
    const h1El = displayBox[0].getElementsByTagName("h1");
    h1El[0].innerText = '';

}

async function pokemonAPI() {
    const apiResult = await fetch("https://pokeapi.co/api/v2/egg-group");
    // console.log(apiResult);
    const data = await apiResult.json();
    // console.log(data);
    const results = await data.results;
    // console.log(results)
    return results;
}

function getRNG(maxNum) {
    return Math.floor(Math.random() * maxNum);
}