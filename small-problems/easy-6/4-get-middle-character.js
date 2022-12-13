// Write a function that takes a non-empty string argument and returns the 
// middle character(s) of the string. If the string has an odd length, 
// you should return exactly one character. If the string has an even length, 
// you should return exactly two characters.

// PEDAC

// Process the problem
// Input: non-empty string
// outoutt: string

// Rules: 

// Clarifying questions:
//

// Mental model: 
// Example/Test cases

// Data structures/ Algorithm: inputNumber
// define inputLength as length of input string
// define middleIndex as floor of inputLength / 2
// if inputLength is even return the substring from middleIndex up to and inclusing middleIndex + 1
// Else return the chracter at iddle index;  "candys"

// Code

function centerOf(inputStr) {
  let inputLength = inputStr.length;
  let centerIndex = Math.floor(inputLength / 2);
  let outputStr;

  if (inputLength % 2 === 0) {
    outputStr = inputStr.slice(centerIndex - 1, centerIndex + 1);
  } else {
    outputStr = inputStr[centerIndex];
  }

  console.log(outputStr);
  return outputStr;
}



Examples:

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
