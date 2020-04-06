/*

Input:
  Bill: Number
  TipPercentage: Number (percentage)
Output:
  Tip: Number (2 decimals)
  Total: Number (2 decimals)

Rules:
- Input validation isn't required

Algorithm:

GET bill
GET tipPercentage

tip = bill * tipPercentage / 100
total = tip + bill

PRINT tip, total

*/

let rlSync = require('readline-sync');

let bill = parseFloat(rlSync.question('What is the bill?\n'));
let tipPercentage = parseFloat(rlSync.question('What is the tip percentage?\n'));

let tip = (bill * tipPercentage / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);