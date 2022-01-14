const readline = require('readline-sync');
const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const deck = [];

function makeDeck() {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const cardObj = {
          suit: suits[i],
          value: values[j],
          display: values[j] + " of " + suits[i]
      };
    deck.push(cardObj);
    }
  }
}

function dealOneCard() {
    let randomIndex = Math.floor(Math.random() * deck.length - 1);
    const randomCard = deck.splice(randomIndex, 1);
    console.log(randomCard)
    return randomCard[0];
}

const dealerHands = [];
const playerHands = [];

function setUp() {
  // set up the round
  playerHands.push(dealOneCard());
  dealerHands.push(dealOneCard());
  playerHands.push(dealOneCard());
  dealerHands.push(dealOneCard());
}

function calculateTotal(array){
  let total = 0;
  for (let i = 0; i < array.length; i++) {
      const currentCard = array[i];
      if(currentCard.value == 'K' || currentCard.value == 'Q' || currentCard.value == 'J'){
        total += 10;
      }
      else if(currentCard.value == 'A'){
        total += 1;
      }
      else {
        total += parseInt(currentCard.value);
      }
  }
  return total;
}

function calculateAndDisplay() {
  dealerHands.forEach((card, index) => {
    const properNumber = index + 1;
    console.log(`Dealer's ${properNumber} Card: ${card.display}`);
  });
  console.log(`Dealer's Total: ${calculateTotal(dealerHands)}`);
  playerHands.forEach((card, index) => {
    console.log(`Player's ${index + 1} Card: ${card.display}`);
  });;
  console.log(`Player's Total: ${calculateTotal(playerHands)}`);
}

function nextStep(userInput){
  if(userInput == 'H'){
    playerHands.push(dealOneCard());
    return true;
    }
  else if (userInput == 'S'){
    return false;
    }
  else {
    console.log("Invalid Input, Please Try Again.");
    return userInput;
  }
}
  //function dealerTurn()
  //if dealer total is 16 or less must hit
  //if delaer total is 17 or more must stay
  //waits till after play to go again
  


function playGame() {
  makeDeck();
  setUp();
  calculateAndDisplay();
  let next = true;
  while (next) {
      const userInput = readline.question("H/S ").toUpperCase();
      if(next && calculateTotal(playerHands) < 21 ){
        next = nextStep(userInput);
        calculateAndDisplay();
      }
      else if(calculateTotal(playerHands) === 21){
        console.log('Winner!!');
        next = false;
      }
      else{
        console.log("Busted!!");
        next = false;
      }
  }
  // players choice
}

playGame();

// homework:
// 1. review the refactor code✔
// example for foreach
// [1, 2, 3, 4]
// try different things with for each to get your desired result
// 2. validate the user input
// if user puts in like lower cases or G✔
// reprompt the userInput
// 3. code out the busting condition in while loop
// 4. psuedocode and plan for dealers actions
// 5. feeling brave, code it
// 6. BONUS: inside calculateTotal function, replace the if statements by using an object!!!!
