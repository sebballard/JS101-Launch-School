// Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) 
// to the string representation of that integer.

// PEDAC

// Process the problem
// Input: Number
// Output: String version of number

// Implicit requirements:

// Clarifying questions:
// 

// Mental model: Modulo 10 to get right most digit. Divide by 10 and remove decimal
// to get next place. Convert each digit as you go and add to string.

// Example/Test cases

// Data structures/ Algorithm: 
// Make conversionObj of digits to their string counterparts
// set numString to empty string.
// do while inputNum > 0:
//  set digitToAdd as inputNum % 10
//  set charToAdd as digitToAdd converted
//  set numString to charToAdd + numString
//  set inputNum to inputNum / 10 with decimals removed
// return numString

// Code

const conversionObj = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9"
}

function integerToString(inputInt) {
  let numString = "";

  do {
    let digitToAdd = inputInt % 10;
    let charToAdd = conversionObj[digitToAdd];

    numString = charToAdd + numString;

    inputInt = Math.floor(inputInt / 10);
  } while (inputInt > 0);

  return numString;
}

Examples:

console.log(integerToString(4321), integerToString(0), integerToString(5000), integerToString(1234567890));

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"