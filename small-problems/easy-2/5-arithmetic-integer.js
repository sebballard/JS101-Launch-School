// Write a program that prompts the user for two positive integers, 
// and then prints the results of the following operations on those two 
// numbers: addition, subtraction, product, quotient, remainder, and power. 
// Do not worry about validating the input.

// PEDAC

// Process the problem
// Input: Two positive integers
// Output: Console log of result of all different operations

// Implicit requirements: 

// Clarifying questions:
// 

// Mental model: Ask for the two numbers. Perform each operation and show user result.
// Example/Test cases

// Code

const readline = require("readline-sync");

console.log("Enter the first number: ");
numberOne = Number(readline.prompt());

console.log("Enter the second number: ");
numberTwo = Number(readline.prompt())

console.log(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`);
console.log(`${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`);
console.log(`${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`);
console.log(`${numberOne} % ${numberTwo} = ${numberOne % numberTwo}`);
console.log(`${numberOne} ** ${numberTwo} = ${numberOne ** numberTwo}`);












// Example

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23