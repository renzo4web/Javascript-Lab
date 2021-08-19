function findOdd(A) {
  const result = Object.entries(
    A.reduce((acc, num) => {
      acc[num] = acc[num] + 1 || 1;
      return acc;
    }, {})
  )
    .map((tupple) => tupple.map(Number))
    .sort((a, b) => b[1] - a[1])
    .filter((tupple) => tupple[1] % 2 !== 0);
  return result[0][0];
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); //, 5);
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]); //-1)jh//)//
findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]); //, 5);
findOdd([10]); //, 10);
findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]); //, 10);
findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]); //, 1);
