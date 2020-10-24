/*
INPUT: array of integers
OUTPUT: average of all integers
  - rounded down
RULES:
  - array not empty
  - numbers are positive integers
ALGORITHM:
1. Sum all the integers
2. Divide the result by the number of integers
3. Round down the result. Return the value
*/

function average (arrayOfNumbers) {
  let sumOfNumbers = arrayOfNumbers.reduce((num, sum) => num + sum);
  return Math.floor(sumOfNumbers / arrayOfNumbers.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40