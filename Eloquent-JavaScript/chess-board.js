const sym = "#";

const chess = (size) => {
  let g = "";
  let f = 0;
  while (f < size) {
    for (let b = 0; b < size; b++) {
      g += " ";
      if (f % 2 === 0) {
        if (b % 2 == 0) g += "#";
      } else {
        if (b % 2 !== 0) g += "#";
      }
    }

    g += "\n";
    f++;
  }

  return g;
};

console.log(chess(16));
