/*
INPUT: positive integer
OUTPUT: integer
RULES: function that
  returns the index of the first Fibonacci number with the number of digits
  specifified in the argument
  fibo (n) = fibo (n-1) + fibo (n-2)
  fibo (0) = 0
  fibo (1) = 1

  number of digits 3: e.g. 257
  257 / 100 -> 2.57
  2.57 floor -> 2
  2 !== 0 -> the number has 3 digits or more

  number of digits 4: e.g. 257
  257 / 1000 -> 0.257
  0.257 floor -> 0
  0 === 0 -> the number has less than 4 digits
ALGORITHM:
  FUNCTION fibo (integer)
  FUNCTION findFibonacciIndexByLength (nbrOfDigits)
    IF nbrOfDigits = 1 -> 1
    ELSE
      WHILE the number of digits in fibonnacy is less tha nbrOfDigits
        fibonnacy(n)
        n+=1
*/


function findFibonacciIndexByLength (nbrOfDigits) {
  let index = 1;
  if (nbrOfDigits === 1) {
    return index;
  } else {
    let fibo2StepsBefore = 0;
    let fibo1StepBefore = 1;
    let fiboCurrentStep;

    do {
      fiboCurrentStep = fibo1StepBefore + fibo2StepsBefore;
      index += 1;
      fibo2StepsBefore = fibo1StepBefore;
      fibo1StepBefore = fiboCurrentStep;

      //console.log(Math.floor(fiboCurrentStep / (10 ** (nbrOfDigits-1)))===0)
    } while (Math.floor(fiboCurrentStep / (10 ** (nbrOfDigits-1))) === 0);
    return index;
  }
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16)); 
//findFibonacciIndexByLength(10)     // 74