/*
INPUT: array
OUTPUT: object
RULES:
  object with
    keys: array elements
    values: array indexes
DATA STRUCTURES:
  use forEach for loops
ALGORITHM:
  let obj = {}
  LOOP over array elements
    obj[array[index]] = index
*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let objFlintstones = {};
flintstones.forEach((name, index) => {
  objFlintstones [name] = index;
});

console.log(objFlintstones);