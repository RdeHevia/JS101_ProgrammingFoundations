/*
INPUT: array
  - of strings (lowercase letters)
OUTPUT: array of
  - duplicated letters in all elements of the original array
RULES:
  - no duplicates -> []
EXAMPLE: 
bella, label, roller -> [e, l, l]
b: 1, 1, 0
e: 1, 1, 1 -> e
l: 2, 2, 2 -> l, l
l: skip
a: 1, 1, 0 -> ''
ALGORITHM:
1. Remove the repeated characters of the first string and assign the new string
  to a new variable (charactersToCompare)
2. For each character of the array:
  -Determine the frequency each character of charactersToCompare appears in 
  each word of the array. Save the frequency in a new array.
  - Calculate the minimum frequency
  - Add the character to an empty array as many times as frequency
3. Return the array with the characters.
removeRepeatedChars:
1. Initialize norepeatedCharacters with an empty string
2. For each char of string:
  - If norepeatedCharacters does NOT include the char-> add it to repeatedCharacters
  - Else -> continue
3. return norpeatrewdCharrrs
findFrequencyOfAppearance(words,character)
  For each word of the array:
    Filter the number of letters that appear. Return its length
*/

function removeRepeatedChars(string) {
  let nonRepeatedCharacters = '';
  string.split('').forEach(char => {
    if (!nonRepeatedCharacters.includes(char)) {
      nonRepeatedCharacters += char;
    }
  });
  return nonRepeatedCharacters;
}

function findFrequencyOfAppearance(words,character) {
  let regexChar = new RegExp(character,'g');
  let frequencies = words.map(word => (word.match(regexChar) || []).length);
  return frequencies;
}

function addCharacters(array,character,numberOfTimes) {
  for (let idx = 1; idx <= numberOfTimes; idx += 1) {
    array.push(character);
  }
}

function commonChars(words) {
  let comparisonCharacters = removeRepeatedChars(words[0]);
  let repeatedCharacters = [];
  comparisonCharacters.split('').forEach(char => {
    let frequency = findFrequencyOfAppearance(words,char);
    let numberOfTimes = Math.min(...frequency);
    addCharacters(repeatedCharacters,char,numberOfTimes);
  });
  return repeatedCharacters;
}
// console.log(findFrequencyOfAppearance(['bella','label','roller'],'a'));
console.log(commonChars(['a','b','c']));