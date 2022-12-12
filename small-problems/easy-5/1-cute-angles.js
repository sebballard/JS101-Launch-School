// Write a function that takes a floating point number representing an angle between 0 and 360 
// degrees and returns a string representing that angle in degrees, minutes, and seconds. 
// You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, 
// and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.


// PEDAC

// Process the problem
// Input: Number
// Output: String, with degrees, minutes and seconds

// Rules: 0 out puts: 0 degrees, 0 minutes, and 0 seconds

// Clarifying questions:
// 

// Mental model: Function to calculate spare minutes / degrees from floating poinjt value of the higher value.
// Use this to caculate the values and then display.

// Example/Test cases

// Data structures/ Algorithm: 
// input (numberDegrees):
//  assign wholeDegrees to  numberDegrees without the decimal
// Use helper function with NuberDegrees passed to assign to minutes.
// Pass minutes to helperfucntion and assign to seconds.
// Convert minutes and seconds to two digit strings with no decimals
// Output result


// afterNumDecimalsConvert: )input: number
// Turn number into string
// Seperate number and decimal place into array
// Assign decimalString to contacebation of "0." + decimal place section of array
// Coonvert decimal string to number: decimalNumber
// multiply by 60 to get convertedNum
// return converted Num

// converttoTwoDigitStringNoDecimals: input number
//  remove decimal values from number
//  Convert number to string
//  If length of stirng is add 0 before it

// Code

function dms(degreesFloat) {
  let wholeDegrees = Math.floor(degreesFloat)

  let minutesFloat = leftoverMinutesOrDegrees(degreesFloat);
  let secondsFloat = leftoverMinutesOrDegrees(minutesFloat);

  console.log(minutesFloat, secondsFloat);

  let degreesString = String(wholeDegrees);
  let minutesString = (twoDigitStringNoDecimal(minutesFloat));
  let secondsString = twoDigitStringNoDecimal(secondsFloat)

  console.log(`${degreesString}˚${minutesString}'${secondsString}"`)
}

function leftoverMinutesOrDegrees(inputNum) {
  let inputAsString = String(inputNum);
  let arrayDecimalSeperated  = inputAsString.split(".");

  let toBeConvertedString; 
  if (arrayDecimalSeperated[1]) {
    toBeConvertedString = "0." + arrayDecimalSeperated[1];
  } else {
    toBeConvertedString = "0";
  }

  let convertedNumber = Number(toBeConvertedString) * 60;

  return convertedNumber;
}

function twoDigitStringNoDecimal(inputNum) {
  inputNum = Math.floor(inputNum);
  let stringNum = String(inputNum)

  if (stringNum.length === 1) {
    stringNum = "0" + stringNum;
  }

  return stringNum;
}


// Examples:

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"