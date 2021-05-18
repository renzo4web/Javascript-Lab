const isEven = (num) => {
  if (num === 1) return false;
  if (num === 0) return true;
  else if (num < 0) return isEven(-num);
  return isEven(num - 2);
};

console.log(isEven(75));
