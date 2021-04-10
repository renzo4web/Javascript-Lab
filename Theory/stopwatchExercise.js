class Stopwatch {
  constructor() {
    this.timerId;
    this.time = 0;
  }

  start() {
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.time++;
        console.log(this.time);
      }, 300);
      return;
    }
    console.warn('Stopwatch already iniciated');
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      return;
    }
    throw Error('Stopwatch is not started');
  }

  get duration() {
    if (this.time > 0) {
      return this.time;
    }
    throw Error('Stopwatch is not started');
  }
}

const sw = new Stopwatch();

