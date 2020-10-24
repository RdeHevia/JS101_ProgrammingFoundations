/*
INPUT: string
OUTPUT: string
  - staggered lower and uppercased characters
  - AbCdE...
RULES:
  - Non alphabetic characters should not be changed
  - Non alphabetic characters do NOT count for determineing to switch 
ALGORITHM:
  1. Loop over the characters of the string. For each character
    - If the character idx is even -> to upper case
    - Odd -> to lower case
  2. Return the new string
*/

function staggeredCase(string) {
  let staggeredString = string
    .split('')
    .map((char,idx) => {
      if (idx % 2) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join('');
  return staggeredString;
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"