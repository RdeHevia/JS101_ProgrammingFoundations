/*
INPUT: positive integer
OUTPUT: sum of all numbers btw 1 and  the provided number that are multiples
of 3 and 5
RULES:
  assume number passes is an integer greater than 1.
EXAMPLES:
  1 -> 0
  2 -> 0
  3 -> 3
  10 -> 3 + 5 + 6 + 9 + 10 = 33
ALGORITHM:
  FUNCTION multisum (upperLimit)
  SET sum = 0;
  LOOP backwards from upperLimit to one
    if the element is multiple of 3 -> sum it
    if the element is multipel of 5 -> sum it
  return the sum value
*/

function isMultiple (number, divisor) {
  return number % divisor === 0;
}
function multisum (upperLimit) {
  let sum = 0;
  for (let number = upperLimit; number >= 1; number -= 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }
  console.log(sum);
  return sum;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168