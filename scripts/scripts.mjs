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
    optionLabelEl.setAttribute("for", "mbti");
    optionLabelEl.innerText = "Select your MBTI: ";
    dropForm.appendChild(optionLabelEl);

    const optionSelectEl = document.createElement("select");
    optionSelectEl.setAttribute("name", "mbti");
    dropForm.appendChild(optionSelectEl);

    mbtiList.forEach((item) => {
        const optionEl = document.createElement("option");
        optionEl.setAttribute("value", item);
        optionEl.innerText = item;
        optionSelectEl.appendChild(optionEl);
    });

    console.log(dropForm);
}