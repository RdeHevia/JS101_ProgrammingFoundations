/*
INPUT: string
OUYTPUT: string with characters case swapped
ALGORITHM:
1. For each character of the string:
  - If it's lower case-> make it upper case
  - Else -> make it lower case
*/

function swapCase(string) {
  return string
    .split('')
    .map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())
    .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"