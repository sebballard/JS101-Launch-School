// Write a function that takes an integer argument and returns an array containing 
// all integers between 1 and the argument (inclusive), in ascending order.

// You may assume that the argument will always be a positive integer.


// PEDAC

// Process the problem
// Input: number
// outoutt: array of numbers

// Rules:  array of integers

// Clarifying questions:
//

// Mental model: 
// Example/Test cases

// Data structures/ Algorithm: inputNumber
// define outputArr as empty array
// iterate through 1 till inputNumber inclusive
//  Add each number to outputArr
// return outputArr

// Code

function sequence(inputNumber) {
  let outputArr = [];

  for (let i = 1; i <= inputNumber; i += 1) {
    outputArr.push(i);
  }

  console.log(outputArr);
  return outputArr;
}





// Examples:

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
