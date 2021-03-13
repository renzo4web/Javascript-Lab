const numbers = [1, 2, 3, 4];

const move = (array, index, offset) => {
  if (offset > array.length && offset < 0) return console.log('INVALID');
  let elementToMove = array[index];
  array.splice(index, 1);
  let partB = array.slice(index, offset);
  let partA = array.slice(offset, array.length);
  return (partB.concat(elementToMove).concat(partA));

};

console.log(move(numbers, 0, 2));