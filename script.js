const BUTTONS = document.querySelectorAll(".numbers_operators_box");
const RESULT_SCREEN = document.querySelector(".result_screen");

let firstNumb = "";
let operator = "";
let secondNumb = "";

function add(firstNumb, secondNumb){
    return firstNumb + secondNumb;
}

function subtract(firstNumb, secondNumb){
    return firstNumb - secondNumb;
}

function multiply(firstNumb, secondNumb){
    return firstNumb * secondNumb;
}

function divide(firstNumb, secondNumb){
    return firstNumb / secondNumb;
}

function calculate(firstNumb, operator, secondNumb) {
    firstNumb = Number(firstNumb);
    secondNumb = Number(secondNumb);

    if (operator==="+") return add(firstNumb, secondNumb);
    if (operator==="-") return subtract(firstNumb, secondNumb);
    if (operator==="x") return multiply(firstNumb, secondNumb);
    if (operator==="/") return divide(firstNumb, secondNumb);
}

BUTTONS.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent==="Clear") {
            RESULT_SCREEN.innerHTML = "";
            firstNumb = "";
            secondNumb = "";
            operator = "";

        } else if (button.textContent==="Enter") {
            let result = calculate(firstNumb, operator, secondNumb);
            RESULT_SCREEN.textContent = result;
            firstNumb = result;
            secondNumb = "";
            operator = "";

        } else {
            let element = button.textContent;
            log(element);
            if (element === "+" || element === "-" || element === "x" || element === "/") {

                if (firstNumb !== "" && secondNumb !== "") {
            firstNumb = calculate(firstNumb, operator, secondNumb)

            RESULT_SCREEN.textContent=firstNumb

            secondNumb = ""

            }

            operator = element

            } else {
                if (firstNumb != "" && operator != "") {
                    secondNumb += element

                } else {
                    firstNumb += element
                }
            }
        }
    })
})

function log(element) {
    RESULT_SCREEN.innerHTML += `${element}`
}