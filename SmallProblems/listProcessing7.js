/*
INPUT: array of numbers
OUTPUT: number
RULES:
  * [3, 5, 2] -> 3 + (3 + 5) + (3 + 5 + 2) -> 3 + 8 + 10
  * assume the array contains at least one number
  * [3, 5, 2] -> 3 + (3 + 5) + (3 + 5 + 2) = 3*3 + 2*5 + 1*2
  * [a0, a1,...,an] -> (n+1) * a0 + (n) * a1 + ... + 1 * an
ALGORITHM:
  FUNCTION sumOfSums(array)
    SET sum = 0;
    LOOP idx = 0 to idx < array.length // use forEach
      sum = sum + (array.length - idx) * array[idx]
    RETURN sum
ALGORITHM 2:
  FUNCTION sumOfSums2(array)
    LOOP idx = 0 to idx < array.length // Use forEach
      split the array in subarrays. E.g
        [3, 5, 2] -> slice(0,1) = [3], slice (0, 2) = [3, 5], slice(0,3) = [3, 5, 2]
      sum = sum + subArray.reduce()
*/

function sumOfSums(arrayOfNumbers) {
  let sum = 0;
  arrayOfNumbers.forEach((element,idx) => {
    let nbrOfTimesEachElementAppears = arrayOfNumbers.length - idx;
    sum += nbrOfTimesEachElementAppears * element;
  });
  return sum;
}

function sumOfSums2 (arrayOfNumbers) {
  let sum = 0;
  arrayOfNumbers.forEach((_,idx) => {
    sum += arrayOfNumbers.slice(0, idx + 1).reduce((partialSum,number) => {
      return partialSum + number;
    });
  });
  return sum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

console.log(sumOfSums2([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums2([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums2([4]));              // 4
console.log(sumOfSums2([1, 2, 3, 4, 5]));  // 35