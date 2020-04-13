/*
INPUT: Number
OUTPUT: String
RULES: Write a function that:
  - converts a positive integer into a string
  - you can't use javascript methods like toString, etc.
  - assume the input is going to be always correct
ALGORITHM:
  - FUNCTION integerToString (integer)
    - SET arrayDigits = ["0", "1",....]
    - Split the integer variable into its decimals. And assign it to an array
      "digitsInInteger". E.g. integer = 753
      - let n = 1
      - SET digitsInInteger = [integer % 10 ** n] -> [3]
      - LOOP while integer % 10 ** n !== integer (start with n=2)
        - let digitExtracted =
          (integer % 10 ** n) - digitsInInteger[n-2] /
          (10 ** (n-1))
        - push digitExtracted into digitsInInteger
    - SET integerString = ""
    - LOOP over arrayDecimals elements
      - integerString = integerString + arrayDigits[arrayDecimals[i]]
    - return integerString
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

console.log(integerToString(753) === '753');
console.log(integerToString(4321) === "4321");
console.log(integerToString(0) === "0");
console.log(integerToString(5007) === "5007");
console.log(integerToString(1234567890) === "1234567890");