



const display = document.querySelector("#equation");
const numberBtn = document.querySelectorAll(".numberBtn");
const operatorBtn = document.querySelectorAll(".operationBtn");
const reset = document.querySelector("#AC");
const backspace = document.querySelector("#C");
const equal = document.querySelector("#equal");
const displayResult = document.querySelector("#answer");
let displayEquation = [];
let monomial = [];
let polyNomial = [];

numberBtn.forEach (number => {
    number.addEventListener("click", () => {
        displayEquation += number.textContent;
        display.textContent = displayEquation;
        monomial += number.textContent;
    })
});

operatorBtn.forEach (operator => {
    operator.addEventListener("click", () => {
        polyNomial.push(parseFloat(monomial));
        displayEquation += operator.textContent;
        monomial = [];
        polyNomial.push(operator.textContent);
        display.textContent = displayEquation;
    })
});

reset.addEventListener("click", () => {
    displayEquation = [];
    monomial = [];
    polyNomial =[];
    display.textContent = displayEquation;
});

backspace.addEventListener("click", () => {
    displayEquation = displayEquation.slice(0,-1);
    monomial = monomial.slice(0,-1);
    display.textContent = displayEquation;
});

equal.addEventListener("click", add);

function add(){
    polyNomial.push(parseFloat(monomial));
    const result = polyNomial
                            .filter(item => typeof item === "number")
                            .reduce((sum,number)=> (sum + number),0)
    displayResult.textContent = result;
}