/*
INPUT: string with any type of character
OUTPUT: string with only alphabetic characters and spaces
RULES:
  non alphabetic characters -> replace with spaces
  consecutive characters -> just 1 space
ALGORITHM:
  FUNCTION cleanUp(text)
  SET alphaber = 'abcd....'
  split the string text into an array -> arrayText
  SET arrayTextCleaned = []
  LOOP over arrayText characters:
    IF character[i] is included in alphabet -> push to arrayTextCleaned
    IF character [i] is not included:
      IF i===0 -> push a ' ' to arrayTextCleaned
      IF character [i-1] is included -> push a ' ' to arrayTextCleaned
      ELSE -> continue
  return arrayTextCleaned.join('')
*/

function cleanUp (text) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let textArray = text.split('');
  let textCleanedArray = [];

  for (let idx = 0; idx < textArray.length; idx += 1) {
    if (ALPHABET.includes(textArray[idx])) {
      textCleanedArray.push(textArray[idx]);
    } else if (idx === 0 || ALPHABET.includes(textArray[idx - 1])) {
      textCleanedArray.push(' ');
    }
  }

  return textCleanedArray.join('');
}

console.log(cleanUp("---What's my +*& line?"));