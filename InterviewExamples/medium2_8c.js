/*
INPUT: string
  text 
    sentences (.!?)
      words (spaced separated)
OUTPUT: string, string
  - the longest sentence
  - number of words of that sentence
RULES:
  - longest sentence? more words? or characters? -> words!
  - preserve everything (pay attention to the punctuation)
EXAMPLE:
  "Where do you think you're going? What's up, Doc?"
  Sentence1: Where do you think you're going? ->6
  Sentence2: What's up, Doc? -> 3
EXAMPLE:
  abc d? ef. -> 5, 9: (0,6) and (6,10)
ALGORITHM:
  1. Separate the text into sentences.
  2. Count the number of words for each sentence.
  3. Return the longest sentence and its number of words.
splitAtCharacters(text,characters)
  1. Iterate over the characters of the text. Record the index of the characters
    passed as an argument
  2. Split between those characters
*/

function splitAtCharacters(text,characters) {
  let sentenceLimits = [0];
  text.split('').forEach((char,idx) => {
    if (characters.includes(char)) {
      sentenceLimits.push(idx + 1);
    }
  });
  let sentences = [];
  for (let idx = 0; idx < sentenceLimits.length - 1; idx += 1) {
    let leftSideLimit = sentenceLimits[idx];
    let rightSideLimit = sentenceLimits[idx + 1];
    sentences.push(text.slice(leftSideLimit, rightSideLimit).trimStart());
  }
  return sentences;
}

function findLongestSentenceAndWords(sentences, numberOfWordsPerSentence) {
  let maximumNumberOfWords = numberOfWordsPerSentence.slice().sort((a,b) => b - a)[0];
  let indexOfLongestSentence = numberOfWordsPerSentence
    .indexOf(maximumNumberOfWords);
  let longestSentence = sentences[indexOfLongestSentence];
  return [longestSentence, maximumNumberOfWords];
}

function longestSentence(text) {
  const PUNCTUATION = `.?!`;
  let sentences = splitAtCharacters(text,PUNCTUATION);
  let numberOfWordsPerSentence = sentences.map(sentence => {
    return sentence.split(' ').length;
  });
  let [longestSentence,numberOfWords] = findLongestSentenceAndWords(
    sentences,
    numberOfWordsPerSentence
  );
  console.log(longestSentence);
  console.log(`The longest sentence has ${numberOfWords} words.`);
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

// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.