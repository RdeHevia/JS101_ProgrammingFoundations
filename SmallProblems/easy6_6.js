/*
INPUT: positive integer (>0)
OUTPUT: array of positive integers
RULES:
  Return an array with all the integers between 1 and the argument
  (both inclusive)

ALGORITHM:
  FUNCTION sequence (integer)
    arraySequence = []
    LOOP idx = 1 to idx = integer; idx ++
      push idx into the array
    return arraySequence
*/

function sequence (integer) {
  let arraySequence = [];
  for (let idx = 1; idx <= integer; idx += 1) {
    arraySequence.push(idx);
  }
  return arraySequence;
}
//Apparently map doesn't work with empty arrays
function sequence2 (integer) {
  let emptyArray = [];
  emptyArray.length = integer;
  let arraySequence = emptyArray.map((_,idx) => {
    return idx;
  });
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

console.log(sequence2(5));    // [1, 2, 3, 4, 5]
console.log(sequence2(3));    // [1, 2, 3]
console.log(sequence2(1));    // [1]
