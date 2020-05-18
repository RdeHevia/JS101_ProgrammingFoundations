/*
INPUT: 2 arrays
  any type of element
OUTPUT: 1 array
  elements interleaved
RULES:
  assume both arrays are not empty
  assume they have the same length
  return a NEW array -> don't mutate original arrays
ALGORITHM:
  FUNCTION interleave(array1, array2)
    SET interLeavedArray = []
    LOOP from 0 to array1.length
      push (array1, array2) into interLeavedArray
    RETURN interLeavedArray
*/

function interleave (array1, array2) {
  let interleavedArray = [];
  for (let idx = 0; idx < array1.length; idx += 1) {
    interleavedArray.push(array1[idx],array2[idx]);
  }
  return interleavedArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']))
