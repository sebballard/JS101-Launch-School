// Write a function that takes a positive integer as an argument and returns that 
// number with its digits reversed.

// PEDAC

// Process the problem
// Input: integer as number
// outoutt: number

// Rules: When reversed leading zeroes are  discarded

// Clarifying questions:
//

// Mental model: 
// Example/Test cases

// Data structures/ Algorithm: inputNumber
// Turn nuber into string
// Seperate strign characters into array
// Reverse array and turn back into string.
// Convert this string to a Number

// Code

function reverseNumber(inputNum) {
  let numAsString = String(inputNum);

  let reversedString = numAsString.split("").reverse().join("");

  console.log(Number(reversedString));
  return Number(reversedString);
}






// Examples:

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
