// In this exercise, you will write a function named xor that takes two arguments, and returns true
// if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean 
// result instead of a truthy/falsy value as returned by || and &&.

// PEDAC

// Process the problem
// Input: two arguments of no specified type
// Output: boolean of whether exactly one argument is truthy

// Implicit requirements: take any type input

// Clarifying questions:
// 

// Mental model: Coerce each argument to boolean, and then to number. If the sum 
// of the two is one return true else false.

// Example/Test cases

// Data structures/ Algorithm: 

// Code

function xor(arg1, arg2) {
  arg1 = Number(Boolean(arg1));
  arg2 = Number(Boolean(arg2));

  if ((arg1 + arg2) === 1) {
    return true;
  } else {
    return false;
  }
}


Examples:

console.log(xor("a", 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));
