import { Level } from "../level.js";
import { Car } from "../objects/car.js";
import { Goal } from "../objects/goal.js";
import { Player } from "../objects/player.js";
import { Power } from "../objects/power.js";

const p = new Player({
  pos: [320, 600],
  color: "red",
});
const pp = new Car({
  pos: [320, 150],
  color: "black",
  vel: [0, 0.2],
});
const c1 = new Car({
  pos: [320, -100],
  color: "black",
  vel: [0, 0.2],
});
const c2 = new Car({
  pos: [150, 50],
  color: "yellow",
  vel: [0, 0.2],
});

const c3 = new Car({
  pos: [150, -400],
  color: "yellow",
  vel: [0, 0.2],
});
const c4 = new Car({
  pos: [150, -600],
  color: "yellow",
  vel: [0, 0.2],
});
const sp = new Power({
  pos: [310, -500],
});

const c5 = new Car({
  pos: [150, -1200],
  color: "yellow",
  vel: [0, 0.2],
});
const c6 = new Car({
  pos: [180, -1000],
  color: "yellow",
  vel: [0, 0.2],
});
const c7 = new Car({
  pos: [180, -1600],
  color: "yellow",
  vel: [0, 0.2],
});
const c8 = new Car({
  pos: [320, -1350],
  color: "black",
  vel: [0, 0.2],
});
const c19 = new Car(
  {
    pos: [150, -1800],
    color: "yellow",
    vel: [0, 0.2],
  },
  "AutoCar"
);
const c18 = new Car({
  pos: [360, -1900],
  color: "yellow",
  vel: [0, 0.2],
});
const c20 = new Car(
  {
    pos: [150, -2050],
    color: "yellow",
    vel: [0, 0.2],
  },
  "CrazyCar"
);
const goal = new Goal({
  pos: [110, -2150],
  size: [320, 50],
  color: "green",
  vel: [0, 0.2],
});
export const level2 = new Level(
  [pp, p, c1, c2, sp, c3, c4, c5, c6, c7, c8, c20, c18, c19, goal],
  [450, 800],
  "unity-2d-racing-game-tutorial-scrolling-clouds.gif"
);
