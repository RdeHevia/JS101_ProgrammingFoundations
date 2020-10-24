/*
INPUT: array of strings
OUTPUT: array of strings (NEW)
  - all vowels removed
ALGORITHM:
1. Loop over the elements of the array. For each element of the array:
  - Loop over the characters of the string element. If a character is a consonant-> add it to the new string. Else -> don't
2. Return the new array
*/

function removeVowels(arrayOfStrings) {
  return arrayOfStrings.map(string => {
    let filteredString = string.split('').filter(character => !'aeiou'.includes(character.toLowerCase())).join('');
    return filteredString;
  })
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]