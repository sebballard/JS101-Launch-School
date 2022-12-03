// Write a function that computes the sum of all numbers between 1 and some other number,
// inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, 
// the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// PEDAC

// Process the problem
// Input: integer greater than one
// Output: sum of all numbers between one and the input which are divisible by three or five. 

// Implicit requirements: Numbers that are multiples of both 3 and 5 are only included once.
// 

// Clarifying questions:
// 

// Mental model: iterate through numbers 1 to the input number. On each iteration check 
// if divisible by three or five. If so add the number to a sum variable.

// Example/Test cases

// Data structures/ Algorithm:
// get integer Number num from user
// Set running total variable to zero
// For loop going from 1 to num inclusive, incrementing by one each time:
//  If number is divisible by three or five:
//      add number to running total
// return running total


// Code

function multisum(num) {
  let runningTotal = 0;

  for (let i = 1; i <= num; i += 1) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      runningTotal += i;
    }
  }
  console.log(runningTotal);
  return runningTotal;
}


Examples:

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168