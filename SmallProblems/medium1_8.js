/*
INPUT: integer
OUTPUT: integer
EXAMPLE:

F(5):
F(5) = F(4) + F(3) = 3 + 2 = 5
F(4) = F(3) + F(2) = 2 + 1 = 3
F(3) = F(2) + F(1) = 1 + 1 = 2

ALGORITHM:
1. If n is included in the table -> return F(n) = 
2. If not, add to the table F(n) = F(n-1) + F(n-2)
If n = 1 or 2 -> return 1
*/

let fibonacciValues = {};
function fibonacci(n) {
  if (n <= 2) {
    fibonacciValues[n] = 1;
  }
  if (fibonacciValues.hasOwnProperty(n)) {
    return fibonacciValues[n];
  } else {
    fibonacciValues[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765