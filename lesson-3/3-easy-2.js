// Question 1: Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

let replacementRe = /important/gi;

let urgentAdvice = advice.replace(replacementRe, "urgent");


// -------------------

// Question 2: The Array.prototype.reverse method reverses the order of elements in an array, 
// and Array.prototype.sort can rearrange the elements in a variety of ways, including 
// descending. Both of these methods mutate the original array as shown below. 
// Write two distinct ways of reversing the array without mutating the original array. 
// Use reverse for the first solution, and sort for the second.


let numbers = [1, 2, 3, 4, 5];
const identity = (x) => x;
let numbersReversed = numbers.map(identity).reverse();

let numbersSorted = [...numbers].sort((num1, num2) => num2 - num1);

let numbersForEach = [];

numbers.forEach((element) => numbersForEach.unshift(element));
console.log(numbersReversed, numbersSorted, numbersForEach, numbers)


// -------------------

// Question 3: Given a number and an array, determine whether the number is included in the array.

let numbers0 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers0.includes(number1), numbers0.includes(number2));


// -------------------

// Question 4: Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

let famousWords1 = "Four score and " + famousWords;
let famousWords2 = "Four score and ".concat(famousWords);

console.log(famousWords1, famousWords2);


// -------------------

// Question 5: Given an array of numbers [1, 2, 3, 4, 5], mutate the array by 
// removing the number at index 2, so that the array becomes [1, 2, 4, 5].

let theseNumbers = [1, 2, 3, 4, 5];

theseNumbers.splice(2, 1);

console.log(theseNumbers);


// -------------------

// Question 6: Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:

["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Nesting data structures like we do here is commonplace in JavaScript and programming in general. 
// We'll explore this in much greater depth in a future Lesson.

// Create a new array that contains all of the above values, but in an un-nested format:

let newArr = [];

for (let element of flintstones) {
  if (typeof element === "object") {
    for (let innerElement of element) {
      newArr.push(innerElement)
    }
  } else {
    newArr.push(element);
  }
}

// or
newArr = [].concat(...flintstones);

console.log(newArr);


// -------------------

// Question 7: Consider the following object:

let flintstones2 = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this object that contains only two elements: Barney's name and Barney's number:

// [ 'Barney', 2 ]

let outputArr = Object.entries(flintstones2)[2];

console.log(outputArr);

// -------------------

// Question 8: How would you check whether the objects assigned to variables numbers and 
// table below are arrays?

let numbers4 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers4), Array.isArray(table));



// -------------------

// Question 9: Back in the stone age (before CSS), we used spaces to align things on the screen. 
// If we have a 40-character wide table of Flintstone family members, 
// how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";

let totalSpacesNeeded = Math.floor((40 - title.length) / 2);

title = " ".repeat(totalSpacesNeeded) + title;

console.log(title);

// -------------------

// Question 10: Write a one-line expression to count the number of lower-case t characters 
/// in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;