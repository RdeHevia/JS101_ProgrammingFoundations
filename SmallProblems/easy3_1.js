/*
INPUT: String
OUTPUT: String
RULES: Write a function that:
  - Takes a string as an argument
  - Returns a string with all the consecutive duplicated
    characters collapsed into 1
ALGORITHM:
  FUNCTION crunch (string)
    Convert the string into an array. arrayOfCharacters
    Iterate through all the elements (characters) of arrayOfCharacters. Add the
    elements that meet the following conditions to a new array
    arrayOfFilteredCharacters:
      IF arrayOfCharacters.length === 0 -> false (default)
      IF i === 0 -> true
      IF character(i) === character (i-1) -> false
    return arrayOfFilteredCharacters.join('')
*/

function crunch (string) {
  let charactersFiltered = '';

  for (let index = 0; index < string.length; index += 1) {
    if (index === 0 || string[index] !== string[index - 1]) {
      charactersFiltered += string[index];
    }
  }
  return charactersFiltered;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""