import { canvas, clearCanvas, ctx } from "../canvas.js";
import { Car } from "./car.js";

export class Player extends Car {
  constructor(options, type) {
    super(
      {
        pos: options.pos,
        size: options.size,
        color: options.color,
        friction: 0.2,
      },
      (type = "Player")
    );
    this.addControls();
    this.addTouchControl()
    this.movingSpeed = 0.012;
    this.vel[1] = -0.01;
    this.abilities = {
      invisible: false,
    };
    this.startX = 0;
  }
  addControls() {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.acc = -this.movingSpeed;
          break;
        case "ArrowRight":
          this.acc = this.movingSpeed;
          break;
        case "ArrowUp":
          this.vel[1] = -0.15;
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.acc = 0;
          break;
        case "ArrowRight":
          this.acc = 0;
          break;
        case "ArrowUp":
          this.vel[1] = 0;
          break;
      }
    });
  }
  addTouchControl(){
    window.addEventListener('touchstart' , (e)=>{
     this.startX = e.changedTouches[0].pageX
      var startY = e.changedTouches[0].pageY

    }, false)
    canvas.addEventListener(
          "touchmove",
           (e) =>{
            e.preventDefault(); // prevent scrolling when inside DIV
          },
          false
        );
    window.addEventListener('touchend' , (e)=>{
      var distX = e.changedTouches[0].pageX - this.startX
      console.log(distX)
      if(distX > 20 && distX <= 110){
       this.acc = this.movingSpeed;
      }
      if(distX < -20 && distX >  -110){
        this.acc = -this.movingSpeed;

      }
      if(distX > 110)
      this.acc = this.movingSpeed + 0.006

      if(distX < -110)
      this.acc = -this.movingSpeed - 0.006

      console.log(this.acc)
      setTimeout(() => {
        this.acc = 0
      }, 90);
    }, false)
  }

}
