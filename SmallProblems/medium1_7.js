/*
INPUT: integer
OUTPUT: integer
EXAMPLE:

F(5):
F(5) = F(4) + F(3) = 3 + 2 = 5
F(4) = F(3) + F(2) = 2 + 1 = 3
F(3) = F(2) + F(1) = 1 + 1 = 2

ALGORITHM:
1. LOOP from 1 to n. For an element i:
F(i) = F(i - 1) + F(i - 2)
*/

function fibonacci(nth) {

  let fiboNumber1 = 1;
  let fiboNumber2 = 1;
  let fiboNumber3;

  if (nth === 1) {
    return fiboNumber1;
  } else if (nth === 2) {
    return fiboNumber2;
  } else {
    for (let idx = 3; idx <= nth; idx += 1) {
      fiboNumber3 = fiboNumber2 + fiboNumber1;
      fiboNumber1 = fiboNumber2;
      fiboNumber2 = fiboNumber3;
    }
    return fiboNumber3;
  }
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050