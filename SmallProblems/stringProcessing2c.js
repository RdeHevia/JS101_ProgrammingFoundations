/*
INPUT: array of stringsd
OUTPUT: array of strings with all vowels removed
ALGORITHM:
  1. For each string of the array:
    - Remove the vowels
*/

function removeVowels(arrayOfStrings) {
  return arrayOfStrings.map(string => (string.match(/[^aeiou]/gi) || []).join(''));
}

function removeVowels2(arrayOfStrings) {
  return arrayOfStrings.map(string => string.replace(/[aeiou]/gi,""));
}
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

console.log(removeVowels2(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels2(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels2(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]