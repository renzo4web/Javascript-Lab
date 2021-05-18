// Uppercase each letter of each word

function toJadenCase(str) {
  return str.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
}

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"

console.log(toJadenCase('How can mirrors be real if our eyes aren\'t real'));