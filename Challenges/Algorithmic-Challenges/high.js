function high(x) {
  const getPoint = (word) => {
    return word
      .split("")
      .reduce((acc, char) => acc + (char.charCodeAt(0) - 96), 0);
  };

  const allWords = x.split(" ");

  return allWords
    .reduce((acc, word) => {
      acc = [...acc, { word, points: getPoint(word) }];

      return acc;
    }, [])
    .sort((a, b) => b.points - a.points)[0].word;
}

console.log(high("man i need a taxi up to ubud")); //, "taxi");
console.log(high("what time are we climbing up the volcano")); //, "volcano");
console.log(high("take me to semynak")); //, "semynak");
console.log(high("aa b")); //, "aa");
