//Consider the following arrays. What gets logged in various sorting conditions?

const arr1 = ["a", "b", "c"];
const arr2 = ["b", "c", "a"];

console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
);

//arr1.sort() === arr1,
// .sort() modify the orignal array NOT create another array
//
//arr2.sort() == arr2,
// the same as above, the light comparison
//
//arr1.sort() === arr2.sort()
// array are unique values so alway are gona to be false

// true true false
