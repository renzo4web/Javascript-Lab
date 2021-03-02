function abbreviate(string) {
  // firstLeter number of removed last leter
  const str = string.replace(/[^a-z0-9+]+/gi, '+');
  const nonWord = string.match(/[^a-z0-9+]+/gi, '+');
  const singleWord = (singleStr) => {
    if (singleStr.length >= 4) {
      const firstLeter = singleStr[0];
      const last = singleStr[singleStr.length - 1];
      const numerOfremoved = singleStr.length - 2;
      return firstLeter + numerOfremoved + last;
    }
    return singleStr
  };

  let wordShort = str.split('+').map(x => singleWord(x)).join("+")
  let h = []
    for (let i = 0; i < wordShort.length; i++) {
    let j =0
        if( wordShort[i] === "+"){
          h.push(nonWord[j])
          j++
        }else {
          h.push(wordShort[i])
        }

    }

    return (h.join(""));

}

// console.log(abbreviate('internationalization'));//, "i18n");
// console.log(abbreviate('accessibility'));//, "a11y");
// console.log(abbreviate('Accessibility'));//, "A11y");
console.log(abbreviate('elephant-ride'));//, "e6t-r2e");
// console.log(abbreviate('monolithic cat'));//, "e6t-r2e");
console.log(abbreviate('sits on is the sat')) //, "e6t-r2e");