/*
INPUT: array
OUTPUT: same array but reversed
RULES:
  the output array should be the argument array (mutated)
  elements need to be mutated in place.
DATA STRUCTURES:

ALGORITHM:
  FUNCTION reverse(array)
    IF array.length is even or odd:
      LOOP idx = 0 to array.length / 2 - 1
        tempElement = array [idx]
        array[idx] = array[array.length - 1]
        array[array.length - 1] = tempElement
*/
/*
function reverse(array) {
  let reversedArray = [];
  for (let idx = array.length - 1; idx >= 0; idx -= 1) {
    reversedArray.push(array[idx]);
  }
  return reversedArray;
}
*/

function reverse (array) {
  for (let idx = 0; idx < array.length / 2; idx += 1) {
    let tempCopyOfElement = array[idx];
    array[idx] = array[array.length - 1 - idx];
    array [array.length - 1 - idx] = tempCopyOfElement;
  }
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true