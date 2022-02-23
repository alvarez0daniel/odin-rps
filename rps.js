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
    userName: '',
    score: 0, 
    selection: ''
  };
  const computer = {
    userName: 'Computer',
    score: 0,
    selection: ''
  };
  
  player.userName = prompt('What is your first name?').toUpperCase();
  
  for (let currentRound = 1; currentRound <= rounds; currentRound++) {
    player.selection = playerSelect(OPTIONS);
    computer.selection = computerPlay(OPTIONS);

    const RESULT = playRound(player.selection, computer.selection);

    console.log('Round: ', currentRound);

    switch (RESULT) {
      // Win: increment player score, increment round
      case 'WIN':
        player.score++;
        console.log(RESULT);
        console.log(player.userName, ': ', player.score);
        console.log(computer.userName, ': ', computer.score);
        break;
      
      case 'LOSS':
        computer.score++;
        console.log(RESULT);
        console.log(player.userName, ': ', player.score);
        console.log(computer.userName, ': ', computer.score);
        break;
        
      case 'TIE':
        console.log(RESULT);
        console.log(player.userName, ': ', player.score);
        console.log(computer.userName, ': ', computer.score);
        break;

      // this should never trigger
      default:
        alert('ERROR')
        break;
    }
  }
  // display results
  if (player.score === computer.score) {
    console.log('It\'s a tie!');
  } else {
    if (player.score <= computer.score) {
      console.log('Sorry ', player.userName, ' you lost!');
    } else {
      console.log('Congratulations ', player.userName, ' you won!');
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