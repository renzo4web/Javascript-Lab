const numbers = [1, 2, 8, 2, 8, 1, 1];

const getMax = (arr) => {
  return arr.reduce((max, currVal) => (max > currVal) ? max : currVal);
};

console.log(getMax(numbers));