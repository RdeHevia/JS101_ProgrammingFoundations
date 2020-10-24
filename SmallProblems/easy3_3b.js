/*
INPUT: positive integer (>0)
OUTPUT: string of 1's and 0's
  - numbers are alternated
  - it ALWAYS starts with 1
RULES:
  - length of the string === integer (INPUT)
  - idx = 0, 2, 4, -> '1'
  - idx = 1, 3, 5 -> '0'
ALGORITHM:
  SET binaryString = ''
  - LOOP idx = 0 -> integer - 1
      IF idx is oodd number -> add a 0 to the array
      ELSE -> add a 1 to the array
*/

function stringy (positiveInteger) {
  let binaryString = '';
  for (let idx = 0; idx < positiveInteger; idx += 1) {
    if (idx%2) {
      binaryString += '0';
    } else {
      binaryString += '1';
    }
  }
  console.log(binaryString);
  return binaryString;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
