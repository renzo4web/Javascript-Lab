const countTruthy = (arr) => {
  let count = 0;
  for (let values of arr) values && count++;
  return `Truthy values : ${count}`;
};

console.log(countTruthy([0, null, undefined, "", 2, 3])); // 2
