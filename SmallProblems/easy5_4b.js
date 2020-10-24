/*
INPUT: array
  - there is 1 duplicate value (it occurs twice)
  - all other values only occurs once
  - values are unordered
OUTPUT: the element of the array

ALGORITHM 1:
  1. Sort the array
  2. The duplicated is the value that occurs consecutively (at idx N-1, N).
      For each element N of the array:
        - If the element N === element N-1 -> that's the duplciate value
        - if not -> keep going

ALGORITHM 2:
  1. For each element of the array (element N)
    - Create a subArray from element 0 to element N-1
    - Check if the element N is included in the subArray
      - If it's included -> that's the duplciate value
      - If not -> keep going
*/

function findDup (array) {
  let sortedArray = array.sort((a,b) => a - b);
  let duplicatedValue;
  for (let idx = 1; idx < sortedArray.length; idx += 1) {
    if (sortedArray[idx] === sortedArray[idx - 1]) {
      duplicatedValue = sortedArray[idx];
      break;   
    }
  }
  console.log(duplicatedValue);
  return duplicatedValue;
}
findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73