// Write a function that calculates and returns the index of the first Fibonacci number 
// that has the number of digits specified by the argument. 
// (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal to 2.

// PEDAC

// Process the problem
// Input: integer greater or equal to 2
// Output: fibonacci index of first number in sequence that has number of input digits

// Implicit requirements: Work with very large numbers. Use BigInt

// Clarifying questions:
// 

// Mental model: make numDigits function to calculate number of digits in number.
// Go through fibonacci sequence, keeping tack of what index you are on.
// If the fibonacci number has required number of digits, return its index. 

// Example/Test cases

// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.

// Data structures/ Algorithm: 
// Function findNumDigits (parameter: num):
//  convert num to string
//  return length of string

// main
// set currentNum to 13
// set prevNum to 8
// set index to 7
// loop while currentNum has less digits than input:
//  set newNum to currentNum + prevNum
//  reassign prevNum to currentNum
//  reassign currentNum to newNum
//  Add 1 to index
// return index

// Code

function findNumDigits(num) {
  let numString = String(num);
  return numString.length;
} 

function findFibonacciIndexByLength(length) {
  let currentNum = 13n;
  let prevNum = 8n;
  let index = 7

  while (findNumDigits(currentNum) < length) {
    let newNum = currentNum + prevNum;
    prevNum = currentNum;
    currentNum = newNum;
    index += 1;
  }

  return index;
}

console.log(findFibonacciIndexByLength(10000n));
// logs: 47847












