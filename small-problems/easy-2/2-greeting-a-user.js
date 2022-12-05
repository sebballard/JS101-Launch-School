// Write a program that will ask for user's name. The program will then greet the user. 
// If the user writes "name!" then the computer yells back to the user.

// PEDAC

// Process the problem
// Input: user response to being asked their name as string.

// Output: String replying to user, yelling if user response ends with '!'

// Implicit requirements: input array containign name can be of variabble length
// 

// Clarifying questions:
// 

// Mental model: Find if the last element of user response is '!'. If not respond normally,
// else respond YELLING!

// Example/Test cases
// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

// Data structures/ Algorithm:
// define function respondToUser taking String name input:
//  Declare variable doYell.
//  If last element of string is '!':
//    set doYell to true
//    re assign string to exclude ! at end, and to capitalize
//  else: set doYell to false
//  If doYell is true: log yelling response
//  else: log normal response
//
// Ask user for name and save as name
// pass name to respondToUser


// Code

const readline = require("readline-sync");

function respondToUser(name) {
  let doYell;
  if (name[name.length - 1] === "!") {
    doYell = true;
    name = name.slice(0, -1).toUpperCase();
  } else doYell = false;

  if (doYell) {
    console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

console.log("What is your name?");
userResponse = readline.prompt();

respondToUser(userResponse);








// Examples

// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?
