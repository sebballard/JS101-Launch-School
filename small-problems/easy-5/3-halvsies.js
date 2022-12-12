// Write a function that takes an array as an argument and returns an array that contains two elements, 
// each of which is an array. Put the first half of the original array elements in the 
// first element of the return value, and put the second half in the second element. 
// If the original array contains an odd number of elements, place the middle element 
// in the first half array.

// PEDAC

// Process the problem
// Input: Array
// Output: 2D array

// Rules: Empty input array returns 2D array with two empty inner arrays
// Array with length 1 places this element in the first output array.
// Elements remain in order
// For input Arrays with an odd length, extra element goes in the first half array.

// Clarifying questions:
// 

// Mental model: Split the inputArray in half. Place first half in first inner array. 
// Second half in second inner array



// Example/Test cases

// Data structures/ Algorithm: 
// input; array:
// Determine index for cutoff point of inputArray determinign which values.
// Define outputArr as 2D array with 2 empty inner elements
// use cut off index to generate two new Arrays from input, arrayToAdd1 and arrayToAdd2
// add the elements of these two new arrays to the correct inner array of outputArr
// return outputArr


function halvsies(inputArr) {
  let halfwayIndex = Math.ceil((inputArr.length / 2));

  let outputArr = [];

  firstInnerArray = inputArr.slice(0, halfwayIndex);
  secondInnerArray = inputArr.slice(halfwayIndex);

  outputArr.push(firstInnerArray, secondInnerArray);

  return outputArr;
}
Examples:

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
