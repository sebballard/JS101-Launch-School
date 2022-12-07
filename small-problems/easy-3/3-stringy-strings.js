// Write a function that takes one argument, a positive integer, and returns a string of alternating 
// '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

// Process the problem
// Input: positive integer
// Output: String alternating 1s and 0s of length as input

// Implicit requirements: Start with 1

// Clarifying questions:
// 

// Mental model: Create empty output string. 
// Iterate from 1 until inputNumber. If iteration is odd add 1, else add zero.

// Example/Test cases

// Data structures/ Algorithm: 

// Code

function stringy(stringLength) {
  let outputString = "";

  for (let num = 1; num <= stringLength; num += 1) {
    if (num % 2 === 1) {
      outputString += "1";
    } else {
      outputString += "0";
    }
  }
  return outputString;
}





// Examples:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"