import { Car } from "./car.js";

export class Goal extends Car{
constructor(options){
    console.log(options)
    super({
        pos: options.pos,
       size: [500, 30],
       vel: options.vel
    }, "Goal")
}
}