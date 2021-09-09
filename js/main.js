import { Game } from "./game.js"
import { showInfoText } from "./info.js"
import { Alllevels } from "./levels/dynamicLevels.js"



showInfoText("Press 'space' to start!")

const game = new Game(Alllevels)