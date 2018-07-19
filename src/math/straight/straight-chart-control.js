import StraightCycloid from "./straight-cycloid";
import BasicMathFunctions from "../basic-math-functions";

export default class StraightChartControl {

    constructor(r, minAngle, maxAngle, chart) {
        this.r = r;
        this.minAngle = minAngle * Math.PI;
        this.maxAngle = maxAngle * Math.PI;
        this.chart = chart;

        this.cycloid = new StraightCycloid(this.r);

        this.counter = this.minAngle;
        this.stop = false;

        this.delta = 0.05;

        this.basicMathFunctions = new BasicMathFunctions();

        const rangeX = [this.cycloid.get(this.minAngle)[0], this.cycloid.get(this.maxAngle)[0]];
        this.chart.scale = 100 / this.r;

        const diffX = rangeX[1] - rangeX[0];

        this.chart.setCenter([
            ((this.chart.parentDiv.offsetWidth) * 0.75) - ( rangeX[0] + diffX / 2 ) * this.chart.scale,
            this.chart.parentDiv.offsetHeight]);

        this.infoPos = [(this.chart.canvas1.width - (this.r * this.chart.scale * 3)) / this.chart.scale, (this.chart.canvas1.height - 200) / this.chart.scale];
        //this.chart.drawCircle(this.chart.ctx1, this.r, this.r, this.r, "#337ab7");
        this.chart.drawText(this.chart.ctx1, "r = " + this.r, this.infoPos[0], this.infoPos[1]);

        this.drawCurve();

    }

    drawMovingCircle(t, p) {
        // Desenha o círculo em uma posição especificada p

        this.chart.clean(this.chart.ctx3);
        this.chart.drawCircle(this.chart.ctx3, p[0], p[1], this.r, "#000");
        this.chart.drawCircle(this.chart.ctx3, p[0], p[1], this.r / 15, "#000");
        this.chart.drawCircle(this.chart.ctx3, t[0], t[1], this.r / 15, "#d9534f");
        this.chart.drawLine(this.chart.ctx3, p[0], p[1], t[0], t[1], "#000");
    }

    drawCurve() {
        // A verificação do stop também deve ocorrer aqui, pois a função 
        // drawCurve é chamada em mais de um lugar (redraw() e drawCurve())
        if (this.stop) return;
        if (!this.stop && this.counter === this.minAngle) this.chart.clean(this.chart.ctx2);
        if (this.counter <= this.maxAngle) {
            
            let originX, originY, futureX, futureY;

            [originX, originY] = this.cycloid.get(this.counter);
            [futureX, futureY] = this.cycloid.get(this.counter + this.delta);

            this.chart.drawLine(this.chart.ctx2, originX, originY, futureX, futureY, "#d9534f");
            this.drawMovingCircle([originX, originY], [this.counter * this.r, this.r]);
            this.chart.drawText(this.chart.ctx3, "t = " + ((originX / Math.PI).toFixed(2)).toString() + " π", this.infoPos[0], this.infoPos[1] * 0.9);
            this.counter += this.delta;
            setTimeout(() => {
                this.drawCurve();
            }, 15);
        } else {
            this.counter = this.minAngle;
            setTimeout(() => {
                this.drawCurve();
            }, 500)

        }
    }

}