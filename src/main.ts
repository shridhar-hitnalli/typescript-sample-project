import { DeckOfCards } from './app/Deck'
import {Game} from './app/Game';

console.log('running...');

// Build the deck
const Deck = new DeckOfCards();

console.log(`\nThis is the deck after being built:`);
console.log(`${Deck.deck.map(card => `${card.getRank()}\t`).join(' ')}`);

const PlayGame = new Game(Deck.deck);

Deck.shuffleDeck();
console.log(`\nThis is after shuffle:`);
console.log(`${Deck.deck.map(card => `${card.getRank()}\t`).join(' ')}`);

// // Draw cards
// console.log(`\nDrawing some cards...`)

// for (let index = 1; index < 3; index++) {
//   let card = Deck.drawCard();
//   if (!card) {
//     console.error('Error : card is not defined')
//   } else {
//     console.log(`Card ${index} - ${card.value}`);
//   }
// }

//now lets see if the select card pair game is working...
//Select card will select the card and then it will flip over to make it visible
//next select card will flip another card and see if it matches earlier card

for (let index = 0; index < 10; index++) {
    console.log('\nselect first card')
    let randomIndex = Math.floor(Math.random() * index);
    PlayGame.selectCard(Deck.deck[randomIndex]);
    console.log('select second card');
    randomIndex = Math.floor(Math.random() * (52 - index + 1) + index);
    PlayGame.selectCard(Deck.deck[randomIndex]);
}
console.log("Game over..")