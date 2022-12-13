// Write a function that takes a number as an argument. If the argument is a positive number, 
// return the negative of that number. If the argument is a negative number, return it as-is.

// PEDAC

// Process the problem
// Input: number
// outoutt: number

// Rules:  zero returns negtive zero

// Clarifying questions:
//

// Mental model: 
// Example/Test cases

// Data structures/ Algorithm: inputNumber
// if inputNum is smaller than zero return inputNum
// else: return - (inputNum)

// Code

function negative(inputNum) {
  if (inputNum === 0) {
    return -0
  } else if (inputNum < 0) {
    return inputNum;
  } else {
    return -(inputNum);
  }
}

console.log(negative(5), negative(-3), negative(0))

// Examples:

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
