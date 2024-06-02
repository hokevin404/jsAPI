let displayBox = document.getElementsByClassName("main");
// console.log(main);
// console.log(main[0]);
let btn = document.querySelector("button")
console.log(btn);

btn.addEventListener("click", pTypePage);

function pTypePage() {
    // console.log("Event Fired")
    console.log(displayBox);
    parag = "Please select your personlity from the dropdown menu.";
    displayBox[0].childNodes[3].textContent = parag;
}