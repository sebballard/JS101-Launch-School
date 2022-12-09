// Write a function that returns true if the string passed as an argument is a palindrome, 
// or false otherwise. A palindrome reads the same forwards and backwards. 
// For this problem, the case matters and all characters matter.

// PEDAC

// Process the problem
// Input: string
// Output: boolean true if plaindrome, false if not

// Implicit requirements: case and all charcters matter

// Clarifying questions:
// 

// Mental model: Consecutively check if 1st, last... 2nd, 2nd last, 3rd 3rd last are equal.
// If any are not equal return false. if all checks pass return true

// Example/Test cases

// Data structures/ Algorithm: 
// Function ispalindrome(): input: String, output: boolean
//  set halfWayIndex to floor of inputString length / 2
//  iterate i from 0 to halfwayIndex:
//    set frontChar to inputString at i
//    set backChar to inputString i places from the end.
//    If frontChar and backChar are not equal return false
//  if all tests in iteration pass return true

// Code

function isPalindrome(inputString) {
  let halfWayIndex = Math.floor(inputString.length / 2);

  for (let i = 0; i <= halfWayIndex; i += 1) {
    let frontChar = inputString[i];
    let backChar;
    if (i === 0) {
      backChar = inputString.slice(-1);
    } else {
      backChar = inputString.slice((-1 - i), -i)
    }
    if (frontChar !== backChar) {
      return false;
    }
  }

  return true;
}






// Examples:

console.log(isPalindrome("356653"));               // true
isPalindrome('Madam');             // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true