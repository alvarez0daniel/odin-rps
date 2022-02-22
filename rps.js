// display a welcome message to the user
const welcomeMessage = () => console.log('Welcome to my Rock, Paper, Scissors game! You will enter your selection into the prompt and then the computer will choose. May the best man or machine win!');

// take in array of options and computer chooses rock, paper, or scissors randomly; returns selection
const computerPlay = ( optionsArr ) => {
  return optionsArr[ Math.floor( Math.random() * 3 ) ];
};

// use Window.prompt() to get user selection; return selection in uppercase
let playerSelect = () => {
  const selection = prompt("Rock, Paper, Scissor?");
  return selection.toUpperCase() ;
};

// validate user input exists in array
const validate = ( input, optionsArr ) => {
  return optionsArr.includes( input );
}