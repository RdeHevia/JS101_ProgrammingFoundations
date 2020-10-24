/*
input: array of numbers [x1, x2...,xn]
output: array of numbers. Each element:
  - xn' = x1 + x2 + ... + xn = xn-1' + xn
EXAMPLES:
  - [1, 2, 3] -> [1, 3, 6]
  - [3] -> [3]
  - [] ->
ALGORITHM:
  1. Create a new empty array
  2. Add the first element of the original array into the new one
  3. Add the sum of 1) first element of the new array and 2) second element
    of the original array into the new one.
  4. Repeat the process for every element of the array.
  5. Return the new array.
*/

function runningTotal(arrayOfNumbers) {
  let runningTotalArray = arrayOfNumbers.slice();

  for (let idx = 1; idx < runningTotalArray.length; idx += 1) {
    runningTotalArray[idx] += runningTotalArray[idx - 1];
  }

  return runningTotalArray;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []