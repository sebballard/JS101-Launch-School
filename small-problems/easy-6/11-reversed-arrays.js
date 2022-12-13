// Write a function that takes an Array as an argument and reverses its elements in place. 
// That is, mutate the Array passed into this method. The return value should be the same Array object.

// You may not use Array.prototype.reverse().

// PEDAC

// Process the problem
// Input: array
// outoutt: array

// Rules:  empty array returns emtpty array

// Clarifying questions:
//

// Mental model: 
// Example/Test cases

// Data structures/ Algorithm: input array
// set halfwayIndex to inputArray length / 2
// iterat through indexnumbers 0 to half way index
//  Store values at index and -1 - index in temporary varibales
//  Use the temp variables to switch values at these indexes
// return array

// Code

function reverse(inputArray) {
  let halfwayIndex = Math.floor(inputArray.length / 2) - 1

  for (let idx = 0; idx <= halfwayIndex; idx += 1) {
    let beginTemp = inputArray[idx];
    let backTemp = inputArray[inputArray.length - 1 - idx];

    inputArray[idx] = backTemp;
    inputArray[inputArray.length - 1 - idx] = beginTemp;
  }

  return inputArray;
}




// Examples:

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true