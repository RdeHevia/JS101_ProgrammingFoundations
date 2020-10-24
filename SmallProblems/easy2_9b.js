/*
INPUT: string of digits (integer)
OUTPUT: equivalent integer number
RULES:
  can't use parseInt() or Number(), etc
  assume all characters are numeric
EXAMPLE:
  '3632' -> 3632
ALGORITHM:
  FUNCTION stringToInteger (stringInteger)
    stringToNumberDictionary = {0:0,...9:9}
    number = 0
    LOOP backwards over stringInteger's characters (decimalPosition)
      number = number + decimalPosition * stringToNumberDictionary[character]
    RETURN number
*/

function stringToInteger(stringInteger) {
  const STRING_NUMBER_DICTIONARY = {
    0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9
  };

  let number = 0;

  // eslint-disable-next-line max-len
  for (let decimalPosition = stringInteger.length; decimalPosition >= 1; decimalPosition--) {
    console.log(decimalPosition);
    number += decimalPosition * STRING_NUMBER_DICTIONARY[stringInteger[decimalPosition]];
  }

  return number;
}
console.log(stringToInteger("4321"))
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true