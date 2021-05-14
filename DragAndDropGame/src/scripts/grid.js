export const grid = document.querySelector('.grid');
const width = 10;
const layoutLength = 90;

const emojisArray = [
  '✌',
  '😂',
  '😝',
  '😁',
  '😱',
  '👉',
  '🙌',
  '🍻',
  '🔥',
  '🌈',
  '☀',
  '🎈',
  '🌹',
  '💄',
  '🎀',
  '⚽',
  '🎾',
  '🏁',
  '😡',
  '👿',
  '🐻',
  '🐶',
  '🐬',
  '🐟',
  '🍀',
  '👀',
  '🚗',
  '🍎',
  '💝',
  '💙',
  '👌',
  '❤',
  '😍',
  '😉',
  '😓',
  '😳',
  '💪',
  '💩',
  '🍸',
  '🔑',
  '💖',
  '🌟',
  '🎉',
  '🌺',
  '🎶',
  '👠',
  '🏈',
  '⚾',
  '🏆',
  '👽',
  '💀',
  '🐵',
  '🐮',
  '🐩',
  '🐎',
  '💣',
  '👃',
  '👂',
  '🍓',
  '💘',
  '💜',
  '👊',
  '💋',
  '😘',
  '😜',
  '😵',
  '🙏',
  '👋',
  '🚽',
  '💃',
  '💎',
  '🚀',
  '🌙',
  '🎁',
  '⛄',
  '🌊',
  '⛵',
  '🏀',
  '🎱',
  '💰',
  '👶',
  '👸',
  '🐰',
  '🐷',
  '🐍',
  '🐫',
  '🔫',
  '👄',
  '🚲',
  '🍉',
  '💛',
  '💚',
];

export let squares = [];
export let gridCells = '';
let currDrag = '';
let currDrop = '';
const scoreEl = document.querySelector('.score');
let playerScore = 0;

const getRandomEmoji = () => {
  const rnd = Math.floor(Math.random() * 10);
  return emojisArray[rnd];
};

const isNextPositionCorrect = (dragEl, dropEl) => {
  const isLeft = dragEl.tabIndex - 1 === dropEl.tabIndex;
  const isRight = dragEl.tabIndex + 1 === dropEl.tabIndex;
  const isUp = dragEl.tabIndex - width === dropEl.tabIndex;
  const isDown = dragEl.tabIndex + width === dropEl.tabIndex;

  return isLeft || isRight || isUp || isDown;
};

const increaseScore = () => {
  console.log('playerScore:', playerScore);
  playerScore += 10;
  console.log('playerScore:', playerScore);
  scoreEl.textContent = '';
  scoreEl.textContent = playerScore;
};

const remplaceWithNewEmoji = (dragEl, dropEl) => {
  [dropEl, dragEl].forEach((el) => (el.textContent = getRandomEmoji()));
};

export const createGrid = () => {
  squares = [];
  for (let i = 0; i < layoutLength; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.draggable = true;
    div.tabIndex = i;
    div.ondragstart = function (event) {
      currDrag = event.target;
      console.log('start');
    };

    div.ondragover = (event) => {
      currDrop = event.target;
      if (!isNextPositionCorrect(currDrag, currDrop)) {
        event.preventDefault();
        return;
      }
      if (currDrag.textContent === currDrop.textContent) {
        currDrag.style.animation = 'flash 1s linear';
        currDrop.style.animation = 'flash 1s linear';
        increaseScore();
        remplaceWithNewEmoji(currDrag, currDrop);
        return;
      }
    };

    div.textContent = getRandomEmoji();
    grid.insertAdjacentElement('beforeend', div);
    squares.push(div);
  }

  gridCells = document.querySelectorAll('.box');
};
