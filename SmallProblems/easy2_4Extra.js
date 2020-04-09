/*
INPUT: number
OUTPUT: number
RULES: Write a function that
  - returns x^n
  - uses the function multiply (num1, num2)
ALGORITHM:
  - FUNCTION powerToTheN (num, n)
    - let result = 1
    - LOOP (i = 1, i<=n, i+=)
      - result = multiply(result,num)
    - return result
*/

let multiply = (num1, num2) => num1 * num2;

function powerToTheN (number, n) {
  let result = 1;
  for (let i=1; i<=n; i+=1) {
    result = multiply (result, number);
  }

  return result;

}

console.log(powerToTheN(2,4));