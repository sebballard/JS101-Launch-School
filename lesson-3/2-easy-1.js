//Question one: Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// I think it will add the value 5 at index 6, and add soemthing to the effect of 'no-value'
// at indexes 3-5

// The result was as follows, quite similar to what I expected

// [ 1, 2, 3, <3 empty items>, 5 ]


// Bonus:

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[4];  // what will this line return?


// This will return undefined

// -----------------------------

// Question 2: How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

let doesContainExlamation = str1.slice(-1) === "!";

// -----------------------------

// Question 3: Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// It does not have an entry for spot

// Can also be determined using method

ages.hasOwnProperty("Spot"); 

// -----------------------------

// Question 4: Using the following string, create a new string that contains all 
// lowercase letters except for the first character, which should be 
// capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";

let newString = munstersDescription.slice(0, 1).toUpperCase() + munstersDescription.slice(1).toLowerCase();

// => The munsters are creepy and spooky.


// -----------------------------

// Question 5: What will the following code output?

console.log(false == '0');
console.log(false === '0');

// True
// False


// -----------------------------

// Question 6: We have most of the Munster family in our ages object:

let ages2 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages2, additionalAges);


// -----------------------------

// Question 7: Determine whether the name Dino appears in the strings below -- check each string separately):

let str11 = "Few things in life are as important as house training your pet dinosaur.";
let str22 = "Fred and Wilma have a pet dinosaur named Dino.";

str11.includes("Dino");
str22.includes("Dino");


// -----------------------------

// Question 8: How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push("Dino");

// -----------------------------

// Question 9: In the previous problem, our first answer added 'Dino' to the array like this:

let flintstones2 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");

// How can we add multiple items to our array? ('Dino' and 'Hoppy')

flintstones2.push("Dino", "Hoppy");


// -----------------------------

// Question 10: Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";

let newAdvice = advice.split("house")[0];

console.log(newAdvice);

// Expected return value:
// => 'Few things in life are as important as '