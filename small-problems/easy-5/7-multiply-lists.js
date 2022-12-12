// Write a function that takes two array arguments, each containing a list of numbers, 
// and returns a new array that contains the product of each pair of numbers from 
// the arguments that have the same index. You may assume that the arguments contain 
// the same number of elements.

// PEDAC

// Process the problem
// Input: two arrays of numbers
// Output: array containign product of thw two numbers at that index

// Rules: 

// Clarifying questions:
//

// Mental model: Iterate through index values. Multiply the elements at that index value for input arrays.
// Add the result to new aray.

// Example/Test cases

// Data structures/ Algorithm: 
// input: two arrays of numbers. Equal length
// Create empty array outputArr
// iterate through index values of input arrays:
//  set valueToAdd ass the product of the two elements at that index of inputArrays
//  add this value to outputArr
// return outputArr

// Code

function multiplyList(arr1, arr2) {
  let outputArr = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    let valueToAdd = arr1[idx] * arr2[idx];
    outputArr.push(valueToAdd);
  }

  console.log(outputArr);
  return outputArr;
}


Example:

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]