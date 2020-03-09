const readline = require('readline-sync');
const VALID_CHOICES = ['Rock', 'Paper', 'Scissors', 'Spock', 'Lizard'];
const CHOICES_TERMINAL_MESSAGE = ['r: Rock', 'p: Paper', 's: Scissors', 'sp: Spock', 'l: Lizard'];
const RPSSL_RELATIONS = [
  [0, -1, 1, -1, 1],
  [1, 0, -1, 1, -1],
  [-1, 1, 0, -1, 1],
  [1, -1, 1, 0, -1],
  [-1, 1, -1, 1, 0]
];

/*
RPSLS_RELATIONS table:

row indexes: 0) rock, 1) paper, 2) scissors, 3) spock, 4) lizard
column indexes: 0) rock, 1) paper, 2) scissors, 3) spock, 4) lizard

table values:
1: human wins / computer loses
0: tie
-1: human loses / computer wins
*/

function prompt (message) {
  console.log(`=> ${message}`);
}

function emptyLines (nbrOfLines) {
  console.log(`${'\n'.repeat(nbrOfLines)}`);
}

function getNumberOfRounds () {
  prompt('Choose: a) Single game, b) Best of 5');
  let nbrGamesOption = readline.question();
  switch (nbrGamesOption) {
    case 'a':
      return 1;
    case 'b':
      return 5;
    default:
      prompt(`"a" or "b" expected. Please enter a valid choice.`);
      return getNumberOfRounds();
  }
}

function getUserChoiceIndex() {
  prompt(`Choose one: ${CHOICES_TERMINAL_MESSAGE.join(', ')}`);
  let choice = readline.question();

  switch (choice.toLowerCase()) {
    case 'r': return 0;
    case 'p': return 1;
    case 's': return 2;
    case 'sp': return 3;
    case 'l': return 4;
    default: {
      emptyLines(1);
      console.log('Not a valid choice. Choose again.');
      return getUserChoiceIndex();
    }
  }
}

function scoreCount (oldScore, ternaryNumberOperator) {
  let newScore = oldScore;
  switch (ternaryNumberOperator) {
    case 1:
      newScore[0] += 1;
      break;
    case 0:
      break;
    case -1:
      newScore[1] += 1;
      break;
    default:
      prompt('An error has ocurred.');
      break;
  }
  return newScore;
}


function displayRoundWinner (ternaryNumberOperator) {
  switch (ternaryNumberOperator) {
    case 1:
      prompt('You win!');
      break;
    case 0:
      prompt("It's a tie!");
      break;
    case -1:
      prompt('Computer wins!');
      break;
    default:
      prompt('An error has ocurred.');
  }
}

function displayGameWinner (finalScore) {
  prompt(finalScore[0] > finalScore [1] ? 'You won the game!' : 'The computer won the game!');
}


emptyLines(6);

while (true) {
  let humanVsComputerScore = [0 , 0];

  console.log(`${'-'.repeat(10)} WELCOME TO THE RPSSL GAME ${'-'.repeat(10)}`);
  emptyLines(3);

  let numberOfRounds = getNumberOfRounds();

  while (humanVsComputerScore[0] < numberOfRounds &&
    humanVsComputerScore[1] < numberOfRounds) {

    emptyLines(1);
    let userChoiceIndex = getUserChoiceIndex();
    let userChoice = VALID_CHOICES[userChoiceIndex];

    let computerChoiceIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[computerChoiceIndex];

    humanVsComputerScore = scoreCount(
      humanVsComputerScore,
      RPSSL_RELATIONS[userChoiceIndex][computerChoiceIndex]);

    emptyLines(1);
    prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);
    displayRoundWinner(RPSSL_RELATIONS[userChoiceIndex][computerChoiceIndex]);
    prompt(`SCORE: ${humanVsComputerScore[0]} : ${humanVsComputerScore[1]}`);
  }
  emptyLines(1);

  displayGameWinner(humanVsComputerScore);
  emptyLines(1);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

