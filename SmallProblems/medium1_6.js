/*
INPUT: integer
OUTPUT: integer
EXAMPLE:

F(5):
F(5) = F(4) + F(3) = 3 + 2 = 5
F(4) = F(3) + F(2) = 2 + 1 = 3
F(3) = F(2) + F(1) = 1 + 1 = 2

ALGORITHM:
F(n) = F(n-1) + F(n-2)
If n = 1 or 2 -> return 1
*/

function fibonacci(n) {
  if (n <= 2) {
    return 1;
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