// Build a program that asks the user to enter the length and width of a room in meters, 
// and then logs the area of the room to the console in both square meters and square feet.

// PEDAC

// Process the problem
// Input: The length and width of room in meters
// Output: Console log of size of room in square meters and feet

// Implicit requirements: Log size accurate to two decimal places

// Clarifying questions:
// Are conversions from meter to foot the same when it is square meter to foot? 
// No, 10.7639 square feet to meter. 3,28084 feet to meter. 

// Mental model: Get the length and width from the user. Calculate area in meters.
// Also convert square meters to square foot. Display results to user.


// Example/Test cases
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

// Data structures/ Algorithm:
// Ask for length and width of room and save them to variables.
// Multiply the two together and save as area in meters.
// Multiply this by 10.7639 and save as area in feet.
// Use console.log to display the two areas two the user using the toFixed method
// to display two decimal places.


// Code

// const readline = require("readline-sync");

// const METER_FOOT_CONVERSION = 10.7639;

// function displayArea(length, width) {
//   let areaMeters = length * width;
//   let areaFeet = areaMeters * METER_FOOT_CONVERSION;

//   console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters` +
//    ` (${areaFeet.toFixed(2)} square feet).`);
// }

// console.log("Enter the length of the room in meters:");
// let lengthMeters = parseInt(readline.prompt(), 10);

// console.log("Enter the width of the room in meters:");
// let widthMeters = parseInt(readline.prompt(), 10);

// displayArea(lengthMeters, widthMeters);





// Further Exploration

// Modify the program so that it asks the user for the input type (meters or feet). 
// Compute for the area accordingly, and log it and its conversion in parentheses.

const readline = require("readline-sync");

const METER_FOOT_CONVERSION = 10.7639;
const UNIT_CHOICES = ["meters", "feet"]

function displayArea(length, width, originalUnit) {
  let originalArea = length * width;

  let convertedArea;
  let convertedUnit;

  if (originalUnit === "feet") {
    convertedUnit = "meters"
    convertedArea = originalArea / METER_FOOT_CONVERSION
  } else if (originalUnit === "meters") {
    convertedUnit = "feet"
    convertedArea = originalArea * METER_FOOT_CONVERSION;
  }

  console.log(`The area of the room is ${originalArea.toFixed(2)} square ${originalUnit}` +
   ` (${convertedArea.toFixed(2)} square ${convertedUnit}).`);
}

function isValid(userChoice, arrCompleteChoices) {
  for (let aValidChoice of arrCompleteChoices) {
    aValidChoice = aValidChoice.toLowerCase()

    if (aValidChoice.indexOf(userChoice) === 0) {
      return true;
    }
  }
  return false;
}

function getFullChoiceString(validatedUserChoice, arrCompleteChoices) {
  for (let aValidChoice of arrCompleteChoices) {
    if (aValidChoice.indexOf(validatedUserChoice) === 0) {
      return aValidChoice;
    }
  }
}

console.log("We are going to calculate the area of a room. What unit shall we use? Meters or feet?");
let unitChoice = readline.prompt().toLowerCase();

while (!isValid(unitChoice, UNIT_CHOICES)) {
  console.log("I don't understand what you mean. Try again please!");
  unitChoice = readline.prompt().toLowerCase();
}
unitChoice = getFullChoiceString(unitChoice, UNIT_CHOICES);

console.log(`Enter the length of the room in ${unitChoice}:`);
let length = parseInt(readline.prompt(), 10);

console.log(`Enter the width of the room in ${unitChoice}:`);
let width = parseInt(readline.prompt(), 10);

displayArea(length, width, unitChoice);



