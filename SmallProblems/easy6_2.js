/*
INPUT: string
OUTPUT: string
RULES:
  double every consonant
  don't double vowels, digits, punctuation or whitespace
ALGORITHM:
  FUNCTION repeater (string, nbrOfTimes)
    SET repeatedString=''
    string -> arrayOfCharacters
    LOOP over arrayOfCharacters -> arrayOfCharacters[i]
      IF arrayOfCharacters[i] is a consonant:
        LOOP from j=0 to j < nbrOfTimes
          repeatedString = repeatedString + arrayOfCharacters [i]
    RETURN repeatedString
*/

function consonantRepeater (string, nbrOfTimes) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
  let repeatedString = '';
  string.split('').forEach(char => {
    if (CONSONANTS.includes(char.toLowerCase())) {
      for (let idx = 0; idx < nbrOfTimes; idx += 1) {
        repeatedString += char;
      }
    } else {
      repeatedString += char;
    }
  });
  return repeatedString;
}

console.log(consonantRepeater('String',2));          // "SSttrrinngg"
console.log(consonantRepeater('Hello-World!',2));    // "HHellllo-WWorrlldd!"
console.log(consonantRepeater('July 4th',2));        // "JJullyy 4tthh"
console.log(consonantRepeater('',2));                // ""