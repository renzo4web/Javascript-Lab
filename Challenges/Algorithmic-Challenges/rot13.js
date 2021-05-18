function rot13(message) {
  //your code here
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const arr = message.split('');
  for (let i = 0; i < arr.length; i++) {


    for (let j = 0; j < alphabet.length; j++) {

      if (arr[i] === alphabet[j] || arr[i] === alphabet[j].toUpperCase()) {
        let isUpperCase = false;
        (arr[i] === arr[i].toUpperCase()) ? isUpperCase = true : '';

        if (13 > alphabet.slice(j, alphabet.length - 1).length) {
          let index = 13 - alphabet.slice(j, alphabet.length - 1).length;
          isUpperCase ? arr[i] = alphabet[index - 1].toUpperCase()
              : arr[i] = alphabet[index - 1];
          break;
        }
        isUpperCase ? arr[i] = (alphabet[j + 13].toUpperCase())
            : arr[i] = (alphabet[j + 13]);
        break;
      }

    }

  }
  return arr.join('');
}

// console.log(rot13('test')); //  "grfg"
// console.log(rot13('Test')); //  "Grfg"
console.log(rot13('e5kh')); //  "r5xu"
console.log(rot13('10+2 is twelve')); //  "Grfg"