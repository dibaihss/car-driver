import { Car } from "./car.js";

export class Invisible extends Car{
constructor(options){
    super({
        pos: options.pos,
       size:  options.size || [35, 30],
       vel: options.vel
    }, "Invisible")
    this.collected = false
}
}