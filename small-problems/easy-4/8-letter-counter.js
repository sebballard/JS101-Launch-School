// Write a function that takes a string consisting of zero or more space 
// separated words and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

// PEDAC

// Process the problem
// Input: String
// Output: Object

// Rules: Any non space characters count to length of word
// Empty string input returns empty object
// 

// Clarifying questions:
// 

// Mental model: Split into sperate words
// Count length of each word and add that to running total for each size.

// Example/Test cases

// Data structures/ Algorithm: 
// convert string to array of sub-strings which were sperated by spaces in inputString; wordsArr
// Initialize empty object, outputObj
// Iterate through strings in wordsArr:
//  set wordLength to the length of the iterated word
//  if outputObj already has ket-value pair with key equal to wordLength:
//    increase that value by 1
//  else: set the key value pair to wordLength: 1
// return outputObj

// Code

function wordSizes (inputStr) {
  let wordsArr = inputStr.split(" ");

  let outputObj = {};

  for (let word of wordsArr) {
    let wordLength = word.length;

    if (wordLength === 0) {
      continue;
    }

    if (outputObj[wordLength]) {
      outputObj[wordLength] += 1;
    } else {
      outputObj[wordLength] = 1;
    }
  }
  return outputObj;
}




Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
