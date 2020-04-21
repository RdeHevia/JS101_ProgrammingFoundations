/*
INPUT: numbers in string format
OUTPUT: string
RULES:
  Logs the year in which the user will retire
  and how many years till then
ALGORITHM:
  GET age
  GET ageOfRetirement
  request current date to computer
  currentYear: extract from currentDate
  numberOfYearsLeft =  ageOfRetirement-age
  yearOfRetirement = currentYear + numberOfYearsLeft
  LOG to console
*/

let rlSync = require('readline-sync');

let age = +rlSync.question('What is your age? ');
let ageOfRetirement = +rlSync.question(
  'At what age would you like to retire? '
);

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let numberOfYearsLeft = ageOfRetirement - age;
let yearOfRetirement = currentYear + numberOfYearsLeft;

console.log(`It's ${currentYear}. You will retire in ${yearOfRetirement}.`);
console.log(`You have only ${numberOfYearsLeft} years of work to go!`);