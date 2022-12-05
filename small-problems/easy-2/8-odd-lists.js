// Write a function that returns an Array that contains every other element of an Array that is passed
// in as an argument. The values in the returned list should be those values that are in the 
// 1st, 3rd, 5th, and so on elements of the argument Array.

// PEDAC

// Process the problem
// Input: array
// Output: array containing every other elements of input array

// Implicit requirements: empty arrray returns empty array.

// Clarifying questions:
// 

// Mental model: Loop through numbers 0 to length of array adding 2 each time. Add each value and index to new array

// Example/Test cases

// Data structures/ Algorithm: 
// Set returnArray as empty array
// Iterate i, from zero to length of inputArray - 1, adding 2 each time;
//  add value at index i of inputArray to to returnArray
// return returnArray

// Code

function oddities(inputArray) {
  let returnArray = [];

  for (let i = 0; i < inputArray.length; i += 2) {
    returnArray.push(inputArray[i]);
  }

  return returnArray;
}


// Examples:

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []



// Further Exploration

// Write a companion function that returns the 2nd, 4th, 6th, and so on elements of an array.

// Try to solve this exercise in a different way.

function oddities(inputArray) {
  let returnArray = [];

  for (let i = 1; i < inputArray.length; i += 2) {
    returnArray.push(inputArray[i]);
  }

  return returnArray;
}
