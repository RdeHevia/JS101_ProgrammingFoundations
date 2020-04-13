/*
INPUT: integer
OUTPUT: string (signed integer)
RULES:
  4321 -> "+4321"
  -123 -> "-123"
  0 -> "0"
ALGORITHM:
  signedIntegerToString (integer) {
    IF sign of integer === + : sign='+'
    IF sign of integer === - : sign='-'
    IF 0 : sing=''
  return sign + integerToString(integer)
  }
*/

function countNumberOfDigits (integer) {
  let nbrOfDigits = 0;
  while (integer % (10 ** nbrOfDigits) !== integer) {
    nbrOfDigits += 1;
  }
  return nbrOfDigits;
}

function modulusBase10 (integer, exponential) {
  return integer % (10 ** exponential);
}

function integerToString (integer) {
  const DIGITS_STRING = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let integerString = "";
  let nbrOfDigits = countNumberOfDigits (integer);
  let digitExtracted = modulusBase10(integer,1);
  integerString += DIGITS_STRING[digitExtracted];
  //console.log(integerString)
  for (let n = 2; n <= nbrOfDigits; n += 1) {
    digitExtracted =
      (modulusBase10(integer,n) - modulusBase10(integer,n - 1)) /
      (10 ** (n - 1));
    integerString += DIGITS_STRING[digitExtracted];
  }
  return integerString.split('').reverse().join('');
}

function signedIntegerToString (integer) {
  let sign;
  let integerWithoutSign;
  switch (Math.sign(integer)) {
    case 1:
      sign = '+';
      integerWithoutSign = integer;
      break;
    case -1:
      sign = '-';
      integerWithoutSign = -integer;
      break;
    default:
      sign = '';
      integerWithoutSign = integer;
  }
  return sign + integerToString(integerWithoutSign);
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123) );
console.log(signedIntegerToString(0));