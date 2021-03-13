const arrayFromRange = (min, max) => {
  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result
};

console.log(arrayFromRange(1,4));
