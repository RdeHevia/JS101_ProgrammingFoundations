/*
INPUT: string
OUTPUT: string
RULES:
  * doubles every character
ALGORITH:
  FUNCTION repeater (string)
    * SET doubleChars = ''
    * LOOP through the characters of the string
    * for each character of the string -> push the character twice into doubleChars
*/

function repeater(string) {
  return string.split('').map(char => char + char).join('');
}

repeater('Hello');        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
repeater('');             // ""