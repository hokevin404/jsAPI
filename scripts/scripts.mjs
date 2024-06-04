let displayBox = document.getElementsByClassName("main");
// console.log(main);
// console.log(main[0]);
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
    console.log(submitBtn);
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
    // apiData.forEach(async (eggs) => {
    //     // console.log(eggs.name)
    //     if(eggs.name == eggGroup)
    //     {
    //         // console.log(eggs)
    //         // console.log(eggs.url);
    //         const eggGroupAPI = await fetch(eggs.url);
    //         const pokemonArr = await eggGroupAPI.json();
    //         // console.log(pokemon.pokemon_species.length);
    //         const numOfPokemon = pokemonArr.pokemon_species.length;
    //         const randomNum = getRNG(numOfPokemon);
    //         pokemon = pokemonArr.pokemon_species[randomNum].name;
    //         // console.log(pokemon);
    //     }
    // });
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
    console.log(pokemon);
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

// const pokemon = https://pokeapi.co/api/v2/pokemon/ + ditto
// pokemon.sprites.front_default
// imbed to <img>