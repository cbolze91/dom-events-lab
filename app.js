
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

