function telephoneCheck(str) {

  let parenSymbols = (str).split('').reduce((acc, i) => {
    if (i.match(/([)(])/)) acc++;
    return acc;
  }, 0);

  let badSybols = (str).split('').reduce((acc, i) => {
    if (i.match(/([*&?¿!#])/)) acc++;
    return acc;
  }, 0);

  let lengthStr = (str).split('').reduce((acc, i) => {
    if (!i.match(/([) \-(])/)) acc++;
    return acc;
  }, 0);

  let cleanStr = Array.from(str).filter(x => x !== (/([) \-(])/) && x !== "(" );


  let startWith =  1;
 (cleanStr.join("").startsWith("1"))? startWith = 1:
 (cleanStr.join("").startsWith("5"))? startWith = 5: 9

  if(cleanStr.join("").startsWith("1")){startWith = 1}
  else if (cleanStr.join("").startsWith("5")){startWith = 5}
  else return false;


if ( (startWith  = 1 && lengthStr === 11)  && badSybols ===0 && parenSymbols % 2 === 0 ){
  return true
}else return !!((startWith = 5 && lengthStr === 10) && badSybols === 0 &&
    parenSymbols % 2 === 0);

}

console.log(telephoneCheck('555-555-5555')); // true
console.log(telephoneCheck('1 555)555-5555'));// false
console.log(telephoneCheck('(6054756961)')); //should return false
console.log(telephoneCheck('2 757 622-7382'));//should return false
console.log(telephoneCheck('1 555-555-5555'));//true
console.log(telephoneCheck('1(555)555-5555'));//true
console.log(telephoneCheck('555-5555'));//false
console.log(telephoneCheck('(555)555-5555')); //should return true.
console.log(telephoneCheck('123**&!!asdf#')); //should return false.
console.log(telephoneCheck('10 (757) 622-7382')); //should return false.
console.log(telephoneCheck('(555)5(55?)-5555'));// false