// display a welcome message to the user
const welcomeMessage = () => console.log('Welcome to my Rock, Paper, Scissors game! You will enter your selection into the prompt and then the computer will choose. May the best man or machine win!');

// take in array of options and computer chooses rock, paper, or scissors randomly; returns selection
const computerPlay = ( optionsArr ) => {
  return optionsArr[ Math.floor( Math.random() * 3 ) ];
};

// use Window.prompt() to get user selection; validate input; return selection in uppercase
let playerSelect = ( options ) => {
  const selection = prompt("Rock, Paper, Scissor?");
  if ( !validate( selection.toUpperCase(), options )) {
    // keep trying for valid; return when valid
   return  playerSelect( options );
  } else {
    return selection.toUpperCase();
  }
};

// validate user input exists in array
const validate = ( input, optionsArr ) => {
  return optionsArr.includes( input );
}

const OPTIONS = ['ROCK', 'PAPER', 'SCISSORS']

let playerSelection = playerSelect ( OPTIONS );

console.log( playerSelection );