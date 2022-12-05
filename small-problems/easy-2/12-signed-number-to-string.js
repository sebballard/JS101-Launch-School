// In the previous exercise, you developed a function that converts non-negative numbers to strings. 
// In this exercise, you're going to extend that function by adding the ability to represent 
// negative numbers as well.

// Write a function that takes an integer and converts it to a string representation.

const conversionObj = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9"
}

function integerToString(inputInt) {
  let numString = "";

  do {
    let digitToAdd = inputInt % 10;
    let charToAdd = conversionObj[digitToAdd];

    numString = charToAdd + numString;

    inputInt = Math.floor(inputInt / 10);
  } while (inputInt > 0);

  return numString;
}

function signedIntegerToString(inputInt) {
  if (Math.sign(inputInt) === 1) {
    return "+" + integerToString(inputInt);
  } else if (Math.sign(inputInt) === -1) {
    return "-" + integerToString(inputInt * - 1);
  } else {
    return integerToString(inputInt);
  }
}


console.log(signedIntegerToString(4321), signedIntegerToString(-123), signedIntegerToString(0))