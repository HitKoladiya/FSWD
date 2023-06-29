//Task 1: Variables and Data Types

var myVar = "Hello, world!";
console.log("Value of myVar:", myVar);
//document.getElementById("demo").innerHTML=myVar

let myLet = 42;
console.log("Value of myLet:", myLet);
//document.getElementById("demo").innerHTML=myLet;

const myConst = true;
console.log("Value of myConst:", myConst);
//document.getElementById("demo").innerHTML=myConst;

//Task 2: Operators and Expressions

function performOperations(num1, num2) {
  var sum = num1 + num2;
  var difference = num1 - num2;
  var product = num1 * num2;
  var quotient = num1 / num2;

  return {
    sum: sum,
    difference: difference,
    product: product,
    quotient: quotient,
  };
}

var result = performOperations(10, 5);
console.log("Sum:", result.sum);
console.log("Difference:", result.difference);
console.log("Product:", result.product);
console.log("Quotient:", result.quotient);

//Control Flow

// var age = parseInt(prompt("Enter your age:"));

// if (age < 18) {
//   console.log("You are a minor.");
//   document.getElementById("demo").innerHTML="You are a minor."
// } else if (age >= 18 && age <= 65) {
//   console.log("You are an adult.");
//   document.getElementById("demo").innerHTML="You are an adult."
// } else {
//   console.log("You are a senior citizen.");
//   document.getElementById("demo").innerHTML="You are a senior citizen."
// }

//Task 4: Functions

function findMinMaxSalary(salaries) {
  var minSalary = salaries[0];
  var maxSalary = salaries[0];

  for (var i = 1; i < salaries.length; i++) {
    if (salaries[i] < minSalary) {
      minSalary = salaries[i];
    }

    if (salaries[i] > maxSalary) {
      maxSalary = salaries[i];
    }
  }

  return {
    min: minSalary,
    max: maxSalary,
  };
}

var salaries = [50000, 60000, 45000, 70000, 55000];
var result1 = findMinMaxSalary(salaries);

console.log("Minimum Salary:", result1.min);
console.log("Maximum Salary:", result1.max);

//Task 5: Arrays and Objects

var favoriteBooks = [
  "Its ends with us",
  "Its start with us",
  "Ugly",
  "Wings of fire",
];

function displayBookTitles(books) {
  for (var i = 0; i < books.length; i++) {
    console.log(books[i]);
  }
}

displayBookTitles(favoriteBooks);

//Task 7: DOM Manipulation

var button = document.getElementById("myButton");

button.addEventListener("click", function () {
  button.textContent = "Button Clicked!";
});

//Task 8: Error Handling

function checkPositiveNumber(number) {
  if (number < 0) {
    throw new Error("Number must be positive.");
  }

  return number;
}

try {
  var result = checkPositiveNumber(-5);
  console.log("Result:", result);
} catch (error) {
  console.log("Error:", error.message);
}

//Task 9: Asynchronous JavaScript

function simulateAsyncOperation(callback) {
  setTimeout(function () {
    var result = "Operation completed.";

    callback(result);
  }, 2000);
}

function handleResult(result) {
  console.log("Result:", result);
}

console.log("Starting asynchronous operation...");
simulateAsyncOperation(handleResult);
console.log("Asynchronous operation initiated.");
