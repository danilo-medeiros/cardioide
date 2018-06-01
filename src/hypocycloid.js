class Hypocycloid extends Cycloid {

    /* 
        * Quando o usuário quer que a circunferência com raio r < R role 
        * pela parte interna da circunferência com raio R
    */

    constructor(R, r) {
        super(R, r);
    }

    get(t) {
        return [
            (this.R - this.r) * 
                Math.cos(this.basicMathFunctions.getAngleInRadians(t)) + this.r * 
                Math.cos((this.basicMathFunctions.getAngleInRadians(this.R / this.r - 1)) * t),
            (this.R - this.r) * 
                Math.sin(this.basicMathFunctions.getAngleInRadians(t)) - this.r * 
                Math.sin((this.basicMathFunctions.getAngleInRadians(this.R / this.r - 1)) * t)
        ];
    }


}