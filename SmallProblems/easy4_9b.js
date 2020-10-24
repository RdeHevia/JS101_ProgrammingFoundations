/*
Modify function from easy4_8b.js to EXCLUDE non-letters
it's -> 3
doc? -> 3
seven. -> 5

ALGORITHM:
  1. Remove special characters from the sentece
    1.1. Iterate through the characters of the sentence. 
      - If the character is a letter -> do nothing
      - If the character is a symbol -> remove
  2. Ditto from previous exercise
*/

function wordSizes(sentence) {
  let arrayOfWords = removeSpecialCharacters(sentence).split(' ');
  if (sentence.trim().length === 0) {
    return {};
  }
  let wordLengthFrequency = {};

  arrayOfWords.forEach(word => {
    let wordLength = word.length;

    if (wordLengthFrequency.hasOwnProperty(wordLength)) {
      wordLengthFrequency[wordLength] += 1;
    } else {
      wordLengthFrequency[wordLength] = 1;
    }
  });

  return wordLengthFrequency;
}

function removeSpecialCharacters(sentence) {
  const ALPHANUMERIC_AND_SPACE = 'abcdefghijklmnopqrstuvwxyz1234567890 ';
  let sentenceCleaned = sentence
    .split('')
    .filter(char => {
      return ALPHANUMERIC_AND_SPACE.includes(char.toLowerCase());
    }).join('');

  return sentenceCleaned;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));