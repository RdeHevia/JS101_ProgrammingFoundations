/*
INPUT: 6 numbers in String format
OUTPUT: string
RULES:
  Check if the 6th number is included in the first 5 numbers
ALGORITHM:
  GET the first 5 numbers in string format. Add them to an array inputArray.
  GET the last number in string format.
  IF inputArray.includes(lastNumber) -> true
  ELSE -> false
*/

let rlSync = require("readline-sync");
let inputArray = [];
let index = 1;
let ordinals = {
  1: "1st",
  2: "2nd",
  3: "3rd",
  4: "4th",
  5: "5th",
  6: "last"
};

while (index <= 5) {
  inputArray.push(rlSync.question(
    `Enter the ${ordinals[index.toString()]} number: `
  ));
  index += 1;
}

let lastNumber = rlSync.question('Enter the last number: ');

if (inputArray.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${inputArray.join(',')}.`);
} else {
  console.log(
    `The number ${lastNumber} does not appear in ${inputArray.join(',')}.`
  );
}