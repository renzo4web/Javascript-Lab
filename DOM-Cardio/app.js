// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.insertAdjacentElement('afterbegin', div);
// make an unordered list
const uList = document.createElement('ul');
// add three list items with the words "one, two, three" in them
let items = ['one', 'two', 'three'];
items.forEach((element) => {
  let li = document.createElement('li');
  li.textContent = element;
  uList.appendChild(li);
});
// put that list into the above wrapper
div.insertAdjacentElement('beforebegin', uList);
// create an image
const img = document.createElement('img');
// set the source to an image
img.src =
  'https://i0.wp.com/www.trackzion.com/wp-content/uploads/2020/10/Captura-de-pantalla-2020-10-19-a-las-23.07.16.png';
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'mfdoom';
// Append that image to the wrapper
div.insertAdjacentElement('afterbegin', img);
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
let divString = '<div>' + '<p class="warning">Hello</p>' + '</div>';
// add a class to the second paragraph called warning
// remove the first paragraph
uList.insertAdjacentHTML('beforebegin', divString);

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  let div = `<div class="playerCard">
 <h2>${name} — ${age}</h2>
 <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
  <button>DELETE</button>
 </div>`;
  return div;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const divCards = document.createElement('div');
divCards.classList.add('cards');
// make 4 player cards using generatePlayerCard
let cards = [
  generatePlayerCard('renzo', 23, 175),
  generatePlayerCard('renzo', 23, 175),
  generatePlayerCard('Carl', 43, 155),
  generatePlayerCard('Paul', 33, 165),
];
// append those cards to the div
cards.forEach((element) => {
  divCards.innerHTML += element;
});

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', divCards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const btns = document.querySelectorAll('button');
// make out delete function
function deleteCards(event) {
  console.log(event);
  let cardBtn = event.currentTarget;
  //closest() pick the most closes ascendent selectos that matchet the argument
  cardBtn.closest('.playerCard').remove();
}

// loop over them and attach a listener
btns.forEach((element) => {
  element.addEventListener('click', (e) => {
    deleteCards(e);
  });
});
