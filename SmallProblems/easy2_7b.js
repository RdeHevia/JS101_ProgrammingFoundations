/*
INPUT: any value
OUTPUT: boolean
RULES:
  - (truthy, falsy) -> true
  - (falsy, truthy) -> true
  - (truthy, truthy) -> false
  - (false, false) -> false
ALGORITHM:
  FUNCTION xor (operand1, operand2)
    IF operand1 is truthy and operand2 falsy -> true
    IF operand2 is falsy and operand1 is truthy -> true
    ELSE false
}
*/

function xor(operand1, operand2) {
  if ((operand1 && !operand2) || (!operand1 && operand2)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);