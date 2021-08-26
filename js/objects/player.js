
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
    this.lives = 4;
    this.audio = document.getElementById("audio");
    this.driveCar = document.getElementById('drive')
    this.sound()
   
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
          this.play()
          this.vel[1] = -0.15;
         
          break;
      }
      e.preventDefault()

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
this.puaseAudio()
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
  sound() {
  
    this.driveCar.play()
  }

play(){
  this.driveCar.pause()

  this.audio.play();
}
puaseAudio(){
  this.audio.pause();
  this.driveCar.play()
}
drawAvailableLives(){
  var x = 0;
  for(let i = 1; i <= this.lives; i++){
  console.log('sadd')

    var heart = new Image()
  heart.src = "https://upload.wikimedia.org/wikipedia/commons/f/f1/Heart_coraz%C3%B3n.svg"
  ctx.drawImage(heart, x += 30,30 , 20 ,20)
  }
  
}
}
// next task it is making this game 'https://www.w3schools.com/graphics/tryit.asp?filename=trygame_default_gravity'