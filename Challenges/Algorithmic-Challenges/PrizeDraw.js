function rank(st, we, n) { // Completed

  if (!st) return 'No participants';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const arrayNames = st.split(',');
  if (n > arrayNames.length) return 'Not enough participants';
  let g = [];
  const parts = st.split(',').
      map(name => name.split('')).
      forEach((nameSplit, i) => {
        let som = nameSplit.length;
        nameSplit.forEach(
            letter => som += alphabet.indexOf(letter.toLowerCase()) + 1);
        g.push([arrayNames[i], som * we[i]]);
      });

  g.sort((a, b) => {
    if (a[1] === b[1]) return (a[0] > b[0]) ? 1 : -1;
    return (a[1] > b[1]) ? -1 : 1;
  });
  return g[n - 1][0];
}

// console.log(rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
//     [4, 2, 1, 4, 3, 1, 2], 4));// "Benjamin")
// console.log(rank('COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH',
//     [1, 4, 4, 5, 2, 1], 4));// "Benjamin")
// console.log(rank('Lagon,Lily', [1, 5], 2)); //, 'Lagon');
// console.log(rank('Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
//     [4, 2, 1, 4, 3, 1, 2], 8));// "Not enough participants")
console.log(
    rank('William,Willaim,Olivia,Olivai,Lily,Lyli', [1, 1, 1, 1, 1, 1], 1)); //, "No participants")

console.log(rank(
    'Daniel,Jacob,James,Olivia,Andrew,Liam,Emily,Robert,Madison,Ella,Joshua,Chloe,William,Jayden,Addison,Matthew,Mia,Isabella,Benjamin,Avery,Alexander,Elijah',
    [3, 3, 6, 5, 5, 6, 3, 4, 4, 5, 5, 1, 4, 4, 4, 1, 2, 5, 5, 5, 3, 2], 3)); //'Benjamin';


