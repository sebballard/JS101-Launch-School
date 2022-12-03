// Write a function that determines and returns the UTF-16 string value of a string passed
// in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character
// in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value 
// of a character.)

// PEDAC

// Process the problem
// Input: single string value
// Output: sum of all UTF-16 values in the string 

// Implicit requirements: Must also work with non ASCII characters thata re in UTF-16 char set.
// Empty string returns zero
// 

// Clarifying questions: How do you use charCodeAt with when representing non ASCII characters?
//  When escaped with \u sequences such as '\u03A9' seem to be interpreted as a single character thus
// should work with charCodeAt
// 

// Mental model: For each character in the string find the UTF-16 value and add them together.

// Example/Test cases

// Data structures/ Algorithm:
// set a runningTotal variable to 0
// set length of string to stringlength
// iterate through numbers 0 till stringLength - 1:
//  Find the utf-16 value of the character at the iterations numbers index value of string
//  Add this to running total
// return runningTotal


// Code

function utf16Value(str) {
  let runningTotal = 0;
  let stringLength = str.length;

  for (let num = 0; num < stringLength; num += 1) {
    let utfValue = str.charCodeAt(num);
    runningTotal += utfValue;
  }
  console.log(runningTotal);
  return runningTotal;
}





// Examples

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811