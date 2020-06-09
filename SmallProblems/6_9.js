/*
INPUT: sentence (string)
OUTPUT: sentence (string)
RULES:
  - return a new string
  - new string to contain the same words of the string argument in reverse order
ALGORITHM:
  FUNCTION reverseSentence (sentence)
    split sentence by ' '. Assign to an array.
    reverse the array
    join together by ' '.
*/

function reverseSentence (sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));  