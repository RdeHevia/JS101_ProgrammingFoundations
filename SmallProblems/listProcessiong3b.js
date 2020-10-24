/*
INPUT: 2 numeric arrays
OUTPUT: array
  - product of all combinations of numbers
  - array sorted in ascending order
RULES:
  - no empty arrays
EXAMPLE:
  [2, 4] [3, 6] -> [6, 12, 12, 24] -> [6, 12, 12, 24]
  Ai*Bj
ALGORITHM:
  1. Multiply the 1st element of the 1st array by all the elements of the
    second array. Add to a new array.
  2. Repeat step 1 for each element of the first array.
  3. Order the array.
*/

function multiplyAllPairs(array1, array2) {
  let arrayOfProducts = [];

  array1.forEach(element1 => {
    array2.forEach(element2 => {
      arrayOfProducts.push(element1 * element2);
    });
  });

  return arrayOfProducts.sort((a,b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]