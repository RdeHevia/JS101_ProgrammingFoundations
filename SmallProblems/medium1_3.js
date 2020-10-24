/*
INPUT: number
OUTPUT: maximum rotation of a number
EXAMPLE:
735291
1) 735291 -> 35291 7 (rotate 6 digits) slice()
2) 3 52917 -> 3 2917 5 (rotate 5 digits) slice(0,1) slice(1)
3) 32 9175 -> 32 175 9 (rotate 4 digits) slice(0,2) slice(2)
4) 321 759 -> 321 59 7 slice(0,3) slice(3)
5) 3215 97 -> 3215 7 9 slice(0,4) slice 4
DONE (length=6 -> 5 rotations)

ALGORITHM:
  1. Determine the number of digits. N
  2. First iteration: Rotate the whole number
  3. Second iteration: Separate the last digit from the rest of the returned
    number. Rotate the rest.
  4. Repeat a total of N-1 times. Return the number
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

function maxRotation(number) {
  let nbrOfDigits = String(number).length;
  let nbrOfIterations = nbrOfDigits - 1;
  let rotatedNumber = number;

  for (let idx = 0; idx < nbrOfIterations; idx += 1) {
    let nbrOfDigitsToRotate = nbrOfDigits - idx;
    rotatedNumber = rotateRightmostDigits(rotatedNumber, nbrOfDigitsToRotate);
  }
  console.log(rotatedNumber);
  return rotatedNumber;
}
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845