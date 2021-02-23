function findMax(arr) {
  return arr.sort((a,b)=> a-b)[arr.length-1]
}

console.log(findMax([77, -5, 2, 89, 44, 37])); //89
console.log(findMax([-5,-89,-6])); //-5