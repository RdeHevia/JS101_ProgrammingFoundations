/*
PROBLEM: function that
  - replaces all the non-alphabetic characters
INPUT: string
  - contains: words and non-alphabetic characters
OUTPUT: string
  - only words and spaces
RULES:
  - consecutive characters -> replaced by only 1 space
EXAMPLES:
  'abc-&^_%def' -> 'abc def'
ALGORITHM:
  FUNCTION cleanup (string)
    SET cleanedUpString = ''
    LOOP over string characters
      IF the character is a letter -> add to to cleanedUpString
      ELSE IF character is NOT a letter
        IF the previous character is NOT a letter either -> DON'T add anything
        ELSE -> add a space
*/

function isLetter (character) {
  const LETTERS = "abcdefghijklmnopqrstuvwxyz";
  return LETTERS.includes(character.toLowerCase());
}

function cleanUp (string) {
  let cleanedUpString = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx])) {
      cleanedUpString += string[idx];
    } else if (idx === 0) {
      cleanedUpString += ' ';
    } else if (isLetter(string[idx - 1])) {
      cleanedUpString += ' ';
    }
  }
  console.log(cleanedUpString);
  return cleanedUpString;
}

cleanUp("---what's my +*& line?H");    // " what s my line "