function add(a, b){
  return a + b;
};

function subtract(a, b){
  return a - b;
};

function multiply(a ,b){
  return a * b;
};

function divide(a, b){
  return a / b;
};

let num1 = 0;
let num2 = 0;
let operator = "";

function operate(a, b, operator){
  if (operator === "+"){
    return add(a, b);
  } else if(operator === "-"){
    return subtract(a, b);
  } else if (operator === "*"){
    return multiply(a, b);
  } else if (operator === "/"){
    return divide(a, b);
  }
}

let result = operate(2,2, "+");
console.log(result);


function displayOne(){
  let buttonText = 1;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};

let one = displayOne;
document.getElementById("one").addEventListener("click", one);

function displayTwo(){
  let buttonText = 2;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};

let two = displayTwo;
document.getElementById("two").addEventListener("click", two);

function displayThree(){
  let buttonText = 3;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};

let three = displayThree;
document.getElementById("three").addEventListener("click", three);

function displayFour(){
  let buttonText = 4;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};

let four = displayFour;
document.getElementById("four").addEventListener("click", four);

function displayFive(){
  let buttonText = 5;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};

let five = displayFive;
document.getElementById("five").addEventListener("click", five);

function displaySix(){
  let buttonText = 6;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
}

let six = displaySix;
document.getElementById("six").addEventListener("click", six);

function displaySeven(){
  let buttonText = 7;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};

let seven = displaySeven;
document.getElementById("seven").addEventListener("click", seven);


function displayEight(){
  let buttonText = 8;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};

let eight = displayEight;
document.getElementById("eight").addEventListener("click", eight);

function displayNine(){
  let buttonText = 9;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};

let nine = displayNine;
document.getElementById("nine").addEventListener("click", nine);

