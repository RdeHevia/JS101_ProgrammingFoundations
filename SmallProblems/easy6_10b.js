/*
INPUT: sentence
  - letters and spaces
OUTPUT: sentence
  - word with 5 or more letters -> reversed
  - words with less than 5 -> the same
EXAMPLES:
 - walk around -> walk dnuora
ALGORITHM:
  1. Loop over the words. For each word:
    - If the word has 5 or more letters -> reverse it
    - Else -> do nothing
  2. Return the new sentence
*/

function reverseString (string) {
  return string.split('').reverse().join('');
}

function reverseWords(sentence) {
  let arrayOfWords = sentence.split(' ').map(word => {
    if (word.length >= 5) {
      return reverseString(word);
    } else {
      return word;
    }
  });

  return arrayOfWords.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"