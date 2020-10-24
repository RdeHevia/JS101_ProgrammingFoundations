/*
INPUT: text
  - sentences are separated by . ! ?
  - words are separated by spaces
OUTPU:
  - longest sentence -> greater number of words
  - number of words
EXAMPLE:
  Hi, this is a test. How are you?
  Hi, / this / is / a / test / .
  How / are / you / ?
ALGORITHM:
1. Separate the different sentences.
  - Find the indexes at which . ! ? appear. Save them.
  - Separate the different sentences by subsequent indexes. 
    - If . is at idx 35 and the next ! is at idx 57 -> slice(35 + 1, 57 + 1)
    - Edge case (beg of the sentece) -> slice(0, next index)
2. Count the number of words for each sentence.
3. Return the longest sentence and the number of words it has.
*/

function longestSentence(text) {
  let locationOfEndOfSentences = findIndexOfCharacters(text, '.', '?', '!');
  console.log(locationOfEndOfSentences);
  let sentences = separateSentences(text, locationOfEndOfSentences);
  // let longestSentence = findLongestSentence(sentences);
  // let numberOfwordsInLongestSentence = countWords(longestSentence);
  // console.log(longestSentence);
  // console.log(`The longest sentence has ${numberOfwordsInLongestSentence}`);
}

function findIndexOfCharacters(string, char1, char2, char3) {
  let arrayOfIndexes = [];

  string.split('').forEach((char,idx) => {
    if (char === char1 || char === char2 || char === char3) {
      arrayOfIndexes.push(idx);
    }
  });
  return arrayOfIndexes;
}

function separateSentences (text, locationOfEndOfSentences) {
  let arrayOfSentences = text.slice(0,locationOfEndOfSentences[0] + 1);
  for (let idx = 1; idx < locationOfEndOfSentences.length - 1; idx += 1) {
    arrayOfSentences.push(
      text.slice(
        locationOfEndOfSentences[idx] + 1, locationOfEndOfSentences[idx + 1] + 1
      )
    );
  }
  let lastIndex = locationOfEndOfSentences.length - 1;
  arrayOfSentences.push(text.slice(locationOfEndOfSentences[lastIndex]));
  console.log(arrayOfSentences);
  return arrayOfSentences;
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

// longestSentence(longText);
// // Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
// //
// // The longest sentence has 30 words.

// longestSentence(longerText);
// // It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
// //
// // The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.