const isPP = function(n) {
  let g = 0

  for( let i = 0 ; i <10 ; i++){
    if( i ** 2 === n || i ** 4 === n  ){
      g  = i
    }
  }
  if(g > 1 ){
    return [g,2]
  }else if(n % 2 !== 0 && n !== 1){
    return [n,1]
  }else{
    return null
  }
  return null ; // fix me
};

console.log(isPP(4));
console.log(isPP(8281));
console.log(isPP(27));
console.log(isPP(5));

console.log( 5 %2 ===0 )

//5 isn't a perfect power - Expected: null, instead got: [5, 1]