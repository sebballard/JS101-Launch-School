// Write another function that returns true if the string passed as an argument 
// is a palindrome, or false otherwise. This time, however, your function should 
// be case-insensitive, and should ignore all non-alphanumeric characters. 
// If you wish, you may simplify things by calling the isPalindrome function you 
// wrote in the previous exercise.

// Use palindrome function previously made. 
// First run string through function removing non alphanumeric characters

// leaveLowercaseAlphas: (input: string, output: string)
//  convert inout string to lowercase
//  define regex object nonAlphaRe
//  Use this to replace non alphanumeric characters with empty string
//  return string

function leaveLowercaseAlphas(inputStr) {
  let outputStr = inputStr.toLowerCase();

  let nonAlphaRe = /[^a-z0-9]/gi;

  outputStr = outputStr.replace(nonAlphaRe, "");
  return outputStr;
}

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

function isRealPalindrome(inputStr) {
  inputStr = leaveLowercaseAlphas(inputStr);
  console.log(isPalindrome(inputStr));
  return isPalindrome(inputStr);
}


// Examples:

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false