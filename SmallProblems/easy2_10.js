/*
INPUT: String
OUTPUT: Number
RULES: Write a function that:
  - Takes a string as argument and return a signed number
  - If no sign is given it should return a positive number
  - Assume the string will always contain a valid number
  - you can't use parseInt, etc.
  - you can use the function from exercise easy2_9.js
ALGORITHM:
 - FUNCTION stringToInteger (string). DONE
 - FUNCTION stringToSignedInteger (string)
    - let positiveOrNegative = 1
    - separate the sign from the rest of the string
    - IF sign === "-" positiveOrNegative = -1
    return positiveOrNegative * stringToInteger (string)
*/

function stringToInteger (string) {
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

function stringToSignedInteger (string) {
  let positiveOrNegative = {"+": 1, "-": -1};
  let unsignedString;

  if (string[0] === "+" || string[0] === "-") {
    unsignedString = string.slice(1);
    return positiveOrNegative[string[0]] * stringToInteger (unsignedString);
  } else {
    return stringToInteger (string);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true