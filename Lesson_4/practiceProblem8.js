let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let objectFlintstones = {};

flintstones.forEach((item, index) => {
  objectFlintstones[item] = index;
})

console.log(objectFlintstones);