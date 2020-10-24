/*
INPUT: integer
OUTPUT: array that contains
  - all the numbers btw 1 and integer (inclusive) in ascending order
RULES:
  -argument is >0
EXAMPLES:
  2 -> [1, 2]
  1 -> [1]
ALGORITHM:
  0. Create an empty array
  1. Loop from 1 to integer (N)
  2. Add the number into the array
  3. Return the array
*/

function sequence(integer) {
  let arrayOfIntegers = [];

  for (let idx = 0; idx < integer; idx += 1) {
    arrayOfIntegers.push(idx + 1);
  }
  return arrayOfIntegers;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]