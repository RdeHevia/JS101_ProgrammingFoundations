/*
INPUT: string (words separated by spaces)
OUTPUT: string (1 word)
RULES: write a function that...
  - return the penultimate word of a sentece
  - words are separated by spaces
  - assume the input string will always contain at least 2 words
ALGORITHM:
  - FUNCTION penultimate (sentence)
    - Create an array with sentece's words as elements. arrayOfWords
    - return penultimate element of arrayOfWords
*/

function penultimate (sentence) {
  let separatedWords = sentence.split(' ');
  return separatedWords[separatedWords.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true