
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
let num1 = '';
let num2 = '';
let polyNomial = [];
let first = true;

//get the value of buttons
numberBtn.forEach (number => {
    number.addEventListener("click", () => {
        displayResult.textContent = "";
        if (first){
            num1 += number.textContent;
            display.textContent = num1; //store the first value in num1
        }
        else{
            num2 += number.textContent
            display1.textContent = num2; //store the second value in num2
        };
    })
});

//get the operators
operatorBtn.forEach (operator => {
    operator.addEventListener("click", () => {
        //input operator only when num1 is not empty.
        if(num1 == ''){
            first = true; 
        }
        else{
            first = false;
            sign.textContent = operator.textContent;
            polyNomial.push(operator.textContent); //push the operator to the polynomial
        }
    })
});


//reset all
reset.addEventListener("click", () => {
    num1 = '';
    num2 = '';
    first = true;
    sign.textContent = "";
    polyNomial =[];
    displayResult.textContent = "";
    display.textContent = num1;
    display1.textContent = num2;
});

backspace.addEventListener("click", () => {
    //check if currently we're storing the value in num1 or num2 before backspacing
    if (first){
        num1 = num1.slice(0,-1);
        display.textContent = num1;
    }
    else{
        num2 = num2.slice(0,-1);
        display1.textContent = num2;
    }
    
});

//call the operate function
equal.addEventListener("click", operate);

function operate(){
    // push the num1 and num2 into the Polynomial array
    polyNomial.push(parseFloat(num1));
    polyNomial.push(parseFloat(num2));
    // determine if a sign is included in the array and use .reduce() to calculate
    const multiply = polyNomial.includes("×");
    const divide = polyNomial.includes("÷");
    const add = polyNomial.includes("+");
    const sub = polyNomial.includes("-");
    let result = polyNomial.filter(item => typeof item === "number")
    if(multiply){
        result = result.reduce((product,number)=> (product*number))
    }
    else if (divide){
        result = result.reduce((quotient,number)=> (quotient/number))
    }
    else if(add){
        result = result.reduce((sum,number)=> (sum + number))
    }
    else if (sub){
        result = result.reduce((diff,number)=> (diff - number))
    }

    displayResult.textContent = result;
    // empty the value of num1, num2, and polyNomial for the next equation
    polyNomial = [];
    num1 = '';
    num2 = '';
    first = true;
    display.textContent = num1;
    display1.textContent = num2;
    sign.textContent = "";
}