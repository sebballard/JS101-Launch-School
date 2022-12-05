// Write a function that takes a string of digits and returns the appropriate number as an integer. 
// The string may have a leading + or - sign; if the first character is a +, your function should 
// return a positive number; if it is a -, your function should return a negative number. 
// If there is no sign, return a positive number.

// You may assume the string will always contain a valid number.


const conversionObj = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function stringToSignedInteger(inputString) {
  let convertedDigits = 0;
  let signChanger = 1;
  for (let char of inputString) {
    if (char === "+"){
      continue;
    } else if (char === "-") {
      signChanger = -1;
      continue
    }

    let newDigit = conversionObj[char];
    convertedDigits = (convertedDigits * 10) + newDigit;
  }

  return convertedDigits * signChanger;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true