import {Card} from './Card';

export class Game {
  private cards: Card[];
  private selectedCard!: Card | null;
  
  constructor(cards: Card[]) {
    this.cards = cards;
    this.initialize();
    console.log("cards:::", this.cards.length);
  }

  public initialize(): void {
    this.selectedCard = null;
    this.flipAllCards();
  }

  public selectCard(card: Card):void {

    console.log("Selected card Value: ", card.getRank(), card.getSuite() )
    if(this.selectedCard === null) {
      this.selectedCard = card;
      card.flipCard();
    } else {  
      card.flipCard();
      // check for a match

      if (!this.selectedCard.isEqualRank(card)) {
        console.log("\nCards don't match.. you loose")
        card.flipCard();
        this.selectedCard.flipCard();
      } else {
        //set these cards aside
        this.removeCards(this.selectedCard, card)
        console.log("\nYou won... :)")
      }
      // reset selected card

      this.selectedCard = null;
    }

  }

  private removeCards(card1: Card, card2: Card) : void {
    this.cards.forEach((card: Card, i: number) => {
      if (card1.isEqual(card) || card2.isEqual(card) ) {
        console.log("removing cards :::", card.getRank(), card.getSuite(), i);
        this.cards.splice(i, 1)
      }
    });
    console.log("Remaining cards:::", this.cards.length);
  }

  private flipAllCards(): void {
    this.cards.forEach((card: Card) => {
      card.flipCardFaceDown();
    });
  }
}