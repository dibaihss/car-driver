import { Car } from "./car.js";

export class Bomb extends Car{
    constructor(options){
        super({
            pos: options.pos,
           size:  options.size || [35, 30],
           vel: options.vel
        }, "Bomb")
    this.collected = false

    }
}
// https://upload.wikimedia.org/wikipedia/commons/9/95/Bomb_icon.svg