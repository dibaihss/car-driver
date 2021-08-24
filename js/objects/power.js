import { Car } from "./car.js";

export class Power extends Car{
constructor(options){
    super({
        pos: options.pos,
       size:  options.size || [30, 30],
       vel: options.vel
    }, "Power")
    this.collected = false
}
}