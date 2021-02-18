function countVowels(str) {
  (!str) && (str = '');

  let arrayFilterVowels = Array.from(str.toLowerCase()).
      filter(char => char.match(/([aeiou])/));

  return arrayFilterVowels.length > 0
      ? `The String has ${arrayFilterVowels.length} vowel: ${arrayFilterVowels.join(
          ',')}`
      : 'This word does not contain vowels';
}

console.log(countVowels());
console.log(countVowels('aeiou   '));