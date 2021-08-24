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
const sp = new Power({
    pos: [150 , -500],
  
})
const c4 = new Car({
  pos: [420, -600],
  color: "yellow",
  vel: [0, 0.2],
});

const c5 = new Car({
  pos: [150, -1200],
  color: "yellow",
  vel: [0, 0.2],
});
const c6 = new Car({
  pos: [420, -1000],
  color: "yellow",
  vel: [0, 0.2],
});
const c7 = new Car({
  pos: [180, -1600],
  color: "yellow",
  vel: [0, 0.2],
});
const sp2 = new Power({
    pos: [320 , -1500],
  
})
const c8 = new Car({
  pos: [320, -1350],
  color: "black",
  vel: [0, 0.2],
});
const c9 = new Car({
  pos: [500, -1800],
  color: "black",
  vel: [0, 0.2],
});
const c10 = new Car({
  pos: [120, -1900],
  color: "black",
  vel: [0, 0.2],
});
const c11 = new Car({
  pos: [320, -2000],
  color: "black",
  vel: [0, 0.2],
});
const c19 = new Car(
  {
    pos: [150, -2100],
    color: "yellow",
    vel: [0, 0.2],
  },
  "AutoCar"
);
const c18 = new Car({
  pos: [360, -2200],
  color: "yellow",
  vel: [0, 0.2],
});
const c20 = new Car(
  {
    pos: [150, -2300],
    color: "yellow",
    vel: [0, 0.2],
  },
  "CrazyCar"
);
const c21 = new Car({
  pos: [360, -2400],
  color: "yellow",
  vel: [0, 0.2],
});
const c22 = new Car({
  pos: [180, -2500],
  color: "yellow",
  vel: [0, 0.2],
});
const c23 = new Car(
  {
    pos: [500, -2600],
    color: "yellow",
    vel: [0, 0.2],
  },
  "AutoCar"
);
const c24 = new Car({
  pos: [420, -2700],
  color: "yellow",
  vel: [0, 0.2],
});
const c25 = new Car(
  {
    pos: [350, -2800],
    color: "yellow",
    vel: [0, 0.2],
  },
  "CrazyCar"
);
const c26 = new Car(
  {
    pos: [160, -2900],
    color: "yellow",
    vel: [0, 0.2],
  },
  "CrazyCar"
);
const ai = new Invisible({
    pos: [150, -2950],
  
  });
const c27 = new Car({
  pos: [360, -3000],
  color: "yellow",
  vel: [0, 0.2],
});
const c28 = new Car({
  pos: [140, -3100],
  color: "yellow",
  vel: [0, 0.2],
});
const c29 = new Car(
  {
    pos: [220, -3200],
    color: "yellow",
    vel: [0, 0.2],
  },
  "AutoCar"
);
const c30 = new Car({
  pos: [140, -3350],
  color: "yellow",
  vel: [0, 0.2],
});
const c31 = new Car(
  {
    pos: [160, -3470],
    color: "yellow",
    vel: [0, 0.2],
  },
  "CrazyCar"
);
const c32 = new Car(
  {
    pos: [420, -3600],
    color: "yellow",
    vel: [0, 0.2],
  },
  "AutoCar"
);
const c33 = new Car(
    {
      pos: [280, -3715],
      color: "yellow",
      vel: [0, 0.2],
    },
  );
const goal = new Goal({
  pos: [110, -3800],
  size: [600, 50],
  color: "green",
  vel: [0, 0.2],
});
export const level3 = new Level(
  [
    pp,
    p,
    c1,
    c2,
    c3,
    sp,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c20,
    c18,
    c19,
    c20,
    c21,
    c22,
    sp2,
    c23,
    c24,
    c25,
    c26,
    ai,
    c27,
    c28,
    c29,
    c30,
    c31,
    c32,
    c33,
    goal,
  ],

  [601, 900],
  "ezgif.com-gif-maker.gif",
  'Pass auf, die bluen Autos lenken in die Gegenrichtung! <br> press "space" to move to next level'
);
