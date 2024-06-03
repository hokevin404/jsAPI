let displayBox = document.getElementsByClassName("main");
// console.log(main);
// console.log(main[0]);
let btn = document.querySelector("button")
// console.log(btn);
let dropForm = document.querySelector("form");
// console.log(dropForm);
const mbtiList = {"INTJ": "field", "INTP": "field", "ENTJ": "dragon", "ENTP": "humanoid", 
                  "INFJ": "grass", "INFP": "fairy", "ENFJ": "humanoid", "ENFP": "ditto", 
                  "ISTJ": "water2", "ISFJ": "mineral", "ESTJ": "water1", "ESFJ": "flying", 
                  "ISTP": "amorphous", "ISFP": "bug", "ESTP": "water3", "ESFP": "monster", 
};

btn.addEventListener("click", pTypePage);

function pTypePage() {
    // console.log("Event Fired")
    // console.log(displayBox);
    displayBox[0].childNodes[3].textContent = 
        "Please select your personlity from the dropdown menu.";
    createListOptions();
    submitBtn();
    btn.style.display = "none";
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

    console.log(dropForm);
}

function submitBtn() {
    submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Submit");
    console.log(submitBtn);
    const breakLine = document.createElement("br");
    dropForm.appendChild(breakLine);
    dropForm.appendChild(submitBtn);
}