const readline = require('readline-sync');
// const messageJSON = require('./calculator-messages.json');

const fs = require("fs");


function prompt(message) {
  console.log(`=> ${message}`);
}

// eslint-disable-next-line max-len
function promptResponseRecord (message, recordingObj, isResponse = true) {
  /* Uses prompt function to send message and record in recordingObj
  optionally if isResponse, a response is requested and recorded.
  Adds message and response as new object with keys named message and response.
  Message response object is assigned as value to the key which is a digit of
  which nth message response pair it is.
  If isResponse returns response else returns null.
  */

  let response;

  // Find how many messages have already been recorded, and add one to
  // find which number message this is.
  let messageNumber = Object.keys(recordingObj).length + 1;

  prompt(message);

  if (isResponse) {
    response = readline.question();
  } else {
    response = "No response needed";
  }

  recordingObj[messageNumber] = {message: message, response: response};

  // Only return response if there was one else let function return undefined
  if (isResponse) {
    return response;
  } else {
    return null;
  }
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}


function getNumber(isFirst) {
  /* Asks the user to input the values they want calculated.
  Validates the input.
  Returns the response in array
  */
  let number;
  if (isFirst) {
    prompt("What is the first number?");
    number = readline.question();
  } else {
    prompt("What is the other number?");
    number = readline.question();
  }

  while (invalidNumber(number)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number = readline.question();
  }
  return number;
}

function getOperator () {
  /* Asks user which operator to use. Validates input.
  Returns Number between 1 and 5.
  */
  prompt("What operation would you like to perform?\n1)Add 2)Subtract 3)Multiply 4)1st / 2nd 5)2nd / 1st");
  let operation = readline.question();

  while (!['1', '2', '3', '4', '5'].includes(operation)) {
    prompt("Must choose 1, 2, 3, 4 or 5");
    operation = readline.question();
  }
  return operation;
}

// eslint-disable-next-line max-lines-per-function
function performCalculation(number1, number2, operation) {
  /* Takes two numbers as operands. Input for operation
  to perform expected as Number as follows:
  1-addition, 2- subtraction, 3- multiplication, 4- division
  Returns the the result of this calculation as Number.
  */
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
    case '5':
      output = Number(number2) / Number(number1);
      break;
  }
  prompt(`The result is ${output}`);
  return output;
}

function runCalculator (reuseNumber = false, previousNum = NaN) {
  let number1;
  let number2;
  if (reuseNumber) {
    number1 = previousNum;
  } else {
    number1 = getNumber(true);
  }
  number2 = getNumber(false);

  let operation = getOperator();

  let output = performCalculation(number1, number2, operation);
  prompt(`Would you like to: \n1)Perform a calculation on ${output}\n`
  + `2)Perform a new calculation\n3)Exit`);

  let userAnswer = readline.question();

  if (userAnswer === "1") {
    runCalculator(true, output);
  } else if (userAnswer === "2") {
    runCalculator();
  }
}

let messagesAndResponses = {};
promptResponseRecord("How are you?", messagesAndResponses, true);

console.log(messagesAndResponses)

prompt("Welcome to the calculator!");

runCalculator();

