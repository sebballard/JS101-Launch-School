// Create a function that takes 2 arguments, an array and an object. 
// The array will contain 2 or more elements that, when combined with adjoining spaces, 
// will produce a person's name. The object will contain two keys, "title" and "occupation", 
// and the appropriate values. Your function should return a greeting that uses the person's 
// full name, and mentions the person's title.

// PEDAC

// Process the problem
// Input: array of variable length with individual elements of name in order. 
// Object with two keys; 'title' and 'occupation' with the expected values.

// Output: String logged to console in the form "Hello <name>, nice to have a <title> <occupation> around" 

// Implicit requirements: input array containign name can be of variabble length
// 

// Clarifying questions:
// 

// Mental model: Turn array into a signle string name variable. get title and occupation
// and assign to variables. Use these valeus to log the message to user.

// Example/Test cases

// Data structures/ Algorithm:
// set empty string variable as name
// Iterate from 0 to length of input array - 1:
//  if index value is not 0 add space to name
//  update name to add array string at index value with a space before it
// Extract name and occupation from the input object
// Use console.log to show the user this information in the correct format


// Code

function greetings(nameArr, jobInfoObj) {
  let name = "";

  for (let index = 0; index < nameArr.length; index += 1) {
    if (index !== 0){
      name = name + " ";
    }
    name = name + nameArr[index];
  }

  let title = jobInfoObj["title"]
  let occupation = jobInfoObj["occupation"]

  return `Hello, ${name}! Nice to have a ${title} ${occupation} around.`
}
// Example:

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
