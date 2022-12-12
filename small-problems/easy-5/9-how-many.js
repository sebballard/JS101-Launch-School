// Write a function that counts the number of occurrences of each element in a given array. 
// Once counted, log each element alongside the number of occurrences. 
// Consider the words case sensitive e.g. ("suv" !== "SUV").

// Example:

// PEDAC

// Process the problem
// Input: Array
// outoutt: log of frequency of each element

// Rules: Case sensitive.

// Clarifying questions:
//

// Mental model: Object to count occurences of each element. Iterate through inputArray and count occurences.
// Use this to log the output.

// Example/Test cases

// Data structures/ Algorithm: 
// input: array of strings
// define vehicleFrequency as empty object
// Iterate through elements of inputArr:
//  If element is not already a key in vehicleFrequency: Set its value to one
//  If it already has a value, increase the value by one.
// Generate array of keys in vehicle frequency.
// Use this and vehicleFrequency obj to log the correct output


// Code

function countOccurrences(inputArr) {
  let vehicleFrequency = {};

  for (let vehicle of vehicles) {
    console.log(vehicleFrequency)
    if (vehicleFrequency[vehicle]) {
      vehicleFrequency[vehicle] += 1;
    } else {
      vehicleFrequency[vehicle] = 1;
    }
  }
  console.log(vehicleFrequency)
  for (let [key, value] of Object.entries(vehicleFrequency)) {
    console.log(`${key} => ${value}`);
  } 
}



let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
