class Cycloid {
    
    constructor(R, r) {
        this.basicMathFunctions = new BasicMathFunctions();
        this.R = R;
        this.r = r;
    }

    getPeriod() {
        let gcd = this.basicMathFunctions.gcd(this.r, this.R);
        let p = this.r / gcd;
        return (2 * p).toString() + " PI";
    }

}