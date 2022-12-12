// The time of day can be represented as the number of minutes before or after midnight. 
// If the number of minutes is positive, the time is after midnight. If the number of minutes 
// is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns 
// the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

// You may not use javascript's Date class methods.


// PEDAC

// Process the problem
// Input: Number
// outoutt: string

// Rules: 00:00 considered time zero
// Can be given an input of more than a day
// Can take negative input

// Clarifying questions:
//

// Mental model: Turn number of minutes into hours and minutes.
// Take additional days full days off hours
// Take or add the appropriate amount to calculate the time.
// Format the string and print it

// Example/Test cases

// Data structures/ Algorithm: 
//
// define hours as the floor of inputNumber / 60
// define minutes as inputNumber moodulo 60
// redefine hours as hours modulo 24
// if inputNumber is negative: define calculatingHours and calculatingMinutes as 23 and 60, else 0 and 0.
// Add or subtract the hours/minutes from calculatingHours and calculatingMinutes.
// Convert hours and minutes into strings and add preceding zeroes if neccessary.
// Combine this to make outputString
// return outputString

function timeOfDay(inputNumber) {
  let hours = (Math.floor(Math.abs(inputNumber) / 60));
  let minutes =(Math.abs(inputNumber) % 60);

  hours = hours % 24;

  let timeHours;
  let timeMinutes;


  if (inputNumber < 0) {
    timeHours = 23 - hours;

    if (minutes) {
      timeMinutes = 60 - minutes;
    } else {
      timeMinutes = 0
    }
  } else {
    timeHours = 0 + hours;
    timeMinutes = 0 + minutes;
  }

  let timeString = makeTimeString(timeHours, timeMinutes);

  return timeString;
}


function makeTimeString(hours, minutes) {
  hours = String(hours);
  minutes = String(minutes);

  if (hours.length === 1) {
    hours = "0" + hours;
  }
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }

  return `${hours}:${minutes}`;
}







Examples:

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");