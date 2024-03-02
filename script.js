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

let a = " ";
let b = " ";

const buttonNumbers = document.querySelectorAll("#number-button");

buttonNumbers.forEach(button => {
  button.addEventListener("click", function(){
    if (a === " "){
      a = button.textContent;
    } else if (b === " "){
      b = button.textContent;
    } 
    displayValues();
  });
});

function displayValues(){
  document.getElementById("display").innerHTML = + a ;
  document.getElementById("display").innerHTML = + b;
}


