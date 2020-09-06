/*
INPUT: positive integer
OUTPUT: sum of integer digits // integer
RULES:
  * use list processing methods
ALGORITHM:
  FUNCTION sum(integer)
    convert the integer into a string // .toString()
    split the string in individual characters // .split()
    LOOP over characters to perform the sum // .reduce()

*/

function sum(integer) {
  return integer
    .toString()
    .split('')
    .reduce((sumOfDigits, currentDigit) => {
      return Number(sumOfDigits) + Number(currentDigit);
    }, 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45