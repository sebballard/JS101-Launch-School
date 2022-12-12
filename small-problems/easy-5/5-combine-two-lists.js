// Write a function that combines two arrays passed as arguments, and returns a new 
// array that contains all elements from both array arguments, with each element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same number of elements.

// PEDAC

// Process the problem
// Input: two arrays.
// Output: Single array containing all elements from the two arrays appearing alternating

// Rules: Two arrays will have the same length. They will not be empty.

// Clarifying questions:
//

// Mental model: Iterate through index values equal to length of the arrays - 1. On each iteration add
// the element at each index from each array to a new array.



// Example/Test cases

// Data structures/ Algorithm: 
// input; two arrays, equal length
// declare empty array: outputArr
// iterate through index values 0 to 1 - length of the array:
//  Each iteration add the elements at that index to the outputArr, in order.

// Code

function interleave(arr1, arr2) {
  let lengthArrs = arr1.length;

  let outputArr = [];
  for (let i = 0; i < lengthArrs; i += 1) {
    outputArr.push(arr1[i], arr2[i]);
  }

  console.log(outputArr);
  return outputArr;
}



Example:

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
