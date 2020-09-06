/*

INPUT: string
OUTPUT: string
RULES:
  * doubles every consonant
  * NOT doubles vowels, digits, punctuations, whitespaces
ALGORITHM:
  * FUNCTION repeater(string) {}
  * FUNCTION doubleConsonants(string) {}
    * SET consonants = ['bcdfg....']
    * LOOP over each string character
      * IF the character is included in consonants
          add that character to a new array x2
*/

function doubleConsonants(string) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz'
  return string.split('').map(char => {
    if (CONSONANTS.includes(char)) {
      return char + char;
    } else {
      return char;
    }
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""