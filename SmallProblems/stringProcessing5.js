/*
INPUT: string
OUTPUT: string
RULES:
  lower case -> upper case
  upper case -> lower case
  other -> unchanged
ALGORITHM:
  swapCase (string)
    LOOP over all string characters // use .split().map()
      IF character is upperCase -> lowerCase
      IF character is lowerCase -> upperCase
*/

function swapCase (string) {
  return string
    .split('')
    .map(character => {
      if (character.toUpperCase() === character) {
        return character.toLowerCase();
      } else {
        return character.toUpperCase();
      }
    })
    .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"


