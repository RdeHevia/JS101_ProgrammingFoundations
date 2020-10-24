/*
PROBLEM:
 double number:
  - even length number
  - left side digits = right side digits. e.g. 7676
INPUT: number
OUTPUT:
  - IF number is double number -> return number
  - ELSE - RETURN number multiplied by 2
EXAMPLES:
  444 -> 888
  3333 -> 3333 (0, 1, 2, 3)
ALGORITHM:
  FUNCTION isDouble(number)
    IF length is odd -> return false
    ELSE
      transform the number into a string
      check if left-side substring === right-side substring
  FUNCTION twice (number)
    IF the number is a double number -> return number
    ELSE -> return number * 2
*/

function isDouble(number) {
  let stringNumber = number.toString();
  if (stringNumber.length % 2) {
    return false;
  } else {
    let leftSubstring = stringNumber.slice(0,(stringNumber.length / 2));
    let rightSubstring = stringNumber
      .slice(stringNumber.length / 2,stringNumber.length);
    return leftSubstring === rightSubstring;
  }
}

function twice(number) {
  if (isDouble(number)) {
    console.log(number);
    return number;
  } else {
    console.log(number * 2);
    return number * 2;
  }
}
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676