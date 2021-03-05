function solve(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const found = str.replace(/[aeiou]/gi, "$").split("");
  let sum = [];
  let count = 0;
  if (found.length <= 2) return alphabet.indexOf(str.match(/[^aeiou]/gi))+1;
  for (let i = 0; i < found.length; i++) {
    count += alphabet.indexOf(found[i]) + 1;
    if (found[i] === "$") {
      sum.push(count);
      count = 0;
    }
  }
  console.log(sum);
  return sum.sort((a, b) => b - a)[0];
}

// console.log(solve("zodiac")); //26);
// console.log(solve("chruschtschov")); //80);
// console.log(solve("khrushchev")); //38);
// console.log(solve("strength")); //57);
// console.log(solve("catchphrase")); //73);
// console.log(solve("twelfthstreet")); //103);
// console.log(solve("mischtschenkoana")); //80);
console.log(solve("az")); //80);
