// Write a function that takes an array of integers as input, multiplies all of the integers together, 
// divides the result by the number of entries in the array, and returns the result as a string 
// with the value rounded to three decimal places.

// PEDAC

// Process the problem
// Input: array of integers
// Output: number with three decimal places

// Rules: 

// Clarifying questions:
//

// Mental model: Iterate through the array keeping a multiplicative sum along the way. 
// Divide this by length of array. Make sure there are three decimal places and return the value.


// Example/Test cases

// Data structures/ Algorithm: 
// input: (array integers)
// Set runningTotal to 1:
//  iterate through arrays elements and multiply running sum by each element as you go..
// Divide runningSum by length of the array
// Turn this into a string of the value with 3 decimal places
// Return this string

// Code

function multiplicativeAverage(arrayIntegers) {
  let multiplicativeSum = arrayIntegers.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );

  let multiplicativeAverage = multiplicativeSum / arrayIntegers.length;
  
  console.log(multiplicativeAverage.toFixed(3))
  return multiplicativeAverage.toFixed(3)
}




// Examples:

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"