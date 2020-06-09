/*
INPUT: string
OUTPUT: object {lowercase: X, uppercase: Y, neither: Z}
RULES:
   see output
ALGORITHM:
  FUNCTION letterCaseCount (string)
    SET alphabet = 'abcde...'
    SET characterRegistry = {lowercase: 0, uppercase: 0, neither: 0}
    LOOP over string characters // use split('').forEach()
      IF alphabet.includes(character) -> characterRegistry.lowercase += 1
      IF alphabet.toUpperCase().includes(character) -> characterRegistry.uppercase += 1
      ELSE -> characterRegistry.neither += 1
    RETURN characterRegistry;
*/

function letterCaseCount(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let registryOfCharacters = {lowercase: 0, uppercase: 0, neither: 0};

  string.split('').forEach (character => {
    if (alphabet.includes(character)) {
      registryOfCharacters.lowercase += 1;
    } else if (alphabet.toUpperCase().includes(character)) {
      registryOfCharacters.uppercase += 1;
    } else {
      registryOfCharacters.neither += 1;
    }
  });
  return registryOfCharacters;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
