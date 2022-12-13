// Write a function that takes a string, doubles every consonant character in the 
// string, and returns the result as a new string. The function should not 
// double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

// PEDAC

// Process the problem
// Input: String
// outoutt: string

// Rules: Only double consonants, not any other characters

// Clarifying questions:
//

// Mental model: Make reference of consonant characters.  iterate through string. If char is included in
// reference add it to new string doubled, else add it once.

// Example/Test cases

// Data structures/ Algorithm: 
// define validConsonants, an array of all valid consonants.
// initialize outputStr as empty string.
// Loop through elements of inputStr:
//  if elelement is in validConsonants add it twice to outputStr
//  else: add it once
// return outpitStr

// Code

const validConsonants = "bcdfgjklmnpqstvxhrwy"

function isConsonant(inputChar) {
  return validConsonants.includes(inputChar.toLowerCase());
}

function doubleConsonants(inputStr) {
  let outputStr = "";

  for (let char of inputStr) {
    if (isConsonant(char)) {
      outputStr += char.repeat(2);
    } else outputStr += char;
  }

  console.log(outputStr);
  return outputStr;
}




// Examples:

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""