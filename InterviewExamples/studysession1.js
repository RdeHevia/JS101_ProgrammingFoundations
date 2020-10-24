/*
TIME: 26min GOOD!
*/

/*The objective is to return all pair of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.
*/
/*
INPUT: array of numbers
OUTPUT: nested array of numbers
RULES:
  - sort the result array in ascending order
  - no values duplicated
EXAMPLES:
 1, 2, 3, 4 -> [1, 3] [2, 4]
 1: [[1, 2] [1, 3] [1, 4]] -> [1 3]
 2: [2, 3] [2, 4] -> [2, 4]
 3: [3, 4] -> []
 [[1, 3], [2, 4], []] -> [1, 3] [2, 4]
 4, 3, 1, 5, 6: -> [1,3] [3, 5] [4, 6]
 sort: 1, 3, 4, 5, 6:
 1: [1, 3]
 2: []
 3: [3, 5]
 ...
ALGORITHM:
  1. Sort the array in ascending order
  2. For each element of the array, find all the pairs of numbers. For each num:
    pair = [numberI, numberJ]
  3. Filter the pairs that have a difference of 2
  4. Return all the pairs found
*/
function findAllPairs(arrayOfNumbers) {
  let pairs = arrayOfNumbers.map((numberI, idxI) => {
    let subArrayOfNumbers = arrayOfNumbers.slice(idxI + 1);
    let pairsOfNumbers = subArrayOfNumbers.map(numberJ => {
      return [numberI, numberJ];
    });
    return pairsOfNumbers;
  });
  return [].concat(...pairs);
}

function filterPairsByDifference(pairs, difference) {
  return pairs.filter(pair => pair[1] - pair[0] === difference);
}

function differenceOfTwo(arrayOfNumbers) {
  let sortedNumbers = arrayOfNumbers.sort((a,b) => a - b);
  let pairs = findAllPairs(sortedNumbers);
  let pairsWithDifferenceOfTwo = filterPairsByDifference(pairs,2);
  return pairsWithDifferenceOfTwo;
}

console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
//  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4]));
// [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// []