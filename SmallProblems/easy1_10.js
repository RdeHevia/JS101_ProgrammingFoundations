/*
QUESTIONS:
INPUT: string (number)
OUTPUT: number
RULES:
  - EXPLICIT: Write a function that...
    - compute the sum of all the numbers from 1 to n that are multiples
      of 3 and 5.
    - e.g. 20: 3+5+6+9+10+12+15+18+20
  - IMPLICIT/ASSUMPTIONS: N/A

ALGORITH:

  - FUNCTION multisum (upperLimit)
    - sumMultiplesOf3And5 = 0
    - LOOP num =1 to upperLimit
      if num % 3 === 0 || num % 5 === 0 -> sumMultiplesOf3And5 += num;
    - return sumMultiplesOf3And5

*/

function multisum (upperLimit) {
  let sumMultiples = 0;
  
  for (let num = 1; num <= upperLimit; num += 1) {
    if (num % 3 === 0 || num % 5 === 0) sumMultiples += num;
  }
  return sumMultiples;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

