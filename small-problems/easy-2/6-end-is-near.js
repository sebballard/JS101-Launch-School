// Write a function that returns the next to last word in the 
// String passed to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

// PEDAC

// Process the problem
// Input: String containing at least two words
// Output: String of second to last woord in original string.

// Implicit requirements: 

// Clarifying questions:
// 

// Mental model: Split the input string into an array of individual words.
// Find and return the second to last word.

// Example/Test cases

// Data structures/ Algorithm: 
// Split input string into array of word strings. Space as seperator.
// set outputString to the string at index of the array length -2.
// return outputString


// Code

function penultimate(inputString) {
  let wordsArray = inputString.split(" ");
  let outputString = wordsArray[wordsArray.length - 2];

  return outputString;
}

// Examples:

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true



// Further Exploration

// Our solution ignored a couple of edge cases because we explicitly stated that you didn't have
// to handle them: strings that contain just one word, and strings that contain no words.

// Suppose we need a function that retrieves the middle word of a phrase/sentence. What edge cases need 
// to be considered? How would you handle those edge cases without ignoring them? Write a function that 
// returns the middle word of a phrase or sentence. It should handle all of the edge cases you thought of.

// If there are an even amount of words there is no middle word. In this case return the two words in the 
// middle as one string.

// Declare variable returnString.
// If array length modulo two is zero:
//  set startIndex to (array length / 2) - 1
//  set return string to string at index startIndex + string at index startIndex + 1
// else:
//  set return string to string at index: floor(array length / 2)
// return string


function middle(inputString) {
  let wordsArray = inputString.split(" ");

  let returnString;
  if (wordsArray.length % 2 === 0) {
    let startIndex = (wordsArray.length / 2) - 1;
    returnString = wordsArray[startIndex] + " " + wordsArray[startIndex + 1];
  } else {
    returnString = wordsArray[Math.floor(wordsArray.length / 2)];
  }

  return returnString;
}



console.log(middle("last word")); // logs last word
console.log(middle("Launch School is great!")); // logs School is
console.log(middle("hello to you")); // logs to
console.log(middle(""));

