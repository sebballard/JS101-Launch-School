// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate.
// The program must compute the tip, and then log both the tip and the total amount of the bill
//  to the console. You can ignore input validation and assume that the user will enter numbers.

// PEDAC

// Process the problem
// Input: Bill amount, tip percentage
// Output: Console log of tip and total bill.

// Implicit requirements: dollars accurate to two decimal places.
// 

// Clarifying questions:
// How do we calculate the tip and total? tip = Bill * (tippercentage/100). Total = bill + tip

// Mental model: Get the bill and tip percentage. Convert tip percentage to decimal
// and mutiply the bill by that to get the tip. Add the tip to the bill to get the total.
// Display results to user.


// Example/Test cases
// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00


// Data structures/ Algorithm:
// get from user: billAmount, tipPercentage
// calculate tip: billAmount * (tipPercentage / 100)
// calculate total: billAmount + tip
// Display to user with console.log


// Code

const readline = require("readline-sync");

function isNumPositive(num) {
  return num >= 0;
}

console.log("What is the bill?");
let bill = readline.prompt();

while (!isNumPositive(bill)) {
  console.log("That doesn't make sense. Try again please.");
  bill = readline.prompt();
}
bill = parseFloat(bill);

console.log("What is the tip percentage?");
let tipPercentage = readline.prompt();

while (!isNumPositive(tipPercentage)) {
  console.log("That doesn't make sense. Try again please.");
  tipPercentage = readline.prompt();
}
tipPercentage = parseFloat(tipPercentage);

console.log(bill, tipPercentage);
let tip = bill * (tipPercentage / 100);
let total = bill + tip;


console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

