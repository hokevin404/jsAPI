let displayBox = document.getElementsByClassName("main");
// console.log(main);
// console.log(main[0]);
let btn = document.querySelector("button")
// console.log(btn);
let dropForm = document.querySelector("form");
// console.log(dropForm);
const mbtiList = ["INTJ-A/ INTJ-T", "INTP-A/ INTP-T", "ENTJ-A/ ENTJ-T", "ENTP-A/ ENTP-T", 
              "INFJ-A/ INFJ-T", "INFP-A/ INFP-T", "ENFJ-A/ ENFJ-T", "ENFP-A/ ENFP-T", 
              "ISTJ-A/ ISTJ-T", "ISFJ-A/ ISFH-T", "ESTJ-A/ ESTJ-T", "ESFJ-A/ ESFJ-T", 
              "ISTP-A/ ISTP-T", "ISFP-A/ ISFP-T", "ESTP-A/ ESTP-T", "ESFP-A/ ESFP-T", 
            ];

btn.addEventListener("click", pTypePage);

function pTypePage() {
    // console.log("Event Fired")
    // console.log(displayBox);
    displayBox[0].childNodes[3].textContent = 
        "Please select your personlity from the dropdown menu.";
    createListOptions();
}

function createListOptions() {
    const optionLabelEl = document.createElement("label");
    // const att = document.createAttribute("for");
    // att.value = "mbti";
    optionLabelEl.setAttribute("for", "mbti");
    optionLabelEl.innerText = "Select your MBTI: ";
    const optionSelectEl = document.createElement("select");
    dropForm.appendChild(optionLabelEl);

    console.log(dropForm);
}