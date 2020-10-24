/*
INPUT: string with some duplicated characters
OUTPUT: string with no duplicated characters
RULES:
  - character consecutively repeated n-times -> 1 single character
  - this applies to any type of character (spaces, :,...)
EXAMPLES:
  - 4444abcdda -> 4abcda
ALGORITHM:
  - SET collpasedString = ''
  - LOOP over the characters of the string. For a particular character: 
      - IF the character is duplicated -> don't add into the new string
        char[idx] === char[idx-1]
      - ELSE (not duplicated) -> add into the new string
*/

function crunch(string) {
  if (!string.length) {
    return string;
  }

  let collapsedString = string[0];

  for (let idx = 1; idx < string.length; idx += 1) {
    if (string[idx] !== string[idx - 1]) {
      collapsedString += string[idx];
    }
  }
  return collapsedString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""