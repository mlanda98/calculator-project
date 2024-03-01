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



document.getElementById("one").addEventListener("click", displayOne)
function displayOne(){
  let buttonText = 1;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};

document.getElementById("two").addEventListener("click", displayTwo)
function displayTwo(){
  let buttonText = 2;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};

document.getElementById("three").addEventListener("click", displayThree)
function displayThree(){
  let buttonText = 3;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};

document.getElementById("four").addEventListener("click", displayFour)
function displayFour(){
  let buttonText = 4;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};

document.getElementById("five").addEventListener("click", displayFive)
function displayFive(){
  let buttonText = 5;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};

document.getElementById("six").addEventListener("click", displaySix)
function displaySix(){
  let buttonText = 6;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
}

document.getElementById("seven").addEventListener("click", displaySeven)
function displaySeven(){
  let buttonText = 7;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};



document.getElementById("eight").addEventListener("click", displayEight)
function displayEight(){
  let buttonText = 8;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};

document.getElementById("nine").addEventListener("click", displayNine)
function displayNine(){
  let buttonText = 9;
  let numberDiv = document.getElementById("display");
  numberDiv.innerText = buttonText;
};
