// Write two functions that each take a time of day in 24 hour format, 
// and return the number of minutes before and after midnight, respectively. 
// Both functions should return a value in the range 0..1439.

// PEDAC

// Process the problem
// Input: String
// outoutt: number

// Rules: 0
// Clarifying questions:
//

// Mental model: Convert inputString into hours and minutes
// Use this to calculate hours before or after midnight

// Example/Test cases

// Data structures/ Algorithm: 
//
// func beforeMifnight(inputStr):
//  convert string into hour and minute number values;
//    if hour is 24 make it zero
//  set minutesTillHour to 60 - minutes, unless minutes is 0, then it is 0. Add one to hour.
//  set hoursTillMidnight to 24 - hours.
//  Set minutesTillMidnight as (HoursToMidnight * 60) + minutesTillHour
//  return minutesTillMidnight


// // func afterMifnight(inputStr):
//  convert string into hour and minute number values;
//    if hour is 24 make it zero
//    set minutesToMidnight to (hours * 60) + minutes
//    return minutesToMifnight

function beforeMidnight(timeString) {
  let hours = Number(timeString.split(":")[0]) % 24;
  let minutes = Number(timeString.split(":")[1]);

  console.log(`hours: ${hours} minutes ${minutes}`)

  if (hours === 0 & minutes === 0) {
    return 0;
  }

  let minutesTillHour;
  
  if (minutes !== 0) {
    minutesTillHour = 60 - minutes;
    hours += 1;
  } else {
    minutesTillHour = 0;
  }

  let hoursTillMidnight = 24 - hours;

  let minutesTillMidnight = (hoursTillMidnight * 60) + minutesTillHour;

  console.log(minutesTillMidnight);
  return minutesTillMidnight;
}

function afterMidnight(timeString) {
  return ((1440 - beforeMidnight(timeString)) % 1440);
}



// Examples:

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);