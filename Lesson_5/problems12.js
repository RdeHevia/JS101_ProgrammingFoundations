/*
- use filter
- return a NEW array with the elements that are multiples of 3
*/

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArray = arr.map(subArray => subArray.filter( num => num % 3 === 0));

console.log(newArray);
