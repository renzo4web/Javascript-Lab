function getMiddle(str) { // return middle character
  const middleIndex = (str.length / 2)
  // return  str.split("")[(str.length/2)-1]
  return str.length % 2 === 0
      ? str.substring(middleIndex - 1, middleIndex + 1)
      : str.substring(middleIndex, middleIndex + 1);

}

console.log(getMiddle('test'));// "es"
console.log(getMiddle('testing')); // "t"
console.log(getMiddle('middle')); // "dd"
console.log(getMiddle('A')); // "A"