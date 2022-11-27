const readline = require('readline-sync');

const fs = require("fs");

const MESSAGES = require("./template_calculator_messages.json");

let messagesAndResponses = {};

let langChoice = getLangChoice();

const LANG_MESSAGES = MESSAGES[langChoice];


function prompt(message) {
  console.log(`=> ${message}`);
}

// eslint-disable-next-line max-len
function promptResponseRecord (message, isResponse = true, recordingObj = messagesAndResponses) {
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

  // Only return response if there was one else let function return null
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
    number = promptResponseRecord(LANG_MESSAGES["firstNumber"]);
  } else {
    number = promptResponseRecord(LANG_MESSAGES["otherNumber"]);
  }

  while (invalidNumber(number)) {
    number = promptResponseRecord(LANG_MESSAGES["invalidNumber"]);
  }
  return number;
}

function getOperator () {
  /* Asks user which operator to use. Validates input.
  Returns Number between 1 and 5.
  */
  let operation = promptResponseRecord(LANG_MESSAGES["operationChoice"]);
  while (!['1', '2', '3', '4', '5'].includes(operation)) {
    operation = promptResponseRecord(LANG_MESSAGES["invalidOperation"]);
  }
  return operation;
}

// eslint-disable-next-line max-lines-per-function
function performCalculation(number1, number2, operation) {
  /* Takes two numbers as operands. Input for operation
  expected as Number representing:
  1-addition, 2- subtraction, 3- multiplication, 4- division n1/n2 
  5- division n2/n1
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
  promptResponseRecord(LANG_MESSAGES["giveOutput"] + output, false);
  return output;
}

function runCalculator (reuseNumber = false, previousNum = NaN, lang = "1") {
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
  let userAnswer = promptResponseRecord(LANG_MESSAGES["nextChoice"]["1"] + `${output}` +
  LANG_MESSAGES["nextChoice"]["2"]);

  if (userAnswer === "1") {
    runCalculator(true, output);
  } else if (userAnswer === "2") {
    runCalculator();
  }
}

function toJsonAndSave(path, infoObject = messagesAndResponses) {
  const jsonString = JSON.stringify(infoObject, null, 2);

  fs.writeFile(path, jsonString,
    function (err) {
      if (err) {
        console.log(`Error writing file: ${err}`);
      } else {
        console.log("Successfully wrote file");
        console.log(`A transcript of your calculations can be found at ${path}`)
      }
    }
  );
}

function getLangChoice() {
  let languageChoice = promptResponseRecord(MESSAGES["en"]["langChoice"]);


  if (languageChoice === "1") {
    return "en";
  } else if (languageChoice === "2") {
    return "es";
  } else {
    promptResponseRecord(MESSAGES["en"]["invalidLang"], false)
    languageChoice = getLangChoice();
  }
  return languageChoice;
}


promptResponseRecord(LANG_MESSAGES["welcome"], false);

runCalculator();

toJsonAndSave("./calculator_messages.json");


