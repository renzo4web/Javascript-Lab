function checkXAndO(str) {
  let o = Array.from(str).filter( char => char.toLowerCase() === "o"  ).length
  let x = Array.from(str).filter( char => char.toLowerCase() === "x"  ).length
 return( o === x);
}

checkXAndO("ooxx") // true
checkXAndO("xooxx") // false
checkXAndO("ooxXm") // true
checkXAndO("zpzpzpp") // true when no x and o
checkXAndO("zzoo") // false