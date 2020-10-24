/*
ALGORITHM: 
  1. Loop over the characters of the string. For each character:
    - Create a t
*/

function staggeredCase(string) {
  let staggeredString = string
    .split('')
    .map((char,idx) => {
      const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

      if (!ALPHABET.includes(char)) {
        return char;
      } else if (idx % 2) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join('');
  return staggeredString;
}
console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);