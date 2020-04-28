/*
INPUT: string with 0 or more words separated by spaces
OUTPUT: object
RULES: write a function that:
  - Takes a string with 0 or more words separated by spaces as argument.
  - Return an object with the number of words of different sizes.
IMPLICIT RULES:
  - Especial punctuation is NOT considered as part of the the word. e.g. diddle,
    has 6 letters (comma ignored)
  - output object need to be sorted by word size.
  - edge case: empty array
ALGORITHM:
  FUNCTION wordSizes(string) {
    IF string === '' -> return {};
    Separate wordSizes by spaces and assign it to an array -> arrayOfWords
    filter out special characters
    Create a new array with the length of each word. e.g. [3, 6, 7, 3, 3, 3,3,4]
    Sort the array
    LOOP over array elements
      IF objectWordSizes has the property arrayWordlength[i] -> add 1 to the
      property
      ELSE
      objectWordSizes[arrayWordlength[i]] = 1;

  }
*/
function deleteSpecialCharacter (sentence) {
  if (sentence === '') return sentence;
  let alphanumericAndSpace = 'abcdefghijklmnopqrstuvwxyz 1234567890';
  let cleanedSentence = sentence.split('').filter(character => {
    return alphanumericAndSpace.includes(character.toLowerCase());
  }).join('');
  return cleanedSentence;
}

function wordSizes (sentence) {
  if (sentence === '') return {};

  let cleanedSentence = deleteSpecialCharacter(sentence);
  let arrayOfWords = cleanedSentence.split(' ');

  let arrayOfLengths = arrayOfWords.map(word => word.length);
  arrayOfLengths.sort((a,b) => a - b);

  let frequencyOfWordSizes = {};
  arrayOfLengths.forEach(element => {
    if (frequencyOfWordSizes.hasOwnProperty(element)) {
      frequencyOfWordSizes[element] += 1;
    } else {
      frequencyOfWordSizes[element] = 1;
    }
  });

  return frequencyOfWordSizes;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
