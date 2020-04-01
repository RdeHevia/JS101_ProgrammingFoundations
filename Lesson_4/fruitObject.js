let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let selectFruit = (foodList) => {
  let fruit = {};
  for (foodItem in foodList) {
    if (foodList[foodItem] === 'Fruit') fruit[foodItem] = foodList[foodItem];
  }
  return fruit;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }