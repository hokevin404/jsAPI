import {mbtiList} from "./database.mjs"

export {createListOptions, createSubmitBtn, createResetBtn}

let dropForm = document.querySelector("form");

// Create dropdown list of the MBTI 16 personalities
function createListOptions() {
    // Create a new label tag
    const optionLabelEl = document.createElement("label");

    // Set the for attribute to mbti on the new label tag
    optionLabelEl.setAttribute("for", "mbti");

    // Set the text on the new label tag
    optionLabelEl.innerText = "Select your MBTI: ";

    // Attach the new label tag to the form element
    dropForm.appendChild(optionLabelEl);

    // Create a new select tag
    const optionSelectEl = document.createElement("select");

    // Set name attribute to mbti for the select tag
    optionSelectEl.setAttribute("name", "mbti");

    // Attach select tag to form element
    dropForm.appendChild(optionSelectEl);

    // for loop to iterate through mbti object 
    for(let key in mbtiList) {
        // console.log(key);

        // At each iteration, create a new option tag
        const optionEl = document.createElement("option");

        // Set value attribute to the mbti personality for the new option tag
        optionEl.setAttribute("value", key);

        // Set text of option tag to the mbti personality
        optionEl.innerText = key;

        // Attach new option tag to select tag
        optionSelectEl.appendChild(optionEl);
    };
}

// Create Submit button and Replace current Start button
function createSubmitBtn() {
    let btn = document.querySelector("button");

    // Create a new button tag
    let submitBtn = document.createElement("button");

    // Set the type attribute of button to submit
    submitBtn.setAttribute("type", "submit");
    // submitBtn.setAttribute("value", "Submit");

    // Set the form attribute of button to myForm
    submitBtn.setAttribute("form", "myForm")

    // Set text of submit button to Submit
    submitBtn.innerText = "Submit";
    // console.log(submitBtn);
    
    // Get parent node of the form tag
    const parentClass = dropForm.parentNode;

    // Attach submit button to parent node of form tag
    parentClass.appendChild(submitBtn)

    // Replace Start button with Submit button
    parentClass.replaceChild(submitBtn, btn);
}

// Create Reset button, then replace current Submit button
function createResetBtn() {
    let btn = document.querySelector("button");
    let resetBtn = document.querySelector("button");

    // Set Reset button text to Reset
    resetBtn.innerText = "Reset";

    // Set Reset button positive to relative
    resetBtn.style.position = "relative";

    // Move Reset button from the right 
    resetBtn.style.right = "35%";

    // Attach event listener to Reset button
    resetBtn.addEventListener("click", resetWindow);

    // Get parent node of the form tag
    const parentClass = dropForm.parentNode;

    // Attach Reset button to parent node of form tag
    parentClass.appendChild(resetBtn)

    // Replace Submit button with Reset button
    parentClass.replaceChild(resetBtn, btn);
}

// Function to reload (refresh) current url 
function resetWindow() {
    window.location.reload();
}