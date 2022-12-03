// Write a function that takes two strings as arguments, determines the length of the two strings,
// and then returns the result of concatenating the shorter string, the longer string, and the 
// shorter string once again. You may assume that the strings are of different lengths.


// PEDAC

// Process the problem
// Input: two strings of differing lengths
// Output: a single contacenated string in order shortest longest shortest

// Implicit requirements: 
// 

// Clarifying questions:
// 

// Mental model: if first string is short add first second first.
// Otherwise do the opposite
// get integer Number from user and assign to num.
// Get the desired operation as string "sum" or "product"
// set total variable to 1
// loop from 2 up till including num
// each loop total = total * or + loopnumber
// Display result
// Example/Test cases

// Data structures/ Algorithm:


// Code

function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    return string1 + string2 + string1; 
  } else {
    return string2 + string1 + string2; 
  }
} 







// Examples:

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"