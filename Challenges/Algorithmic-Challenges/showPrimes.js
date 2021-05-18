const showPrimes = (limit) => {
  for (let index = 2; index <= limit; index++) {
    let isPrime = true;
    for (let j = 2; j < index; j++) {
      if (index % j === 0) {
        isPrime = false;
        break;
      }
    }

    isPrime && console.log(index);
  }
};

showPrimes(20);
