/*
INPUT: array of objects
OUTPUT:  boolean
RULES:
  'in': +
  'out': -
  if sumOfQuantities > 0 -> true
  if sumOfQuantities <= 0 -> false
ALGORITHM:
  function isTemAvailable (inventoryItem, transactions)
    SET filteredTransactions = transactionsFor(inventoryItem, transactions)
    sum = 0
    LOOP over filteredTransactions elements -> transactionItem //use .reduce
      if transactionItem.movement === 'in'
        sum = sum + transaction.quantity
      else
        sum = sum - transaction.quantity
    if sum > 0 -> return true
    else -> return false
*/

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(inventory => inventory.id === inventoryItem);
}

function isItemAvailable(inventoryItem, transactions) {
  let filteredTransactions = transactionsFor(inventoryItem, transactions);
  let stock = filteredTransactions.reduce((totalQuantity, inventory) =>{
    if (inventory.movement === 'in') {
      return totalQuantity + inventory.quantity;
    } else {
      return totalQuantity - inventory.quantity;
    }
  },0);
  return (stock > 0 ? true : false);
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