// Write a function that takes two arrays as arguments and returns an array containing 
// the union of the values from the two. There should be no duplication of values 
// in the returned array, even if there are duplicates in the original arrays. //
// You may assume that both arguments will always be arrays.


// PEDAC

// Process the problem
// Input: Two arrays
// Output: Single array of all unique values

// Rules: No duplicate values. Values of first array first,

// Clarifying questions:
// 

// Mental model: For each array iterate through values. If value is not already included add to output array.


// Example/Test cases

// Data structures/ Algorithm: 
// input; (two arrays)
// Declar outputArr as emoty array
// For each array loop through elements and if the element is not in outputArr add it
// rteturn outputArr
// Code

function addNonRepeatedElementsToArray(arrayToAddTo, arrayToGetElementsFrom) {
  for (let element of arrayToGetElementsFrom) {
    if (arrayToAddTo.includes(element)) {
      continue;
    } else {
      arrayToAddTo.push(element);
    }
  }
}

function union(array1, array2) {
  outputArr = [];

  addNonRepeatedElementsToArray(outputArr, array1);
  addNonRepeatedElementsToArray(outputArr, array2);

  console.log(outputArr)
  return outputArr;
}


Example:

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]