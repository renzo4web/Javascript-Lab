const showStars = (rows) => {
  for (let index = 1; index <= rows; index++) {
    console.log(`${"#".repeat(index)}`);
  }
};

showStars(5);
