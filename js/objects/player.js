import { canvas, clearCanvas, ctx } from "../canvas.js";
import { Car } from "./car.js";
import { FiredBomb } from "./firedBomb.js";

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
    this.addTouchControl();
    this.movingSpeed = 0.0053;
    this.vel[1] = -0.01;
    this.abilities = {
      invisible: false,
      bombs: 0,
    };
    this.startX = 0;
    this.lives = 3;
    this.audio = document.getElementById("audio");
    this.driveCar = document.getElementById("drive");
    this.fuelStatus = 1;
    this.sound();
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
          this.play();
          this.vel[1] = -0.15;

          break;
          case "g":
            if (this.abilities.bombs > 0) {
              this.abilities.bombs -= 1;
              this.level.objects.push(
                new FiredBomb({
                  id: 0,
                  pos: [this.pos[0], this.pos[1]],
                  vel: [0, -0.5]
                })
              )
            }
  
            break;
          
      }
      e.preventDefault();
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
          this.puaseAudio();
          this.vel[1] = 0;
          break;
      }
    });
  }
  addTouchControl() {
    window.addEventListener(
      "touchstart",
      (e) => {
        this.startX = e.changedTouches[0].pageX;
        var startY = e.changedTouches[0].pageY;
      },
      false
    );
    canvas.addEventListener(
      "touchmove",
      (e) => {
        e.preventDefault(); // prevent scrolling when inside DIV
      },
      false
    );
    window.addEventListener(
      "touchend",
      (e) => {
        var distX = e.changedTouches[0].pageX - this.startX;
        if (distX > 20 && distX <= 110) {
          this.acc = this.movingSpeed;
        }
        if (distX < -20 && distX > -110) {
          this.acc = -this.movingSpeed;
        }
        if (distX > 110) this.acc = this.movingSpeed + 0.006;

        if (distX < -110) this.acc = -this.movingSpeed - 0.006;
        setTimeout(() => {
          this.acc = 0;
        }, 90);
      },
      false
    );
  }
  sound() {
    this.driveCar.play();
  }

  play() {
    this.driveCar.pause();

    this.audio.play();
  }
  puaseAudio() {
    this.audio.pause();
    this.driveCar.play();
  }
  drawAvailableLives() {
    var x = 0;
    for (let i = 1; i <= this.lives; i++) {
      var heartImg = document.getElementById("imgHeart");

      ctx.drawImage(heartImg, (x += 30), 30, 20, 20);
    }
  }
  drawAvailableBombs() {
    if (this.abilities.bombs > 0) {
      var xDistance = 10;
      for (let i = 0; i < this.abilities.bombs; i++) {
        xDistance += 20;
        ctx.drawImage(imgBomb, xDistance, 720, this.size[0], this.size[1]);
      }
    }
  }
}
