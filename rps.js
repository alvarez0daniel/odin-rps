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

// return result after compare
const playRound = (player, computer) => {
  // if tie
  if (player === computer) return 'TIE';
  // if loss
  if (player === 'ROCK' && computer === 'PAPER' ||
      player === 'PAPER' && computer === 'SCISSORS' ||
      player === 'SCISSORS' && computer === 'ROCK') {
        return 'LOSS';
      }
  // if win
  return 'WIN';
};

// play rock, paper, scissors for set number of rounds
const game = (rounds) => {
  const OPTIONS = ['ROCK', 'PAPER', 'SCISSORS'];

  const player = {
    score: 0, 
    selection: ''
  };
  const computer = {
    score: 0,
    selection: ''
  };
  
  for (let currentRound = 1; currentRound <= rounds; currentRound++) {
    player.selection = playerSelect(OPTIONS);
    computer.selection = computerPlay(OPTIONS);

    const RESULT = playRound(player.selection, computer.selection);

    console.log('Current Round: ', currentRound)

    switch (RESULT) {
      // Win: increment player score, increment round
      case 'WIN':
        player.score++;
        console.log(RESULT);
        console.log('player: ', player.score);
        console.log('computer: ', computer.score);
        break;
      
      case 'LOSS':
        computer.score++;
        console.log(RESULT);
        console.log('player: ', player.score);
        console.log('computer: ', computer.score);
        break;
        
      case 'TIE':
        console.log(RESULT);
        console.log('player: ', player.score);
        console.log('computer: ', computer.score);

      // this should never trigger
      default:
        alert('ERROR')
        break;
    }


  }
}

game(5);

// const player = playerSelect(OPTIONS);
// const computer = computerPlay(OPTIONS);

// let result = playRound(player, computer)

// console.log('player: ', player);
// console.log('computer: ', computer);
// console.log('result: ', result);