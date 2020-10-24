/*
INPUT: string
OUTPUT: object. contains the counts of
  - lower cased chars
  - upper cased chars
  - the rest
EXAMPLES
  'abC 1' -> 2 1 2
  '' -> 0 0 0
ALGORITHM:
1. Create an object with the keys lowercase, uppercase and neither
2. Loop over all the characters of the string. For each character of the string:
  - Check if it's uppercase, lowercase or neither. Add +1 to the apprpiate key of the object
2. Filter the different characters out of the string and assign to different arrays.
3. Count the length of the arrays. Assign those lengths to the object.
*/

// function letterCaseCount(string) {
//   let charCounter = {lowercase: 0 , uppercase: 0, neither: 0};
  
//   string.split('').forEach(char => {
//     const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
//     if (!ALPHABET.includes(char.toLowerCase())) {
//       charCounter.neither += 1;
//     } else if (char === char.toLowerCase()) {
//       charCounter.lowercase += 1;
//     } else {
//       charCounter.uppercase += 1;
//     }
//   });
  
//   return charCounter;
// }

function letterCaseCount(string) {

  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }