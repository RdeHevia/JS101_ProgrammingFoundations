// question: ok side effects for function dealCards ()?
let readline = require('readline-sync');

function prompt (message) {
  console.log(`=> ${message}`);
}
function displaySectionSeparator () {
  console.log('\n' + '-'.repeat(40) + '\n');
}
function welcomeScreen () {
  console.clear();
  console.log('WELCOME TO THE 21 GAME!\n');
  console.log('The player that gets closer to 21 without going over wins!\n\n');
  prompt('Are you ready? Please press any key to start...');
  readline.question();
  console.clear();
}

function displayGameStageHeader(stageId) {
  switch (stageId) {
    case 'playerTurn':
      console.log(`PLAYER'S TURN:`);
      break;
    case 'dealerTurn':
      console.log(`DEALER'S TURN:`);
      break;
    case 'gameOver':
      console.log(`THE GAME IS OVER!`);
  }
}

function displayCards (playerCards, dealerCards, showAllDealerCards = false) {
  console.log(`CARDS:`);
  prompt(`   You: ${playerCards.join(', ')}`);
  if (showAllDealerCards) {
    prompt(`Dealer: ${dealerCards.join(', ')}`);
  } else {
    prompt(`Dealer: ${dealerCards[0]}, ?`);
  }
}

function displayBoard (stageId, player, dealer) {
  let showAllDealerCards;
  if (stageId === 'playerTurn') {
    showAllDealerCards = false;
  } else {
    showAllDealerCards = true;
  }

  console.clear();
  displayGameStageHeader(stageId);
  displaySectionSeparator();
  displayCards(player.cards, dealer.cards, showAllDealerCards);
  displaySectionSeparator();

  if (stageId === 'gameOver') {
    displayHandsValue(player.handValue,dealer.handValue);
    displaySectionSeparator();
  }

}

function initializeDeck () {
  const SUIT = [
    'Ace', '2', '3', '4', '5', '6',
    '7', '8', '9', '10', 'Jack', 'Queen', 'King'
  ];
  let fullDeck = [].concat(SUIT, SUIT, SUIT, SUIT);
  shuffle(fullDeck);
  return fullDeck;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

function dealCards (deck, nbrOfCards) {
  let dealedCards = [];
  for (let idx = 0; idx < nbrOfCards; idx += 1) {
    dealedCards.push(deck.shift());
  }
  return dealedCards;
}

function updateHand(currentHand, deck, nbrOfCardsDealed) {
  return [].concat(currentHand, dealCards(deck,nbrOfCardsDealed));
}

function handValue (cards) {
  let [aces, noAces] = separateAces(cards);

  let sumNoAces = calcSumNoAces (noAces);

  let totalSum;
  for (
    let nbrOfAcesEqualTo1 = 0;
    (nbrOfAcesEqualTo1 <= aces.length);
    nbrOfAcesEqualTo1 += 1
  ) {
    let sumAces = calcSumAces (aces, nbrOfAcesEqualTo1);
    totalSum = sumNoAces + sumAces;
    if (totalSum <= 21) break;
  }
  return totalSum;
}

function calcSumNoAces (noAcesCards) {
  const CARD_VALUES = {
    2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
    Jack: 10,
    Queen: 10,
    King: 10
  };
  return noAcesCards.reduce(((sum,card) => sum + CARD_VALUES[card]),0);
}

function calcSumAces (acesCards, nbrOfAcesEqualTo1 = 0) {
  const CARD_VALUES = {
    Ace: [11, 1]
  };
  let nbrOfAcesEqualTo11 = acesCards.length - nbrOfAcesEqualTo1;
  let sumAces =
    (nbrOfAcesEqualTo11 * CARD_VALUES.Ace[0]) +
    (nbrOfAcesEqualTo1 * CARD_VALUES.Ace[1]);
  return sumAces;
}
function separateAces (cards) {
  let aces = cards.filter(card => card === 'Ace');
  let noAces = cards.filter(card => card !== 'Ace');
  return [aces,noAces];
}

function playerHitsOrStays() {
  prompt(`Do you want to hit (h) or stay (s) ?`);
  let choice = readline.question();
  switch (choice) {
    case 'h':
      return 'hit';
    case 's':
      return 'stay';
    default:
      prompt('Invalid choice. Please choose again.');
      return playerHitsOrStays();
  }
}

function dealerHits() {
  prompt(`The dealer hits! Press any key to see the next card.`)
  readline.question();
}

function isBusted(handValue) {
  return handValue > 21;
}

function closerTo21(playerHandValue, dealerHandValue) {
  if (playerHandValue > dealerHandValue) {
    return 'player';
  } else if (playerHandValue < dealerHandValue) {
    return 'dealer';
  } else {
    return 'none';
  }
}

function findWinner (playerHandValue, dealerHandValue) {
  if (isBusted(playerHandValue)) {
    return 'dealer';
  } else if (isBusted(dealerHandValue)) {
    return 'player';
  } else {
    return closerTo21(playerHandValue, dealerHandValue);
  }
}

function displayWinner (winner) {
  if (winner === 'none') {
    prompt (`IT'S A TIE!`);
  } else {
    prompt(`${winner.toUpperCase()} WON!`);
  }
}

function displayHandsValue (playerHandValue, dealerHandValue) {
  let playerBustedPrompt = '';
  let dealerBustedPrompt = '';
  if (isBusted(playerHandValue)) {
    playerBustedPrompt = '(busted)';
  } else if (isBusted(dealerHandValue)) {
    dealerBustedPrompt = '(busted)';
  }
  console.log(`FINAL HAND VALUES:`);
  prompt(`   You: ${playerHandValue} ${playerBustedPrompt}`);
  prompt(`Dealer: ${dealerHandValue}  ${dealerBustedPrompt}`);
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

welcomeScreen();
do {
  console.clear();

  let player = {};
  let dealer = {};
  let gameOver = false;
  let deck = initializeDeck();
  let nbrOfCardsDealed = 2;

  player.cards = dealCards(deck,nbrOfCardsDealed);
  player.handValue = handValue(player.cards);

  dealer.cards = dealCards(deck, nbrOfCardsDealed);
  dealer.handValue = handValue(dealer.cards);

  displayBoard('playerTurn', player, dealer);

  nbrOfCardsDealed = 1;
  while (!gameOver) {
    let playerChoice = playerHitsOrStays();
    if (playerChoice === 'stay') break;

    player.cards = updateHand(player.cards, deck, nbrOfCardsDealed);
    player.handValue = handValue(player.cards);

    displayBoard('playerTurn', player, dealer);

    if (isBusted(player.handValue)) {
      gameOver = true;
    }
  }

  if (!gameOver) {
    displayBoard('dealerTurn', player, dealer);
  }
  while ((!gameOver) && (dealer.handValue < 17)) {
    dealerHits();

    dealer.cards = updateHand(dealer.cards, deck, nbrOfCardsDealed);
    dealer.handValue = handValue (dealer.cards);

    displayBoard('dealerTurn', player, dealer);

    if (isBusted(dealer.handValue)) {
      gameOver = true;
    }
  }
  displayBoard('gameOver', player, dealer);

  let winner = findWinner(player.handValue, dealer.handValue);

  displayWinner(winner);
  displaySectionSeparator();

} while (playAgain() === 'y');
