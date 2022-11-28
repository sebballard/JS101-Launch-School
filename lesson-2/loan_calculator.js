const readline = require('readline-sync');

const GOODBYES = ["See you later alligator", "Peace out!", "Fare thee well!",
  "Catch you on the flip side!", "Cheerio", "Long live and prosper!", "Until next time!",
  "In a while, crocodile!", "Adios!", "Catch ya later, future dude!", "Later potato!"];

let goodbyeIndex = Math.floor(Math.random() * GOODBYES.length);


function isNumberAndInRange(possibleNumber, minVal = 0, tooHighVal = Infinity) {
  /* Checks if input is or can be coerced to type Number and whether '
  /  it is at least minVal, and below tooHighVal.
  /  Returns true if conditions are met else false.
  */

  // If possibleNumber is type string:
  //  If empty or only whitespace as these coerce to zero
  //  Remove commas and periods as otherwise string may be coerced
  //  to wrong number

  if (typeof possibleNumber === "string") {
    if (possibleNumber.trimStart() === "") {
      return false;
    }
  }

  let number = Number(possibleNumber)
  if ((!Number.isNaN(number)) && (number >= minVal) && (number < tooHighVal)) {
    return true;
  }

  return false;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function numToTwoDecimals(number) {
  return Number(number.toFixed(2));
}

function getNumber(message, removeCommasPeriods = false) {
  /* Displays message on the console and records response
  /  from user.
  /  removeCommasPeriods can be set to true to remove any ","
  /  or "." as they are often used to represent large numbers.
  */
  prompt(message);

  let number = readline.question();

  if (removeCommasPeriods) {
    let commaPeriodRe = /,|\./g;
    number = number.replace(commaPeriodRe, "")
  }
  return number;
}

function getLoanAmount() {
  /* Ask user for size of loan until valid input is received.
  *  Returns loan amount as Number above zero and below infinity
  */

  let loanAmount = getNumber("What is the total loan amount in $?", true);

  loanAmount = loanAmount.replace("$", "");

  while ((!loanAmount) || (!isNumberAndInRange(loanAmount, 1))) {
    loanAmount = getNumber(`The response ${loanAmount} didn't make sense to me. Can you try again?`, true);
  }

  return Number(loanAmount);
}

function getMonthlyInterest() {
  /* Gets APR from user and validates.
  *  Converts APR to interest rate per month.
  *  Returns interest rate as Number in decimal format between. ie .05%
  */

  let interestPerMonth;
  let aprDecimal;

  let aprAmount = getNumber("What is the Annual Percentage Rate (APR)? ie 12");

  aprAmount = aprAmount.replace("%", "");

  while ((!aprAmount) || (!isNumberAndInRange(aprAmount, 0, 100))) {
    aprAmount = getNumber(`The response (${aprAmount}) didn't make sense to me. Can you try again?`);
  }

  aprDecimal = (Number(aprAmount) / 100);

  interestPerMonth = (aprDecimal / 12);

  return interestPerMonth;
}

function getDurationMonths() {
  /* Ask user for loan duration in months until valid input is given.
  *  Return duration as number
  */

  let durationMonths = getNumber("What is the duration of the loan in months? ie 24");

  while ((!durationMonths) || (!isNumberAndInRange(durationMonths))) {
    durationMonths = getNumber(`The response (${durationMonths}) didn't make sense to me. Can you try again?`);
  }

  return Number(durationMonths);
}

function calculateMonthlyPayment(loanAmount, monthlyInterestRate,
  durationMonths) {

  let monthlyPayment;

  if (monthlyInterestRate === 0) {
    monthlyPayment = loanAmount / durationMonths;
  } else {
    monthlyPayment = loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-durationMonths))));
  }

  return numToTwoDecimals(monthlyPayment);
}

function doNewCalculation() {
  let userResponse = getNumber("Would you like to do a new calculation?\nType 1 if Yes. Type 2 to exit.");

  while ((!userResponse) || (!isNumberAndInRange(userResponse, 1, 3))) {
    userResponse = getNumber(`The response (${userResponse}) didn't make sense to me. Can you try again?`);
  }

  if (userResponse === "1") {
    return true;
  } else {
    return false;
  }
}

function loanCalculatorLoop() {
  let loanAmount = getLoanAmount();
  let monthlyInterestRate = getMonthlyInterest();
  let durationMonths = getDurationMonths();

  let monthlyPayment = calculateMonthlyPayment(loanAmount, monthlyInterestRate,
    durationMonths);
  let quarterlyPayment = numToTwoDecimals(monthlyPayment * 4);
  let yearlyPayment = numToTwoDecimals(monthlyPayment * 12);

  prompt(`To repay this loan you will need to pay $${monthlyPayment} a month for ${durationMonths} months`);
  prompt(`In other words: $${quarterlyPayment} per quarter, or $${yearlyPayment} per year`);

  if (doNewCalculation()) {
    prompt("OK, let's do another one");
    loanCalculatorLoop();
  } else {
    prompt(`Thank you for using the loan calculator. ${GOODBYES[goodbyeIndex]}`);
  }
}


prompt("Welcome to the loan calculator");

loanCalculatorLoop();