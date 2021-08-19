const setiInterval = (fn, time) => {
  const startTime = new Date();
  startTime.setMilliseconds(0);

  const getMs = () => startTime.getMilliseconds();
  console.log("toime");
  while (true) {
    if (getMs() >= time - 1) {
      fn();
    }
    console.log(startTime);
  }
};

console.log(
  setiInterval(() => {
    console.log("Hello");
  }, 1000)
);
