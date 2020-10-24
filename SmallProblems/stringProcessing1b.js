/*
INPUT: string
OUTPUT: Boolean
  - all alphabetic characters uppercase -> true
  - else -> false
RULES:
  - non alphabetic characters should be ignored
ALGORITHM:
1. Create a new string with all upper case characters
2. old string === new string
*/

function isUppercase(string) {
  return string === string.toUpperCase();
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true