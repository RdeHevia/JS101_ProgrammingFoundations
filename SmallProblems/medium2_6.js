/*
INPUT: integer
OUTPUT: integer
3 - > (1 + 2 + 3)**2 - (1**2 + 2**2 +3**)
1 -> 1**2 - 1**2 = 0
ALGORITHM:
0. Create an array with element from 1 to N.
1. Calculate the sum from 1 to N. Square the result.
2. Square all the integers from 1 to N and sum them.
3. ResultOfStep1 - ResultOfStep2 -> return

*/

function sumSquareDifference(integer) {
  let arrayOfIntegers = [];

  for (let idx = 1; idx <= integer; idx += 1) {
    arrayOfIntegers.push(idx);
  }

  return (sum(arrayOfIntegers) ** 2) - sum(squareNumbersInArray (arrayOfIntegers));
}

function sum (arrayOfNumbers) {
  return arrayOfNumbers.reduce((sum, number) => sum + number,0);
}

function squareNumbersInArray (arrayOfNumbers) {
  return arrayOfNumbers.map(number => number ** 2);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150