// Print duplicates from Arra
//

function printDuplicates(arr) {
  //First Solution
  //
  //

  //return arr.reduce((acc, num, idx) => {
  //if (idx === 0) {
  //acc = [...acc, num];
  //return acc;
  //}

  //if (arr.slice(0, idx).includes(num)) {
  //acc = [...acc, num];
  //return acc;
  //}
  //return acc;
  //}, []);

  // Second Solution
  //
  //
  //
  //const whoMany = arr.reduce((acc, num) => {
  //acc[num] = acc[num] + 1 || 1;
  //return acc;
  //}, {});

  //return Object.entries(whoMany)
  //.filter((tupple) => tupple[1] > 1)
  //.sort((a, b) => b[1] - a[1])
  //.map((tupple) => `The Number ${tupple[0]} has repeated ${tupple[1]}`)
  //.join("\n");

  //Third Solution
  //
  let tmp = [];

  for (i = 0; i < arr.length; ++i) {
    if (arr.slice(i + 1).includes(arr[i]) && !tmp.includes(arr[i])) {
      tmp.push(arr[i]);
    }
  }

  return tmp;
}

const testArr = [2, 4, 5, 2, 5, 9, 261, 535, 2, 777, 12, 12];

console.log(printDuplicates(testArr)); // 2 5 12
