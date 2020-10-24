/*
INPUT: number, digits to rotate
OUTPUT: number rotated
EXAMPLES:
735291, 1 -> 735291
7352 91, 2 -> slice(0, 4 = length - count) 7352 slice(4) 19
735 291, 3 -> 735 912
735291, 6 -> 232917
ALGORITHM:

1. Separate the digits based on the count value. 
  e.g. count = 3 -> (0,3) 735 (3) 291. Only the right part it's going to be rotated
2. Rotate the digits.
  - Transform the string into an array
  - Drop the first character. Add to the end of the array
  - Join the array, return the resulting string
3. Return the new number
*/
function rotateRightmostDigits(number, count) {
  let numberInStringFormat = String(number);
  let noRotatedDigits = numberInStringFormat
    .slice(0, numberInStringFormat.length - count);
  let digitsToRotate = numberInStringFormat
    .slice(numberInStringFormat.length - count);

  let digitsRotated = rotateString(digitsToRotate);
  return Number (noRotatedDigits + digitsRotated);
}

function rotateString(string) {
  let arrayOfCharacters = string.split('');
  let lastElement = arrayOfCharacters.shift();
  arrayOfCharacters.push(lastElement);
  return arrayOfCharacters.join('');
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917