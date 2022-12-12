// Write a function that takes one argument, an array of integers, and 
// returns the average of all the integers in the array, rounded down to the integer 
// component of the average. The array will never be empty, and the numbers will always 
// be positive integers.

// PEDAC

// Process the problem
// Input: Array of integers
// outoutt: number

// Rules: Input array never empty. Always positive integers.

// Clarifying questions:
//

// Mental model: Calculate average of array elements. Average down to remove the decimal part

// Example/Test cases

// Data structures/ Algorithm: 

function average(inputArr) {
  let sum = inputArr.reduce((accumulator, currentValue) => accumulator + currentValue,
  0)

  let average = Math.floor(sum / inputArr.length);

  console.log(average);
  return average;
}

// Code

Examples:

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40