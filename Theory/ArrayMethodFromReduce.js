// Most Used Array methods made fropm reduce()

const emojis = [
  '✌',
  '😂',
  '😝',
  '✌',
  '😁',
  '😱',
  '👉',
  '🙌',
  '🍻',
  '🔥',
  '😁',
  '🌈',
  '🍻',
];

const allSameEmojis = ['✌', '✌', '✌', '✌'];

// Array.prototype.includes()

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const isBeer = emojis.reduce((acc, emoji) => {
  if (emoji === '🍻') {
    return true;
  }
});

console.log('isBeer:', isBeer);

// Array.prototype.every()

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const allSame = allSameEmojis.reduce((acc, emoji, i) => {
  if (acc !== emoji) {
    return false;
  }
  acc = emoji;

  if (i === allSameEmojis.length - 1) {
    return true;
  }
  return acc;
});

console.log('allSame:', allSame);

// Array.prototype.some()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const anyIsBeer = emojis.reduce((found, emoji) => {
  if (emoji === '🍻') {
    found = true;
  }
  return found;
}, false);

console.log('anyIsBeer:', anyIsBeer); //true

// Array.prototype.find()

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const array1 = [5, 12, 8, 130, 44];

const found = array1.reduce((first, num) => {
  return (first = first > 10 ? first : num);
});

console.log(found); // expected output: 12

// Array.prototype.map()
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const array2 = [1, 4, 9, 16];

// pass a function to map
const multiplyBy2 = array2.reduce((arr, num) => {
  return [...arr, num * 2];
}, []);

console.log('multiplyBy2', multiplyBy2);
// expected output: Array [2, 8, 18, 32]

// Array.prototype.filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present'
];

const result = words.reduce((arr, word) => {
  return word.length > 6 ? [...arr, word] : arr;
}, []);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
