import BasicMathFunctions from "./basic-math-functions";

export default class BasicCycloid {

    constructor(r) {
        this.r = r;
        this.basicMathFunctions = new BasicMathFunctions();
    }

    get(t) {
        return [
            this.r * (t - Math.sin(this.basicMathFunctions.getAngleInRadians(t))),
            this.r * (1 - Math.cos(this.basicMathFunctions.getAngleInRadians(t))) 
        ];
    }

}