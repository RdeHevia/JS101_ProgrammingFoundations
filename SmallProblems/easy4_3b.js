/*
- ask for age and age of retirement
- logs year of retirement and how many more years
INPUT: integers in string format
OUTPUT: string (sentece)

ALGORITHM:
  1. Ask for user's age. Assign it to a variable
  2. Ask for user's age of retirement.
  3. Convert values into numbers
  4. Calculate number of years left: age of retirement - current age
  5. Prints current year + year of retirement
  6. Prints years left
*/

let rlSync = require('readline-sync');
let currentAge = Number(rlSync.question('What is your age?'));
let ageOfRetirement = Number(
  rlSync.question('At what age would you like to retire?')
);
let today = new Date();
let currentYear = today.getFullYear();

let yearsLeft = ageOfRetirement - currentAge;
let yearOfRetirement = currentYear + yearsLeft;

console.log(`It's ${currentYear}. You will retire in ${yearOfRetirement}`);
console.log(`You have only ${yearsLeft} years of work to go!`);