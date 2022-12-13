// Write a function that takes a string, doubles every character in the string, and returns the 
// result as a new string.


// PEDAC

// Process the problem
// Input: String
// outoutt: string

// Rules: Capitalization styays the same folor doubled characters
// Spaces and symbols also doubled. Empty string returns empty string

// Clarifying questions:
//

// Mental model: Iterate though elelemnts of string. Add each element twice to new string.

// Example/Test cases

// Data structures/ Algorithm: 

// set outputStr as empty string.
// Iterate through chars in input:
//  Add each char to outStr twixe
// return outputStr


function repeater(inputStr) {
  let outputStr = "";

  for (let char of inputStr) {
    outputStr += char.repeat(2)
  }

  console.log(outputStr, outputStr.length);
  return outputStr;
}





// Examples:

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
