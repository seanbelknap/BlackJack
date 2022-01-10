const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const deck = [];

//set values to A, J, K, Q

// const cardsObjExample = {
//     suit: "Heart",
//     value: "A"
// }

function makeDeck() {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      // deck.push(values[j] + ' of ' + suits[i]);
      const cardObj = {
          suit: suits[i],
          value: values[j],
          display: values[j] + " of " + suits[i]
      };
    //   deck.push({suit: suits[i], value : values[j]});
    deck.push(cardObj);
    }
  }
//   console.log(deck);
}

makeDeck();

// console.log(deck.length);
// const pullRandomCard = deck[Math.floor(Math.random() * deck.length - 1)]

function dealOneCard() {
    let randomIndex = Math.floor(Math.random() * deck.length - 1);

    const randomCard = deck.splice(randomIndex, 1); // this will remove the random card at its index
    // console.log(deck); // this will verify the deck is without the random card
    // console.log(randomCard)
    return randomCard[0];
}

// eventually, we want to have a playGame function

const dealerHands = [];
const playerHands = [];


function playGame() {

    // set up the round
    dealerHands.push(dealOneCard(0));
    dealerHands.push(dealOneCard(1));
    playerHands.push(dealOneCard());
    playerHands.push(dealOneCard());
    displayHands();
    // players choice
}
let array = dealOneCard();

function calculateTotal(array) {
    // the function will be invoked with either the player array or dealer array
  let total = 0;
  for(value in array){
    if (array[0].value == 'K' || array[0].value == 'Q' || array[0].value == 'J'){
      total += 10;
    } else if (array[0].value == 'A'){
      total += 1;
      } else {
        total += parseInt(array[0].value);
      }
    // create a function that will calculate the "value" total of the array
   } // return a string value of the numeric total
  console.log(total);
}

calculateTotal();

function displayHands() {
    console.log("dealer first card: " + dealerHands[0].display);
    console.log("dealer second card: " + dealerHands[1].display);
    console.log("Dealer hand total: " + "21");

    console.log("player first card: " + playerHands[0].display);
    console.log("player second card: " + playerHands[1].display);
    console.log("player hand total: " + '');
}

playGame();
//create a dealer hand
  //randomize hand from deck

//create a player hand
  //randomize hand from deck


// compare decks
