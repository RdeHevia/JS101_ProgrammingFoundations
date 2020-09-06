/*
INPUT: string
OUTPUT: array of strings
RULES:
  * Return string with every word + space + word_length.
  * A word is any character chain separated by a space
  * You can assume that words are separated by single spaces
  * special characters count as word's characters.
  * If the argument is an empty string -> return []
ALGORITHM/DATA STRUCTURE:
  FUNCTION wordLengths (string)
    separate the string into words (array) -> use split()
    loop over the different words -> use map()
      RETURN word + ' ' + word.length
*/

function wordLengths(string ='') {
  if (string.length === 0) {
    return [];
  } else {
    return string.split(' ').map(word => word + ' ' + word.length);
  }
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
