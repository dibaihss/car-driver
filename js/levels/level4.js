import { Level } from "../level.js";
import { Car } from "../objects/car.js";
import { Goal } from "../objects/goal.js";
import { Player } from "../objects/player.js";
import { Power } from "../objects/power.js";
import { Invisible } from "../objects/through.js";
const p = new Player({
  pos: [320, 600],
  color: "red",
});
const pp = new Car({
  pos: [420, 150],
  color: "black",
  vel: [0, 0.2],
});
const c1 = new Car({
  pos: [320, -100],
  color: "black",
  vel: [0, 0.2],
});
var arrOfAutos = [];
const count = 20;
var distance = 100;
var wide = 320;
var dWide = 240;
var invisible = false;
for (let i = 0; i <= count; i++) {
  arrOfAutos.push(
    new Car({
      pos: [wide, (distance -= 100)],
      color: "black",
      vel: [0, 0.2],
    })
  );
  if (i > 5) {
    arrOfAutos.push(
      new Car(
        {
          pos: [wide + 20, (distance -= 150)],
          color: "black",
          vel: [0, 0.2],
        },
        "AutoCar"
      )
    );
  }
  if (i > 10) {
    arrOfAutos.push(
      new Car(
        {
          pos: [wide, (distance -= 250)],
          color: "black",
          vel: [0, 0.2],
        },
        "CrazyCar"
      )
    );
  }
  if (distance < -1000) {
    arrOfAutos.push(
      new Power({
        pos: [wide, (distance -= 400)],
      })
    );
    if (invisible) {
      arrOfAutos.push(
        new Invisible({
          pos: [dWide + 20, distance + 100],
        })
      );
      invisible = false;
    } else if (!invisible) {
      invisible = true;
    }
  }

  if (wide === 320) {
    wide = 150;
  } else if (wide === 150) {
    wide = 320;
  }
  if (dWide === 240) {
    dWide = 120;
  } else if (dWide === 120) {
    dWide = 220;
  }
}
const goal = new Goal({
  pos: [110, -10000],
  size: [600, 50],
  color: "green",
  vel: [0, 0.2],
});
arrOfAutos.push(p, goal);

export const level4 = new Level(
  arrOfAutos,

  [450, 800],
  "unity-2d-racing-game-tutorial-scrolling-clouds.gif"
);
