/*
INPUT: String (sentece)
OUTPUT: string
  - zero, one, two...nine -> 0, 1, 2...9
EXAMPLE:
five five -> 5 5
four. -> 4. take care of the special punctuation (ignore it)
RULES:
- Five -> 5
ALGORITHM:
1. Create an object with number words as keys and the number values as values
2. Separate the words of the sentence (by space).
3. If the word is a key of the object -> replace it by the value
  - Special characters should be ignored when checking this
4. If not -> leave it as is
*/

function wordToDigit(sentence) {
  const DIGITS = {
    zero:0, one:1, two:2, three:3, four:4, five:5, six:6, seven:7,
    eight:8, nine:9
  };

  let arrayOfWords = sentence.split(' ').map(wordWithSpecialChar => {
    let [word, specialChar] = separateWordFromSpecialChars(wordWithSpecialChar);
    if (DIGITS.hasOwnProperty(word.toLowerCase())) {
      return DIGITS[word] + specialChar;
    } else {
      return word + specialChar;
    }
  });

  return arrayOfWords.join(' ');
}

function separateWordFromSpecialChars(wordWithSpecialChars) {
  let word = wordWithSpecialChars.match(/[a-z]/gi).join('');
  let specialChar = (wordWithSpecialChars.match((/[^a-z]/gi)) || []).join('');
  return [word, specialChar];
}

console.log(separateWordFromSpecialChars('four.'));

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."