import { changeBackground, clearCanvas, ctx, img } from "../canvas.js";

export class Car {
  constructor(options, type) {
    let { pos, size, color, vel, acc } = options;
    this.pos = [pos[0], pos[1]];
    this.size = size || [50, 80];
    this.color = color || "red";
    this.type = type || "Car";
    this.vel = vel || [0, 0.2];
    this.acc = acc || 0; /// Beschleunigung in X Richtung
    this.nitro = this.friction = 0.2;
    this.level = null;
    this.player = null;
    this.ppos = [...this.pos];
    this.originalPos = [...this.pos];
    this.originalVel = [...this.vel];
  }

  get prevLeft() {
    return this.ppos[0];
  }

  //   10 + 300 = 310  x Richtung
  get prevRight() {
    return this.ppos[0] + this.size[0];
  }

  //   10 y Wert
  get prevTop() {
    return this.ppos[1];
  }
  get prevBottom() {
    return this.ppos[1] + this.size[1];
  }
  get left() {
    return this.pos[0];
  }
  //   10 + 300 = 310  x Richtung
  get right() {
    return this.pos[0] + this.size[0];
  }

  //   10 y Wert
  get top() {
    return this.pos[1];
  }
  get bottom() {
    return this.pos[1] + this.size[1];
  }

  setLeft(val) {
    this.pos[0] = val;
  }
  setRight(val) {
    this.pos[0] = val - this.size[0];
  }
  setTop(val) {
    this.pos[1] = val;
  }
  setBottom(val) {
    this.pos[1] = val - this.size[1];
  }
  draw(type = null, collected) {
    if (type === "player") {
      if (this.abilities.invisible) {
        this.drawImage("eye-1.1s-200px (1).svg");
      } else {
        this.drawImage("car_topview.svg");
      }
    } else if (type === "goal") {
      // this.drawImage("1317286.svg");
    } else if (type === "crazyCar") {
      this.drawImage("crazy_car_Front.svg");
    } else if (type === "autoCar") {
      this.drawImage("auto_car_Front.svg");
    } else if (type === "power" && !collected) {
      // this.drawImage("map-poi-fuel-pump.svg");
    } else if (type === "Car") {
      this.drawImage("Car_Green_Front.svg");
    } else if (type === "invisible" && !collected) {
      // this.drawImage("eye-1.1s-200px (1).svg");
    }
  }
  drawImage(ImagePath) {

    // var img = new Image();

    img.src =  `../../img/carsImges/${ImagePath}?sanitize=true`;
    if (this.level) {
      ctx.drawImage(
        img,
        this.pos[0],
        this.pos[1] - this.level.cameraPos[1],
        this.size[0],
        this.size[1]
      );
    }
  }
  update(deltaTime, objs) {
    this.vel[0] += this.acc * deltaTime;
    this.vel[0] *= 1 - this.friction; // Geschwindigkeit veringern
    this.pos[0] += this.vel[0] * deltaTime;
    this.pos[1] += this.vel[1] * deltaTime;
    this.boundToLevel();
    objs.forEach((obj) => {
      this.collideWithObj(obj).fromAbove();
      this.collideWithObj(obj).fromBelow();
      this.collideWithObj(obj).fromLeft();
      this.collideWithObj(obj).fromRight();
      if (this.type === "AutoCar" && this.player) {
        this.acc = this.player.acc / 2;
        this.acc - 0.001;
      }
      if (this.type === "CrazyCar" && this.player) {
        if (this.player.acc < 0) {
          this.acc = 0.006;
        } else {
          this.acc = -0.006;
        }
        if (this.player.acc === 0) {
          this.acc = 0;
        }
      }
    });
  }
  collideWithObj(obj) {
    return {
      fromLeft: () => {},
      fromRight: () => {},
      fromAbove: () => {
        if (this.prevBottom <= obj.top && this.overLabsWith(obj)) {
          if (obj.type === "Player") {
            if (this.type === "Goal") {
            } else {
              if (!obj.abilities.invisible) {
                this.setBottom(obj.top);
                this.vel[1] = 0;
              }
            }

            if (this.type === "Car" && !obj.abilities.invisible) {
              var img = new Image();
              img.src =  `../../img/carsImges/fSyfzkq-flame-vector.svg`;
              ctx.drawImage(
                img,
                this.right - 60,
                obj.top - 90 - this.level.cameraPos[1],

                100,
                100
              );
            }

            if (this.type === "Goal") {
              setTimeout(() => {
                this.level.won = true;
              }, 500);
            } else if (this.type === "Power") {
              this.collectPower(obj);
            } else if (this.type === "Invisible") {
              this.collectAbility(obj);
            } else {
              if (!obj.abilities.invisible) this.level.lost = true;
            }
          }
        }
      },
      fromBelow: () => {
        if (this.prevTop >= obj.bottom && this.overLabsWith(obj)) {
          if (obj.type === "Player") {
            if (this.type === "Goal" || this.type === "Power") {
            } else {
              this.setTop(obj.bottom);
              this.vel[1] = 0;
            }

            if (this.type === "Goal") {
              setTimeout(() => {
                this.level.won = true;
              }, 500);
            } else if (this.type === "Power") {
              this.collectPower(obj);
            } else if (this.type === "Invisible") {
              this.collectAbility(obj);
            } else {
              this.level.lost = true;
            }
          }
        }
      },
    };
  }
  boundToLevel() {
    if (!this.level) return;
    if (this.bottom >= this.level.levelSize[1]) {
      // this.vel[1] = 0;
      // this.setBottom(this.level.levelSize[1]);
    }
    if (this.left <= 110 && this.level.levelSize[0] <= 600) {
      this.setLeft(120);
      this.vel[0] = 0;
    } else if (this.left <= 0 && this.level.levelSize[0] > 600) {
      this.setLeft(50);
    } else if (this.right >= this.level.levelSize[0]) {
      this.setRight(this.level.levelSize[0]);
      this.vel[0] = 0;
    }
  }
  overLabsWith(obj) {
    if (this === obj) return false;
    return (
      obj.left <= this.right &&
      obj.top <= this.bottom &&
      obj.right >= this.left &&
      obj.bottom >= this.top
    );
  }
  reset() {
    this.pos = [...this.originalPos];
    this.vel = [...this.originalVel];
    this.collected = false;
  }
  collectAbility(obj) {
    if (this.collected) return;
    obj.abilities.invisible = true;
    this.collected = true;
    setTimeout(() => {
      obj.abilities.invisible = false;
    }, 2000);
  }
  collectPower(obj) {
    if (this.collected) return;
    obj.removeControl();
    obj.vel[1] = -0.3;
    this.collected = true;
    setTimeout(() => {
      obj.vel[1] = -0.01;
    }, 1500);
  }
}
