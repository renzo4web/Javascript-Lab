function streetFighterSelection(fighters, position, moves) {
  let playerSelect = [];

  let [y, x] = position; // last position
  // x only can be 0 or 1 if is 0
  const getFigther = (move) => {
    switch (move) {
      // if the last y position is 1 sum rest 1
      // if the last Y position is 0 do nothing
      case "up":
        if (y === 1) {
          y = 0;
        }
        break;
      // if  the last Y is 1  return do nothiung
      // if  the last Y is 0  sum 1
      case "down":
        if (y === 0) {
          y = 1;
          break;
        }
        break;
      // if last X - 1 ie < 0  , go to las item of the array x = figthers[y][y.length-1]
      // if x -1 >= 0 return figthers[y][x-1]
      case "left":
        if (x - 1 < 0) {
          x = fighters[y].length - 1;
          break;
        }
        if (x - 1 >= 0) {
          x -= 1;
          break;
        }

      // if  x + 1 > figthers[Y].length return fighters[y][0]
      // if x+1 <= fighter[y].length return figther[y][x+1]
      case "right":
        if (x + 1 > fighters[y].length - 1) {
          x = 0;
          break;
        }
        if (x + 1 <= fighters[y].length) {
          x += 1;
          break;
        }
    }
    return fighters[y][x];
  };

  for (const move of moves) {
    const figther = getFigther(move);

    playerSelect.push(figther);
  }

  return playerSelect;
}

const fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];

moves = ["up", "left", "right", "left", "left"];
console.log(streetFighterSelection(fighters, [0, 0], moves)); //,['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);
