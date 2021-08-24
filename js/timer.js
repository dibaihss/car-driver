export class Timer {
  constructor() {
    this.deltaTime = 1000 / 60;
    this.paused = false;
    this.accumulatedTime = 0; // wie viel Zeit ist vergangen
    this.lastTime = null;
  }
  start(){
      requestAnimationFrame(this.loopFunction.bind(this))
  }

  loopFunction(currentTime){
    if (this.paused) return; // brich die Funktion ab
    if (this.lastTime) {
      this.accumulatedTime += currentTime - this.lastTime;
      if (this.accumulatedTime > 1000) {
        this.accumulatedTime = 1000;
      }
      while (this.accumulatedTime > this.deltaTime) {
        this.update(this.deltaTime);
        this.accumulatedTime -= this.deltaTime;
      }
    }
    this.lastTime = currentTime;
    this.start();
      
  }
  pause(){
this.paused = true
  }
  update(){

  }
}
