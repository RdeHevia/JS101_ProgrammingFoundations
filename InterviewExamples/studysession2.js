// TIME: 32min. OK. Do again


//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

//maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//-- should be 6: [4, -1, 2, 1]
//Easy case is when the array is made up of only positive numbers and the maximum sum is the sum of the whole array. If the array is made up of only negative numbers, return 0 instead.

//Empty array is considered to have zero greatest sum. Note that the empty array is also a valid subarray.
/*
INPUT: array of integers
OUTPUT: integer
  - maximum sum of contiguous numbers
OBSERVATIONS:
  - all numbers positive -> sum of full array
RULES:
  - all negative numbers -> 0
  - [] -> 0
EXAMPLE:
  [-2, 3, -1]
  -2:
    -2 + 3 = 1 
    - 2 + 3 - 1 = 0
  3:
    3 - 1 = 2 <-
  -1:
    -1
ALGORITHM:
  1. If the array is empty -> return 0
  2. For each element of the array, find all the possible subsequences.
  3. Sum all the subsequences
  4. Return the maximum subsequence. If the maximum subsequence is negative ->
    -> return 0
findSubsequences(array):
  1. Iterate over the elements of the array. For each element of the array, find
    all the possible contigous subsequences that start from that number.
    [sub1], [sub2]...
  2. Return all the subsequences with the format [[subsequence1],[subsequence2],...]
DATA STRUCTURE:
  subsequences: [[subsequence1],[subsequence2],...]
  sums: [sum1, sum2,...]
*/
function findSubsequences(array) {
  let subsequences = array.map((_, idxI) => {
    let subArray = array.slice(idxI);
    let subsequence = subArray.map((_,idxJ) => {
      return subArray.slice(0,idxJ + 1);
    });
    return subsequence;
  });
  return [].concat(...subsequences);
}

function sumElementsOfNestedArrays(subsequences) {
  let sums = subsequences.map(subsequence => {
    return subsequence.reduce((sum,number) => sum + number);
  });
  return sums;
}

function maximum(arrayOfNumbers) {
  let maximum = arrayOfNumbers.slice().sort((a,b) => b - a)[0];
  return (maximum >= 0 ? maximum : 0);
}
function maxSequence(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) {
    return 0;
  }
  let subsequences = findSubsequences(arrayOfNumbers);
  let sums = sumElementsOfNestedArrays(subsequences);
  return maximum(sums);
}
console.log(maxSequence([]) === 0); // true 
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

