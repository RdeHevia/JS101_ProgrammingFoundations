/*
INPUT: sentence (string)
OUTPUT: sentence (string)
RULES: Write a function that
  - Swaps the first and last letter of every word
  - each word contains at least one letter
  - assume no repeated spaces
IMPLICIT RULES
  - assume there is no punctuation or special characters.
  - edge case: word of 1 letter
ALGORITHM:
  FUNCTION swap(sentence)
    split sentence -> arrayWords
    LOOP over each element of arrayWords
      Create a new array called arrayWordsLetterSwapped with each element:
        IF word.length === 1 -> word;
        ELSE -> word[word.length - 1] + word.slice(1,word.length - 1) + word[0]
    RETURN arrayWordsLetterSwapped.join(' ')
  */

function swap (sentence) {
  let arrayWordsLetterSwapped = sentence.split(' ').map(word => {
    if (word.length === 1) {
      return word;
    } else {
      return word[word.length - 1] + word.slice(1, -1) + word[0];
    }
  });
  return arrayWordsLetterSwapped.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"