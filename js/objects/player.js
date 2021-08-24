import { clearCanvas, ctx } from "../canvas.js";
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
    this.movingSpeed = 0.012;
    this.vel[1] = -0.01
    this.abilities = {
      invisible: false
    }
    
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
            
            this.vel[1] = -0.15
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
            this.vel[1] = 0
            break;
      }
    });
  }
  removeControl(){
    console.log("sdadds")
    window.removeEventListener('keydown' ,(e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.acc = -this.movingSpeed;
          break;
        case "ArrowRight":
          this.acc = this.movingSpeed;
          break;
          case "ArrowUp":
            
            this.vel[1] = -0.15
            break;
      }} , { passive: true })
      window.removeEventListener("keyup", (e) => {
        switch (e.key) {
          case "ArrowLeft":
            this.acc = 0;
            break;
          case "ArrowRight":
            this.acc = 0;
            break;
            case "ArrowUp":
              this.vel[1] = 0
              break;
        }
      } , { passive: true });
  }
}
