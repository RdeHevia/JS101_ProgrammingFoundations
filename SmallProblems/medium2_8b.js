/*
INPUT: string (text)
OUTPUT: longest sentece AND number of words
RULES:
  word: spaced separated
    great civil war -> 3 words
    war, -> 1 word
    endure. -> endure is a word, . is not part of the word
  sentences end  with periods ., exclamation points ! or question marks ?
  all sentences finish with a punctuation (assumption)
EXAMPLE:
  abc. de fg?:
  Sentence 1: abc. -> 1 word (0 to 3)
  Sentence 2: de fg? -> 2 words  <- (4 to 11)
ALGORITHM:
  1. Find all the end of sentence punctuation. Record their indexes.
    - Iterate over the text characters. If the chracter is a punctuation one ->
      record its index
  2. Split sentences (a sentence should include the end of sentence character)
    - Declare an empty array to store the sentences
    - 1st split: 0 to idx1 + 1
    - else : idxN to idxN+1 + 1
  3. For each sentence:
    - Split the sentence into words.
    - Count the number of words
    - Record how many words the sentence has.
  4. Log the sentence with more words and its number of words
*/

function findPunctuationIndexes(text) {
  let indexes = [];
  const PUNCTUATION = '.!?';

  text.split('').forEach((char,idx) => {
    if (PUNCTUATION.includes(char)) {
      indexes.push(idx);
    }
  });
  return indexes;
}

function splitSentencesAtIndexes(text, indexes) {
  let sentences = [];

  for (let arrayIdx = 0; arrayIdx < indexes.length; arrayIdx += 1) {
    if (arrayIdx === 0) {
      sentences.push(text.slice(0, indexes[arrayIdx] + 1));
    } else {
      let firstIndex = indexes[arrayIdx - 1] + 1;
      let lastIndex = indexes[arrayIdx] + 1;
      sentences.push(text.slice(firstIndex,lastIndex));
    }
  }
  return sentences;
}

function countWords(sentences) {
  return sentences.trimStart().split(' ').length;
}

function findIndexOfMaximum (arrayOfNumbers) {
  let maximum = arrayOfNumbers.slice().sort((a,b) => b - a)[0];
  return arrayOfNumbers.findIndex(number => number === maximum);
}

function longestSentence(text) {
  let punctuationIndexes = findPunctuationIndexes(text);
  let sentences = splitSentencesAtIndexes(text,punctuationIndexes);
  let numberOfWordsPerSentence = sentences.map(sentence => countWords(sentence));

  let indexOfTheLongestSentence = findIndexOfMaximum(numberOfWordsPerSentence);
  console.log(sentences[indexOfTheLongestSentence]);
  console.log(`The longest sentence has ${numberOfWordsPerSentence[indexOfTheLongestSentence]} words.`);
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.