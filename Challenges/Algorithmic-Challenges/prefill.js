function prefill(n, v) {
  if (isNaN(n) || !isFinite(n)) {
    console.log(n);
    if (typeof n === "boolean") {
      throw new TypeError(`${n} is invalid`);
    }
    // check if is infinite or -inifinite

    if (!isFinite(n)) {
      throw new TypeError(`${n} is invalid`);
    }
    // check if is float
    if (!Number.isInteger(n)) {
      throw new TypeError(`${n} is invalid`);
    }
    throw new TypeError(`${n} is invalid`);
    // is is a bolean
  }
  if (n === 0) return [];

  const arr = [];
  arr.length = n;
  return arr.fill(v ? v : undefined);
}

console.log(prefill(3, 1)); //, [1,1,1]);
console.log(prefill(2, "abc")); //, ['abc','abc']);
console.log(prefill("1", 1)); //, [1]);
console.log(prefill(3, prefill(2, "2d"))); //, [['2d','2d'],['2d','2d'],['2d','2d']]);
//console.log(prefill(Infinity, prefill(2, "2d"))); //, [['2d','2d'],['2d','2d'],['2d','2d']]);
console.log(prefill(1.545, 1)); //, [1]);
