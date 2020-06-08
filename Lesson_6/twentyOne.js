// question: ok side effects for function dealCards ()?
let readline = require('readline-sync');
function prompt (message) {
  console.log(`=> ${message}`);
}

function welcomeScreen () {
  console.clear();
  console.log('WELCOME TO THE 21 GAME!\n');
  prompt('Please press any key to start...');
  readline.question();
  console.clear();
}

function displayCards (playerCards, dealerCards) {
  prompt(`You cards: ${playerCards.join(', ')}`);
  prompt(`Dealer shows: ${dealerCards[0]}`);
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

let player = {};
let dealer = {};
let winner = '';

welcomeScreen();
let deck = initializeDeck();
let cardsDealed = 2;
player.cards = dealCards(deck,cardsDealed);
player.handValue = handValue(player.cards);

dealer.cards = dealCards(deck, cardsDealed);
dealer.handValue = handValue(dealer.cards);
displayCards(player.cards, dealer.cards);
cardsDealed = 1;

while (true) {
  console.log(`PLAYER'S TURN:`);
  prompt(`Do you want to hit (h) or stay (s) ?`);
  let playerChoice = readline.question();
  if (playerChoice === 's') break;

  player.cards.push(dealCards(deck,cardsDealed));
  player.handValue = handValue(player.cards);
  displayCards(player.cards, dealer.cards);

  if (isBusted(player.handValue)) {
    winner = 'dealer';
    break;
  }
}

while ((!winner) && (dealer.handValue >= 17)) {
  dealer.cards.push(dealCards(deck,cardsDealed));
  dealer.handValue = handValue (dealer.cards);
  if (isBusted(dealer.handValue)) {
    winner = 'player';
    break;
  }
}

if (!winner) {
  winner = closerTo21 (player.handValue, dealer.handValue);
}
console.log(`PLAYER:`);
console.log(`   - CARDS: ${player.cards.join(', ')}`);
console.log(`   - HAND VALUE: ${player.handValue}`);

console.log(`DEALER:`);
console.log(`   - CARDS: ${dealer.cards.join(', ')}`);
console.log(`   - HAND VALUE: ${dealer.handValue}`);

if (winner === 'none') {
  prompt (`IT'S A TIE!`);
} else {
  prompt(`${winner.toUpperCase()} WON!`);
}