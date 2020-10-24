/*
INPUT: number
OUTPUT: number
  - if number is positive -> return -number
  - If number is negative -> return number
ALGORITHM:
  1. Determine if the number is positive or negative.
    - If > 0 -> return -1 * number
    - If <= 0 -> return number
*/

function negative (number) {
  return (number > 0 ? -number : number);
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0