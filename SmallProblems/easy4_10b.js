/*
function that swaps the 1st and last letter of every word
INPUT: string
  - words separated by spaces
RULES:
  - assume string contains at least 1 word
  - assume word contains at least 1 letter
  - assume no leading, trailing or repeated spaces
  - any character but spaces counts (Ab: -> :bA)
ALGORITHM:
  1. Split the string into words
  2. For each word:
    - swap first and last character
  3. join the words
  4. return the new string
*/

function swap(sentence) {
  let arrayOfWords = sentence.split(' ');

  if (arrayOfWords.length === 1) {
    return sentence;
  }
  let sentenceWithSwapedWords = arrayOfWords.map(word => {
    let firstCharacter = word[0];
    let lastCharacter = word[word.length - 1];
    let middleCharacters = word.slice(1, word.length - 1);

    return ''.concat(lastCharacter, middleCharacters, firstCharacter);
  }).join(' ');

  return sentenceWithSwapedWords;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"