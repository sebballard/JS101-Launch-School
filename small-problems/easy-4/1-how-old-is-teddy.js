// Build a program that randomly generates Teddy's age, and logs it to the console. 
// Have the age be a random number between 20 and 120 (inclusive).

// PEDAC

// Process the problem
// Input: No input
// Output: console log of teddy's age, between 20 and 120 inclusive

// Implicit requirements: 20 and 120 must be possibilities

// Clarifying questions:
// 

// Mental model: Make function to to randomly generate number between 20 and 120.
// Use this to generate and display output text.

// Example/Test cases

// Data structures/ Algorithm: 
// Random number generator function: inputs: minimum and maximum numbers
//  Use math random to generate random value between 0 and 1.
//  Use this to generate a number up to and including maxNum. If
//  it is less than minNum, repeat the process.
// return number

// Use randomNumberGenerator to generate random number between 20 and 120.
// Use console.log to report "age"

// Code

function randomNumberMinMax(minNum, maxNum) {
  let randomNumber;

  while (!(randomNumber >= minNum)) {
    let betweenZeroAndOne = Math.random();
    randomNumber = Math.ceil(betweenZeroAndOne * maxNum);
  }
  return randomNumber;
}

let teddyAge = randomNumberMinMax(20, 120);

console.log(`Teddy is ${teddyAge} years old!`)






// Example Output:

// Teddy is 69 years old!
