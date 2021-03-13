const numbers = [1, 2, 3, 4, 8, 6, 9, 3];

const except = (array, excluded) => {
  let output = [];
  for (const iterator of array) {
    if (!excluded.includes(iterator)) output.push(iterator);
  }
  return output;
};

console.log(except(numbers, [2, 3, 8]));
