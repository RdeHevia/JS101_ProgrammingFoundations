/*
Input:
  Integer: Number
  operationChoice: string
Output:
  result: number
Rules:
  - Integer needs to be >0
  - validation required? assume no
Example:
  - 5, sum: result = 5+4+3+2+1
  - 5, product: result = 5!

Algorithm - Main:
  GET integer
  GET operationChoice: sum or product

  IF operationChoice === s -> result = summation(integer)
  IF operationChoice === p -> result = factorial(integer)

  PRINT result

Algorithm - summation(integer)
*/

let rlSync = require('readline-sync');

let summation = (integer) => {
  let sum = 0;
  for (let num = integer; num >= 1; num -= 1) {
    sum += num;
  }
  return sum;
};

let factorial = (integer) => {
  let product = 1;
  for (let num = integer; num >= 1; num -= 1) {
    product *= num;
  }
  return product;
};


let integer = parseInt(rlSync.question(
  'Please enter an integer greater than 0:\n'),10);

let operationChoice = rlSync.question(
  'Enter "s" to compute the sum, or "p" to compute the product.');


if (operationChoice === 's') {
  let sumResult = summation(integer);
  console.log(
    `The sum of the integers between 1
     and ${integer} is ${sumResult}`);

} else if (operationChoice === 'p') {
  let productResult = factorial(integer);
  console.log(
    `The product of the integers between 1
     and ${integer} is ${productResult}`);

} else {
  console.log('Unknown operation');
}
