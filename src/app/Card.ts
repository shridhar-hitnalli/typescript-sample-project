export type Suite = "Heart" | "Diamond" | "Spade" | "Club"; 
export type Rank = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "Jack" | "Queen" | "King" | "Ace" ;
export type Joker = "J1" | "J2"
/**
 * Card class with isEqual method
 */
export class Card {
  private rank: Rank | Joker;
  private suite: Suite | "Joker";
  private visible : boolean; 

  constructor(rank: Rank | Joker, suite: Suite | "Joker") {
    this.rank = rank;
    this.suite = suite;
    this.visible = false;
  }

  isEqualRank = (otherCard: Card) => {
    if (this.rank === "J1" || otherCard.rank === "J1") { return true }
    if (this.rank === "J2" || otherCard.rank === "J2") { return true }
    return this.rank === otherCard.rank;

  }

  isEqual = (otherCard : Card) => {
    if (this.rank === otherCard.rank && this.suite === otherCard.suite) { return true }
  }

  getRank() : Rank | Joker {
    return this.rank;
  }

  getSuite() : Suite | "Joker" {
    return this.suite;
  }

  flipCard(): void {
    this.visible = !this.visible;
  }

  isVisible(): boolean {
    return this.visible;
  }

  flipCardFaceDown(): void {
    this.visible = false;
  }

  toString() : string {
    return this.rank + " of " + this.suite;
  }

}