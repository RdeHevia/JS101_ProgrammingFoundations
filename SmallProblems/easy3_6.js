/*
INPUT: strings, got from user
OUTPUT: strings
RULES:
  Ask for words, return a story.
ALGORITHM:
  GET noun, verb, adjective, adverb
  PRINT story (noun, verb, adjective, adverb)
*/

let rlSync = require ('readline-sync');

function madlib (noun, verb, adjetive, adverb) {
  console.log(
    `Do you ${verb} your ${adjetive} ${noun} ${adverb}? That's hilarious!`
  );
  console.log(
    `The ${adjetive} ${noun} ${verb}s ${adverb} over the lazy dog.`
  );
  console.log(
    `The ${noun} ${adverb} ${verb}s up blue Joe's turtle.`
  );

}

let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a noun: ');
let adjetive = rlSync.question('Enter a noun: ');
let adverb = rlSync.question('Enter a noun: ');

madlib(noun,verb,adjetive,adverb);