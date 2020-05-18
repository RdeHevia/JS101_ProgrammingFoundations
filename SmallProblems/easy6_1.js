/*
INPUT: string
OUTPUT: string
RULES:
  returns a new string with all the characters doubled
ALGORITHM:
  FUNCTION repeater (string, nbrOfTimes)
    SET repeatedString=''
    string -> arrayOfCharacters
    LOOP over arrayOfCharacters -> arrayOfCharacters[i]
      LOOP from j=0 to j < nbrOfTimes
        repeatedString = repeatedString + arrayOfCharacters [i]
    RETURN repeatedString
*/

function repeater (string, nbrOfTimes) {
  let repeatedString = '';
  string.split('').forEach(char => {
    for (let idx = 0; idx < nbrOfTimes; idx += 1) {
      repeatedString += char;
    }
  });
  return repeatedString;
}

console.log(repeater('Hello',2));        // "HHeelllloo"
console.log(repeater('Good job!',2));    // "GGoooodd  jjoobb!!"
console.log(repeater('',2));             // ""