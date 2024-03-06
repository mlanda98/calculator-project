let previousNum = "";
let currentNum = "";
let currentOperator = "";

function calculate(){
  let previous = parseFloat(previousNum);
  let current = parseFloat(currentNum);
  let result;
  if (currentOperator === "+"){
    result = previous + current;
  } else if (currentOperator === "-"){
    result = previous - current;
  } else if (currentOperator === "x"){
    result = previous * current;
  } else if (currentOperator === "/"){
    if (current === 0){
      result = "Error: Division by zero"
    } else {
      result = previous / current;
    }
  }

  currentNum = result;
  previousNum = "";

}


const buttonNumbers = document.querySelectorAll("#number-button");

buttonNumbers.forEach(button => {
  button.addEventListener("click", function(){
      if (currentNum === "0"){
        currentNum = "";
      };
      currentNum += (button.innerText);
      displayValue();

    });
});

const operatorButtons = document.querySelectorAll("#operator");

operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener("click", function (){
    operate();
    currentOperator = (operatorButton.innerText);
    currentNum ="";
    displayValue();
    

  })
});

const equal = document.getElementById("equal");
equal.addEventListener("click", function(){
      calculate();
      displayValue();
});

const display = document.getElementById("display");
const displayRow = document.getElementById("display2");
function displayValue(){
  document.getElementById("display").innerHTML = currentNum;
  document.getElementById("display2").innerHTML = previousNum;
}

function operate(){
  if (currentNum == "") return;
  if (previousNum !== "" && currentOperator !== ""){
    calculate();
  }
  previousNum = currentNum + currentOperator;
  currentNum = "";
}

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
  currentNum = "";
  previousNum = "";
  operation = "";
  displayValue();
})

