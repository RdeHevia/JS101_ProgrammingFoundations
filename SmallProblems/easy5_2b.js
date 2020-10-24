/* 
INPUT: 2 arrays
OUTUT: 1 array
  - "mathematical union of the elements" ( no duplicates)
RULES:
  - no duplicaltes, even if in the same array
  - arguments are always arrays
  - elements can take any value
  - assume we don't want side effects
ALGORITHM:
  1. Create a new array with all the elements of the 2 arguments arrays
  2. Remove the duplicated values
    - For an N element of the array
      - Create a sub array from 0 to N-1
      - Check if the element N is included in the subArray. YES->we remove it
        NO -> we keep it
  3. Return the resultant array
*/

function union (array1, array2) {
  let allElements = [];
  allElements.push(...array1, ...array2);
  return filterOutDuplicates(allElements);
}

function filterOutDuplicates(array) {
  let arrayWithNoDuplicates = array.filter((element, idx) => {
    let subArray = array.slice(0,idx);
    return !subArray.includes(element);
  });

  return arrayWithNoDuplicates;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]