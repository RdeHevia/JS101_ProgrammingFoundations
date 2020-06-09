/*
INPUT: array of strings
OUTPUT: array of strings with all the vowels removed
RULES:
  Assume the return array is a new array (don't mutate the original array)
ALGORITHM:
  FUNCTION removeVowels (arrayOfStrings)
    newArray: LOOP over array elements -> string // use .map()
      LOOP over  string characters // use .split and .filter
        IF character a character is != of a vowel -> concatenate
        ELSE -> continue the loop
    return newArray;
*/

function removeVowels (arrayOfStrings) {
  let arraOfStringsWithoutVowels = arrayOfStrings.map(string => {
    return string
      .split('')
      .filter(character => !('aeiou'.includes(character.toLowerCase())))
      .join('');
  });
  return arraOfStringsWithoutVowels;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));