/*
INPUT: positive integer
OUTPUT: positive integer
RULES:
  if number === double number -> return the same number
  if number !== double number -> number *2
ALGORITHM:
  FUNCTION twice (integer)
    IF integer.length % 2 === 0
      transform the integer into a string: integerString
      IF left side of the string is equal to the right side ->return same number
      ELSE -> return integer*2
    ELSE -> return integer*2
*/

function twice (integer) {
  let integerString = integer.toString();

  if (integerString.length % 2 === 0) {
    let leftHalf = integerString.slice(0,integerString.length / 2);
    let rightHalf = integerString.slice(integerString.length / 2);
    //console.log(`${leftHalf} and ${rightHalf}`);

    if (leftHalf === rightHalf) {
      return integer;
    } else {
      return 2 * integer;
    }
  } else {
    return 2 * integer;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676