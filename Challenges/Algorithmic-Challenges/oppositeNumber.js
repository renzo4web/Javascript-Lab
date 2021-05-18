function opposite(num){
  // return -num dont work with zero
  return  Math.sign(num) > 0 ? -num : Math.abs(num)
}

console.log(opposite(-20)); // 20
console.log(opposite(0)); // 0
console.log(opposite(1)); // -1
console.log(opposite(-1)); // 1