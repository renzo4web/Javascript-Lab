const numbers = [1, 2, 3, 4];

const isIn = (array, el) => {
  for (const iterator of array) {
    if (el === iterator) return true;
  }
  return false;
};

console.log(isIn(numbers, 3));
