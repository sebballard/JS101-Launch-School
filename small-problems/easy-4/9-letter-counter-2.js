// Modify the wordSizes function from the previous exercise to exclude non-letters 
// when determining word size. For instance, the word size of "it's" is 3, not 4.

// Use same function as previous excercise. Add in helper function to first remove
// non alphabetic characters from String.

// Helper function leaveAlphanumericAndSpaces
// set nonAlphanumericSpacesRe to global regex capturing all non alphanumeric or space characters
// Use this to replace all these with an empty string
// Retrun the new string

function leaveAlphabeticAndSpaces (string) {
  let nonAlphabeticSpacesRe = /[^a-z\s]/gi;

  string = string.replace(nonAlphabeticSpacesRe, "");

  return string;
}

function wordSizes (inputStr) {
  inputStr = leaveAlphabeticAndSpaces(inputStr);

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
  console.log(outputObj);
  return outputObj;
}



// Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');      