/*
INPUT: string
OUTPUT: object
  - number of lowercase letters
  - number of uppercase letters
  - number of characters that are neither
ALGORITHM:
  1. Count the number of lowercase, uppercase and other characters.
  2. Assign the numbers of each one to an object
*/

function letterCaseCount(string) {
  let numberOfLowerCaseLetters = (string.match(/[a-z]/g) || []).length;
  let numberOfUpperCaseLetters = (string.match(/A-Z/g) || []).length;
  let numberOfNonLetters = (string.match(/[^a-z]/gi) || []).length;

  let count = {
    lowercase: numberOfLowerCaseLetters,
    uppercase: numberOfUpperCaseLetters,
    neither: numberOfNonLetters
  };

  return count;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }