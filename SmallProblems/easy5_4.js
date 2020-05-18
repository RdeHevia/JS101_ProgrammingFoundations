/*
INPUT: array
  - unordered
  - with exactly 1 duplicated value
OUTPUT: number
  - the duplicated value
RULES:
  the duplicated value occurs just once
  the rest of the values aren't duplicated
ALGORITHM 1:
  FUNCTION findDup(array)
    sort the array -> arraySorted
    LOOP 0 to arraySorted.length
    IF number[i] === number [i-1] -> return number[i]
ALGORITHM 2:
  FUNCTION findUp (array)
    LOOP 0 to array.length
      slice subArrays to the left and to the right of that number
      IF subArrayLeft(includes(number[i])) || subArrayRight.includes(number[i])->
        return number;
*/

function findDup (array) {
  let duplicateNum;
  array.forEach((num, idx) => {
    let subArrayLeft = array.slice(0,idx);
    let subArrayRight = array.slice(idx + 1);
    if (subArrayLeft.includes(num) || subArrayRight.includes(num)) {
      duplicateNum = num;
    }
  });
  return duplicateNum;
}

console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
   7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));