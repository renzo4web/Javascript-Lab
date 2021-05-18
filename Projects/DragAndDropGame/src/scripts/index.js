import '../styles/index.scss';
import {createGrid} from "./grid";

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}

console.log('webpack starterkit');

createGrid();

// const boxDrag = document.querySelector('.drag');
// const boxDrop = document.querySelector('.drop');
//
// boxDrag.addEventListener('drag', () => {
//     console.log("DRAGGED");
// });
//
// boxDrag.addEventListener('dragend', () => {
//     console.log("END");
// });
//
// boxDrop.addEventListener('ondragenter', () => {
//     console.log("dropenm");
// });
//
// document.addEventListener("dragover", function (event) {
//     // prevent default to allow drop
//     event.preventDefault();
// }, false);
//
//
// document.addEventListener("dragenter", function (event) {
//     // highlight potential drop target when the draggable element enters it
//     if (event.target.classList.contains("drop")) {
//         event.target.style.background = "purple";
//     }
//
// }, false);