import { canvas, changeBackground, Startbtn } from "./canvas.js";
import { hideInfoText, showInfoText } from "./info.js";

const STATUS = {
  ready: 1,
  start: 0,
  pause: 2,
};
export class Game {
  constructor(levelList) {
    this.levelList = [];
    this.gameStatus = STATUS.ready;
    this.keyfunctionRef = (e) => this.keyfunction(e);
    for (let level of levelList) {
      this.levelList.push(level);
      level.game = this;
      level.index = this.levelList.length;
    }
    this.currentLevelIndex = 0;
    this.addControls();
    this.androidControle();
  }
  addControls() {
    window.addEventListener("keydown", this.keyfunctionRef);
  }
  keyfunction(e) {
    if (e.key === " ") {
      if (this.gameStatus === STATUS.ready) {
        hideInfoText();
        this.gameStart();
      } else if (this.gameStatus === STATUS.start) {
        showInfoText("Paused");
        this.gamePause();
      } else if (this.gameStatus === STATUS.pause) {
        this.gameResume();
      }
    }
  }
  get currentLevel() {
    return this.levelList[this.currentLevelIndex];
  }
  gameStart() {

    this.levelList[this.currentLevelIndex].startLevel();
    this.gameStatus = STATUS.start;
  }
  gamePause() {
    this.gameStatus = STATUS.pause;

    this.currentLevel.timer.pause();
  }
  gameResume() {
    hideInfoText();
    this.gameStatus = STATUS.start;
    this.currentLevel.timer.paused = false;
    this.currentLevel.timer.start();
  }
  startNextLevel() {
    this.currentLevelIndex++;
   
      if (this.currentLevel) {
        this.currentLevel.startLevel();

        if (this.currentLevel.hint) {
          this.gamePause();
          setTimeout(() => {
            showInfoText(this.currentLevel.hint);

            Startbtn.style.display = "block";
          }, 1001);
        }
        if (this.currentLevel.background) {
          changeBackground(this.currentLevel.background);
        }
      } else {
        showInfoText("You have won all levels!");
      }
    
  }
  androidControle() {
    Startbtn.addEventListener("click", (e) => {
      if (this.gameStatus === STATUS.ready) {
        hideInfoText();
        this.gameStart();
        Startbtn.style.display = "none";
      } else if (this.gameStatus === STATUS.start) {
        showInfoText("Paused");
        this.gamePause();
      } else if (this.gameStatus === STATUS.pause) {
        this.gameResume();
        Startbtn.style.display = "none";
      }
    });
  }
}
