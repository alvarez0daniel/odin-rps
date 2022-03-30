function initWeapons(nodeList){
  nodeList.forEach(node => {
    node.addEventListener('click', e => {
      e.stopPropagation();
      console.log(e.target.getAttribute('data-weapon'));
      // const playerSelect = getPlayerSelection(e);
      // const compSelect = getCompSelection();

      // playRound(playerSelect, compSelect);
    });
  });
}

const weaponNodeList = document.querySelectorAll('[data-weapon]');
const playerScoreElem = document.querySelectorAll('[data-score="player"]');

initWeapons(weaponNodeList);