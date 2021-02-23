function squareDigits(num) {
  return parseInt(num.toString().split('').map(x => parseInt(x) ** 2).join(''));
}

squareDigits(223); // 446
squareDigits(9967); // 81813649
squareDigits(9119); // 811181