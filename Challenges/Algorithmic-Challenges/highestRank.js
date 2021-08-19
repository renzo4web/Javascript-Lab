function highestRank(arr) {
  // RETURN MOST FREQUENT
  //
  // if tie return the largestr

  const r = arr.reduce((acc, number) => {
    acc[number] = acc[number] + 1 || 1;
    return acc;
  }, {});

  const a = Object.entries(r)
    .map((arr) => arr.map(Number))
    .sort((a, b) => b[1] - a[1]);

  return a[0][1] === a[1][1] ? a.sort((a, b) => b[0] - a[0])[0][0] : a[0][0];
}
const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
const arr1 = [12, 10, 8, 12, 7, 6, 4, 10, 10];
const arr2 = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
console.log(highestRank(arr2)); //12
