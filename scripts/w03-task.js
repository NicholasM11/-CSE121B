function add(number1, number2) {
  return number1 + number2;
}
const subtract = function (number1, number2) {
  return number1 - number2;
};

const multiply = (number1, number2) => {
  return number1 * number2;
};

const divide = function (number1, number2) {
  if (number2 !== 0) {
    return number1 / number2;
  } else {
    alert("Error: It's not possible dived by zero");
    return "try again";
  }
};

function addNumbers() {
  let num1 = Number(document.getElementById("add1").value);
  let num2 = Number(document.getElementById("add2").value);
  let sum = add(num1, num2);
  document.getElementById("sum").value = sum;
}
const subtractNumbers = function () {
  let num1 = Number(document.getElementById("subtract1").value);
  let num2 = Number(document.getElementById("subtract2").value);
  let difference = subtract(num1, num2);
  document.getElementById("difference").value = difference;
};

const multiplyNumbers = () => {
  let num1 = Number(document.getElementById("factor1").value);
  let num2 = Number(document.getElementById("factor2").value);
  let product = multiply(num1, num2);
  document.getElementById("product").value = product;
};

function divideNumbers() {
  let num1 = Number(document.getElementById("dividend").value);
  let num2 = Number(document.getElementById("divisor").value);
  let quotient = divide(num1, num2);
  document.getElementById("quotient").value = quotient;
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

document
  .getElementById("subtractNumbers")
  .addEventListener("click", subtractNumbers);
document
  .getElementById("multiplyNumbers")
  .addEventListener("click", multiplyNumbers);
document
  .getElementById("divideNumbers")
  .addEventListener("click", divideNumbers);

document.getElementById("getTotalDue").addEventListener("click", function () {
  let subtotal = Number(document.getElementById("subtotal").value);
  let membershipChecked = document.getElementById("member").checked;

  if (membershipChecked) {
    subtotal *= 0.8; // Apply 20% discount if is member 
  }

  let total = subtotal.toFixed(2);
  document.getElementById("total").textContent = `${total}`;
});

let numbers = Array.from({ length: 13 }, (_, i) => i + 1);

document.getElementById("array").textContent = numbers;

let odds = numbers.filter((num) => num % 2 === 1);
document.getElementById("odds").textContent = odds;

let evens = numbers.filter((num) => num % 2 === 0);
document.getElementById("evens").textContent = evens;

let sumOfArray = numbers.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

let multiplied = numbers.map((num) => num * 2);
document.getElementById("multiplied").textContent = multiplied;

let sumOfMultiplied = multiplied.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
