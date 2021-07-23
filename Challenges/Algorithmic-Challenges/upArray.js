function upArray(arr) {
  // join the array
  let number = Number(arr.join("")) + 1;

  if (!Number.isSafeInteger(number)) {
    number = BigInt(BigInt(arr.join("")) + BigInt(1)).toString();
    console.log(number);
  }
  console.log(number);
  return number
    .toString()
    .split("")
    .map((nString) => Number(nString));
}

console.log(upArray([2, 3, 9])); // [2,4,0]
console.log(
  upArray([
    6, 4, 9, 6, 2, 3, 1, 3, 6, 5, 9, 0, 6, 4, 1, 8, 0, 9, 8, 4, 9, 1, 9, 7, 4,
    9, 9, 3, 7, 1, 6, 9, 2, 8, 0, 5, 3, 0, 8, 2, 4, 5,
  ])
); // [2,4,0]
