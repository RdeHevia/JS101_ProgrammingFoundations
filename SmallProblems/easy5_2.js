/*
INPUT: 2 arrays
OUTPUT: 1 array with the union of values
RULES;
  No duplication of values
  Even if there are duplicated in the original arrays
  Assume both arguments are always arrays
ASSUMPTIONS:
  Return a NEW array
ALGORITHM1 (WRONG, IT DOESN"T WORK):
  FUNCTION union (array1, array2)
    SET arrayUnion = []
    LOOP over array1 elements:
      IF element is NOT included in array 2 -> arrayUnion.push(element)
    LOOP over array2 elements:
      IF element is NOT included in array 1 -> arrayUnion.push(element)
    RETURN arrayUnion
ALGORITHM2 :
  FUNCTION union (array1, array2)
  SET arrayUnion = [];
  LOOP over (array1+array2) elements:
    IF element is NOT included in arrayUnion -> arrayUnion.push(element)
*/

function union (array1, array2) {
  let arrayUnion = [];
  [...array1,...array2].forEach(number => {
    if (!arrayUnion.includes(number)) arrayUnion.push(number);
  });
  return arrayUnion;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 3, 3, 5, 1], [3, 6, 9, 3, 3, 9]));    // [1, 3, 5, 6, 9]

function union2 (...arrays) {
  let arrayUnion = [];
  [].concat(...arrays).forEach(number => {
    if (!arrayUnion.includes(number)) arrayUnion.push(number);
  });
  return arrayUnion;
}

console.log(union2([1,2,3],[4,5,6]));
console.log(union2([1, 3, 3, 5, 1], [3, 6, 9, 3, 3, 9]));
console.log(union2([1,2,2]));
console.log(union2([]));
