// Write a function that takes one argument, a positive integer, and returns a 
// list of the digits in the number.

// PEDAC

// Process the problem
// Input: positive integer
// t: List of digits in number

// Rules: Digits in order that they appear in the number

// Clarifying questions:
//

// Mental model: Turn integer into string. iterate through characters adding each one to a new array

// Example/Test cases

// Data structures/ Algorithm: 
// input: integer
// Define outputArr as empty array
// set intAsString: inputInt converted to String
// Iterate through characters in input string.
//  convert char to number and add to output array
// return outputArr

// Code

function digitList(inputInteger) {
  let outputArr = [];

  let intAsString = String(inputInteger);

  for (let char of intAsString) {
    numToAdd = Number(char);
    outputArr.push(numToAdd);
  }

  console.log(outputArr);
  return outputArr;
}



Examples:

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]