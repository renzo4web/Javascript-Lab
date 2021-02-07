const canvas = document.getElementById('etch-a-sketch');
const ctx = canvas.getContext('2d');
const btnShake = document.querySelector('.btn-shake');

const {width, height} = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// Configure Stroke
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = rndStrokeColor();
ctx.lineWidth = 25;

startDot();

function draw({key}) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.strokeStyle = rndStrokeColor();
  switch (key) {
    case 'ArrowUp':
      y -= 10;
      break;
    case 'ArrowRight':
      x += 10;
      break;
    case 'ArrowDown':
      y += 10;
      break;
    case 'ArrowLeft':
      x -= 10;
      break;
    default:
      console.log('Error');
      break;
  }

  if (x > width || x < 0) {
    startDot();
  } else if (y > height || y < 0) {
    startDot();
  }
  console.log(ctx.strokeStyle);
  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(e) {

  if (e.key.includes('Arrow')) {
    e.preventDefault(); // block scroll
    draw({key: e.key});
  }
  canvas.classList.remove('shake');
}

document.addEventListener('keydown', handleKey);

btnShake.addEventListener('click', shake);

function shake() {
  canvas.classList.add('shake');
  startDot();
}



function startDot() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  x = Math.floor(Math.random() * width);
  y = Math.floor(Math.random() * height);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y);
  ctx.stroke();
}


function rndStrokeColor(){
  return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
}