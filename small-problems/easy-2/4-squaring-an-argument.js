// Using the multiply() function from the "Multiplying Two Numbers" problem, 
// write a function that computes the square of its argument 
// (the square is the result of multiplying a number by itself).



// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

// const square = (num) => multiply(num, num); 


// Example:

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true



// Further Exploration

// What if we wanted generalize this function to a "power to the n" type function: 
// cubed, to the 4th power, to the 5th, etc. How would we go about doing so while still
// using the multiply() function?

// define function toPower taking to Number arguments; number, power:
//  if power is 0:
//    return 1
//  declare variable isNegative, initialize to false;
//  if power is negative:
//    set isNegative to boolean true
//  reassign power to its absolute value
//  
//  declare and initalize variable powerCalc set to 1 
//  Iterate through numbers 1 up to and including power:
//    Each iteration set powerCalc to result of multiply function with powerCalc and number as arguments
//  
//  If isNegative is not true return powerCalc
//  Else: return 1 divided by powerCalc


function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}


function toPower(number, power) {
  if (power === 0) {
    return 0;
  }

  let isNegative = false;
  if (power < 0) {
    isNegative = true;
  }

  power = Math.abs(power)

  let powerCalc = 1;

  for (let i = 1; i <= power; i += 1) {
    powerCalc = multiply(powerCalc, number);
  }

  if (isNegative) {
    return 1 / powerCalc;
  } else {
    return powerCalc;
  }
}

console.log(toPower(2, 2), toPower(1, -3), toPower(3, 3), toPower(4, -2))
// logs: 4 1 27 0.0625
