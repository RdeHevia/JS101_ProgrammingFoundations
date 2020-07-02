// question: ok side effects for function dealCards ()?
let readline = require('readline-sync');
function prompt (message) {
  console.log(`=> ${message}`);
}

function welcomeScreen () {
  console.clear();
  console.log('WELCOME TO THE 21 GAME!\n');
  console.log('The player that gets closer to 21 without going over wins!\n\n');
  prompt('Are you ready? Please press any key to start...');
  readline.question();
  console.clear();
}

function displayCards (playerCards, dealerCards, showAllDealerCards = false) {
  console.log(`CARDS:`);
  prompt(`   You: ${playerCards.join(', ')}`);
  if (showAllDealerCards) {
    prompt(`Dealer: ${dealerCards.join(', ')}`);
  } else {
    prompt(`Dealer: ${dealerCards[0]}, ?`);
  }
  console.log('\n');
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
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
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
// eslint-disable-next-line max-lines-per-function
function handValue (cards) {
  const CARD_VALUES = {
    Ace: {lessOrEqualTo21: 11, greaterThan21: 1},
    2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
    Jack: 10,
    Queen: 10,
    King: 10
  };
  let [Aces, noAces] = separateAces(cards);
  let sumNoAces = noAces.reduce(((sum,card) => sum + CARD_VALUES[card]),0);
  let sumAces = Aces.reduce(((sum,card) => {
    return sum + CARD_VALUES[card]['lessOrEqualTo21'];
  }),0);
  let totalSum = sumNoAces + sumAces;

  for (let idx = 0; (idx < Aces.length) && (totalSum > 21); idx += 1) {
    sumAces =
      sumAces -
      CARD_VALUES.Ace.lessOrEqualTo21 +
      CARD_VALUES.Ace.greaterThan21;
    totalSum = sumNoAces + sumAces;
  }

  return totalSum;
}

function separateAces (cards) {
  let Aces = cards.filter(card => card === 'Ace');
  let noAces = cards.filter(card => card !== 'Ace');
  return [Aces,noAces];
}

function playerHitsOrStays() {
  console.log(`PLAYER'S TURN:`);
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
  prompt(`   You:    ${playerHandValue} ${playerBustedPrompt}`);
  prompt(`Dealer: ${dealerHandValue}  ${dealerBustedPrompt}`);
  console.log('');
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

  let player = {header: 'PLAYER'};
  let dealer = {header: 'DEALER'};
  let gameOver = false;
  let deck = initializeDeck();
  let cardsDealed = 2;

  player.cards = dealCards(deck,cardsDealed);
  player.handValue = handValue(player.cards);

  dealer.cards = dealCards(deck, cardsDealed);
  dealer.handValue = handValue(dealer.cards);
  displayCards(player.cards, dealer.cards);
  cardsDealed = 1;

  while (!gameOver) {
    let playerChoice = playerHitsOrStays();
    console.clear();

    if (playerChoice === 'stay') break;

    player.cards = updateHand(player.cards, deck, cardsDealed);
    player.handValue = handValue(player.cards);
    displayCards(player.cards, dealer.cards);

    if (isBusted(player.handValue)) {
      gameOver = true;
    }
  }

  while ((!gameOver) && (dealer.handValue < 17)) {
    dealer.cards = updateHand(dealer.cards, deck, cardsDealed);
    dealer.handValue = handValue (dealer.cards);

    if (isBusted(dealer.handValue)) {
      gameOver = true;
    }
  }
  let showAllDealerCards = true;
  displayCards(player.cards, dealer.cards, showAllDealerCards);

  displayHandsValue(player.handValue,dealer.handValue);


  let winner = findWinner(player.handValue, dealer.handValue);
  displayWinner(winner);
} while (playAgain() === 'y');
/*
dealer's turn while loop condition fixed (<17)
*/