import { ctx } from "../canvas.js";
import {
  fuelStatus,
  imgAutoCar,
  imgBomb,
  imgFuel,
  imgCar,
  imgChildCar,
  imgCrazyCar,
  imgFiredBomb,
  imgFlame,
  imgGoal,
  imgInvisible,
  imgPlayer,
  imgBoost,
} from "../Htmlelement.js";
import { explosion } from "../sounds.js";

export class Car {
  constructor(options, type) {
    let { pos, size, color, vel, acc, id, parentId } = options;
    this.id = id;
    this.parentId = parentId | 0;
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
    this.destroyed = false;
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
        this.drawImage("invisible");
      } else {
        this.drawImage("player");
      }
    } else if (type === "goal") {
      this.drawImage("goal");
    } else if (type === "crazyCar") {
      this.drawImage("crazycar");
    } else if (type === "autoCar") {
      this.drawImage("autocar");
    } else if (type === "power" && !collected) {
      this.drawImage("boost");
    } else if (type === "Fuel" && !collected) {
      this.drawImage("Fuel");
    } else if (type === "Car") {
      this.drawImage("car");
    } else if (type === "invisible" && !collected) {
      this.drawImage("invisible");
    } else if (type === "ChildCar") {
      this.drawImage("ChildCar");
    } else if (type === "Bomb" && !collected) {
      this.drawImage("Bomb");
    } else if (type === "FiredBomb") {
      this.drawImage("FiredBomb");
    }
  }
  drawImage(ImagePath, xDistance) {
    // var img = new Image();
    // img.src =  `https://github.com/IhssanDiba/car-driver/blob/bcd7a991b648cedc7bb61f90967078338685a06f/img/carsImges/1317286.svg`;
    if (this.level) {
      switch (ImagePath) {
        case "autocar":
          ctx.drawImage(
            imgAutoCar,
            this.pos[0],
            this.pos[1] - this.level.cameraPos[1],
            this.size[0],
            this.size[1]
          );
          break;
        case "crazycar":
          ctx.drawImage(
            imgCrazyCar,
            this.pos[0],
            this.pos[1] - this.level.cameraPos[1],
            this.size[0],
            this.size[1]
          );
          break;
        case "invisible":
          ctx.drawImage(
            imgInvisible,
            this.pos[0],
            this.pos[1] - this.level.cameraPos[1],
            this.size[0],
            this.size[1]
          );
          break;
        case "boost":
          ctx.drawImage(
            imgBoost,
            this.pos[0],
            this.pos[1] - this.level.cameraPos[1],
            this.size[0],
            this.size[1]
          );
          break;
        case "Fuel":
          ctx.drawImage(
            imgFuel,
            this.pos[0],
            this.pos[1] - this.level.cameraPos[1],
            this.size[0],
            this.size[1]
          );
          break;
        case "player":
          ctx.drawImage(
            imgPlayer,
            this.pos[0],
            this.pos[1] - this.level.cameraPos[1],
            this.size[0],
            this.size[1]
          );
          break;
        case "car":
          ctx.drawImage(
            imgCar,
            this.pos[0],
            this.pos[1] - this.level.cameraPos[1],
            this.size[0],
            this.size[1]
          );
          break;
        case "ChildCar":
          ctx.drawImage(
            imgChildCar,
            this.pos[0],
            this.pos[1] - this.level.cameraPos[1],
            this.size[0],
            this.size[1]
          );
          break;
        case "Bomb":
          ctx.drawImage(
            imgBomb,
            this.pos[0],
            this.pos[1] - this.level.cameraPos[1],
            this.size[0],
            this.size[1]
          );
          break;
        case "FiredBomb":
          ctx.drawImage(
            imgFiredBomb,
            this.pos[0],
            this.pos[1] - this.level.cameraPos[1],
            this.size[0],
            this.size[1]
          );
          break;
        case "goal":
          ctx.drawImage(
            imgGoal,
            this.pos[0],
            this.pos[1] - this.level.cameraPos[1],
            this.size[0],
            this.size[1]
          );
          break;
      }
    }
  }
  update(deltaTime, objs) {
    this.vel[0] += this.acc * deltaTime;
    this.vel[0] *= 1 - this.friction; // Geschwindigkeit veringern
    this.pos[0] += this.vel[0] * deltaTime;
    this.pos[1] += this.vel[1] * deltaTime;
    if (this.player) {
      this.player.fuelStatus -= 0.000016;
      fuelStatus.value = this.player.fuelStatus;
      if (this.player.vel[1] === -0.15) this.player.fuelStatus -= 0.00003;
      if (this.player.fuelStatus < 0) {
        this.level.lost = true;
      }
    }

    this.boundToLevel();
    objs.forEach((obj) => {
      this.collideWithObj(obj).fromAbove();
      this.collideWithObj(obj).fromBelow();
      this.collideWithObj(obj).fromLeft();
      this.collideWithObj(obj).fromRight();
      if (this.type === "AutoCar" && this.player) {
        this.relatedActions(obj).autoCarWithPlayer();
      }

      if (this.type === "CrazyCar" && this.player) {
        this.relatedActions(obj).crazyCarWithPlayer();
      }
      if (this.parentId === obj.id) {
        this.relatedActions(obj).parentWithChild();
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
              obj.driveCar.pause();

              this.crashing(
                this.right - 60,
                obj.top - 90 - this.level.cameraPos[1]
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
            } else if (this.type === "Bomb") {
              this.collectBomb(obj);
            } else if (this.type === "Fuel") {
              this.collectFuel(obj);
            } else {
              if (!obj.abilities.invisible) this.level.lost = true;
            }
          }
          if (obj.type.includes("Car")) {
            if (this.type === "FiredBomb") {
              this.crashing(obj.pos[0], obj.top - this.level.cameraPos[1]);
              setTimeout(() => {
                obj.destroyed = true;
                this.collected = true;
              }, 100);
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
            } else if (this.type === "Fuel") {
              this.collectFuel(obj);
            } else {
              this.level.lost = true;
            }
          }
          if (obj.type.includes("Car")) {
            if (this.type === "FiredBomb") {
              this.crashing(obj.pos[0], obj.top - this.level.cameraPos[1]);
              setTimeout(() => {
                obj.destroyed = true;
                this.collected = true;
              }, 100);
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

    if (this.left <= 110 && this.level.levelSize[0] <= 599) {
      this.setLeft(120);
      this.vel[0] = 0;
    } else if (this.left <= 0 && this.level.levelSize[0] > 599) {
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
    obj.vel[1] = -0.3;
    this.collected = true;
    setTimeout(() => {
      obj.vel[1] = -0.01;
    }, 1500);
  }
  collectFuel(obj) {
    if (this.collected) return;
    this.player.fuelStatus = 1;
    this.collected = true;
  }
  collectBomb(obj) {
    if (this.collected) return;
    obj.abilities.bombs += 1;
    this.collected = true;
  }
  relatedActions(obj) {
    return {
      crazyCarWithPlayer: () => {
        if (this.player.acc < 0) {
          this.acc = 0.006;
        } else {
          this.acc = -0.006;
        }
        if (this.player.acc === 0) {
          this.acc = 0;
        }
      },
      autoCarWithPlayer: () => {
        this.acc = this.player.acc / 2;
        this.acc - 0.001;
      },
      parentWithChild: () => {
        this.acc = obj.acc;
        this.vel[1] = obj.vel[1] + 0.05;
      },
    };
  }
  crashing(x, y) {
    ctx.drawImage(imgFlame, x, y, 100, 100);
    explosion.play();
  }
}
