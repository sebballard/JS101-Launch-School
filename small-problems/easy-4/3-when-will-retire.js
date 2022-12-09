// Build a program that logs when the user will retire and how many more 
// years the user has to work until retirement.

// PEDAC

// Process the problem
// Input: age and retirement age as Numbers
// Output: Log of current year, retirment year,a dn the years between them

// Implicit requirements: Input numbers must be positive

// Clarifying questions:
// 

// Mental model: Get age and retirement age. Enter into fucntion which fidns year
// retirement year, the difference between them and logs that information.

// Example/Test cases

// Data structures/ Algorithm: 
// Function logRetirementInfo: (inputs: age, retirement age as integers), output: console.log)
//  set currentYear as current year
//  set yearsToRetirement as retirementAge - age
//  Use console log and template literals to log the relevant information 


// Code

const readline = require("readline-sync");

function logRetirementInfo(age, retirementAge) {
  let currentYear = new Date().getFullYear();
  let yearsToRetirement = retirementAge - age;

  console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsToRetirement}`);
  console.log(`You only have ${yearsToRetirement} years of work to go!`)
}

function getNumber(message) {
  console.log(message);

  let outputNumber = Number(readline.prompt());

  while (!outputNumber || outputNumber <= 0) {
    console.log("That doesn't seem like a valid number. Try again");

    outputNumber = Number(readline.prompt());
  }

  return outputNumber;
}

let age = getNumber("What is your current age?");

let retirementAge = getNumber("At what age would you like to retire?")

logRetirementInfo(age, retirementAge);






// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!