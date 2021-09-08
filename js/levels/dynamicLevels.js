import { Level } from "../level.js";
import { Car } from "../objects/car.js";
import { Goal } from "../objects/goal.js";
import { Player } from "../objects/player.js";
import { Power } from "../objects/power.js";
import { Invisible } from "../objects/through.js";

var levelDesigner = [
  {
    objs: [
      {
        id: 1,
        type: "CrazyCar",
        threeDPos: "translate3d(334px, 448px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [414, 587],
      },
      {
        id: 2,
        type: "car",
        threeDPos: "translate3d(323px, 464px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [414, 831],
      },
      {
        id: 3,
        type: "AutoCar",
        threeDPos: "translate3d(322px, 422px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [404, 1162],
      },
      {
        id: 4,
        type: "car",
        threeDPos: "translate3d(503px, -136px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [587, 943],
      },
      {
        id: 5,
        type: "CrazyCar",
        threeDPos: "translate3d(345px, 174px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [370, 1463],
      },
      {
        id: 6,
        type: "AutoCar",
        threeDPos: "translate3d(330px, 155px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [373, 1775],
      },
      {
        id: 7,
        type: "invisible",
        threeDPos: "translate3d(179px, -506px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [228, 1364],
      },
      {
        id: 8,
        type: "boost",
        threeDPos: "translate3d(348px, -99px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [398, 2098],
      },
      {
        id: 9,
        type: "car",
        threeDPos: "translate3d(174px, 29px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [230, 2599],
      },
      {
        id: 10,
        type: "car",
        threeDPos: "translate3d(479px, -280px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [548, 2568],
      },
      {
        id: 11,
        type: "car",
        threeDPos: "translate3d(325px, -261px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [377, 2878],
      },
      {
        id: 12,
        type: "AutoCar",
        threeDPos: "translate3d(334px, -162px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [388, 3298],
      },
      {
        id: 13,
        type: "car",
        threeDPos: "translate3d(329px, -200px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [378, 3594],
      },
      {
        id: 14,
        type: "CrazyCar",
        threeDPos: "translate3d(335px, -254px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [370, 3791],
      },
      {
        id: 15,
        type: "car",
        threeDPos: "translate3d(409px, -77px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [490, 4248],
      },
      {
        id: 16,
        type: "AutoCar",
        threeDPos: "translate3d(202px, -183px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [247, 4447],
      },
      {
        id: 17,
        type: "CrazyCar",
        threeDPos: "translate3d(460px, -273px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [534, 4673],
      },
      {
        id: 18,
        type: "boost",
        threeDPos: "translate3d(280px, -235px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [346, 5058],
      },
      {
        id: 19,
        type: "car",
        threeDPos: "translate3d(411px, -103px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [467, 5464],
      },
      {
        id: 20,
        type: "AutoCar",
        threeDPos: "translate3d(265px, -92px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [337, 5824],
      },
      {
        id: 21,
        type: "car",
        threeDPos: "translate3d(337px, -90px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [421, 6045],
      },
      {
        id: 22,
        type: "car",
        threeDPos: "translate3d(337px, -84px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [421, 6372],
      },
      {
        id: 23,
        type: "CrazyCar",
        threeDPos: "translate3d(339px, -87px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [423, 6711],
      },
    ],
    levelIndex: 1,
  },
  {
    objs: [
      {
        id: 1,
        type: "CrazyCar",
        threeDPos: "translate3d(326px, 473px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [418, 621],
      },
      {
        id: 2,
        type: "car",
        threeDPos: "translate3d(335px, 444px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [427, 907],
      },
      {
        id: 3,
        type: "AutoCar",
        threeDPos: "translate3d(338px, 384px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [411, 1119],
      },
      {
        id: 4,
        type: "car",
        threeDPos: "translate3d(326px, 364px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [398, 1438],
      },
      {
        id: 5,
        type: "boost",
        threeDPos: "translate3d(248px, 807px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [318, 2095],
      },
      {
        id: 6,
        type: "invisible",
        threeDPos: "translate3d(252px, -48px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [270, 1516],
      },
      {
        id: 7,
        type: "CrazyCar",
        threeDPos: "translate3d(341px, -208px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [388, 1762],
      },
      {
        id: 8,
        type: "AutoCar",
        threeDPos: "translate3d(484px, -205px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [556, 2050],
      },
      {
        id: 9,
        type: "car",
        threeDPos: "translate3d(339px, -177px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [408, 2400],
      },
      {
        id: 10,
        type: "car",
        threeDPos: "translate3d(217px, -185px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [265, 2617],
      },
      {
        id: 11,
        type: "AutoCar",
        threeDPos: "translate3d(461px, -267px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [518, 2873],
      },
      {
        id: 12,
        type: "car",
        threeDPos: "translate3d(325px, -263px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [414, 3174],
      },
      {
        id: 13,
        type: "AutoCar",
        threeDPos: "translate3d(428px, -320px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [511, 3428],
      },
      {
        id: 14,
        type: "car",
        threeDPos: "translate3d(233px, -437px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [317, 3635],
      },
      {
        id: 15,
        type: "CrazyCar",
        threeDPos: "translate3d(351px, -426px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [436, 3922],
      },
      {
        id: 16,
        type: "boost",
        threeDPos: "translate3d(360px, -315px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [423, 4327],
      },
      {
        id: 17,
        type: "invisible",
        threeDPos: "translate3d(319px, -2141px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [365, 2798],
      },
      {
        id: 18,
        type: "car",
        threeDPos: "translate3d(484px, -621px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [574, 4593],
      },
      {
        id: 19,
        type: "car",
        threeDPos: "translate3d(207px, -838px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [281, 4683],
      },
      {
        id: 20,
        type: "AutoCar",
        threeDPos: "translate3d(352px, -839px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [425, 4991],
      },
      {
        id: 21,
        type: "CrazyCar",
        threeDPos: "translate3d(331px, -865px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [361, 5265],
      },
      {
        id: 22,
        type: "car",
        threeDPos: "translate3d(317px, -841px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [381, 5591],
      },
      {
        id: 23,
        type: "AutoCar",
        threeDPos: "translate3d(305px, -831px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [386, 5931],
      },
      {
        id: 24,
        type: "car",
        threeDPos: "translate3d(167px, -860px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [248, 6243],
      },
      {
        id: 25,
        type: "CrazyCar",
        threeDPos: "translate3d(400px, -894px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [475, 6495],
      },
      {
        id: 26,
        type: "car",
        threeDPos: "translate3d(155px, -795px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [225, 6929],
      },
      {
        id: 27,
        type: "AutoCar",
        threeDPos: "translate3d(343px, -808px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [412, 7158],
      },
      {
        id: 28,
        type: "boost",
        threeDPos: "translate3d(509px, -2311px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [549, 5973],
      },
      {
        id: 29,
        type: "car",
        threeDPos: "translate3d(438px, -684px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [490, 7961],
      },
      {
        id: 30,
        type: "AutoCar",
        threeDPos: "translate3d(317px, -714px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [390, 8213],
      },
      {
        id: 31,
        type: "car",
        threeDPos: "translate3d(375px, -778px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [466, 8440],
      },
      {
        id: 32,
        type: "CrazyCar",
        threeDPos: "translate3d(335px, -842px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [384, 8622],
      },
      {
        id: 33,
        type: "CrazyCar",
        threeDPos: "translate3d(500px, -834px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [539, 9041],
      },
      {
        id: 34,
        type: "CrazyCar",
        threeDPos: "translate3d(202px, -865px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [275, 9234],
      },
      {
        id: 35,
        type: "boost",
        threeDPos: "translate3d(364px, -2822px, 0px)",
        parentId: 0,
        size: [50, 60],
        pos: [436, 7585],
      },
    ],
    levelIndex: 2,
  },
];

var levels = [];
var saveIndexLastCar = 0;
for (let lev of levelDesigner) {
  var ArrayOfObjs = [];
  for (let car of lev.objs) {
    switch (car.type) {
      case "car":
        ArrayOfObjs.push(
          new Car({
            pos: [car.pos[0] - 100, -car.pos[1]],
            color: "yellow",
            vel: [0, 0.2],
          })
        );
        saveIndexLastCar = ArrayOfObjs.length - 1;
        break;
      case "AutoCar":
        ArrayOfObjs.push(
          new Car(
            {
              pos: [car.pos[0] - 100, -car.pos[1]],
              color: "yellow",
              vel: [0, 0.2],
            },
            car.type
          )
        );
        saveIndexLastCar = ArrayOfObjs.length - 1;
        break;
      case "CrazyCar":
        ArrayOfObjs.push(
          new Car(
            {
              pos: [car.pos[0] - 100, -car.pos[1]],
              color: "yellow",
              vel: [0, 0.2],
            },
            car.type
          )
        );
        saveIndexLastCar = ArrayOfObjs.length - 1;
        break;
      case "Player":
        ArrayOfObjs.push(
          new Player({
            pos: [car.pos[0] - 100, -car.pos[1]],
            color: "yellow",
            vel: [0, 0.2],
          })
        );

        break;
      case "invisible":
        ArrayOfObjs.push(
          new Invisible({
            pos: [car.pos[0] - 100, -car.pos[1]],
          })
        );

        break;

      case "boost":
        ArrayOfObjs.push(
          new Power({
            pos: [car.pos[0] - 100, -car.pos[1]],
          })
        );

        break;
      case "goal":
        ArrayOfObjs.push(
          new Goal({
            pos: [car.pos[0] - 100, -car.pos[1]],
            size: [600, 50],
            color: "yellow",
            vel: [0, 0.2],
          })
        );
      default:
        break;
    }
  }
  const checkIfGoalExists = ArrayOfObjs.find((obj) => {
    return obj.type === "Goal";
  });
  if (!checkIfGoalExists) {
    ArrayOfObjs.push(
      new Goal({
        pos: [
          ArrayOfObjs[saveIndexLastCar].pos[0],
          ArrayOfObjs[saveIndexLastCar].pos[1] - 300,
        ],
        size: [600, 50],
        color: "yellow",
        vel: [0, 0.2],
      })
    );
  }
  ArrayOfObjs.push(
    new Player({
      pos: [320, 400],
      color: "red",
    })
  );

  levels.push(
    new Level(
      ArrayOfObjs,
      [450, 800],
      "unity-2d-racing-game-tutorial-scrolling-clouds.gif"
    )
  );
}

export const Alllevels = levels;
