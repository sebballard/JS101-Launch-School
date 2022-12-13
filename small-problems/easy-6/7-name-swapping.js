// Write a function that takes a string argument consisting of a first name, a space, 
// and a last name, and returns a new string consisting of the last name, a comma, 
// a space, and the first name.

// function swapName(inputStr) {
//   return inputStr.split(" ").reverse().join(", ");
// }



Examples:

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"


// Further Exploration

// What if the person has one or more middle names? Refactor the current solution so 
// that it can accommodate this; the middle names should be listed after the first name:

function swapName(inputStr) {
  let namesArr = inputStr.split(" ");
  let lastName = namesArr[namesArr.length - 1];
  let FirstAndMiddleNames = namesArr.slice(0, -1).join(" ");

  return `${lastName}, ${FirstAndMiddleNames}`
}


console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"

