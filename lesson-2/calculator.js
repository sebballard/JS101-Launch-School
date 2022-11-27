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
  /* Uses prompt function to send message and record the message in recordingObj
  isResponse is boolean representing whether a response is expected after the
  message.
  If isResponse, a response is requested and recorded.
  Adds message and response as new object with keys named message and response
  to recordingObj.
  New object is assigned as value to the key which is a digit of
  which nth message response pair it is.
  If isResponse is true returns response otherwise returns null.
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
  /* Asks the user for a number, validates it, and returns this number.
    Parameter isFirst is boolean. If true the prompt message given will
    indicate that it is asking for the first number. If false it will say
    "other number", used when asking for the second number, or when reusing a
    number from a previous calculation.
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
  Returns Number between 1 and 5 indicating which operator was chosen.
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

function getContinueResponse(output) {
  let response;

  if (output === Infinity || output === -Infinity) {
    response = promptResponseRecord(LANG_MESSAGES["ansInfinity"]);
    while (response !== "1" && response !== "2") {
      response = promptResponseRecord(LANG_MESSAGES["invalidNumber"]);
    }
    response = String(Number(response) + 1); // Only two choices when output was infinity instead of 3.
    // This adjusts the response to still be correct "order"
  } else {
    response = promptResponseRecord(LANG_MESSAGES["nextChoice"]["1"] + output +
    LANG_MESSAGES["nextChoice"]["2"]);
    while (Number(response) < 1 || Number(response) > 3) {
      response = promptResponseRecord(LANG_MESSAGES["invalidNumber"]);
    }
  }
  return response;
}

function runCalculator (reuseNumber = false, previousNum = NaN) {
  /* Runs the calculator process adding two numbers.
  reuseNumber is a boolean indicating whether the result of the previous
  calculation will be used as the first number. If true it is also neccessary
  to specify previousNum parameter.
  Calls self recursively to calculate as many numbers as desired.
  Returns null
  */

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

  let continueResponse = getContinueResponse(output);

  if (continueResponse === "1") {
    runCalculator(true, output);
  } else if (continueResponse === "2") {
    runCalculator();
  }

  return null;
}

// eslint-disable-next-line max-len
function toJsonAndSave(path, infoObject = messagesAndResponses, jsonIndents = 2) {
  /* Takes a given javacript object, converts it to a json string.
  Writes the JSON file to a given path. Make sure to include file name
  and extension in the path.
  Returns the JSON striing for if it is needed.
  */

  const JSONSTRING = JSON.stringify(infoObject, null, jsonIndents);

  fs.writeFile(path, JSONSTRING,
    function (err) {
      if (err) {
        console.log(LANG_MESSAGES["writeError"] + `${err}`);
      } else {
        console.log(LANG_MESSAGES["writeSuccess"] + path);
      }
    }
  );
  return JSONSTRING;
}

function getLangChoice() {
  /* Prompts users for a language choice until they provide
  a valid one.
  Returns the language code of the chosen language as a string.
  */

  let languageChoice = promptResponseRecord(MESSAGES["en"]["langChoice"]);

  if (languageChoice === "1") {
    return "en";
  } else if (languageChoice === "2") {
    return "es";
  } else {
    promptResponseRecord(MESSAGES["en"]["invalidLang"], false);
    languageChoice = getLangChoice();
  }
  return languageChoice;
}


promptResponseRecord(LANG_MESSAGES["welcome"], false);

runCalculator();

toJsonAndSave("./calculator_messages.json");


