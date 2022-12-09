// Write a function that takes an array of numbers and returns an array with the same 
// number of elements, but with each element's value being the running total 
// from the original array.

// PEDAC

// Process the problem
// Input: array of numbers
// Output: array numbers

// Rules: output array same length as input array.
// Each element sum of numbers up to that point in input array
// Empty input array returns empty output array

// Clarifying questions:
// 

// Mental model: Keep track of a running total. Iterate through inputArray
// on each iteration add value to total, and make total the corresponding value in outputArray

// Example/Test cases

// Data structures/ Algorithm: 
// define runningTotal as 0
// Helper callbackfunction: (element)
//  add element to runnign total
//  return runningTotal
// Apply helper function to each element and add return to new outputArray
// return outputArray

// Code

function runningTotal(inputArr) {
  let runningTotal = 0;

  function callbackRunningTotal(element) {
    runningTotal += element;
    return runningTotal;
  }

  outputArr = inputArr.map(callbackRunningTotal);

  console.log(outputArr);
  return outputArr;
}




// Examples:

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []