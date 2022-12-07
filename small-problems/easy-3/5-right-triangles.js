// Write a function that takes a positive integer, n, as an argument and logs a right triangle 
// whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) 
// should have one end at the lower-left of the triangle, and the other end at the upper-right.


// PEDAC

// Process the problem
// Input: positive integer
// Output: log output of triangle with two sides equal

// Implicit requirements: 

// Clarifying questions:
 

// Mental model: Make a loop that repeats n times.
// first loop n-1 spaces then star
// second loop n-2 spaces then start
// etc

// Example/Test cases

// Data structures/ Algorithm: 
// input: Num
// iterate i from 1 to num inclusive
//  set stringToPrint as " " repeated (num - i) + "*" repeated i times
//  log stringToprint
//  

function triangle(num) {
  for (let i = 1; i <= num; i += 1) {
    let stringToPrint = " ".repeat(num - i) + "*".repeat(i);
    console.log(stringToPrint);
  }
}





// Examples:

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

