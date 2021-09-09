import { Car } from "./car.js";

export class Fuel extends Car{
constructor(options){
    super({
        pos: options.pos,
       size:  options.size || [30, 30],
       vel: options.vel
    }, "Fuel")
    this.collected = false
}
}