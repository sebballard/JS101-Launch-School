// Write a function that takes a string argument and returns a new string that contains 
// the value of the original string with all consecutive duplicate characters collapsed into a 
// single character.

// PEDAC

// Process the problem
// Input: string
// Output: String with any consecutive duplicate characters removed

// Implicit requirements: Must not affect strings that ahve no duplicates.
// Return an emoty string when given empty string as input.

// Clarifying questions:
// 

// Mental model: Iterate through the characters of the string up to the second last.
// If the character one place ahead is the same, rmeove that character, and start from the beginning. 

// Example/Test cases

// Data structures/ Algorithm: 
// Declare areDoubles
// Do while loop (while areDoubles):
//  Set areDoubles to false 
//  Iterate through index values 0 to length of string - 2:
//    if character is equal to character at index + 1:
//      set areDoubles to true
//      Remove that character
//    if areDoubles is true:
//      break from the iteration loop
// return the string
//      

// Code


function crunch(str) {
  let areDoubles;

  do {
    areDoubles = false;

    for (let i = 0; i < str.length - 1; i += 1) {
      if (str[i] === str[i + 1]) {
        areDoubles = true;
        toReplace = str[i] + str[i];
        str = str.replace(toReplace, str[i]);
      }
      if (areDoubles) break;
    }
  } while (areDoubles);

  return str;
}


// Examples:

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""