/*
INPUT: string
OUTPUT: string with first letter of each word capitalized
RULES:
  Assume a word is any sequence of non-whiteespace characters
ALGORITHM:
  FUNCTION wordCap (sentence)
    SET capitalizedWords = []
    LOOP over each word of sentence //use map()
      make word to upper case -> push to capitalizedWords
    RETURN capitalizedWords
*/

function wordCap(sentence) {
  return sentence
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'