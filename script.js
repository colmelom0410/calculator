
// get the elements from the HTML
const display= document.querySelector("#equationOne");
const display1= document.querySelector("#equationTwo");
const numberBtn = document.querySelectorAll(".numberBtn");
const operatorBtn = document.querySelectorAll(".operationBtn");
const reset = document.querySelector("#AC");
const backspace = document.querySelector("#C");
const equal = document.querySelector("#equal");
const displayResult = document.querySelector("#answer");
const sign = document.querySelector("#sign");
let displayEquation = [];
let monomial = [];
let polyNomial = [];

//get the value of buttons
numberBtn.forEach (number => {
    number.addEventListener("click", () => {
        displayResult.textContent = "";
        displayEquation += number.textContent;
        display.textContent = displayEquation;
        //store the value in the monomial array
        monomial += number.textContent;
    })
});

//get the operators
operatorBtn.forEach (operator => {
    operator.addEventListener("click", () => {
        //push the value of monomial array into the polynomial array
        if(monomial.length == 1){ //check if the monomial is not empty
            polyNomial.push(parseFloat(monomial));}
        sign.textContent = operator.textContent;
        monomial = []; //empty the monomial array for the next value
        polyNomial.push(operator.textContent); //push the operator to the polynomial
        display.textContent = displayEquation;
        
    })
});

//reset all
reset.addEventListener("click", () => {
    displayEquation = [];
    monomial = [];
    polyNomial =[];
    displayResult.textContent = "";
    display.textContent = displayEquation;
});

backspace.addEventListener("click", () => {
    displayEquation = displayEquation.slice(0,-1);
    monomial = monomial.slice(0,-1);
    display.textContent = displayEquation;
});

//call the operation function
equal.addEventListener("click", operate);

function operate(){
    polyNomial.push(parseFloat(monomial));
    const multiply = polyNomial.includes("×");
    const divide = polyNomial.includes("÷");
    const add = polyNomial.includes("+");
    const sub = polyNomial.includes("-");
    let result;
        if(multiply){
            result = polyNomial
                .filter(item => typeof item === "number")
                .reduce((sum,number)=> (sum*number))
        }
        else if (divide){
            result = polyNomial
                .filter(item => typeof item === "number")
                .reduce((sum,number)=> (sum/number))
        }
        else if(add){
            result = polyNomial
                .filter(item => typeof item === "number")
                .reduce((sum,number)=> (sum + number),0)
        }
        else if (sub){
            result = polyNomial
                .filter(item => typeof item === "number")
                .reduce((sum,number)=> (sum - number),0)
        }
    
    displayResult.textContent = result;
    polyNomial = [];
    polyNomial.push(result);
    displayEquation = [];
    display.textContent = displayEquation;
    monomial = [];
}