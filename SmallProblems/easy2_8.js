/*
INPUT: array
OUTPUT: array
EXPLICIT RULES: Write a function that...
  - takes an array as argument
  - return an array with the every other element of the old array: 1st, 3rd,...
IMPLICIT RULES:
  - The array can have any type of primitive values inside.
ALGORITHM:
  - FUNCTION oddities (arr)
    - Filter the numbers of the array with even indexes.
      - Use the filter method.
      - Logical condition: index % 2 === 0
    - Return new array
*/

function oddities (array) {
  return array.filter ((_,index) => index % 2 === 0);
}

function evenities (array) {
  return array.filter ((_,index) => index % 2 !== 0);
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
console.log(' ')
console.log(evenities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(evenities(["abc", "def"])); // logs ['abc']
console.log(evenities([123])); // logs [123]
console.log(evenities([])); // logs []