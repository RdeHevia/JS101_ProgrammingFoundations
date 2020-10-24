## Rules

* 52 cards (Hearts, Diamonds, Clubs, Spades) x (Ace, 2...10, Jack, Queen, King)
* **Goal**: get as close as 21 as we can
* **Setup**
  * Dealer (AI): starts with 2 cards.
  * Player: starts with 2 cards. The player can see 1 of dealer's card.
* **Card values**
  * Ace: 
    * 11 if the sum of all card values is less or equal to 21. E.g. 2, Ace, 5 = 2 +11 + 5 = 18 <=21
    * 1 if the sum is greater than 21. E.g. 2, Ace, 5, Ace, Ace:
      *  = 2 + 11 + 5 + 11 + 11 = 40 >= 21. Try with one ace = 1
      * = 2 + 11 + 5 + 11 + 1 = 30 >= 21. Try with two aces = 1
      * = 2 + 11 + 5 + 1 + 1 = 20 <= 21 OK
  * 2-10: face value
  * Jack, Queen, King: 10
* **Player turn**
  * He always goes first.
  * He can decide either **hit** or **stay**.
    * Hit: he is dealt another card
    * Stay: ends player turn
* **Dealer turn**
  * **Hit** until the sum of his cards is >= 17
  * Stay after card total value >= 17
* **Winner**
  * If both players' card values are <=21, the one that is closer to 21 wins
  * If one player's card values are >21, this players loses. It's a **bust**

## High level pseudocode

1. Initialize the deck (suffle)

2.  give 2 random cards to player and dealer

3. Player turn. hit or stay:

   * Hit: 
     * Deal 1 random card to player
     * Calculate total value of the cards. If cards value > 21 -> go to _Determine the winner_ step.
     * Ask player to hit or stay. Repeat loop until he busts or decides to stay.

   * Stay: Ends player's turn.

4. Dealer turn. He has to hit until the following conditions are met:

   * Hit:
     * Deal 1 random card
     * Calculate total value of the cards. If cards value > 21 => go to _Determine the winner_ step.
     * Repeat loop until card values >= 17 or he busts.
   * Stay: Ends dealer's turn.

5. Determine the winner

   * If one player is busted, the other wins
   * Compare card values. The one closer to 21 wins

## Data structure

cardValues = {}

deck = []

playerCards = []

player = { cards: [], handValue: number}

dealer = { cards: [], handValue: number}

## Main body pseudocode



```pseudocode
SET deck = initializeDeck () <- shuffleDeck() inside
SET player = {}
SET dealer = {}
SET winner = ''
player.cards = dealCards(deck,nbrOfCards = 2)
player.handValue = handValue (player.cards) 
updateDeck(deck, playerCards) NOT NEEDED

dealer.cards = dealCards(deck,nbrOfCards = 2)
dealer.handValue = handValue (dealer.cards) 
updateDeck(deck, dealer.cards) NOT NEEDED

displayCards (playerCards, dealerCards[0])
//Player's turn
WHILE true
	SET playerChoice = GET input from user ('hit' or 'stay')
	IF playerChoice = 'stay' -> break the loop
	IF playerChoice = 'hit':
    player.cards = dealCards(deck, nbrOfCards = 1)
    updateDeck(deck, playerCards)
    player.handValue = handValue (player.cards)
    IF isBusted(player.handValue)
    	winner = 'dealer'
    	break the loop
WHILE true
	dealer.cards = dealerTurn(deck, dealer.cards)
	updateDeck(deck, dealer.cards)
	dealer.handValue = handValue (dealer.cards)
	IF isBusted(dealer.handValue)
		winner = 'player'
		break the loop
	IF dealer.handValue >= 17 => break the loop

IF (!winner)
	winner = findWinner(player.handValue,dealer.handValue)

```

## function handValue (cards)

```pseudocode
FUNCTION handValue(cards)
  SET CARD_VALUES
	SET [Aces, noAces] = separateAces(cards)
	SET sumNoAces = noAces.reduce()
	SET sumAces = Aces.reduce() //with value = 11
	SET index = 0
	WHILE sumNoAces + sumAces > 21 AND idx < Aces.length
		sumAces = sumAces - CARD_VALUES.Ace.lessOrEqualto21 + CARD_VALUES.Ace.greaterThan21
		idx += 1
	END WHILE
	return sumNoAces + sumAces		

```

```pseudocode
FUNCTION separateAces(cards)
	SET Aces = cards.filter('Aces')
	SET NoAces = cards.filter(!'Aces')
	RETURN [Aces,NoAces];
```



