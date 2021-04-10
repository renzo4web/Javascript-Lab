const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  },
};

for (const key in circle) {
  console.log(key, circle[key]);
}

for (const iterator of Object.keys(circle)) {
  console.log(iterator);
}

// To Check if a Obj has a property we can use
console.log('wokeUp' in circle); // ""
console.log('radius' in circle); // true
