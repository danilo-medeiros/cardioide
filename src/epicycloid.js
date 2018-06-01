class Epicycloid extends Cycloid {
    /* 
        * Quando o usuário quer que a circunferência com raio r <= R role 
        * pela parte externa da circunferência com raio R
    */

    constructor(R, r) {
        super(R, r);
    }

    getType() {
        let k = this.R / this.r;
        if (k === 1)
            return `Cardióide (k = 1)`;
        else
            return `k = ${k}`;
    }

    get(t) {
        return [
            (this.R + this.r) *
                Math.cos(this.basicMathFunctions.getAngleInRadians(t)) - this.r *
                Math.cos((this.basicMathFunctions.getAngleInRadians(this.R / this.r + 1)) * t),
            (this.R + this.r) *
                Math.sin(this.basicMathFunctions.getAngleInRadians(t)) - this.r *
                Math.sin((this.basicMathFunctions.getAngleInRadians(this.R / this.r + 1)) * t)
        ];
    }
}