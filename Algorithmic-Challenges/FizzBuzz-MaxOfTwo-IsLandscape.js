const maxOfTwo = (a, b) => Math.max(a, b);
//maxOfTwo(3, 6);

const isLandscape = (width, height) => width > height;
//isLandscape(800, 600);

const fizzBuzz = (num) => {
  if (typeof num !== "number") return NaN;
  for (let i = 1; i <= num; i++) {
    console.log(
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i
    );
  }
};

//fizzBuzz(50);
