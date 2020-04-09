/*
INPUT: 2 integers (from user)
OUTPUT: integers
EXPLICIT RULES:
  - Ask the user for 2 positive integers
  - perform all the operations: +, -, *, /, %, **
  - no input validation
IMPLICIT RULES:
  - The result must be an integer too: 3/2=1.5 -> 1
  Add "==>" for each prompt
ALGORITHM:
  - FUNCTION prompt (string)
    - return '==> ' + string
  - GET integer1, integer2 (strings)
  - coerce strings to numbers
*/

let prompt = (str) => console.log('==> ' + str);

let rlSync = require('readline-sync');
prompt('Enter the first number:');
let num1 = parseInt(rlSync.question(),10);
prompt('Enter the second number:');
let num2 = parseInt(rlSync.question(),10);

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${Math.floor((num1 / num2))}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);