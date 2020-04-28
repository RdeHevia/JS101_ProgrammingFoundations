
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let obj = Object.fromEntries(arr);
console.log(obj);

let obj2 = {};

arr.forEach(subArray => {
  obj2[subArray[0]] = subArray[1];
})

console.log(obj2);
// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }