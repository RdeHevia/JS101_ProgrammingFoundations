/*
INPUT: string
OUTPUT: strings in different lines
EXPLICIT RULES: Write a function that:
  takes a string as an argument
  print that same string in the console within a box
  assume the string will always fit in your screen (in just 1 line)
IMPLICIT REQUIREMENTS:
  box corners: +
  box top and bottom: "-". numberOfDashes = lengthString + 2
  box left and right sides: |. numberOfVerticalLines = 3
  string centered in the box
ALGORITHM:
  FUNCTION logInBox (text) 
    let numberOfDashes = text.length + 2;
    let numberOfSpaces = numberOfDashes
    let boxBase = '+' + '-'.repeat(numberOfDashes) + '+'
    let verticalLineAndSpaces = '|' + ''.repeat(numberOfSpaces) + '|'
    let verticalLineAndText = '| ' + ''.repeat(text.length) + ' |'

    PRINT boxBase
    PRINT verticalLineAndSpaces
    PRINT verticalLineAndText
    PRINT verticalLineAndSpaces
    PRINT boxBase
*/

function logInBox (text) {
  let numberOfDashes = text.length + 2;
  let numberOfSpaces = numberOfDashes;
  let boxBase = ''.concat('+','-'.repeat(numberOfDashes),'+');
  let verticalLineAndSpaces = ''.concat('|',' '.repeat(numberOfSpaces),'|');
  let verticalLineAndText = ''.concat('| ',text,' |');

  console.log(boxBase);
  console.log(verticalLineAndSpaces);
  console.log(verticalLineAndText);
  console.log(verticalLineAndSpaces);
  console.log(boxBase);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');