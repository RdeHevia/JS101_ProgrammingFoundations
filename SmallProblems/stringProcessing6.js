/*
INPUT: string
OUTPUT: string with staggered capitalization
RULES:
  * 1st character -> capital letter
  * Symbols and numbers -> don't need to be capitalized but they count for the
    staggering
ALGORITHM:
  FUNCTION staggeredCase(string)
    loop over characters of the string ->use split().map().join()
      IF index is even -> capitalize
      ELSE -> lowerCase
    RETURN staggeredString
*/

function staggeredCase (string) {
  let staggeredString = string
    .split('')
    .map((char, idx) => {
      return idx % 2 ? char.toLowerCase() : char.toUpperCase();
    })
    .join('');
  return staggeredString;
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"