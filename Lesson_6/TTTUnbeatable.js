/* eslint-disable max-statements */

let readline =  require('readline-sync');
const MARKER = {initial:' ', human:'X', computer:'O'};
const NBR_GAMES_PER_MATCH = 2;
let player1And2 = {1:'human', 2:'computer'};
const PLAYER1_CONFIG = 'choose';   //'Human', 'computer', 'choose'

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
  return Object.keys(board).filter(key => board[key] === MARKER['initial']);
}

function displayBoard(board) {
  //console.clear();
  console.log(`You are ${MARKER['human']}. Computer is ${MARKER['computer']}.`);

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
    board[String(square)] = MARKER['initial'];
  }

  return board;
}

function choosePlayer1And2 (player1Config) {
  let player1And2;
  if (player1Config === 'human') {
    player1And2 = {1: 'human', 2: 'computer'};
  } else if (player1Config === 'computer') {
    player1And2 = {2: 'human', 1: 'computer'};
  } else {
    prompt('Choose player 1: Human Player (H) or Computer (C).');
    let validOptions = {H: 'human', C: 'computer'};
    let userChoice = readline.question().toUpperCase();
    if (!validOptions.hasOwnProperty(userChoice)) {
      prompt('Invalid choice. Choose again');
    }
    player1And2 = choosePlayer1And2 (validOptions[userChoice]);
  }
  return player1And2;
}
function alternatePlayer (currentPlayer) {
  if (currentPlayer === 'human') {
    return 'computer';
  } else {
    return 'human';
  }
}
function playerChoosesSquare (board, player) {
  switch (player) {
    case ('human'):
      humanChoosesSquare(board);
      break;
    case ('computer'):
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
  board[square] = MARKER['human'];
}

function computerChoosesSquare(board) {
  let square;
  if (emptySquares(board).length === 9) {
    square = pickCentralSquare(board);
  } else {
    square = computerBestMove (board);
  }
  /*let square = findWinningSquare (board, 'computer');

  if (!square) square = findWinningSquare (board, 'human');

  if (!square) square = pickCentralSquare (board);

  if (!square) square = pickRandomSquare (board);
  */
  board[square] = MARKER['computer'];
}

function findWinningSquare (board, player) {
  let potentialBoard = Object.assign({},board);
  let trialSquares = emptySquares(board).slice();
  let winningSquare = null;
  for (let idx = 0; idx < trialSquares.length; idx += 1) {
    let square = trialSquares[idx];
    potentialBoard[square] = MARKER[player];
    if (detectWinner(potentialBoard) === player) {
      winningSquare = square;
      break;
    }
    potentialBoard[square] = MARKER['initial'];
  }
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


function computerBestMove (board) {

  let bestMove = findWinningSquare (board, 'computer');
  if (bestMove !== null) {
    return bestMove;
  } else {
    let recursionLevel = 0;
    let boardValues = boardMiniMaxValues(board,'computer',recursionLevel);

    let maxFactor = +1;
    let maxValue = calculateMaxOrMin(boardValues, maxFactor);

    let bestMoveIndex = boardValues.findIndex(num => num === maxValue);

    bestMove = emptySquares(board)[bestMoveIndex];
    return bestMove;
  }
}

function squareMiniMaxValue (board, player, recursionLevel) {
  const PLAYER_VALUE = {human:-1, tie: 0, computer: +1};

  if (findWinningSquare(board,player) !== null) {
    return PLAYER_VALUE[player] / recursionLevel;
  } else if (boardFull(board)) {
    return 0;
  } else {
    let boardValues = boardMiniMaxValues (board, player, recursionLevel);

    let maxOrMinFactor = PLAYER_VALUE[player];
    return calculateMaxOrMin(boardValues, maxOrMinFactor);
  }
}

function calculateMaxOrMin (squareValues, miniMaxFactor) {
  // miniMaxFactor === +1 -> maximum
  // miniMaxFactor === -1 -> minimum
  let sortedArray = squareValues.slice().sort((a,b) => miniMaxFactor * (b - a));
  return sortedArray[0];
}

function boardMiniMaxValues(board, player, recursionLevel) {
  let trialBoard = Object.assign({},board);
  let trialSquares = emptySquares(board);
  let squareMiniMaxValues = [];
  recursionLevel += 1;

  trialSquares.forEach(square => {
    trialBoard[square] = MARKER[player];

    let squareValue = squareMiniMaxValue (
      trialBoard, alternatePlayer(player), recursionLevel
    );
    squareMiniMaxValues.push(squareValue);

    trialBoard[square] = MARKER ['initial'];
  });
  return squareMiniMaxValues;
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
      board[sq1] === MARKER['human'] &&
      board[sq2] === MARKER['human'] &&
      board[sq3] === MARKER['human']
    ) {
      return 'human';
    } else if (
      board[sq1] === MARKER['computer'] &&
      board[sq2] === MARKER['computer'] &&
      board[sq3] === MARKER['computer']
    ) {
      return 'computer';
    }
  }
  return null;
}

function updateScore (score, winner) {
  score[winner] += 1;
}

function showScore (score) {
  prompt(`SCORE (PLAYER : COMPUTER)`);
  prompt(`${score['human']} : ${score['computer']}\n`);
}

function detectMatchWinner (score) {
  if (matchEnded(score)) {
    if (score['human'] > score['computer']) {
      return 'human';
    } else {
      return 'computer';
    }
  } else {
    return null;
  }
}
function matchEnded (score) {
  if (
    score['human'] >= NBR_GAMES_PER_MATCH ||
    score['computer'] >= NBR_GAMES_PER_MATCH
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
      prompt (`Did you mean ${answer[0]}? Choose again.`);
    } else {
      prompt('Invalid choice. Choose again');
    }
    answer = playAgain();
  }
  return answer;
}

do {
  let score = {human: 0, computer: 0};
  while (true) {
    //console.clear();
    let board = initializedBoard();
    let player1And2 = choosePlayer1And2(PLAYER1_CONFIG);
    let currentPlayer = player1And2['1'];
    displayBoard(board);
    showScore(score);
    while (true) {
      playerChoosesSquare(board, currentPlayer);
      displayBoard(board);
      if (someoneWon(board) || boardFull(board)) break;

      showScore(score);
      currentPlayer = alternatePlayer(currentPlayer);
    }

    if (someoneWon(board)) {
      updateScore (score,detectWinner(board));
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