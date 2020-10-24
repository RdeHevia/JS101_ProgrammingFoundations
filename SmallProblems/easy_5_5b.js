/*
INPUT: 2 arrays
OUTPUT: 1 array
  - elements of the 2 arrays interleaved
RULES:
  - arrays are non-empty
  - arrays have the same number of elements
ALGORITHM:
  1. LOOP from 0 to end of the array. For each iteration:
    - Add the element of each array into the new one
  2. RETURN the new array
*/

function interleave (array1, array2) {
  let interleavedElements = [];
  for (let idx = 0; idx < array1.length; idx += 1) {
    interleavedElements.push(array1[idx], array2[idx]);
  }
  return interleavedElements;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]