let picaPiedra = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

let picaPiedra1 = picaPiedra.flat();

let picaPiedra2 = [].concat(...picaPiedra);

console.log(picaPiedra);
console.log(picaPiedra1);
console.log(picaPiedra2);