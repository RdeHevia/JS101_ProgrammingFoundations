// Continue tomorrow (with algorithm)
/*
item available -> sum of quantities > 0
item no available -> sum of quanties is = 0
in -> +1 *
out -> -1 *
ALGORITHM:
1. Extract in an array all transactions for the item we are checking.
  - return: an array of objects
2. Sum all the quanties based on if the movement is in or out
3. Return true or false depending on the sum. 
*/


function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(obj => inventoryItem === obj.id);
}

function isItemAvailable (inventoryItem, transactions) {
  let filteredTransactions = transactionsFor(inventoryItem,transactions);

  let sum = filteredTransactions.reduce((sum, obj) => {
    const MOVEMENT_SIGNS = {in:+1, out:-1};
    let sign = MOVEMENT_SIGNS[obj['movement']];

    return sum + sign * obj['quantity'];
  },0);

  return sum > 0;
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

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true