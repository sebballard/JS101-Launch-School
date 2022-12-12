// Given an unordered array and the information that exactly one value in the array occurs twice 
// (every other value occurs exactly once), determine which value occurs twice. 
// Write a function that will find and return the duplicate value that is in the array.

// PEDAC

// Process the problem
// Input: unordered array
// Output: value that has been duplicated. can be any type

// Rules: There will only be one duplicate. Input array can vary in length.

// Clarifying questions:
//

// Mental model: Go through input array value by value, adding them to a new array. Before adding check if
// value is already in array



// Example/Test cases

// Data structures/ Algorithm: 
// input; array:
// Set uniqueValues Array to empty array
// Iterate through elements of input Arr:
//  if element is already in uniqueValues: return element
//  else: add element to uniqueValues
// print "no unique values"

// Code


function findDup(inputArr) {
  let uniqueValuesArr = []

  for (let elem of inputArr) {
    if (uniqueValuesArr.includes(elem)) {
      return elem;
    } else uniqueValuesArr.push(elem);
  }

  console.log("There was no duplicated value in the provided array");
}

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73