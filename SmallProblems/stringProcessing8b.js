/*
INPUT: string
OUTPUT: array
  - elements: words and their lengths
RULES:
  '' or no argument passed -> []
  All words are separated by a single space
ALGORITHM:
  1. Split the string into separated words.
  2. Iterate over the words. For each word:
    - Count the number of characters in the word
    - Add the word and the length to an array. 'word nbrOfCharacters'
  3. Return the array
*/

function wordLengths(string) {
  if (!string) {
    return [];
  }
  return string
    .split(' ')
    .map(word => {
      return `${word} ${word.length}`;
    });
}


console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []