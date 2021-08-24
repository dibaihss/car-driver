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
  pos: [320, -200],
  color: "black",
  vel: [0, 0.2],
});
const c1 = new Car({
  pos: [320, -100],
  color: "black",
  vel: [0, 0.2],
});
const c2 = new Car({
  pos: [150, 100],
  color: "yellow",
  vel: [0, 0.2],
});

const c3 = new Car({
  pos: [150, -400],
  color: "yellow",
  vel: [0, 0.2],
});
const sp = new Power({
  pos: [150, -700],
});
const c5 = new Car({
  pos: [320, -850],
  color: "black",
  vel: [0, 0.2],
});
const c6 = new Car({
  pos: [150, -920],
  color: "yellow",
  vel: [0, 0.2],
});

const c7 = new Car({
  pos: [150, -1050],
  color: "yellow",
  vel: [0, 0.2],
});

const ai = new Invisible({
    pos: [150, -1200],
  
  });
  const c8 = new Car({
    pos: [150, -1300],
    color: "yellow",
    vel: [0, 0.2],
  });
  const c9 = new Car({
    pos: [320, -1400],
    color: "yellow",
    vel: [0, 0.2],
  });
  const c10 = new Car({
    pos: [180, -1500],
    color: "yellow",
    vel: [0, 0.2],
  });
  const c11 = new Car({
    pos: [240, -1700],
    color: "yellow",
    vel: [0, 0.2],
  });
const goal = new Goal({
  pos: [110, -2000],
  size: [320, 50],
  color: "green",
  vel: [0, 0.2],
});
export const level1 = new Level(
  [pp, p, c1, c2, c3, c5, c6, c7,c8 , c9,c10,c11, sp, ai, goal],
  [450, 800]
);
