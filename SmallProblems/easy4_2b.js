/*
- (INPUT) ask for 6 numbers to the user
- checks if the 6th number appears amongst the first five number
- (OUTPUT) logs a message saying that
ALGORITHM:
1. Ask the user for a number and add it to an array. Repeat 5 times.
2. Ask the user for a 6th number.
3. Check if the 6th number appears in array.
3. Prints the message.
*/

function getNumber(ordinal) {
  let rlSync = require('readline-sync');
  return rlSync.question(`Enter the ${ordinal} number:`);
}

function printIfNumberIncludedInArray (array, number) {
  if (array.includes(number)) {
    console.log(`The number ${number} appears in ${array.toString()}.`);
  } else {
    console.log(`The number ${number} does not appear in ${array.toString()}.`);
  }
}

let firstFiveNumbers = [];
firstFiveNumbers.push(getNumber('1st'));
firstFiveNumbers.push(getNumber('2nd'));
firstFiveNumbers.push(getNumber('3rd'));
firstFiveNumbers.push(getNumber('4th'));
firstFiveNumbers.push(getNumber('5th'));

let sixthNumber = getNumber('6th');

printIfNumberIncludedInArray(firstFiveNumbers,sixthNumber);
