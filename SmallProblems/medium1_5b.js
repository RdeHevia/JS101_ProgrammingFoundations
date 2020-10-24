/*
INPUT: string
OUTPUT: string
  - 'zero', 'one'...'nine' -> 0, 1, ... 9
EXAMPLES:
  Please three four. -> Please 3 4.
  abc. (0->3). abc (0->2)
RULES:
  Need to keep punctuation. '.,?!'
ALGORITHM:
  1. Create an object with the word nunbers and digits.
  2. Iterate over the string. For each word:
    If the word is a word number -> replace by digits
*/

function wordToDigit(text) {
  const DIGITS = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let wordNumber in DIGITS) {
    let regex = new RegExp(wordNumber,'g');
    text = text.replace(regex,DIGITS[wordNumber]);
  }
  console.log(text);
  return text;
}


wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."