// Question 1: Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

for (let i = 0; i < numbers.length; i += 1) {
  numbers.pop()
}

for (let i = 0; i < numbers.length; i += 1) {
  numbers.shift()
}

numbers.splice(0)

// -----------------
// Question 2: What will the following code output?

console.log([1, 2, 3] + [4, 5]);

// I think it will output 
// 1,2,34,5
// It did


// -----------------
// Question 3: What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// It will output: hello there



// -----------------
// Question 4: What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// I think it will output:
// [{first: 42}, {second: "value2"}, 3, 4, 5]


// -----------------
// Question 5: The following function unnecessarily uses two return statements to return 
// boolean values. Can you rewrite this function so it only has one return statement 
// and does not explicitly use either true or false?

function isColorValid(color) {
  
  return color === "blue" || color === "green";
}