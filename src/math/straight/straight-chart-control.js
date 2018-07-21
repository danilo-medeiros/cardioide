import StraightCycloid from "./straight-cycloid";
import BasicMathFunctions from "../basic-math-functions";

export default class StraightChartControl {

    constructor(r, w, minAngle, maxAngle, chart) {
        this.r = r;
        this.w = w;
        this.minAngle = minAngle * Math.PI;
        this.maxAngle = maxAngle * Math.PI;
        this.chart = chart;

        this.cycloid = new StraightCycloid(this.r, this.w);

        this.counter = this.minAngle;
        this.stop = false;

        this.delta = 0.05 / this.w;

        this.basicMathFunctions = new BasicMathFunctions();

        const rangeX = [this.cycloid.get(this.minAngle)[0], this.cycloid.get(this.maxAngle)[0]];

        const diffX = rangeX[1] - rangeX[0];
        const inputRange = this.maxAngle - this.minAngle;

        this.chart.scale =  diffX / this.r > 2 * Math.PI ? 100 * (12 / diffX) * (this.chart.canvas1.width / 1410) : 100 * (this.chart.canvas1.width / 1410) * (1 / this.r);


        this.chart.unityX = Math.PI;
        this.chart.getXLabel = (value) => { return (Math.round(value / Math.PI)).toString() + "π" };

        
        this.chart.setCenter([
            ((this.chart.parentDiv.offsetWidth) * 0.75) - ( rangeX[0] + diffX / 2 ) * this.chart.scale,
            (this.chart.parentDiv.offsetHeight * 0.75 + this.r * this.chart.scale)]);

        
        this.infoPos = [(this.chart.canvas1.width - this.chart.center[0] - 200) / this.chart.scale, (this.chart.center[1] - this.chart.canvas1.height + 400) / this.chart.scale];
        this.chart.drawText(this.chart.ctx1, "r = " + this.r, this.infoPos[0], this.infoPos[1]);
        this.chart.drawText(this.chart.ctx1, "k = " + this.w, this.infoPos[0], this.infoPos[1] * 0.9);

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
            this.drawMovingCircle([futureX, futureY], [(this.counter + this.delta) * this.r * this.w, this.r]);
            this.chart.drawText(this.chart.ctx3, "t = " + ((originX / Math.PI).toFixed(2)).toString() + "π", this.infoPos[0], this.infoPos[1] * 0.8);
            this.counter += this.delta;
            setTimeout(() => {
                this.drawCurve();
            }, 15 / this.w);
        } else {
            this.counter = this.minAngle;
            setTimeout(() => {
                this.drawCurve();
            }, 500)

        }
    }

}