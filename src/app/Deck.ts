import { Card, Suite, Rank } from './Card'
import { shuffle } from './shuffle';

// constants to build the deck
const validSuites: Suite[] = ["Heart", "Diamond", "Spade", "Club"];
const validCards: Rank[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

export class DeckOfCards {
  public deck: Card[] = [];
  public cardsDrawn: Card[] = [];

  constructor() {
    this.buildDeck();
  }

  buildDeck() {
    this.deck = []; // reset deck
    this.cardsDrawn = []; // reset cards drawn
    this.deck.push(new Card("J1", "Joker"));
    this.deck.push(new Card("J2", "Joker"));
    validSuites.forEach(suite => {    // build deck
      validCards.forEach(rank => {
        this.deck.push(new Card(rank, suite));
      })
    });
  }

  // drawCard() {
  //   if (!this.isEmpty()) {
  //     const cardFromTop = this.deck.pop()
  //     if (cardFromTop) this.cardsDrawn.push(cardFromTop)
  //     return cardFromTop
  //   }
  //   return null
  // }

  shuffleDeck(times = 1) {
    for (let i=1; i <= times; i++) {
      shuffle(this.deck);
    }
  }

  isEmpty() {
    return this.deck.length === 0; 
  }
}