// A double number is an even-length number whose left-side digits are exactly the same as its right-side 
// digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 
// 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the 
// argument is a double number; otherwise, return the double number as-is.

// PEDAC

// Process the problem
// Input: number
// Output: number

// Implicit requirements: 

// Clarifying questions:
 

// Mental model: If number has even length, check if double number. If it is return number
// else double and return

// Example/Test cases

// Data structures/ Algorithm: 
// coerce number to string; numString
// if numString length is even:
//  if isDouble:
//    return num
// return num
//    
//
// isDouble function
//  use slice to split in half, save to two variables
//  return boolean of if they are equal

function isDoubleNumber(numString) {
  let halfIndex = numString.length / 2;
  let firstHalf = numString.slice(0, halfIndex);
  let secondHalf  = numString.slice(halfIndex);

  return firstHalf === secondHalf;
}

function twice(number) {
  let numString = String(number);
  if ((numString.length % 2 === 0) && isDoubleNumber(numString)) {
    return number;
  } else {
    return number * 2;
  }
}


// Examples:

// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676