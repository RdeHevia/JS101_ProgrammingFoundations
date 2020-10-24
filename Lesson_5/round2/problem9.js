/*
INPUT: array of arrays (2 levels)
OUTPUT: NEW array
RULES: order the subarrays in ascending order (alphabetically or numerically)
ALGORITHM/DATA STRUCTURE:
  LOOP over arr elements (subarrays) -> forEach()
    IF subArray has numbers -> sort in ascending order -> sort()
    IF subArray has letters -> sort alphabetically in ascending order -> sort()
*/
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
let orderedArr = arr.map(subArray => {
  if (typeof subArray[0] === 'number') {
    return subArray.slice().sort((a,b) => a - b);
  } else {
    return subArray.slice().sort();
  }
});

console.log(arr);
console.log(orderedArr);