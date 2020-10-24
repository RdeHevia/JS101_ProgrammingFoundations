/*
INPUT: integer, integer
OUTPUT: integer
EXAMPLE:
  735291, 1 -> 73529 (1)1 -> 735291 // 0 to 6 -> length - count
  735291, 3 -> 735 291 -> 735 (2)912 -> 735912 // 0 to 3 -> length - count
  735291, 6 -> 735291 -> (7)352917 -> 352917
ALGORITHM:
  1. Transform the number in string format. Split the digits based on count in:
    - digits to remain as are
    - digits to rotate
  2. Rotate the digits
  3. Join the 2 strings together. Transform string to number and return it
rotateCharacters
  1. Drop the first element of the string and move it to the end
  2. Return the new string
*/

function rotateCharacters(string) {
  return string.slice(1) + string[0];
}

function rotateRightmostDigits(number,count) {
  let digits = String(number);
  let digitsToRemain = digits.slice(0,digits.length - count);
  let digitsToRotate = digits.slice(digits.length - count);

  let rotatedDigits = rotateCharacters(digitsToRotate);
  return Number(digitsToRemain + rotatedDigits);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917