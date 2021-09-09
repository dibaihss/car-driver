import { Car } from "./car.js";

export class FiredBomb extends Car{
    constructor(options){
        super({
            pos: options.pos,
           size:  options.size || [35, 30],
           vel: options.vel
        }, "FiredBomb")
    this.collected = false

    }
}