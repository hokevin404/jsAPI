// export {stylePokemonImg, styleOutCome};

export function stylePokemonImg(pokemon, pokeImgURL) {
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
}

export function styleOutCome(pokemonName) {
    displayBox[0].childNodes[3].textContent = pokemonName;
    displayBox[0].childNodes[3].style.fontFamily = "cursive";
    displayBox[0].childNodes[3].style.fontSize = "xx-large";
    displayBox[0].childNodes[3].style.fontWeight = "bold";
    displayBox[0].style.backgroundImage='';
    displayBox[0].style.border= '';
    displayBox[0].getElementsByTagName("h1")[0].innerHTML = '';
}