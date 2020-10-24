/*
INPUT: 2 arrays
  - elements: numbers
  - arrays have the same length
OUTPUT: array
  - product of 2 arrays: Ci = Ai * Bi ; i=0 to n
ALGORITHM:
1. Loop over the element of the arrays A and B. For each element (index i):
  - Multiply the element Ai by the element Bi.
  - Add the result to a new array C
2. Return the new array
*/

function multiplyList (array1, array2) {
  let resultArray = [];
  for (let idx = 0; idx < array1.length; idx += 1) {
    resultArray.push(array1[idx] * array2[idx]);
  }
  return resultArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]