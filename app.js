
console.log("Everything is Working!");

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let currentInput = "";

let previousValue = null; 

let operator = null;

/*------------------------ Cached Element References ------------------------*/

const displayEl = document.querySelector(".display");

const buttons = document.querySelectorAll(".button");

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.innerText;

    if (event.target.classList.contains("number")) {
      handleNumber(value);
    } else if (event.target.classList.contains("equals")) {
      handleEquals();
    } else if (event.target.classList.contains("operator")) {
      handleOperator(value);
    }
  });
});

/*-------------------------------- Functions --------------------------------*/

function updateDisplay() {
  if (currentInput !== "") {
    displayEl.innerText = currentInput;
  } else if (previousValue !== null) {
    displayEl.innerText = previousValue;
  } else {
    displayEl.innerText = "0";
  }
}


function handleNumber(value) {
  if (currentInput === "0") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}


function handleOperator(value) {
  if (value === "C") {
    clearAll();
    return;
  }

  if (previousValue === null && currentInput !== "") {
    previousValue = Number(currentInput);
    currentInput = "";
  } else if (previousValue !== null && currentInput !== "") {
    previousValue = calculate(previousValue, Number(currentInput), operator);
    currentInput = "";
  }

  operator = value;
  updateDisplay();
}


function handleEquals() {
  if (previousValue !== null && operator !== null && currentInput !== "") {
    const result = calculate(previousValue, Number(currentInput), operator);
    previousValue = result;
    currentInput = "";
    operator = null;
    updateDisplay();
  }
}


function calculate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return b;
  }
}
