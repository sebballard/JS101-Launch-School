// Write a function that takes a year as input and returns the century. The return value 
// should be a string that begins with the century number, and ends with 
// 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.


// PEDAC

// Process the problem
// Input: number
// Output: string representing which century

// Implicit requirements: 

// Clarifying questions:
 

// Mental model:
// Find the century from the year
// Append the correct ending

// Example/Test cases

// Data structures/ Algorithm:
// Divide input year by 100 and round up to get get century.
// Convert year to string
// set lastNum to last character of string
// Depending on lastNum add the correct ending to string
// return string


function century(year) {
  let centuryNum = Math.ceil(year / 100);
  let centuryString = String(centuryNum);
  let lastDigit = centuryString.slice(-1);
  let secondToLastDigit = centuryString.slice(-2, -1)
  
  if (secondToLastDigit === "1") {
    centuryString += "th";
  } else {
    switch (lastDigit) {
      case "1": 
        centuryString += "st";
        break;
      case "2": 
        centuryString += "nd";
        break;
      case "3": 
        centuryString += "rd";
        break;
      default:
        centuryString += "th"
    }
  }
  
  return(centuryString);
}









Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
