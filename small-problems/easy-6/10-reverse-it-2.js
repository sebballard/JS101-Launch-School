// Write a function that takes a string argument containing one or more words and 
// returns a new string containing the words from the string argument. All five-or-more 
// letter words should have their letters in reverse order. The string argument will 
// consist of only letters and spaces. Words will be separated by a single space.

// PEDAC

// Process the problem
// Input: string
// outoutt: string

// Rules:  words five letters or more have letters reversed.

// Clarifying questions:
//

// Mental model: 
// Example/Test cases

// Data structures/ Algorithm: input String
// split inoutString into wordsArray
// iterate over words in wordsArray:
//  if word length is 5 or greater reasssign to reversed word (helper function)
// Join array elements seperated by space

// helperFunction reverseString(input: string):
//  seperate string into array of indiividual characters
//  reverse this array
// joinj and return

// Code


function reverseString(inputStr) {
  let charArray = inputStr.split("");

  return charArray.reverse().join("");
}

function reverseWords(sentenceStr) {
  let wordsArr = sentenceStr.split(" ");

  for (let i = 0; i < wordsArr.length; i += 1) {
    if (wordsArr[i].length >= 5) {
      wordsArr[i] = reverseString(wordsArr[i]);
    }
  }

  console.log(wordsArr.join(" "));
  return wordsArr.join(" ");
}

Examples:

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
