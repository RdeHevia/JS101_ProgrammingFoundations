/*
INPUT: number (integer), nbrOfDigitsToRotate (integer)
OUTPUT: integer
RULES: Function that:
  * rotates the specified number of digits to the right
  * leave the rest of the digits unchanged
EXAMPLE:
  (735291, 4) -> 73 - 5291 -> 73 - 2915
ALGORITHM:
  FUNCTION rotateRightmostDigits (number, nbrOfDigitsToRotate)
    separate the number in 2 parts: unchangedDigits, digitsToRotate
    Make digitsToRotate an array
    arrayOfDigitsRotated = rotateArray (array_digitsToRotate)
    arrayOfRotatedDigits -> rotatedDigits
    RETURN Number(unchangedDigits + rotatedDigits)
*/

function rotateArray (array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return array;
  } else {
    let rotatedArray = array.slice();
    let lastElement = rotatedArray.shift();
    rotatedArray.push(lastElement);
    return rotatedArray;
  }
}

function rotateRightmostDigits (number, nbrOfDigitsToRotate) {
  let digits = number.toString().split('');
  let digitsUnchanged = digits.slice(0,digits.length - nbrOfDigitsToRotate);
  let digitsToRotate = digits.slice(digits.length - nbrOfDigitsToRotate);

  let rotatedDigits = rotateArray(digitsToRotate);
  console.log(Number(digitsUnchanged.join('') + rotatedDigits.join('')));
  return Number(digitsUnchanged.join('') + rotatedDigits.join(''));
}
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917