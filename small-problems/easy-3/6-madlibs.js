// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, 
// and injects them into a story that you create.

// Example:

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.


const readline = require("readline-sync");

console.log("Enter a noun: ");
let noun = readline.prompt()

console.log("Enter a verb:");
let verb = readline.prompt();

console.log("Enter an adjective:");
let adjective = readline.prompt();

console.log("Enter an adverb:");
let adverb = readline.prompt();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}`);