const countBs = (str) => {
  return str.split("").filter((char) => char === "B").length;
};

const countChar = (str, char) => {
  return str.split("").filter((letter) => letter === char).length;
};

console.log(countBs("BBS"));
console.log(countChar("kakkerlak", "k"));
