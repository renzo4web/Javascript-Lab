const sum = (limit) => {
  let acc = 0;
  for (let index = 0; index <= limit; index++) {
    if (index % 3 === 0 || index % 5 === 0) acc += index;
  }
  return acc;
};

console.log(sum(10));
