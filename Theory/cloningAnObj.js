const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  },
};

const another = { ...circle, color: 'yellow' };

another.radius = 5;

console.log(another);
console.log('----------');
console.log(circle);
