export default class StraightCycloid {

    constructor(r) {
        this.r = r;
    }

    get(t) {
        return [
            this.r * (t - Math.sin(t)),
            this.r * (1 - Math.cos(t)) 
        ];
    }

}