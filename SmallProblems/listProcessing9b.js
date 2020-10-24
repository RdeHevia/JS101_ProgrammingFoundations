/*
INPUT: inventoryItem (number), transactions array of objects
OUTPUT: array of objects
  - that contains the inventoryItem specified in the INPUT
ALGORITHM:
  1. Loop over the array elements. For each element of the array:
    - Check if the id is equal to the inventoryItem.
      - If true -> add to a new array
      - Else -> do nothing
  2. Return the new array.
*/

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(obj => inventoryItem === obj.id);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]