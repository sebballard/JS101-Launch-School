// Write a function that takes a string of digits and returns the appropriate number as an integer.
// You may not use any of the standard conversion methods available in JavaScript, 
// such as String() and Number(). Your function should do this the old-fashioned way and 
// calculate the result by analyzing the characters in the string.

// PEDAC

// Process the problem
// Input: string of digits
// Output: integer

// Implicit requirements: 

// Clarifying questions:
// 

// Mental model: Make a conversion table for string digit to number.
// Iterate through input string and add each digit to a converted number total
// while adjusting for the 'position' in the number.


// Example/Test cases

// Data structures/ Algorithm: 
// Define conversionObj which has 0-9 as keys and the relative Numbers as value
// Set convertedDigits to 0
// Loop through characters of inputString:
//  set newDigit as the corresponding value for the character in conversion Obj
//  reassign converted digits to (convertedDigits * 10) + newDigit
// Return convertedDigits 

// Code

const conversionObj = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function stringToInteger(inputString) {
  let convertedDigits = 0;

  for (let char of inputString) {
    let newDigit = conversionObj[char];
    convertedDigits = (convertedDigits * 10) + newDigit;
  }

  return convertedDigits;
}


// Examples

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true


// Further Exploration

// Write a hexadecimalToInteger() function that converts a string representing a hexadecimal number 
// to its integer value. Note that hexadecimal numbers use base 16 instead of 10, and the
// "digits" A, B, C, D, E, and F (and the lowercase equivalents) correspond to decimal values of 10-15.


const conversionObj = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};

function hexStringToInteger(inputString) {
  let convertedDigits = 0;

  for (let char of inputString) {
    let newDigit = conversionObj[char.toUpperCase()];
    convertedDigits = (convertedDigits * 16) + newDigit;
  }

  return convertedDigits;
}

console.log(hexStringToInteger("4D9F"))
