// Write a function that takes a string argument and returns a new string containing 
// the words from the string argument in reverse order.


// PEDAC

// Process the problem
// Input: string
// outoutt: string

// Rules:  

// Clarifying questions:
//

// Mental model: 
// Example/Test cases

// Data structures/ Algorithm: inputNumber
// seperate string into array of seperate words
// reverse the order of this array
// Join array into a string

// Code

function reverseSentence(inputStr) {
  console.log(inputStr.split(" ").reverse().join(" "));
  return inputStr.split(" ").reverse().join(" ");
}



Examples:

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"
