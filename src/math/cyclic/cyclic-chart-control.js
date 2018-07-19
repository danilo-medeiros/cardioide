import Epicycloid from "./epicycloid";
import Hypocycloid from "./hypocycloid";
import BasicMathFunctions from "./../basic-math-functions";

export default class CyclicChartControl {

  constructor(R, r, minAngle, maxAngle, type, chart) {
    this.R = parseFloat(R);
    this.r = parseFloat(r);
    this.minAngle = parseFloat(minAngle);
    this.maxAngle = parseFloat(maxAngle);
    this.type = type;
    this.chart = chart;
    this.epicycloid = new Epicycloid(this.R, this.r);
    this.hypocycloid = new Hypocycloid(this.R, this.r);
    this.counter = this.minAngle;
    this.stop = false;

    this.basicMathFunctions = new BasicMathFunctions();

    
    if (this.type === "hypo") {
      this.chart.resetScale(200 / R);  
    } else {
      this.chart.resetScale(180 / (this.R + this.r));
    }

    this.infoPos = [-1*(this.chart.canvas1.width / 2 - 20) / this.chart.scale, (this.chart.canvas1.height / 2 - 40) / this.chart.scale];
    this.chart.drawCircle(this.chart.ctx1, 0, 0, this.R, "#337ab7");
    this.chart.drawText(this.chart.ctx1, "R = " + this.R, this.infoPos[0], this.infoPos[1]);
    this.chart.drawText(this.chart.ctx1, "r = " + this.r, this.infoPos[0], this.infoPos[1]*0.9);
    this.chart.drawText(this.chart.ctx1, "T = " + (this.type === "hypo" ? this.hypocycloid.getPeriod() : this.epicycloid.getPeriod()), this.infoPos[0], this.infoPos[1] * 0.8);
    
    this.drawCurve();
  }

  drawMovingCircle(t, functionX, functionY) {
    // Desenha o círculo em uma posição especificada

    let diff = this.type === "hypo" ? this.R - this.r : this.R + this.r;

    let posX = Math.cos(this.basicMathFunctions.getAngleInRadians(t)) * diff;
    let posY = Math.sin(this.basicMathFunctions.getAngleInRadians(t)) * diff;
    this.chart.clean(this.chart.ctx3);
    this.chart.drawCircle(this.chart.ctx3, posX, posY, this.r, "#000");
    this.chart.drawCircle(this.chart.ctx3, posX, posY, this.r / 15, "#000");
    this.chart.drawCircle(this.chart.ctx3, functionX, functionY, this.r / 15, "#d9534f");
    this.chart.drawLine(this.chart.ctx3, posX, posY, functionX, functionY, "#000");
  }

  drawCurve() {
    // A verificação do stop também deve ocorrer aqui, pois a função 
    // drawCurve é chamada em mais de um lugar (redraw() e drawCurve())
    if (this.stop) return;
    if (!this.stop && this.counter === this.minAngle) this.chart.clean(this.chart.ctx2);
    if (this.counter < this.maxAngle) {
      this.counter++;
      let originX, originY, futureX, futureY;

      if (this.type === "hypo") {
        [originX, originY] = this.hypocycloid.get(this.counter);
        [futureX, futureY] = this.hypocycloid.get(this.counter + 1);
      } else {
        [originX, originY] = this.epicycloid.get(this.counter);
        [futureX, futureY] = this.epicycloid.get(this.counter + 1);
      }

      this.chart.drawLine(this.chart.ctx2, originX, originY, futureX, futureY, "#d9534f");
      this.drawMovingCircle(this.counter, originX, originY);
      this.chart.drawText(this.chart.ctx3, "t = " + this.counter + "°", this.infoPos[0], this.infoPos[1]*0.7);
      setTimeout(() => {
        this.drawCurve();
      }, 14);
    } else {
      this.counter = this.minAngle;
      setTimeout(() => {
        this.drawCurve();
      }, 500)
      
    }
  }

}