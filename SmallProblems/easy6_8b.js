/*
INPUT: 2 integers
  - count (number of elements in the array)
  - starting number (and multiples)
OUTPUT: array
RULES:
  assume count always greater than or equal to 0
  if count = 0 -> return empty array []
EXAMPLES:
  (4,-7) -> -7, -7*2, -7*3, -7*4
  (0, 10) -> []
ALGORITHM:
  1. LOOP from 1 to count. For each iteration:
    - Add startingNumber * multiplier to an array
  2. Return the array
*/

function sequence(count, startingNumber) {
  let sequenceOfNumbers = [];
  if (count === 0 ) {
    return sequenceOfNumbers;
  }
  for (let multiplier = 1; multiplier <= count; multiplier++) {
    sequenceOfNumbers.push(startingNumber * multiplier);
  }
  return sequenceOfNumbers;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []