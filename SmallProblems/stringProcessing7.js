/*
INPUT: string
OUTPUT: string staggered
RULES:
  * Same as exercise 6 but non-alphabetic characters should be ignored when
  determining whether it should uppercase or lowercase each letter.

ALGORITHM:
*/

// eslint-disable-next-line max-lines-per-function
function staggeredCase (string) {
  let alphabeticCharIndex = 0;
  let staggeredString = string
    .split('')
    .map((char, idx) => {
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      if (alphabet.includes(char.toLowerCase())) {
        let alphabeticChar;
        if (alphabeticCharIndex % 2) {
          alphabeticChar = char.toLowerCase();
        } else {
          alphabeticChar = char.toUpperCase();
        }
        alphabeticCharIndex += 1;
        return alphabeticChar;
      } else {
        return char;
      }
    })
    .join('');
  return staggeredString;
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"