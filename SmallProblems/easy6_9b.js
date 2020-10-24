/*
INPUT: string
OUTPUT: string with words reversed
ALGORITHM:
1. Split the words into an array
2. Reverse the array
3. Join it
*/

function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"