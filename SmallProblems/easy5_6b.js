/*
1) multiplies all integers together
2) divides the result by the number of elements of the array
3) return a number ROUNDED to the 3rd decimal, in string format
INPUT: array of numbers
OUTPUT: string
ALGORITHM:
1. Multiply all the numbers
2. Divide the result by the length of the array
3. return the number with 3 decimals
*/

function multiplicativeAverage (array) {
  let multiplication = array.reduce((currentVal, accumulator) => {
    return accumulator * currentVal;
  });
  let multiplicativeMean = multiplication / array.length;
  return multiplicativeMean.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"