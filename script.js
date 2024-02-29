function add(a, b){
  return a + b;
};

console.log(add(2, 2));

function subtract(a, b){
  return a - b;
};
console.log(subtract(4 ,2));

function multiply(a ,b){
  return a * b;
};

console.log(multiply(2,2));

function divide(a, b){
  return a / b;
};
console.log(divide(2, 2));

let num1 = 0;
let num2 = 0;
let operator = "";

function operate(num1, num2, operator){
  if (operator === "+"){
    return num1 + num2;
  } else if(operator === "-"){
    return num1 - num2;
  } else if (operator === "*"){
    return num1 * num2;
  } else if (operator === "/"){
    return num1 / num2;
  }
}

let result = operate(2,2, "+");
console.log(result);