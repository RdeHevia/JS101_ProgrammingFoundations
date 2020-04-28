/*
INPUT: array
OUTPUT: a new array
RULES:
  - New array to contains ONLY the objects with all their numbers even
STRUCTURE:
  1. arr
    1.1: objects
      1.1.1. keys
      1.1.2. values (arrays)
        1.1.2.1. numbers
  We need to access 1.1.2.1.
ALGORITHM:
  1.1 filter to iterate through the objects
    1.1.2. every and Object.values to create an array and iterate through it
        1.1.2.1 every to each subarray to check all numbers are even
*/
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr = arr.filter(obj => {
  return Object.values(obj).every(subArray => {
    return subArray.every(number => number % 2 === 0);
  });
});

console.log(newArr);

let test = { b: [2, 4, 6], c: [3, 6], d: [4] };

let test2 = Object.values(test).every(subArray => {
  return subArray.every(number => number % 2 === 0);
});
console.log(test2);