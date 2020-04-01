let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let selectFruit = (foodList) => {
  let fruits = {};
  let foodListKeys = Object.keys(foodList);
  
  for (let i = 0; i < foodListKeys.length; i+=1) {
    if (foodList[foodListKeys[i]] === 'Fruit') fruits[foodListKeys[i]] = foodList[foodListKeys[i]];
  }

  return fruits;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }