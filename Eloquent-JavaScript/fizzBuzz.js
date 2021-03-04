for (let num = 1; num <= 100; num++) {
  num % 3 === 0 && num % 5 === 0
    ? console.log("FizzBuzz")
    : num % 3 === 0
    ? console.log("Fizz")
    : num % 5 === 0
    ? console.log("Buzz")
    : console.log(num);
}
