// function likes(names) {
//   // TODO
//   if(names.length ===1){
//     console.log(`${names[0]} like this` );
//   }else if(names.length ===2 ){
//     console.log(`${names[0]}, ${names[1]} like this` );
//   }else if(names.length > 3){
//     console.log(`${names[0]}, ${names[1]} and ${names.length-2} like this` );
//   }
//
//
// }

function likes(names) {
  return (names.length === 1) ?
      `       ${names[0]} like this` :
      (names.length === 2) ?
          `${names[0]}, ${names[1]} like this` :
          (names.length > 3) ?
              `${names[0]}, ${names[1]} and ${names.length - 2} like this` :
              'no one likes this';
}

likes([]);//, 'no one likes this');
likes(['Peter']);//, 'Peter likes this');
likes(['Jacob', 'Alex']);// 'Jacob and Alex like this');
likes(['Max', 'John', 'Mark']); //'Max, John and Mark like this');
likes(['Alex', 'Jacob', 'Mark', 'Max']); //, 'Alex, Jacob and 2 others like this');