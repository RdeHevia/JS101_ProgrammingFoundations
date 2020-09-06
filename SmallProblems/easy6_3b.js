/*
INPUT: positive integer
OUTPUT: integer (number with its digits reversed)
RULES:
  * 1200 -> 12
ALGORITHM:
  FUNCTION reverseNumber(positiveInteger)
    - converts the positiveInteger into a string // String()
    - converts the string into an array // .split()
    - reverse the array // .reverse()
    - converts the string back into a string, then number // Number()
*/

function reverseNumber(positiveInteger) {
  let arrayOfDigits = positiveInteger.toString().split('');
  return Number.parseInt(arrayOfDigits.reverse().join(''),10);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1