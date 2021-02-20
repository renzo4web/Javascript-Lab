const turtle = document.querySelector('img');

let x = 0,
    y = 0;

window.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if (!event.key.includes('Arrow')) return;
  moveTurtle(event.key);
}

function moveTurtle(keypressed) {

  let translateTurtle = `translate(${x}px,${y}px)`;
  switch (keypressed) {
    case 'ArrowRight':
      x += 10;
      turtle.style.transform = translateTurtle;
      break;
    case 'ArrowLeft':
      x -= 10;
      turtle.style.transform = translateTurtle;
      break;
    case 'ArrowDown':
      turtle.style.transform = translateTurtle;
      y += 10;
      break;
    case 'ArrowUp':
      turtle.style.transform = translateTurtle;
      y -= 10;
      break;
    default:
      console.log('Key invalid');
      break;
  }

}