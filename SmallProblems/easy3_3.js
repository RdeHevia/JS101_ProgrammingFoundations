/*
INPUT: positive integer
OUTPUT: string
RULES: Write a function that:
  Returns a string of 10101010
  First number must be always 1
  Length of the string = positive integer
ALGORITHM:
  FUNCTION stringy (integer)
    binaryString = ""
    LOOP i = 0 to i < integer
      IF i % 2 !== 0 -> binaryString += "1"
      IF i % 2 === 0 -> binaryString += "0"
    return binaryString
*/

function stringy(integer) {
  let binaryString = "";

  for (let index = 0; index < integer; index += 1) {
    if (index % 2 === 0) {
      binaryString += "1";
    } else {
      binaryString += "0";
    }
  }
  return binaryString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"