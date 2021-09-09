import { canvas, changeBackground, clearCanvas } from "./canvas.js";
import { hideInfoText, showInfoText } from "./info.js";
import { Timer } from "./timer.js";
import { minmax } from "./utils.js";
export class Level {
  constructor(objects, levelSize, background, hint) {
    this.levelSize = levelSize || [600, 900] || [canvas.width, canvas.height];
    this.objects = objects;
    this.timer = new Timer();
    this.cameraPos = [0, canvas.height];
    this.originalCameraPos = [...this.cameraPos];
    this.timer.update = (deltaTime) => this.update(deltaTime);
    this.lost = false;
    this.won = false;
    this.index = null;
    this.game = null;
    this.player = null;
    this.hint = hint || null;
    this.background = background;
    this.originalObjs = [...this.objects];
    this.background ? changeBackground(background) : "";
  }
  addObjects() {}
  updateCamera() {
    this.cameraPos[1] = minmax(this.player.top - canvas.height / 2);
  }
  startLevel() {
    // this.timer.start();
    if (this.background) changeBackground(this.background);
    this.timer.startAnimating();
  }
  update(deltaTime) {
    const foundPlayer = this.objects.find((obj) => {
      return obj.type === "Player";
    });
    if (foundPlayer) {
      this.player = foundPlayer;
      this.updateCamera();
    }
    this.checkLosing();
    this.checkWin();
    clearCanvas();
    this.objects.forEach((obj) => {
      if (obj.bottom === 800 && obj.type !== "Player") return;
      obj.level = this;
      if (obj.type === "Player") {
        obj.update(deltaTime, this.objects);
        obj.draw("player");
        this.player.drawAvailableLives();
        this.player.drawAvailableBombs();
      } else if (obj.type === "AutoCar" && !obj.destroyed) {
        obj.update(deltaTime, this.objects);
        obj.draw("autoCar");
        obj.player = this.player;
      } else if (obj.type === "CrazyCar" && !obj.destroyed) {
        obj.update(deltaTime, this.objects);
        obj.draw("crazyCar");
        obj.player = this.player;
      } else if (obj.type === "Goal") {
        obj.update(deltaTime, this.objects);
        obj.draw("goal");
        obj.player = this.player;
      } else if (obj.type === "Power") {
        obj.update(deltaTime, this.objects);
        obj.draw("power", obj.collected);
        obj.player = this.player;
      } else if (obj.type === "Fuel") {
        obj.update(deltaTime, this.objects);
        obj.draw("Fuel", obj.collected);
        obj.player = this.player;
      } else if (obj.type === "Invisible") {
        obj.update(deltaTime, this.objects);
        obj.draw("invisible", obj.collected);
        obj.player = this.player;
      } else if (obj.type === "Car" && !obj.destroyed) {
        obj.update(deltaTime, this.objects);
        obj.draw("Car");
        obj.player = this.player;
      } else if (obj.type === "ChildCar" && !obj.destroyed) {
        obj.update(deltaTime, this.objects);
        obj.draw("ChildCar");
        obj.player = this.player;
      } else if (obj.type === "Bomb") {
        obj.update(deltaTime, this.objects);
        obj.draw("Bomb", obj.collected);
        obj.player = this.player;
      } else if (obj.type === "FiredBomb" && !obj.collected) {
        obj.update(deltaTime, this.objects);
        obj.draw("FiredBomb", obj.collected);
        obj.player = this.player;
      }
    });
  }
  reset() {
    this.objects = this.originalObjs;
    this.objects.forEach((obj) => {
      obj.reset();
      obj.destroyed = false;
      obj.collected = false;
    });
    this.cameraPos = [...this.originalCameraPos];
  }
  checkLosing() {
    if (!this.lost) return;
    showInfoText("Game Over");
    this.player.lives -= 1;
    this.timer.pause();
    if (this.player.lives === 0) {
      showInfoText("Game Over no more available lives");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      this.startOver();
    }
  }
  startOver() {
    setTimeout(() => {
      hideInfoText();
      this.player.fuelStatus = 1;
      this.reset();
      this.lost = false;
      this.timer.paused = false;
      this.startLevel();
      this.player.vel[1] = -0.01;
    }, 2000);
  }
  checkWin() {
    if (!this.won) return;
    showInfoText("Factory");
    this.timer.pause();
    this.game.startNextLevel();
    setTimeout(() => {
      hideInfoText();
    }, 1000);
  }
}
