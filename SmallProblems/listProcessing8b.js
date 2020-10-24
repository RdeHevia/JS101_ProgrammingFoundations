/*
INPUT: array
  - subarrays
    - string, number
OUTPUT: new array
  strings repeated as many times as indicated by the number
RULES:
  array never empty
ALGORITHM:
  0. Create an empty array
  1. Iterate over the subarrays. FOr each subarray:
    - Add the word of the subarray into the new array as many times as indicated
      by the number.
  2. Return the array
*/

function buyFruit (groceryList) {
  let arrayOfFruits = [];
  groceryList.forEach(item => {
    for (let idx = 0; idx < item[1]; idx += 1) {
      arrayOfFruits.push(item[0]);
    }
  });
  return arrayOfFruits;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
