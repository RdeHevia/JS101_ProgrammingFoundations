/*
QUESTIONS:
INPUT: string (user's name)
OUTPUT: string
RULES:
  - ask for user's name
  - greet the user
  - if the user writes "name!" the output uses capital letters
EXAMPLES:
  - Bob -> Hello Bob.
  - Bob! -> HELLO BOB. WHY ARE WE SCREAMING?
ALGORITHM:

  - GET name
  - IF last character of name !== "!" -> PRINT 'Hello' + name.
  - ELSE -> PRINT 'HELLO' name(except !) '. WHY ARE WE SCREAMING?'
*/

let rlSync = require('readline-sync');

let name = rlSync.question('What is your name?\n');

if (name[name.length-1] !== '!') {
  console.log(`Hello ${name}`);
} else {
  let nameCapitalized = name.slice(0,name.length-1).toUpperCase();

  console.log(`HELLO ${nameCapitalized}. WHY ARE WE SCREAMING?`)
}