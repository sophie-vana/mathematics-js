// define findSum funtion
function findSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// define subtractNumbers function
function subtractNumbers(a, b) {
  return a - b;
}

// define multiplyNumbers funtion
function multiplyNumbers(a, b) {
  return a * b;
}

// define divideNumbers funtion
function divideNumbers(a, b) {
  if (b === 0) {
    return "Undefined (Cannot divide by 0)";
  } else {
    return a / b;
  }
}

// create number array
const numbersArray = [20, 4, 5];

// Find the sum of the numbers in the array using findSum ()
const sum = findSum(numbersArray);
console.log(`The sum of the numbers in the array is ${sum}`);

// Subtract the second number from the first number
let subtract = subtractNumbers(numbersArray[0], numbersArray[1]);
console.log(
  `Subtracting ${numbersArray[1]} from ${numbersArray[0]} results in a value of ${subtract}`
);

// Multiply the third and first number
let multiply = multiplyNumbers(numbersArray[2], numbersArray[0]);
console.log(
  `Multiplying ${numbersArray[2]} by ${numbersArray[0]} results in a value of ${multiply}`
);

// Divide the sum of the numbers in the array by the third number in the array
let divide = divideNumbers(sum, numbersArray[2]);
console.log(`Dividing ${sum} by ${numbersArray[2]} results in ${divide}`);
