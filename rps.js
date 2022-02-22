// display a welcome message to the user
const welcomeMessage = () => console.log('Welcome to my Rock, Paper, Scissors game! You will enter your selection into the prompt and then the computer will choose. May the best man or machine win!');

// take in array of options and computer chooses rock, paper, or scissors randomly; returns selection
const computerPlay = ( optionsArr ) => {
  return optionsArr[ Math.floor( Math.random() * 3 ) ];
};

// use Window.prompt() to get user selection; validate input; return selection in uppercase
let playerSelect = ( options ) => {
  const selection = prompt("Rock, Paper, Scissor?");
  if ( !options.includes( selection.toUpperCase() )) {
    // keep trying for valid; return when valid
    alert('Invalid input. Please choose from: Rock, Paper, or Scissors.');
    return  playerSelect( options );
  } else {
    return selection.toUpperCase();
  }
};

const OPTIONS = ['ROCK', 'PAPER', 'SCISSORS'];

let playerSelection = playerSelect ( OPTIONS );

console.log( playerSelection );