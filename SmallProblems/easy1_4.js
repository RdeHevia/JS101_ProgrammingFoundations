let rlSync = require('readline-sync');

let length = rlSync.question('Enter the length of the room in meters:\n');
let width = rlSync.question('Enter the width of the room in meters:\n');

let area = length * width;

console.log(
  `The area of the room is ${area} 
  square meters (${(area * 10.7639).toFixed(2)} feet)`);