/*
INPUT: Integer in String format
OUTPUT: Integer
RULES: Write a function that...
  - Takes an integer in string format
  - Converts it into a number
  - CAN'T use parseInt, Number, etc
ALGORITHM:
  - FUNCTION stringToInteger (string)
  - let strNumEquivalence = {"1" : 1; "2" : 2.... "9" : 9}
  - let integer = 0
  - LOOP over string characters in reverse order (i=string.length-1 to 0)
    - let decimal = string.length - i
    - using strNumEquivalence, go from string to number
    - integer = integer + number * decimal
  - return integer

EXAMPLE:
  string = "1234"
  i = 3: numberOfDecimals = 4-3 = 1
  i = 0: numberOfDecimals = 4-0 = 4
*/

function stringToInteger (string) {
  let digits = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9
  };
  let integer = 0;

  for (let index = string.length - 1; index >= 0; index -= 1) {
    let decimal = (string.length - 1) - index;
    integer += digits[string[index]] * (10 ** decimal);
  }
  return integer;
}

function stringToInteger2 (string) {
  let digits = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9
  };

  let integer = 0;

  string.split('').forEach((character, index) => {
    let decimal = (string.length - 1) - index;
    integer += digits[character] * (10 ** decimal);
  });

  return integer;
}
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("570")); // logs true

console.log(stringToInteger2("4321") === 4321); // logs true
console.log(stringToInteger2("570") === 570); // logs true
console.log(stringToInteger("570")); // logs true
