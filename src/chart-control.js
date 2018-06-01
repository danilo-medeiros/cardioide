class ChartControl {
  constructor(R, r, maxAngle, type, chart) {
    this.R = parseInt(R);
    this.r = parseInt(r);
    this.maxAngle = parseInt(maxAngle);
    this.type = type;
    this.chart = chart;
    this.epicycloid = new Epicycloid(this.R, this.r);
    this.hypocycloid = new Hypocycloid(this.R, this.r);
    this.counter = this.maxAngle;

    this.basicMathFunctions = new BasicMathFunctions();

    if (this.type === "hypo") {
      this.chart.resetScale(300 / R);
    } else {
      this.chart.resetScale(180 / (this.R + this.r));
    }
    
    this.chart.drawCircle(this.chart.ctx1, 0, 0, this.R, "#337ab7");
    this.drawCurve();
  }

  
  drawMovingCircle(t, functionX, functionY) {
    // Desenha o círculo em uma posição especificada

    let diff = this.type === "hypo" ? this.R - this.r : this.R + this.r;

    let posX = Math.cos(this.basicMathFunctions.getAngleInRadians(t)) * diff;
    let posY = Math.sin(this.basicMathFunctions.getAngleInRadians(t)) * diff;
    this.chart.clean(this.chart.ctx3);
    this.chart.drawCircle(this.chart.ctx3, posX, posY, this.r, "#000");
    this.chart.drawCircle(this.chart.ctx3, posX, posY, this.r / 25, "#000");
    this.chart.drawCircle(this.chart.ctx3, functionX, functionY, this.r / 25, "#d9534f");
    this.chart.drawLine(this.chart.ctx3, posX, posY, functionX, functionY, "#000");
  }

  drawCurve() {
    if (this.counter > 0) {
      this.counter--;
      let originX, originY, futureX, futureY;
      
      if (this.type === "hypo") {
        [originX, originY] = this.hypocycloid.get(this.counter);
        [futureX, futureY] = this.hypocycloid.get(this.counter + 1);
      } else {
        [originX, originY] = this.epicycloid.get(this.counter);
        [futureX, futureY] = this.epicycloid.get(this.counter + 1);
      }

      this.chart.drawLine(this.chart.ctx2, originX, originY, futureX, futureY, "#d9534f");
      this.drawMovingCircle(this.counter, futureX, futureY);
      setTimeout(() => {
        this.drawCurve();
      }, 7);
    }
  }
}