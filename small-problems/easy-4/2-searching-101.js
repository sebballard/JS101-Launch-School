// Write a program that solicits six numbers from the user and logs a 
// message that describes whether the sixth number appears among the 
// first five numbers.

// PEDAC

// Process the problem
// Input: 6 numbers from user
// Output: True or false showing wheteher last number appears among first five numbers

// Implicit requirements: 

// Clarifying questions:
// 

// Mental model: Ask for 6 numbers. Put into function that determines whether last number 
// appears among the others

// Example/Test cases

// Data structures/ Algorithm: 
// function doesLastElementAppearEarlier: (input: array integers any length):
//  Extract last number from array
//  Make new array excluding last number
//  If last number is included in array return true, else false

// fucntion getNumbersArray: (input number shwoign how many numbers to ask for)
//   set outPutArray to empty array
//  iterate through numbers 1 to inputNumber:
//    if iteration number equals inputNumber: ask for last number, add to outputArray
//    else: ask for number (iteration number), and add to outputArray
//  return outputArray

// Use getNumbersArray to get array of length 6.
// Use doesLastElementAppear with numbersArray passed to it to get boolean value.
// If true log that the last number of array appears in the first part
// If false log that it doesn't appear

// Code

const readline = require("readline-sync");

function doesLastElementAppearEarlier(integerArray) {
  let lastNumber = integerArray.slice(-1)[0];

  let arrayToCheck = integerArray.slice(0, -1);

  return arrayToCheck.includes(lastNumber);
}

function getNumber(message) {
  console.log(message);

  let outputNumber = Number(readline.prompt());

  while (!outputNumber) {
    console.log("That doesn't seem like a valid number. Try again");

    outputNumber = Number(readline.prompt());
  }

  return outputNumber;
}

function getIntegerArray(sizeOfArray) {
  let outputArray = [];

  for (let num = 1; num <= sizeOfArray; num += 1) {
    if (num === sizeOfArray) {
      let numberToAdd = getNumber("Enter the number you want to check for: ");
      outputArray.push(numberToAdd);
    } else {
      let numberToAdd = getNumber(`Enter number ${num}: `);
      outputArray.push(numberToAdd);
    }
  }
  return outputArray;
}

let amountOfNumbers = getNumber("How many numbers would you like to check for the presence of another number?: ")

let integerArray = getIntegerArray(amountOfNumbers + 1);

let doesLastNumAppear = doesLastElementAppearEarlier(integerArray);

console.log(doesLastNumAppear)

if (doesLastNumAppear){ 
  console.log(`The number ${integerArray.slice(-1)[0]} appears in ` +
  `${integerArray.slice(0, amountOfNumbers)}`);
} else {
  console.log(`The number ${integerArray.slice(-1)[0]} does not appear in ` +
  `${integerArray.slice(0, amountOfNumbers)}`);
}


// Further exploration: Check if numbers include number larger than last

// Change the arracyCheck function to use some method

const readline = require("readline-sync");

function isLastElementSmaller(integerArray) {
  let lastNumber = integerArray.slice(-1)[0];
  let checkFunction = (element) => element > lastNumber;

  let arrayToCheck = integerArray.slice(0, -1);

  return arrayToCheck.some(checkFunction);
}

function getNumber(message) {
  console.log(message);

  let outputNumber = Number(readline.prompt());

  while (!outputNumber) {
    console.log("That doesn't seem like a valid number. Try again");

    outputNumber = Number(readline.prompt());
  }

  return outputNumber;
}

function getIntegerArray(sizeOfArray) {
  let outputArray = [];

  for (let num = 1; num <= sizeOfArray; num += 1) {
    if (num === sizeOfArray) {
      let numberToAdd = getNumber("Enter the number you want to compare size to: ");
      outputArray.push(numberToAdd);
    } else {
      let numberToAdd = getNumber(`Enter number ${num}: `);
      outputArray.push(numberToAdd);
    }
  }
  return outputArray;
}

let amountOfNumbers = getNumber("How many numbers would you like to check if any are bigger than another number?: ")

let integerArray = getIntegerArray(amountOfNumbers + 1);

let isLastNumSmaller = isLastElementSmaller(integerArray);

if (isLastNumSmaller){ 
  console.log(`The number ${integerArray.slice(-1)[0]} is smaller than at least one number in ` +
  `${integerArray.slice(0, amountOfNumbers)}`);
} else {
  console.log(`The number ${integerArray.slice(-1)[0]}  is bigger or equal to all numbers in` +
  `${integerArray.slice(0, amountOfNumbers)}`);
}



// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.