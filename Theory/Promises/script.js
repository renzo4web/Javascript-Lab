// const makeCircle = (element) => {
//   setTimeout(() => {
//     element.classList.add('circle');
//   }, 2000);
// };

// const makeCirclePink = (element) => {
//   setTimeout(() => {
//     element.classList.add('circle-pink');
//   }, 7000);
// };

const takeSoda = () => {
  setTimeout(() => {
    console.log('take your soda 🥤');
  }, 1000);
};

const makePizza = (topping = []) => {
  const delay = 500 + topping.length * 200;

  const pizzaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        console.log(`Pizza is Ready 🍕 with toppings:\n${topping.join(', ')}`)
      );
    }, delay);
  });
  return pizzaPromise;
};

const handleClick = async () => {
  console.time('makeSingle');
  await makePizza(['Peperoni', 'Anchoas']);
  await makePizza(['Peperoni', 'Anchoas', 'Chili']);
  await makePizza(['Peperoni', 'Anchoas', 'Chili', 'Chili', 'Chili']);
  console.timeEnd('makeSingle');

  console.time('makeAll');
  await Promise.all([
    makePizza(['Peperoni', 'Anchoas']),
    makePizza(['Peperoni', 'Anchoas', 'Chili', 'Chili', 'Chili']),
    makePizza(['Peperoni', 'Anchoas', 'Chili']),
  ]);
  console.timeEnd('makeAll');

  console.time('makeRace');
  await Promise.race([
    makePizza(['Peperoni', 'Anchoas']),
    makePizza(['Peperoni', 'Anchoas', 'Chili', 'Chili', 'Chili']),
    makePizza(['Peperoni', 'Anchoas', 'Chili']),
  ]);
  console.timeEnd('makeRace');

  takeSoda();
};

document.querySelector('.go').addEventListener('click', handleClick);
