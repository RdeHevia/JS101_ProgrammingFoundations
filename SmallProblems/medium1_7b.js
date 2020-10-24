/*In the previous exercise, we developed a recursive solution for computing the 
nth Fibonacci number. In a language that is not optimized for recursion, some 
(but not all) recursive functions can be extremely slow and may require massive 
quantities of memory and/or stack space. If you tested for bigger nth numbers, 
you might have noticed that getting the 50th fibonacci number already takes a 
significant amount of time.*/
/*
Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without using recursion.
*/

//Note that JavaScript can accurately compute intergers up to 16 digits long; 
//this means that fibbonacci(78) is the largest Fibbonacci number that you can 
//accurately compute with simple operations in JavaScript.

/*
INPUT: integer (nth)
OUTPUT: is the nth Fibo number (integer)
F(n) = F(n - 1) + F(n - 2);
F(1) = 1
F (2) = 1
EXAMPLES:
F(5):
F(1) = 1
F(2) = 1
F(3) = 1 + 1 = 2
F(4) = 2 + 1 = 3
F(5) = 3 + 2 = 5
LOOP btw 3 and 5, both included ( 3 iterations)
Generalized: F(n) greater than 2: Loop btw 3 and n (n - 3 + 1 iterations)

ALGORITHM:
  1. Calculate F(1) and F(2). If n <= 2 0 -> return F(1) or F(2) = 1
  2. (If n > 2). Loop from 3 to n. For an iteration at index idx:
    F(idx) = F(idx - 1) + F(idx - 2)
  3. Return F(idx)
*/

function fibonacci (nthNumber) {
  if (nthNumber <= 2) {
    return 1;
  }

  let fiboNumAtStepMinus2 = 1;
  let fiboNumAtStepMinus1 = 1;
  let fiboNum;

  for (let idx = 3; idx <= nthNumber; idx += 1) {
    fiboNum = fiboNumAtStepMinus1 + fiboNumAtStepMinus2;
    fiboNumAtStepMinus2 = fiboNumAtStepMinus1;
    fiboNumAtStepMinus1 = fiboNum;
  }
  return fiboNum;
}
fibonacci(2);
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050
