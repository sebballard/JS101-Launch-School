// Given a string of words separated by spaces, write a function that 
// swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string 
// will always contain at least one word. You may also assume that each string 
// contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

// PEDAC

// Process the problem
// Input: String
// Output: String, with each word with first and last letters replaced.

// Rules: Assume only alphabetic characters and spaces in inputStr
// Assume inputStr contains at least one word
// Capitalization stays the same when switched
// 

// Clarifying questions:
// 

// Mental model: Make function to reverse first and last characters.
// Use this function on each word in string.

// Example/Test cases

// Data structures/ Algorithm: 
// Define inputWordsArr as array of each word in inputStr
// Apply helper function to each element of the array, mutate
// Turn inputWordsArr back into a string each element seperated by a space
// Return this string

// switchFirstLastChars helper function(inputString):
//  if length of input string equals 1; return inputStr
//  set outStr to a contacenation of the last character + any middle characters + first character
//  return outStr

// Code

function switchFirstLastChars(input) {
  if (input.length === 1) {
    return input;
  }

  let outputStr = input.slice(-1) + input.slice(1, -1) + input.slice(0, 1);

  return outputStr;
}

function swap(inputStr) {
  let inputWordsArr = inputStr.split(" ");

  let switchedWordsArr = inputWordsArr.map(switchFirstLastChars)

  outputStr = switchedWordsArr.join(" ");

  return outputStr;
}


// Examples:

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"