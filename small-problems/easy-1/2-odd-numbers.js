// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// PEDAC

// Process the problem
// Input: 
// Output: 

// Implicit requirements:

// Clarifying questions:

// Mental model: Go from 1 to 99 by twos and log each number.


// Example/Test cases


// Data structures/ Algorithm:
// Make a for loop that starts at 1, stays belows 100, and increments by two each loop.
// In each loop log the number.


// Code

for (let num = 1; num < 100; num += 2) {
  console.log(num);
}

// Further Exploration

// Repeat this exercise with a technique different from the one that you used, and different 
// from the one provided. Also consider adding a way for the user to specify the limits of the 
// odd numbers logged to the console.

// If lower limit is even add 1. If upper limit is even subtract 1. Run a for loop starting
// at lower limit, staying below upper limit plus one, and incrementing by two. Each loop
// log number to console.

function allOdds(lowerLimit, upperLimit) {
  if (lowerLimit % 2 === 0) {
    lowerLimit += 1;
  }
  if (upperLimit % 2 === 0) {
    upperLimit -= 1;
  }

  for (let num = lowerLimit; num < upperLimit + 1; num += 2) {
    console.log(num);
  }
}
