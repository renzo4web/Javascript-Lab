let startMachine;

let human;

let machine;

const generatePlayers = () => {
  human = {
    name: 'Humano',
    score: 0,
    stack: [],
    win: false,
    cardsTaken: 0,
    stop: false,
  };
  machine = {
    name: 'Terminator',
    score: 0,
    stack: [],
    win: false,
    cardsTaken: 0,
    stop: false,
  };

};
generatePlayers();

const generateRndNum = (range) => {
  return Math.floor(Math.random() * range);
};

const generateDeck = (who) => {
  const cardTypes = ['C', 'D', 'H', 'S']; //e.g 2C
  const others = ['J', 'K', 'Q', 'A']; // ej 2
  const rnd = generateRndNum(11);
  if (rnd < 10 && rnd >= 2) {
    const cardTypeRnd = generateRndNum(4);
    who.stack = (rnd + cardTypes[cardTypeRnd]);
    who.score += rnd;
  } else {
    const numRnd = generateRndNum(4);
    who.stack = (others[numRnd] + cardTypes[generateRndNum(4)]);
    (others[numRnd] === 'A') ? who.score += 11 : who.score += 10;
  }
};

const createCard = (player, domContainer) => {
  const cardImg = document.createElement('img');
  cardImg.src = `./cartas/${player.stack}.png`;
  domContainer.insertAdjacentElement('beforeend', cardImg);
  player.cardsTaken++;
  updateScoreLabel(player);
};

const updateScoreLabel = (player) => {
  (player === human) ?
      playerScore.textContent = human.score :
      machineScore.textContent = machine.score;
};

const machineStop = () => clearInterval(startMachine);

const stopPlaying = (who) => {

  if (who.score === 21) {
    console.log(who);
    alert(`${who.name} WIN!!!`);
    machineStop();
  } else {
    btnTakeCard.disabled = true;
  }

};

const scoreOnGame = (playing, adversary) => {

  if (machine.score > human.score && machine.score <= 21) {
    alert('Machine Win Score: ' + machine.score);
    machine.win = true;
    machineStop();
    return;
  }

  if (playing.score > 21) {
    alert(`${adversary.name} Win`);
    adversary.win = true;
    machineStop();
    return;
  }

  if (playing.cardsTaken >= 4) {
    machineStop();
    console.log('...');
  }

};

btnStop.addEventListener('click', playerStopGame);

btnTakeCard.addEventListener('click', handleClick);

const machinePlays = () => {
  scoreOnGame(machine, human);

  if (machine.win) {
    machineStop();
    return;
  }
  if (!human.win) {
    generateDeck(machine);
    createCard(machine, machineCards);
  }

};

const resetGame = () => {
  [
    playerCards,
    playerScore,
    machineCards,
    machineScore].
      forEach(
          element => element.innerHTML = '');
  btnTakeCard.disabled = false;
};

const playerStopGame = () => {

  if (human.score > 21) {
    alert(`${machine.name} Win`);
    machine.win = true;
    return;
  }
  startMachine = setInterval(machinePlays, 300);
};

const handleClick = () => {

  if (human.win) {
    machineStop();
    return;
  }

  generateDeck(human);
  createCard(human, playerCards);
  scoreOnGame(human, machine);

};

btnNewGame.addEventListener('click', () => {
  generatePlayers();
  resetGame();
});