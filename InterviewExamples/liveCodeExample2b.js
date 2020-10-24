/*
Given an array of strings made only from lowercase letters, return an array of
all characters that show up in all strings within the given array
(including duplicates). For example, if a character occurs 3 times in all
strings but not 4 times, you need to include that character 3 times in the final
answer.
*/
/*
OUTPUT: return array of repeated characters
  - including duplicates
  - [aabc, aab, aaa] -> [aa]
  a: [2, 2, 3]
ALGORITHM:
1. For each array element:
  - Determine the frequency each letter appears in each word. (object)
2. Build an array based on the frequency
Alternative algorithm:
Alternavite:
1. For each element letter in the alphabet.
  - Create an array with the frequency that letter appears in each element
    (filter the letter-> calc length of the new string)
  - Calculate the minimum frequency:
    - if the minimum frquency = 0 -> do nothing
    - else -> add to the return array
*/

function commonChars(array) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let arrayWithRepeatedLetters = [];
  ALPHABET.split('').forEach(letter => {
    let arrayWithLetterFiltered = array
      .map(element => element.split('').filter(char => char === letter).join(''));
    let numberOfRepetions = minimumFrequency(arrayWithLetterFiltered);

    if (numberOfRepetions > 0) {
      arrayWithRepeatedLetters.push(...letter.repeat(numberOfRepetions).split(''));
    }
  });

  return arrayWithRepeatedLetters;
}

function minimumFrequency(array) {
  let minimumLength = array[0].length;
  array.forEach(element => {
    if (minimumLength > element.length) {
      minimumLength = element.length;
    }
  });
  return minimumLength;
}
console.log(minimumFrequency(['abssd','ac','assb','aaddds']));
console.log(commonChars(['a', 'b'])); // []
console.log(commonChars(['ab', 'bc'])); // ['b']
console.log(commonChars(['bella', 'label', 'roller'])); ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); ['c', 'o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random']));
