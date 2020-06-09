/*
INPUT: positive integer
OUTPUT: positive integer
RULES: function
  takes 1 argument (positive integer)
  returns the sum of its digits
  use list processing techniques.
ALGORITHM:
  FUNCTION sum (integer)
    transfor the integer -> string -> arrayOfDigits
    return arrayOfDigits.filter()
*/

function sum(integer) {
  return String(integer).split('').reduce(((accumulator, currentDigit) => {
    return accumulator + Number(currentDigit);
  }),0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45