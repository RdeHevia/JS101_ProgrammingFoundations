/*
GAME RULES:
- Grid of 3x3.
- Possible options X and O.
- First player that lines 3 X's or O's win.
EXAMPLE GAME SEQUENCE (Human vs Computer):
- Player 1 is randomly assigned -> Human starts
- Human puts an X in [2][2]
- Computer puts an O in [2][3]
- Human X in [1][2]
- Computer O in [1][3]
- Human X in [3][2] -> Human wins!
- Repeat game?

LOGICAL SEQUENCE:
[1) Player 1 is randomly assigned -> Human starts] -> Assume user always starts
for now
2) Ask user to mark a square.
3) Display board with user's selection.
4) Computer marks a square.
5) Display board.
6) Repeat stepts 2 to 5 until:
  A) 3 marks aligned -> display the winner
  B) board is full -> display tie
7) Play again? Yes ->
  A) Go to 1
  B) No -> Goodbye!

IMPORTANT THOUGHTS:
- Computer to operate randomly or with some kind of algorithm? Algorithm should:
  - Find for possible combinations with the highest probability of winning.
  - Track human's movement to cancel human's plays.

KEEP SCORE:
  RULES:
    keep track and report score after each game.
    1st player to win 5 games -> wins the match
    score should reset to 0 after each match
    give option of 1 single game or a match
  ALGORITHM:
    LOOP
      initializedBoard
        LOOP
          displayBoard
          playerChoosesSquare
          computerChoosesSquare
AI DEFENSE - ALGORITHM:
  function findSquareInDanger (board)
    LOOP over empty squares
      Add an X to square(i)
      IF detectWinner === true -> Place a O in that square
      ELSE -> place O in a random square

*/
let readline =  require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const NBR_GAMES_PER_MATCH = 2;
const PLAYER1_CONFIG = 'Choose';   //'Human player', 'Computer', 'Choose'

function prompt (message) {
  console.log(`=> ${message}`);
}

function joinOr (array, separator = ', ', endSeparator = 'or') {
  switch (array.length) {
    case 0:
      return '';
    case 1:
      return String(array[0]);
    default:
      return (
        array.slice(0,array.length - 1).join(separator) +
        ' ' + endSeparator + ' ' + array[array.length - 1]
      );
  }
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializedBoard() {
  let board = {};
  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function choosePlayer1And2 (player1Config) {
  let player1And2;
  if (player1Config === 'Human player') {
    player1And2 = ['Human player', 'Computer'];
  } else if (player1Config === 'Computer') {
    player1And2 = ['Computer', 'Human player'];
  } else {
    prompt('Choose player 1: Human Player (H) or Computer (C).');
    let validOptions = {H: 'Human player', C: 'Computer'};
    let userChoice = readline.question().toUpperCase();
    if (!validOptions.hasOwnProperty(userChoice)) {
      prompt('Invalid choice. Choose again');
    }
    player1And2 = choosePlayer1And2 (validOptions[userChoice]);
  }
  return player1And2;
}

function playerChoosesSquare (board, player) {
  switch (player) {
    case ('Human player'):
      humanChoosesSquare(board);
      break;
    case ('Computer'):
      computerChoosesSquare(board);
      break;
    default:
      console.log('An unexpected error occurred');
  }
}

function humanChoosesSquare (board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))})`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt(`Sorry, that's not a valid choice.`);
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {

  let square = findWinningSquare(board);

  if (!square) square = findSquareInDanger (board);

  if (!square) square = pickCentralSquare (board);

  if (!square) square = pickRandomSquare (board);

  board[square] = COMPUTER_MARKER;
}

function findSquareInDanger (board) {
  let potentialBoard = Object.assign({},board);
  let trialSquares = emptySquares(board).slice();
  let squareInDanger = null;

  trialSquares.forEach(square => {
    potentialBoard[square] = HUMAN_MARKER;
    if (detectWinner(potentialBoard) === 'Player') squareInDanger = square;
    potentialBoard[square] = INITIAL_MARKER;
  });
  return squareInDanger;
}

function findWinningSquare (board) {
  let potentialBoard = Object.assign({},board);
  let trialSquares = emptySquares(board).slice();
  let winningSquare = null;

  trialSquares.forEach(square => {
    potentialBoard[square] = COMPUTER_MARKER;
    if (detectWinner(potentialBoard) === 'Computer') winningSquare = square;
    potentialBoard[square] = INITIAL_MARKER;
  });
  return winningSquare;
}

function pickRandomSquare (board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let randomSquare = emptySquares(board)[randomIndex];
  return randomSquare;
}

function pickCentralSquare (board) {
  const CENTRAL_SQUARE = '5';
  let square = null;
  if (emptySquares(board).includes(CENTRAL_SQUARE)) square = CENTRAL_SQUARE;
  return square;
}
function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

// eslint-disable-next-line max-lines-per-function
function detectWinner (board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function scoreTracker (score, winner) {
  score[winner] += 1;
}

function showScore (score) {
  prompt(`SCORE (PLAYER : COMPUTER)`);
  prompt(`${score['Player']} : ${score['Computer']}\n`);
}

function detectMatchWinner (score) {
  if (matchEnded(score)) {
    if (score['Player'] > score['Computer']) {
      return 'Player';
    } else {
      return 'Computer';
    }
  } else {
    return null;
  }
}
function matchEnded (score) {
  if (
    score['Player'] >= NBR_GAMES_PER_MATCH ||
    score['Computer'] >= NBR_GAMES_PER_MATCH
  ) {
    return true;
  } else {
    return false;
  }
}

function nextRound () {
  prompt('Press any key for next round');
  readline.question();
}

function playAgain () {
  const ANSWER_OPTIONS = ['y', 'n'];
  prompt(`Play again? (y or n)`);
  let answer = readline.question().toLowerCase();
  if (!ANSWER_OPTIONS.includes(answer)) {
    if (ANSWER_OPTIONS.includes(answer[0])) {
      prompt (`Did you mean ${answer[0]}? Choose again.`)
    } else {
      prompt('Invalid choice. Choose again');
    }
    answer = playAgain();
  }
  return answer;
}

do {
  let score = {Player: 0, Computer: 0};
  while (true) {
    console.clear();
    let board = initializedBoard();
    let [player1, player2] = choosePlayer1And2(PLAYER1_CONFIG);
    displayBoard(board);
    showScore(score);
    while (true) {

      playerChoosesSquare(board, player1);
      displayBoard(board);
      if (someoneWon(board) || boardFull(board)) break;
      showScore(score);

      playerChoosesSquare(board, player2);
      displayBoard(board);
      if (someoneWon(board) || boardFull(board)) break;
      showScore(score);
    }

    //displayBoard(board);

    if (someoneWon(board)) {
      scoreTracker(score,detectWinner(board));
      prompt(`${detectWinner(board)} won!\n`);
      showScore(score);
    } else {
      prompt(`It's a tie!\n`);
      showScore(score);
    }
    if (matchEnded(score)) {
      prompt(`${detectMatchWinner(score)} won the match!\n`);
      break;
    } else {
      nextRound();
    }
  }

} while (playAgain() === 'y');

prompt('Thanks for playing Tic Tac Toe!');