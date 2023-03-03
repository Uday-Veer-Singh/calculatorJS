"use strict";

const input = document.querySelector(".input-field-1");
const result = document.querySelector(".input-field-2");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const buttons = document.querySelectorAll("button");
const arr = ["+", "-", "/", "*"];

function formatString(str) {
  let formattedString = "";
  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) {
      if (
        (str[i - 1] === "+" || str[i - 1] === "/" || str[i - 1] === "*") &&
        !(
          (str[i - 1] === "/" || str[i - 1] === "*") &&
          (str[i] === "-" || str[i] === "+")
        )
      ) {
        return "wrong";
      }
      formattedString += " " + str[i] + " ";
    } else {
      formattedString += str[i];
    }
  }
  return formattedString;
}

const putValue = (e) => {
  let valueToDisplay = e.target.innerText;

  if (valueToDisplay == clear.innerText) {
    input.value = "";
    result.value = "";
    valueToDisplay = "";
  }

  const formattedString = formatString(input.value + valueToDisplay);
  if (formattedString === "wrong") {
    input.value = "Invalid input";
    result.value = "0";
    return;
  }

  input.value += valueToDisplay;
  const ans = input.value.slice(0, -1);
  if (valueToDisplay == equal.innerText) {
    input.value = ans;
    const resultValue = eval(ans.replaceAll(" ", ""));
    result.value = resultValue.toPrecision(2).toString();
    // result.value = parseFloat(resultValue.toPrecision(2)).toString();
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", putValue);
});

console.log();
