// Write a function that takes one integer argument, which may be positive, negative, or zero. 
// This method returns true if the number's absolute value is odd. You may assume that the argument 
// is a valid integer value.

// PEDAC

// Process the problem
// Input: one type Number integer. Positive negative or zero.
// Output: boolean representing if input number is odd.

// Implicit requirements: Negative numbers must be taken into account

// Clarifying questions:

// Mental model: Take an integer number. Determine if it is odd. If so return true alse false.



// Example/Test cases
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true



// Data structures/ Algorithm:
// Receive an integer Number value passed to the function.
// if the number modulo 2 has strict equality to 1 or -1, return true, otherwise false


// Code

function isOdd(num) {
  return ((num % 2 === 1) || (num % 2 === -1))
}


// Examples

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true