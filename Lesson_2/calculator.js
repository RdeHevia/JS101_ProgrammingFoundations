// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function languageAssign(strNumber) {
  switch (strNumber) {
    case '1': return 'en';
    case '2': return 'sp';
    default: return 'Language not supported';
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(MESSAGES.questionLanguage);
let language = languageAssign(readline.question());
console.log(language);

while (language === 'Language not supported') {
  prompt(language);
  prompt(MESSAGES.questionLanguage);
  language = languageAssign(readline.question());
}

let yesOrNo;
do {

  prompt(MESSAGES.welcome[language]);

  prompt(MESSAGES.questionNbr1[language]);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES.errorNumber[language]);
    number1 = readline.question();
  }

  prompt(MESSAGES.questionNbr2[language]);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES.errorNumber[language]);
    number2 = readline.question();
  }

  prompt(MESSAGES.questionOperator[language]);
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt(MESSAGES.errorOperator[language]);
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
    output = Number(number1) * Number(number2);
    break;
    case '4':
    output = Number(number1) / Number(number2);
    break;
  }

  prompt(output);

  prompt(MESSAGES.questionContinue[language]);
  yesOrNo = readline.question().toLowerCase();

} while (yesOrNo === 'y');