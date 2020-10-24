/*Our recursive fibonacci function from an earlier exercise isn't very 
efficient. It starts slowing down with an nth argument value as low as 35. 
One way to improve the performance of our recursive fibonacci function 
(and other recursive functions) is to use memoization.

Memoization is an approach that involves saving a computed answer for future 
reuse, instead of computing it from scratch every time it is needed. In the 
case of our recursive fibonacci function, using memoization saves calls to 
fibonacci(nth - 2) because the necessary values have already been computed by 
the recursive calls to fibonacci(nth - 1).

For this exercise, your objective is to refactor the recursive fibonacci 
function to use memoization.
*/

/*
INPUT: nth
OUTPUT: Fibonacci nth number
RULES:
  - use recursion
  - use memoization
F(1)=F(2) = 1
F(n) = F(n - 1) + F(n - 2)
EXAMPLE:
5:
F(5) = F(4) + F(3)
F(4) = F(3) + F(2)
F(3) = F(2) + F(1)
F(2) =  1
F(1) = 1
ALGORITHM:
  1. Calculate F(n) = F(n-1) + F(n-2). 
    - If F(n-1) and/or F(n-2) is unknown, call
    the function again recursively.
    - If the argument is 1 or 2: save 1 in a fiboNacci indexer
    - For each fibonnaci number calculated, save it in an indexer
*/
let fibonacciNumbers = {};

function fibonacci(nthNumber) {
  if (fibonacciNumbers.hasOwnProperty(String(nthNumber))) {
    return fibonacciNumbers[String(nthNumber)];
  } else if  (nthNumber <= 2) {
    fibonacciNumbers[nthNumber] = 1;
  } else {
    fibonacciNumbers[nthNumber] = fibonacci(nthNumber - 1) + fibonacci(nthNumber - 2);
  }
  return fibonacciNumbers[nthNumber];
}
console.log((fibonacci(5)));
console.log(fibonacci(2));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050