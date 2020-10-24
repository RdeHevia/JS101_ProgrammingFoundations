/*
INPUT: integer
OUTPUT: integer
  - sum of digits
RULES
  - use JS methods
ALGORITHM:
  1. Convert the number into a string.
  2. Split the string into substrings. Each substring is a digit
  3. Convert the digits into number format
  4. Sum them together
*/

function sum(number) {
  return String(number)
    .split('')
    .reduce((sumResult, digit) => {
      return Number(digit) + sumResult;
    },0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45