function accum(str) {
  let g = str.split('').
      map((x, i) => x.toLowerCase().
          repeat(i + 1)).
      map(t => t.replace(t[0], t[0].toUpperCase()));

  return g.join("-");
}

// accum('abcd'); // A-Bb-Ccc-Dddd
// console.log(accum('ZpglnRxqenU'));
// console.log(accum("NyffsGeyylB"));