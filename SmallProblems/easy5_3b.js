/*
INPUT: array
OUTPUT: array
  - 2 sub-arrays
RULES:
  - 1st sub-array = 1st half of the original array
  - 2nd sub-array = 2nd half of the original array
  - if the number of elements is odd, the middle element to be placed in the
    1st half
EXAMPLES:
  - [1,2,3] -> [[1,2],[3]]
  - [1] -> [[1],[]]
  - [] -> [[],[]]
ALGORITHM:
  0. Determine the number of elements of the array
  1. If the array has 1 element -> return [[1], []]. (particular case of step 4)
  2. If the array is empty -> return [[], []]. (particular case of step 3)
  3. If the array has a even number of elements
    - split the array at the middle
    - create the two sub-arrays with each half assigned to it
    - add those two sub-arrays into an empty array
    - return the result array
  4. If the number of elements is odd (and greater that 1)
    - split the array at the middle + 1.
    - ditto step number 3.
*/

function halvsies (array) {
  let numberOfElements = array.length;
  let middleIndex;
  if (numberOfElements % 2 === 0) {
    middleIndex = numberOfElements / 2;
  } else {
    middleIndex = (numberOfElements - 1) / 2 + 1;
  }
  let firstHalf = array.slice(0, middleIndex);
  let secondHalf = array.slice(middleIndex);

  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
