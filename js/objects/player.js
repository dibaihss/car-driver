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
    this.goSwibe();
    this.movingSpeed = 0.012;
    this.vel[1] = -0.01;
    this.abilities = {
      invisible: false,
    };
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
  swipedetect(callback) {
    var touchsurface = canvas,
      swipedir,
      startX,
      startY,
      distX,
      distY,
      threshold = 30, //required min distance traveled to be considered swipe
      restraint = 100, // maximum distance allowed at the same time in perpendicular direction
      allowedTime = 300, // maximum time allowed to travel that distance
      elapsedTime,
      startTime,
      handleswipe = callback || function (swipedir) {};

    touchsurface.addEventListener(
      "touchstart",
      function (e) {
        var touchobj = e.changedTouches[0];
        swipedir = "none";
        var dist = 0;
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime(); // record time when finger first makes contact with surface
        e.preventDefault();
      },
      false
    );

    touchsurface.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault(); // prevent scrolling when inside DIV
      },
      false
    );

    touchsurface.addEventListener(
      "touchend",
   (e) =>{
        var touchobj = e.changedTouches[0];
        distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime; // get time elapsed
        if (elapsedTime <= allowedTime) {
          // first condition for awipe met
          if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
            // 2nd condition for horizontal swipe met
            swipedir = distX < 0 ? "left" : "right"; // if dist traveled is negative, it indicates left swipe
            console.log(swipedir)
            if (swipedir === "right") {
              this.acc = this.movingSpeed;
            }
            if (swipedir === "left") {
              this.acc = -this.movingSpeed;
            }
            setTimeout(()=>{
              this.acc = 0
            }, 130)
          } else if (
            Math.abs(distY) >= threshold &&
            Math.abs(distX) <= restraint
          ) {
            // 2nd condition for vertical swipe met
            swipedir = distY < 0 ? "up" : "down"; // if dist traveled is negative, it indicates up swipe
          }
        }
        handleswipe(swipedir);
        e.preventDefault();
      },
      false
    );
  }
  goSwibe() {
    this.swipedetect((swipedir) => {
      // window.addEventListener(
      //   "touchstart",
      //   (e) => {
      //     if (swipedir === "right") {
      //       this.acc = this.movingSpeed;
      //     }
      //     if (swipedir === "left") {
      //       this.acc = -this.movingSpeed;
      //     }
      //   },
      //   false
      // );
      // window.addEventListener(
      //   "touchend",
      //   (e) => {
      //     if (swipedir === "right") {
      //       this.acc = 0;
      //     }
      //     if (swipedir === "left") {
      //       this.acc = 0;
      //     }
      //   },
      //   false
      // );
      console.log(swipedir);
      if (swipedir == "left") {
        console.log("You just swiped left!");
      }
      if (swipedir == "right") {
        console.log("You just swiped right!");
      }
    });
  }

}
