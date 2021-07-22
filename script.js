'use strict';

const weightHandler = document.getElementById("application__input__weight");
const heightHandler = document.getElementById("application__input__height");
const submit = document.getElementById("application__button");
const results = document.querySelector(".application__outputs");
const bmiHandler = document.getElementById("application__bmi-index");
const descriptionHandler = document.getElementById("application__bmi-description");

let weight = "", height = "", bmi = null;
weightHandler.addEventListener("input", () => weight = weightHandler.value);
heightHandler.addEventListener("input", () => height = heightHandler.value);

submit.addEventListener("click", function() {
    (weight == "") ? getInputError(weightHandler) : clearInputError(weightHandler);
    (height == "") ? getInputError(heightHandler) : clearInputError(heightHandler);

    if(weight && height) {
        bmi = weight / (height * height) * 10000;
        bmiHandler.innerHTML = bmi.toFixed(1);

        if(bmi < 18.5)
            descriptionHandler.textContent = "underweight, minimal risk of obesity comorbidities, but increased incidence of other health problems";
        else if(bmi >= 18.5 && bmi < 25)
            descriptionHandler.textContent = "optimum, minimal risk of obesity-related diseases";
        else if(bmi >= 25 && bmi < 30)
            descriptionHandler.textContent = "overweight, medium risk of obesity-related diseases";
        else if(bmi >= 30 && bmi < 35)
            descriptionHandler.textContent = "obesity, high risk of obesity-related diseases";
        else if(bmi >= 35 && bmi < 40)
            descriptionHandler.textContent = "obesity, very high risk of obesity-related diseases";
        else
            descriptionHandler.textContent = "obesity, extreme risk of obesity-related diseases";
    }
});

function getInputError(inputHandler) {
    inputHandler.classList.add("input-error");
    inputHandler.placeholder = "?";
    results.style.display = "none";
}

function clearInputError(inputHandler) {
    inputHandler.classList.remove("input-error");
    inputHandler.placeholder = "";
    results.style.display = "flex";
}