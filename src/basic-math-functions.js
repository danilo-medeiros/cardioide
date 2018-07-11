export default class BasicMathFunctions {

  constructor() { }

  getAngleInRadians(angle) {
    return angle * Math.PI / 180;
  }

  getAngleInDegrees(angle) {
    return angle * 180;
  }

  gcd(n, m) {
    var r = 0;
    while (n !== 0) {
      r = m % n;
      m = n;
      n = r;
    }
    return m;
  }

}