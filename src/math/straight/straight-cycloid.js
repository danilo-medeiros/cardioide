export default class StraightCycloid {

    constructor(R, w) {
        this.R = R;
        this.w = w;
    }

    get(t) {
        return [
            this.w * this.R * t - this.R * Math.sin(this.w * t),
            this.R - this.R * Math.cos(this.w * t)
        ];
    }

}