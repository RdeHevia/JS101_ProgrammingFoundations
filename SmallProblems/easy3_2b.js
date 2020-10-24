/*
INPUT: string (fragment of text)
OUTPUT: returns that text boxed
RULES:
  - only 1 line of text
  - number of - = text width + 2
  - number of + = 4 (one per corner)
  - number of | = 3
ALGORITHM:
  FUNCTION logInBox(sentence)
    - Determine the length of the sentece
    - Print the top face of the box: '+' + '----' + '+'
    - Print |     |
    - Print | sentence |
    - ditto
*/

function logInBox (sentence) {
  let sentenceLength = sentence.length;
  let numberOfDashes = sentenceLength + 2;
  let numberOfSpaces = numberOfDashes;

  console.log(''.concat('+','-'.repeat(numberOfDashes),'+'));
  console.log(''.concat('|',' '.repeat(numberOfSpaces),'|'));
  console.log(''.concat('| ',sentence,' |'));
  console.log(''.concat('|',' '.repeat(numberOfSpaces),'|'));
  console.log(''.concat('+','-'.repeat(numberOfDashes),'+'));
}

logInBox('');
logInBox('To boldly go where no one has gone before.');