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
import { showInfoText } from "../info.js";
import { explosion } from "../sounds.js";

export class Car {
  constructor(options, type) {
    let { pos, size, color, vel, acc, id, parentId } = options;
    this.id = id;
    this.parentId = parentId | 0;
    this.pos = [pos[0], pos[1]];
    this.size = size || [50, 80];  pos: [350, -2800],
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
  drawImage() {
    // var img = new Image();
    // img.src =  `https://github.com/IhssanDiba/car-driver/blob/bcd7a991b648cedc7bb61f90967078338685a06f/img/carsImges/1317286.svg`;
    if (this.level) {
      switch (this.type) {
        case "AutoCar":
          ctx.drawImage(
            imgAutoCar,
            this.pos[0],
            this.pos[1] - this.level.cameraPos[1],
            this.size[0],
            this.size[1]
          );
          break;
        case "CrazyCar":
          ctx.drawImage(
            imgCrazyCar,
            this.pos[0],
            this.pos[1] - this.level.cameraPos[1],
            this.size[0],
            this.size[1]
          );
          break;
        case "Invisible":
          ctx.drawImage(
            imgInvisible,
            this.pos[0],
            this.pos[1] - this.level.cameraPos[1],
            this.size[0],
            this.size[1]
          );
          break;
        case "Power":
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
        case "Player":
          if (this.abilities.invisible) {
            ctx.drawImage(
              imgInvisible,
              this.pos[0],
              this.pos[1] - this.level.cameraPos[1],
              this.size[0],
              this.size[1]
            );
          } else {
            ctx.drawImage(
              imgPlayer,
              this.pos[0],
              this.pos[1] - this.level.cameraPos[1],
              this.size[0],
              this.size[1]
            );
          }

          break;
        case "Car":
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
        case "Goal":
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
        showInfoText("You dont have fuel any more!");
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
              if (!obj.abilities.invisible) {
                showInfoText("Game Over");
                this.level.lost = true;
              }
            }
          }
          if (obj.type.includes("Car")) {
            if (this.type === "FiredBomb") {
              this.level.objects = this.level.objects.filter((ob) => {
                return ob.id !== obj.id;
              });
              this.crashing(obj.pos[0], obj.top - this.level.cameraPos[1]);

              obj.destroyed = true;
              this.collected = true;
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
              showInfoText("Game Over");
              this.level.lost = true;
            }
          }
          if (obj.type.includes("Car")) {
            if (this.type === "FiredBomb") {
              this.level.objects = this.level.objects.filter((ob) => {
                return ob.id !== obj.id;
              });
              this.crashing(obj.pos[0], obj.top - this.level.cameraPos[1]);

              // obj.destroyed = true;
              this.collected = true;
            }
          }
        }
      },
    };
  }
  boundToLevel() {
    if (!this.level) return;
    if(this.type === 'Goal') return;
    if (this.bottom >= this.level.levelSize[1]) {
      // this.vel[1] = 0;
      // this.setBottom(this.level.levelSize[1]);
    }

    if (this.left <= 110 && this.level.levelSize[0] <= 599) {
      this.setLeft(110);
      this.vel[0] = 0;
    } else if (this.left <= 0 && this.level.levelSize[0] > 599) {
      this.setLeft(0);
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
          this.acc = 0.0030;
        } else {
          this.acc = -0.0030;
        }
        if (this.player.acc === 0) {
          this.acc = 0;
        }
      },
      autoCarWithPlayer: () => {
        this.acc = this.player.acc / 4;
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
