function Circle(radius) {
  let colot = 'red';
  // using let or const we are bloked scope of this var
  // cannot be accessed from outside the function
  this.radius;
  const defaultLocation = { x: 0, y: 0 };

  let optimizeLocation = function () {
    //....
  };

  this.draw = function () {
    optimizeLocation(); //this is a closure

    //  closure : a function that can accessed variables from itself and from
    // a parent function if exist
    this.radius;
    console.log('draw');
  };
}

const circle1 = new Circle(2);

