export class Timer {
  constructor() {
    this.deltaTime = 1000 / 60;
    this.paused = false;
    this.accumulatedTime = 0; // wie viel Zeit ist vergangen
    this.lastTime = null;
    this.fps = 60;
    this.fpsInterval;
    this.startTime;
    this.now;
    this.then;
    this.elapsed;
    var Android = /(android)/i.test(navigator.userAgent);

    if (Android) {
      this.deltaTime = 1000 / 28;

      this.fps = 28;
    }
    const selectFrame = document.getElementById("selectFrame");
    const selectDelta = document.getElementById("selectDelta");

    selectFrame.addEventListener("input", (e) => {
      this.deltaTime = 1000 / e.target.value;
    });
    selectDelta.addEventListener("input", (e) => {
      this.fps = e.target.value;
    });
  }
  startAnimating() {
    this.fpsInterval = 1000 / this.fps;
    this.then = Date.now();
    this.startTime = this.then;
    this.animate();
  }
  animate() {
    // request another frame
    if (this.paused) return; // brich die Funktion ab
    requestAnimationFrame(this.animate.bind(this));

    // calc elapsed time since last loop

    this.now = Date.now();
    this.elapsed = this.now - this.then;

    // if enough time has elapsed, draw the next frame

    if (this.elapsed > this.fpsInterval) {
      // Get ready for next frame by setting then=now, but also adjust for your
      // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
      this.then = this.now - (this.elapsed % this.fpsInterval);

      this.update(this.deltaTime);
      // Put your drawing code here
    }
  }
  // start() {
  //   requestAnimationFrame(this.loopFunction.bind(this));
  // }

  // loopFunction(currentTime) {
  //   if (this.paused) return; // brich die Funktion ab
  //   if (this.lastTime) {
  //     this.accumulatedTime += currentTime - this.lastTime;
  //     if (this.accumulatedTime > 1000) {
  //       this.accumulatedTime = 1000;
  //     }
  //     while (this.accumulatedTime > this.deltaTime) {
  //       this.update(this.deltaTime);
  //       this.accumulatedTime -= this.deltaTime;
  //     }
  //   }
  //   this.lastTime = currentTime;
  //   this.start();
  // }
  pause() {
    this.paused = true;
  }
  update() {}
}
