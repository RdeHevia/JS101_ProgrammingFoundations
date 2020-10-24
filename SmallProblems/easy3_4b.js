/*
- f(n) = f(n-1) + f(n - 2)
PROBLEM: Write a function that

INPUT: number of digits (integer)
OUTPUT: index of FIRST Fibo number
RULES:
  - 1st fibonanncy number: f(1) = 1
  - assume argument >= 2
EXAMPLES:
  2 digits: 
    1
    1 + 0 = 1
    2 + 1 = 2
    2 + 1 = 3
    3 + 2 = 5
    5 + 3 = 8
   7) 8 + 5 = 13
ALGORITHM:
 FUNCTION findFibonacciIndexByLength (digits)
  Declare a variable fibo1 = 1 and fibo2 = 2
  Declare a variable index = 3
  Declare a variable fibo
  LOOP until the number of digits of fibo number is equal to digits
    fibo = fibo1 + fibo2
    fibo2 = fibo3
    fibo1 = fibo2
    index += 1
  RETURN index

  FUNCTION numberOfDigits (number)
    - 23 % 1 -> 23 truthy 
    - 23 % 10 -> 3 truthy 1 decimal
    - 23 % 100 -> 0 falsy 2 decimals
    declare numberOfDecimals
    LOOP until number % numberOfDecimals*10 === 0 -> break the loop
    RETURN numberOfDigits
*/

function numberOfDigits(number) {
  let numberOfDigits = 0;
  while ((number % (10 ** numberOfDigits)) !== number) {
    numberOfDigits += 1;
  }
  return numberOfDigits;
}

function findFibonacciIndexByLength (nbrOfDigits) {
  let fiboNumber1 = 1;
  let fiboNumber2 = 1;
  let fiboNumber3;
  let index = 2;

  do  {
    fiboNumber3 = fiboNumber2 + fiboNumber1;
    //console.log(fiboNumber3);
    fiboNumber1 = fiboNumber2;
    fiboNumber2 = fiboNumber3;
    index += 1;
  } while (numberOfDigits(fiboNumber3) < nbrOfDigits);

  return index;
}
console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74

// Don't try any higher values until you read the solution Discussion
