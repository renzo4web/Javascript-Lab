function createCircle(radius, location, isVisible) {
  return {
    radius,
    location,
    isVisible,
    draw() {
      console.log(`X:${this.location.x}, Y:${this.location.y}`);
    },
  };
}

const circle1 = createCircle(1, { x: 3, y: 2 }, false);

circle1.draw();

// Constructor Function
function Circle(radius) {
  this.radius = radius; // "this" is a empty object
  this.draw = function () {
    console.log("DRAW");
  };
}

const circle2 = new Circle(2);

circle2.draw()
