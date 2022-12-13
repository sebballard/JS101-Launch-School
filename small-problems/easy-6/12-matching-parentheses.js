// Write a function that takes a string as an argument and returns true if all 
// parentheses in the string are properly balanced, false otherwise. To be properly balanced, 
// parentheses must occur in matching '(' and ')' pairs.

// PEDAC

// Process the problem
// Input: string
// outoutt: boolean

// Rules:  empty array returns emtpty array

// Clarifying questions: Keep track of number of opening and closing parentheses
// Closing paretheses must not exceed opening parentheses. At the end they must be an equal number.

// Mental model: 
// Example/Test cases

// Data structures/ Algorithm: input array
// set opening and closing = 0
// loop through characters in string:
//  If character is opening or closing parenthesis add 1 to that value 
//   if closing is greater than opening return false
// After the loop return true if opening equals closings, else return false

// Code

function isBalanced(inputString) {
  let opening = 0;
  let closing = 0;

  for (let char of inputString) {
    if (char === "(") {
      opening += 1;
    } else if ( char === ")") {
      closing += 1;
    }

    if (closing > opening) {
      return false;
    }
  }
  console.log(closing, opening);

  if (closing === opening) {
    return true;
  } else {
    return false;
  }
}



// Examples:

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
