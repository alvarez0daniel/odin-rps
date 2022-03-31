function playerSelect(e) {
  return e.target.getAttribute("data-weapon");
}

function compSelect(){
  return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function playRound(player, comp) {
  if (player === comp) {
    scoreBoardObj.outcome = 'tie';
  } else if (
    (player === 'rock' && comp === 'paper') ||
    (player === 'paper' && comp === 'scissors') ||
    (player === 'scissors' && comp === 'rock')
  ) {
    scoreBoardObj.outcome = 'loss';
    scoreBoardObj.compScore++;
  } else {
    scoreBoardObj.outcome = 'win';
    scoreBoardObj.playerScore++;
  }
  scoreBoardObj.playerLastSelection = player;
  scoreBoardObj.compLastSelection = comp;
  scoreBoardObj.round++;
}

function outcomeMessage(){
  let message = '';
  switch (scoreBoardObj.outcome) {
    case 'win':
      message = `Good job! ${scoreBoardObj.playerLastSelection.toUpperCase()} beats ${scoreBoardObj.compLastSelection.toUpperCase()}.` ;
      break;
    case 'loss':
      message = `Rats! ${scoreBoardObj.compLastSelection.toUpperCase()} beats ${scoreBoardObj.playerLastSelection.toUpperCase()}.` ;
       break;
   case 'tie':
      message = `Tie! You both chose ${scoreBoardObj.playerLastSelection.toUpperCase()}.` ;
      break;
    default:
      message = "Error"
      break;
  }
  return message;
}

function updateScoreBoardUI() {
  
  playerScoreElem.innerText = scoreBoardObj.playerScore.toString();
  compScoreElem.innerText = scoreBoardObj.compScore.toString();
  roundElem.innerText = scoreBoardObj.round.toString();
  outcomeElem.innerText = outcomeMessage();


}

function initWeapons(nodeList){
  nodeList.forEach(node => {
    node.addEventListener('click', e => {
      const playerSelection = playerSelect(e);
      const compSelection = compSelect();
      
      playRound(playerSelection, compSelection);
      updateScoreBoardUI();
    });
  });
}

const weaponNodeList = document.querySelectorAll('[data-weapon]');
const playerScoreElem = document.querySelector('[data-score="player-score"]');
const compScoreElem = document.querySelector('[data-score="comp-score"]');
const roundElem = document.querySelector('[data-score="round"]');
const outcomeElem = document.querySelector('[data-outcome]');

const scoreBoardObj = {
  'playerScore': 0,
  'compScore': 0,
  'round': 0,
  'playerLastSelection': '',
  'compLastSelection': '',
  'outcome': ''
};

initWeapons(weaponNodeList);