/*
INPUT: positive integer
OUTPUT: array
  - a list of digits in the number
ALGORITHM:
  1. Transform the number into a string
  2. Separete the number characters of the string
  3. Transform the number characters into numbers again
  4. Add the numbers into an array
  5. Retunr the array
*/

function digitList(number) {
  return String(number).split('').map(numberChar => Number(numberChar));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]