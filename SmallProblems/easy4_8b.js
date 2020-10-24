/*
INPUT: string
  - 0 or more space separated words
OUTPUT: object
  - number of words of different sizes
EXAMPLES:
  - 'abc sdf we' -> {3: 2, 2: 1}
  - '' -> {}
  - ' ' -> {}
RULES:
  - word: any sequence of non-space characters
ALGORITHM:
  0. If the string is empty or just spaces -> return {}
  1. Separate the sentence into words.
  2. For the first word:
    - Count the number of characters
    - Add the number of characters as a key, and 1 as a value
  3. For each of the other words:
    - Count the number of characters
    - If the key with the name number of chars already exists -: add +1 as a value
    - If it doesn't exist -> create a new property and add 1 as value
  4. Return the object.
*/

function wordSizes(sentence) {
  let arrayOfWords = sentence.split(' ');
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

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}