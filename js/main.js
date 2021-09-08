import { Game } from "./game.js"
import { showInfoText } from "./info.js"
import {level1} from "./levels/level1.js"
import {level2} from "./levels/level2.js"
import { level3 } from "./levels/level3.js"
import { level4 } from "./levels/level4.js"
import { Alllevels } from "./levels/dynamicLevels.js"



showInfoText("Press 'space' to start!")
const game = new Game(Alllevels)