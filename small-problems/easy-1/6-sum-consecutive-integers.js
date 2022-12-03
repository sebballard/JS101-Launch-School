// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or the product of
// all numbers between 1 and the entered integer, inclusive.


// PEDAC

// Process the problem
// Input: number greater than zero, sum or product decision
// Output: sum or product of values between 1 and number entered

// Implicit requirements: 
// 

// Clarifying questions:
// 

// Mental model: Get number. Get decision of sum or product
// set a total variable to 1 and loop through the numbers 2 till
// the desired number performing the desired operation on total and the number.
// Display the result.

// Example/Test cases

// Data structures/ Algorithm:
// get integer Number from user and assign to num.
// Get the desired operation as string "sum" or "product"
// set total variable to 1
// loop from 2 up till including num
// each loop total = total * or + loopnumber
// Display result


// Code

const readline = require("readline-sync");

// console.log("Please enter an integer greater than zero: ");
// let num = parseInt(readline.prompt());

// console.log("Please tell me whether you want the 'product' or 'sum':") 
// let operation = readline.prompt();

// while ((operation != "product") && (operation != "sum")) {
//   console.log("Thats not a valid input try again");
//   operation = readline.prompt()
// }

// let total = 1;

// for (let i = 2; i <= num; i += 1) {
//   if (operation === "product") {
//     total *= i;
//   } else if (operation === "sum") {
//     total += i;
//   }
// }

// console.log(`The ${operation} of integers between 1 and ${num} is ${total}`);



// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.







// Further Exploration

// What if the input was an array of integers instead of just a single integer? 
// How would your computeSum and computeProduct functions change? Given that the
// input is an array, how might you make use of the Array.prototype.reduce() method?

let num = [1, 2, 3, 4, 5, 6]

console.log("Please tell me whether you want the 'product' or 'sum':") 
let operation = readline.prompt();

while ((operation != "product") && (operation != "sum")) {
  console.log("Thats not a valid input try again");
  operation = readline.prompt()
}

if (operation === "product") {
  total = num.reduce((accumulator, currentValue) => accumulator * currentValue);
} else if (operation === "sum") {
  total = num.reduce((accumulator, currentValue) => accumulator + currentValue);
}


console.log(total);