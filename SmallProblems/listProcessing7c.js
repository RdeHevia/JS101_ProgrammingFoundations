/*
INPUT: array of numbers
OUTPUT: number
  - sum  of subsequences
RULES: 
  - no empty arrays
EXAMPLE:
  [1, 2, 3]:
  1
  1 + 2
  1 + 2 + 3
  add all of them together
ALGORITHM:
1. Loop over the elements of the array. For each element of the array:
  - Sum that element with all the previous elements of the array
2. After we have the sums -> we add them together
*/

function sumOfSums (array) {
  let arrayOfSums = array.map((number,idx) => {
    return array.slice(0,idx + 1).reduce((sum,number) => sum + number);
  });
  return arrayOfSums.reduce((sum,num) => sum + num);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35