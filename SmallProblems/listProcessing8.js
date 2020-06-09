/*
INPUT: nested array 2xN [fruit, quantity]
OUTPUT: array Mx1
RULES:
  return a new array with the fruit repeated as indicated by quantity
ALGORITHM:
  FUNCTION buyFruit(groceryList)
    SET allFruits = []
    LOOP over groceryList elements -> fruit // forEach
      LOOP idx = 1 to idx <= quantity // for
        allFruits.push: fruit
    RETURN allFruits
*/

function buyFruit (groceryList) {
  let allFruits = [];
  groceryList.forEach(fruitAndFrequency => {
    let [fruit,frequency] = fruitAndFrequency;
    for (let idx = 1; idx <= frequency; idx += 1) {
      allFruits.push(fruit);
    }
  });
  return allFruits;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]