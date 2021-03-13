const numbers = [1, 2, 3, 2, 4, 1, 1];

const countOccurrences = (arr, searchElement, allOccurrences) => {

  if (allOccurrences) {
    return arr.reduce((acc, currVal) => {
      acc[currVal] = acc[currVal] + 1 || 1;
      return acc;
    }, {});
  }
  return arr.filter(el => el === searchElement).length;

};

console.log(countOccurrences(numbers, 1));