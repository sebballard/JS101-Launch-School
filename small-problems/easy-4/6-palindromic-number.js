// Write a function that returns true if its integer argument is palindromic, 
// or false otherwise. A palindromic number reads the same forwards and backwards.

// Assume argument is integer and ngeative numbers are not palindtromic.
// First convert inputInt to string
// Use inputAsStr argument to previous palindrome function.

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


function isPalindromicNumber (integer) {
  let inputAsStr = String(integer);
  let result = isPalindrome(inputAsStr);

  console.log(result);
  return result;
}





// Examples:

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true


// Further exploration: Remove leading zeroes

// Suppose the number argument begins with one or more 0s. Will the solution 
// still work? Why or why not? Is there any way to address this?

// Coercing to string automatically removes leading zeroes.