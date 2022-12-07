// Write a function that will take a short line of text, and write it to the console log within a box.

// Process the problem
// Input: string
// Output: console log of the string enclosed by a box

// Implicit requirements: Empty string produces box of length 4

// Clarifying questions:
// 

// Mental model: Make function to draw horizontal segments of box. 
// With choice between edge character, middle character, and whether to use text.
// Use these to draw box with text.

// Example/Test cases

// Data structures/ Algorithm: 
// boxHelper fucntion (defined inside logInBox).
// Inputs: edge char, middle char, useText Boolean=false. Output, string for horizontal segment of box
//  initialize outputString as edge char + middle char.
//  if useText:
//   add text to end of output string
//  else: loop that repeats equal to length of text
//   add middle char to outputString each loop.
//  Add middle char + edge char to outputString
//  return outputString

// logInBox function: input: text string, output console.log of box
//  set textLength to lenght of text.
//  Use boxHelper to generate top, middle, and middleWithText strings for horizontal box segments.
//  console log, topString, middleString, middleWithText, middleString, topString


// Code

function logInBox(textString) {
  let textStringLength = textString.length;

  function boxHelper(edge, middle, useText = false) {
    let outputString = edge + middle;

    if (useText) {
      outputString = outputString + textString;
    } else {
      for (let num = 1; num <= textStringLength; num += 1) {
        outputString = outputString + middle;
      }
    }

    outputString = outputString + middle + edge;

    return outputString;
  }


  let topBottomString = boxHelper("+", "-");
  let middleStringNoText = boxHelper("|", " ");
  let middleStringWithText = boxHelper("|", " ", true);

  console.log(topBottomString);
  console.log(middleStringNoText);
  console.log(middleStringWithText);
  console.log(middleStringNoText);
  console.log(topBottomString);
}


// Examples:

// logInBox('');

// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+


// Further Exploration

// Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided 
// as a second argument (the width is the width of the box itself). You may assume no maximum if the 
// second argument is omitted.

// Use same function as previous, but add maxLength argument:
//  at beginning of function (after textLength is initialized):
//  set maxTextLength to maxLength - 4
//  if maxTextLength is zero or less, let user know that the box requires at least a length of 4 and return
//  if textLength is bigger than maxTextLength:
//    set difference to textLength - maxTextLength
//    use slice to reassign textString removing number of chars equal to difference
//    reassign textLength to current length of text
//  Rest of function goes as previous


function logInBoxLength(textString, maxLength = Infinity) {
  let textStringLength = textString.length;

  let maxTextLength = maxLength - 4;

  if (maxTextLength <= 0) {
    console.log("The text box requires a minimum length of 4 characters");
    return;
  }

  if (textStringLength > maxTextLength) {
    let difference = textStringLength - maxTextLength;


    textString = textString.slice(0, (-difference));
    textStringLength = textString.length;
  }


  function boxHelper(edge, middle, useText = false) {
    let outputString = edge + middle;

    if (useText) {
      outputString = outputString + textString;
    } else {
      for (let num = 1; num <= textStringLength; num += 1) {
        outputString = outputString + middle;
      }
    }

    outputString = outputString + middle + edge;

    return outputString;
  }

  let topBottomString = boxHelper("+", "-");
  let middleStringNoText = boxHelper("|", " ");
  let middleStringWithText = boxHelper("|", " ", true);

  console.log(topBottomString);
  console.log(middleStringNoText);
  console.log(middleStringWithText);
  console.log(middleStringNoText);
  console.log(topBottomString);
}


// logInBoxLength("Hello how are you?", 3);
// // logs: The text box requires a minimum length of 4 characters

// logInBoxLength("Hello, how are you?", 7)
// logs: 
// +-----+
// |     |
// | Hel |
// |     |
// +-----+



// Further exploration

// For a challenging but fun exercise, try word wrapping messages that are too long to fit, 
// so that they appear on multiple lines but are still contained within the box. 
// This isn't an easy problem, but it's doable with basic JavaScript.

// Same basic function as original;
// at beginning, after declaration of textLength
// set maxTextLength to maxLength - 4
// set arrayTextLines to array with one element; textString
// while textLength is bigger than maxTextLength:
//  set newTextLines to empty array
//  for each string in arrayTextLines:
//    set lineWords to array containign each word
//    set lineWordsLength to length of lineWords array
//    set newLine1 to first half of the words joined with space
//    set newLine2 to second half of the words joined with space
//    add newLine1 to newTextLines
//    add newLine2 to newTextLines
//  reassign arrayTextLines to newTextLines
//  set textLength to 0
//  Loop through arrayTextLines: if string length greater than textLength, set textLegnth to this value


// Change box helper function, now accepts lineText argument:
// Same as usual except:
// if useText:
//  set difference to textLength - lineText length
//  loop difference times: each loop add middle character to lineText

// At end of main function instead of assigning middleWithText, and console logging it.
// When logging text: Loop through arrayTextLines elements:
//  set lineString to boxHelper called with string element as argument
//  log lineString


function logInBoxWrapping(textString, maxLength = Infinity) {
  let textStringLength = textString.length;

  let maxTextLength = maxLength - 4;

  if (maxTextLength <= 0) {
    console.log("The box requires a minimum length of 4");
    return;
  }

  let arrayTextLines = [textString];



  while (textStringLength > maxTextLength) {
    let newTextLines = [];

    for (let line of arrayTextLines) {
      let lineWords = line.split(" ");
      let numWords = lineWords.length;
      let halfway = Math.ceil(numWords / 2);

      let newLine1 = lineWords.slice(0, halfway).join(" ");
      let newLine2 = lineWords.slice(halfway).join(" ");

      newTextLines.push(newLine1);
      newTextLines.push(newLine2);
    }
    arrayTextLines = newTextLines;

    textStringLength = 0;

    for (let line of arrayTextLines) {
      if (line.length > textStringLength) {
        textStringLength = line.length;
      }
    }
  }



  function boxHelper(edge, middle, useText = false, lineText) {
    let outputString = edge + middle;

    if (useText) {
      let difference = textStringLength - lineText.length;

      for (let num = 1; num <= difference; num += 1) {
        lineText = lineText + middle;
      }

      outputString = outputString + lineText;
    } else {
      for (let num = 1; num <= textStringLength; num += 1) {
        outputString = outputString + middle;
      }
    }

    outputString = outputString + middle + edge;

    return outputString;
  }


  let topBottomString = boxHelper("+", "-");
  let middleStringNoText = boxHelper("|", " ");

  console.log(topBottomString);
  console.log(middleStringNoText);

  for (let line of arrayTextLines) {
    outputString = boxHelper("|", " ", true, line);
    console.log(outputString);
  }

  console.log(middleStringNoText);
  console.log(topBottomString);
}


logInBoxWrapping("Hello how are you, I am doing quite fine. I wonder what the weather is like", 20)
// logs:

// +-------------+
// |             |
// | Hello how   |
// | are you,    |
// | I am        |
// | doing quite |
// | fine. I     |
// | wonder what |
// | the weather |
// | is like     |
// |             |
// +-------------+
