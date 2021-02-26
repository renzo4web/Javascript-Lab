let startMachine;
const human = {
  name: 'The Human',
  score: 0,
  stack: [],
  win: false,
  cardsTaken: 0,
  stop: false,
};

const machine = {
  name: 'Terminator',
  score: 0,
  stack: [],
  win: false,
  cardsTaken: 0,
  stop: false,
};

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

const checkScore = () => {

  // player.win = (player.score === 21)
  switch (machine) {
    case machine.score === 21 :
      alert('machine win with 21');
      break;
    case human === 21 :
      alert('human in with 21');
      break;
    case machine < human:
      // machine.win = false;
      // human.win = true;
      console.log(human);
      alert(`Human ${human.score} Win , Machine ${machine.score}`);
      break;
    default:
      machine.win = true;
      alert(`Machine ${machine.score} Win , Human ${human.score}`);
      break;
  }
  machineStop();

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

btnStop.addEventListener('click', () => {
  // human.stop = true;
  stopPlaying(human);
  startMachine = setInterval(machinePlays, 300);
});

btnTakeCard.addEventListener('click', () => {

  if (human.score > 21) {
    alert('Human Lost');
    return;
  }

  if (human.cardsTaken >= 4) {
    stopPlaying(human);
    startMachine = setInterval(machinePlays, 300);
  }
  generateDeck(human);
  createCard(human, playerCards);

});

const machinePlays = () => {

  if (machine.score > human.score) {
    alert('Machine Win Score: ' + machine.score);
    machineStop();
    return;
  }

  if (machine.score > 21) {
    alert('Machine Lost');
    machineStop();
    return;
  }

  if (machine.cardsTaken >= 4) {
    checkScore(machine, human);
    console.log('...');
  }

  generateDeck(machine);
  createCard(machine, machineCards);
  stopPlaying(machine);

};

// TODO: check why after the result a one more card is displayed