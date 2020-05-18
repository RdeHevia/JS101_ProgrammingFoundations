/*
INPUT: number
OUTPUT: negative number as a string
EXPLICIT RULES:
  return a negative number
IMPLICIT  RULES:
  the return value is a string in the case of 0 (e.g. -0)
ALGORITHM:
  FUNCTION negative (number)
    IF number < 0 -> return number
    ELSE IF number > 0 -> return -number
    ELSE return '-' +  number;
*/

function negative (number) {
  if (number > 0) {
    return -number;
  } else if (number < 0) {
    return number;
  } else {
    return '-'.concat(number);
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0