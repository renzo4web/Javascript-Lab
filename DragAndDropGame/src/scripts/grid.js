export const grid = document.querySelector('.grid');
const width = 10;
const layoutLength = 100;

const emojisArray = ["✌", "😂", "😝", "😁", "😱", "👉", "🙌", "🍻", "🔥", "🌈", "☀", "🎈", "🌹", "💄", "🎀", "⚽", "🎾", "🏁", "😡", "👿", "🐻", "🐶", "🐬", "🐟", "🍀", "👀", "🚗", "🍎", "💝", "💙", "👌", "❤", "😍", "😉", "😓", "😳", "💪", "💩", "🍸", "🔑", "💖", "🌟", "🎉", "🌺", "🎶", "👠", "🏈", "⚾", "🏆", "👽", "💀", "🐵", "🐮", "🐩", "🐎", "💣", "👃", "👂", "🍓", "💘", "💜", "👊", "💋", "😘", "😜", "😵", "🙏", "👋", "🚽", "💃", "💎", "🚀", "🌙", "🎁", "⛄", "🌊", "⛵", "🏀", "🎱", "💰", "👶", "👸", "🐰", "🐷", "🐍", "🐫", "🔫", "👄", "🚲", "🍉", "💛", "💚"];

export let squares = [];
export let gridCells = "";


const getRandomEmoji = () => {
    const rnd = Math.floor(Math.random() * 10);
    return emojisArray[rnd];
};

const checkPosition = (drag, drop) => {
    // Right
    // if ((drag.tabIndex + 1) === drop.tabIndex) {
    //     console.log('Right');
    // }
    // if ((drag.tabIndex - 1) === drop.tabIndex) {
    //     console.log('left');
    // }
    //
    // if ((drag.tabIndex + width) === drop.tabIndex) {
    //     console.log('down');
    // }
    //
    // if ((drag.tabIndex - width) === drop.tabIndex) {
    //     console.log('up');
    // }

    return (drag.tabIndex + 1) === drop.tabIndex
        || (drag.tabIndex - 1) === drop.tabIndex ||
        (drag.tabIndex + width) === drop.tabIndex ||
        (drag.tabIndex - width) === drop.tabIndex;
};

let currDrag = '';
let currDrop = '';

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

        // div.ondrop = function (event) {
        //     event.preventDefault();
        //     console.log(event.target.textContent);
        // };

        div.ondragover = (event) => {
            event.preventDefault();
            currDrop = event.target;
            if (!checkPosition(currDrag, currDrop)) {
                return;
            }
            if (currDrag.textContent === currDrop.textContent) {
                event.target.style.background = "red";
            }

        };

        div.textContent = getRandomEmoji();
        grid.insertAdjacentElement('beforeend', div);
        squares.push(div);
    }

    gridCells = document.querySelectorAll('.box');
};