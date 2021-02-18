setTimeout(timerHandler, 1500);
  let counter = 0;

//Wait for 1500ms
function timerHandler() {
  console.log(counter);
  counter += 10;
  // Clear interval
  counter > 100 && clearInterval(intervalId)
}

// The interval is not immediate
const intervalId = immediateInterval(timerHandler, 500);

// Custom immediateInterval

function immediateInterval(funcToRun,ms) {
    //right away call function
  funcToRun()
  //run a regular interval
  return  setInterval(funcToRun,ms)
}

