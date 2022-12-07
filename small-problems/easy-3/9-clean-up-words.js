// Given a string that consists of some words and an assortment of non-alphabetic characters, 
// write a function that returns that string with all of the non-alphabetic characters 
// replaced by spaces. If one or more non-alphabetic characters occur in a row, 
// you should only have one space in the result (i.e., the result string should never have 
// consecutive spaces).

// PEDAC

// Process the problem
// Input: string
// Output: string with sequences of non-alphabetic characters replaced by a space

// Implicit requirements: Maximum one space between alphabetic characters in return string

// Clarifying questions:
 

// Mental model:
// First replace all non symbol characters with a space
// replace all double spaces with single spaces.

// Example/Test cases
// cleanUp("---what's my +*& line?");    // " what s my line "

// Data structures/ Algorithm: 
// initialize empty string: outputStr
// loop over characters in inputStr:
//  if character is alphabetic: add to output string
//  else: add space to output string
// Make a regex object to identify sections with more than one space
// Use this to replace multiple spaces with one
// return outputStr


function cleanUp(inputStr) {
  let outputStr = "";

  for (let char of inputStr) {
    if (char.toUpperCase() != char.toLowerCase()) {
      outputStr += char;
    } else {
      outputStr += " ";
    }
  }
  
  let spacesRe = /  +/g;
  outputStr = outputStr.replace(spacesRe, " ");

  return outputStr;
}

// Example:

// cleanUp("---what's my +*& line?");    // " what s my line "