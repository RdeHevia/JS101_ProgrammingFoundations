/*
INPUT: array of numbers
OUTPUT: array of numbers
RULES
  [x1, x2,...,xn] -> [x1, x1+x2,...,x1+x2+...+xn]
  [] -> []
IMPLICIT RULES;
  return an array -> a new array -> not mutate original array
ALGORITHM:
  FUNCTION runningTotal(array)
    newArray[0] = array[0];
    LOOP i=1 to i<array.length
      newArray[i] = array[i] + newArray[i-1]
    return newArray;
  */

function runningTotal (arrayOfNumbers) {
  let runningSumArray = arrayOfNumbers.slice();
  for (let idx = 1; idx < runningSumArray.length; idx += 1) {
    runningSumArray[idx] += runningSumArray[idx-1];
  }
  return runningSumArray;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                 // [3]
console.log(runningTotal([]));                     // []