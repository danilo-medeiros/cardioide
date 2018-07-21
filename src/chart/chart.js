import BasicMathFunctions from "./../math/basic-math-functions";

export default class Chart {

  constructor(parentDiv) {

    const childNodes = parentDiv.childNodes;

    this.parentDiv = parentDiv;

    
    // Circunferência do centro e linhas do gráfico
    this.canvas1 = childNodes[1];
    
    // Circunferência que traslada
    this.canvas2 = childNodes[3];
    
    // Curva
    this.canvas3 = childNodes[5];
    
    this.center = [this.parentDiv.offsetWidth * 0.75, this.parentDiv.offsetHeight * 0.75];
    this.basicMathFunctions = new BasicMathFunctions();

    this.scale = 100;
    this.unityX = 1;
    this.unityY = 1;

    this.getXLabel = (value) => { return value.toFixed(2) };

    this.configure();
    this.drawChart();

  }

  configure() {

    this.canvas1.width = this.canvas2.width = this.canvas3.width = this.defaultWidth = this.parentDiv.offsetWidth * 1.5;
    this.canvas1.height = this.canvas2.height = this.canvas3.height = this.defaultHeight = this.parentDiv.offsetHeight * 1.5;

    this.ctx1 = this.canvas1.getContext("2d");
    this.ctx2 = this.canvas2.getContext("2d");
    this.ctx3 = this.canvas3.getContext("2d");

    this.ctx1.lineWidth = this.ctx2.lineWidth = this.ctx3.lineWidth = 4 / this.scale;
    this.ctx1.font = this.ctx2.font = this.ctx3.font = "italic 1px Helvetica";
    //this.ctx1.textAlign = this.ctx2.textAlign = this.ctx3.textAlign = "center";

    this.ctx1.translate(this.center[0], this.center[1]);
    this.ctx2.translate(this.center[0], this.center[1]);
    this.ctx3.translate(this.center[0], this.center[1]);

    this.ctx1.scale(this.scale, -1*this.scale);
    this.ctx2.scale(this.scale, -1*this.scale);
    this.ctx3.scale(this.scale, -1*this.scale);

    // Tamanho do canvas em unidades já escaladas
    this.width = this.canvas1.width / this.scale;
  }

  setCenter(center) {
    this.ctx1.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx2.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx3.setTransform(1, 0, 0, 1, 0, 0);
    this.center = center;
    this.configure();
    this.reset();
  }


  cleanAll() {
    this.ctx1.clearRect(this.canvas1.width * -1, this.canvas1.height * -1, this.canvas1.width * 2, this.canvas1.height * 2);
    this.ctx2.clearRect(this.canvas1.width * -1, this.canvas1.height * -1, this.canvas1.width * 2, this.canvas1.height * 2);
    this.ctx3.clearRect(this.canvas1.width * -1, this.canvas1.height * -1, this.canvas1.width * 2, this.canvas1.height * 2);
  }

  reset() {
    this.cleanAll();
    this.drawChart();
  }

  resetScale(scale) {
    this.scale = scale;
    this.configure();
    this.reset();
  }

  clean(ctx) {
    ctx.clearRect(this.canvas1.width * -1, this.canvas1.height * -1, this.canvas1.width * 2, this.canvas1.height * 2);
  }

  drawChart(origin = this.center) {

    const startX = -1 * Math.ceil((origin[0] / this.scale) / this.unityX) * this.unityX;
    
    const startY = -1 * Math.ceil((this.canvas1.height - origin[1]) / this.scale / this.unityY) * this.unityY;
    
    const spaceX = [ startX, ((this.canvas1.width) - origin[0]) / this.scale ];
    
    const spaceY = [ startY, origin[1] / this.scale ];
    
    this.ctx1.lineWidth = 2 / this.scale;

    let canDrawText = true;
    
    this.ctx1.textAlign = this.ctx2.textAlign = this.ctx3.textAlign = "center";

    for (let i = spaceY[0]; i < spaceY[1]; i = i + this.unityY) {
      
      const color = i === 0 ? "#000" : "#CCC";
      // Linhas horizontais
      this.drawLine(this.ctx1, spaceX[0], i, spaceX[1], i, color);
      this.drawLine(this.ctx1, -5 / this.scale, i, 5 / this.scale, i, "#000");
    }

    for (let i = spaceX[0]; i < spaceX[1]; i = i + this.unityX) {
      
      const color = i === 0 ? "#000" : "#CCC";
      // Linhas verticais
      this.drawLine(this.ctx1, i, spaceY[0], i, spaceY[1], color);
      this.drawLine(this.ctx1, i, -5 / this.scale, i, 5 / this.scale, "#000");

      if (this.unityX !== 1 && this.scale > 15) {

        if ((this.scale <= 20 && canDrawText) || this.scale > 20) {
          this.drawText(this.ctx1, this.getXLabel(i), i, -30 / this.scale, 1)
          canDrawText = !canDrawText || this.scale > 20;
        }
/* 
        if (this.scale <= 20) {
          if (canDrawText) {
            canDrawText = false;
            this.drawText(this.ctx1, this.getXLabel(i), i - this.unityX * 0.2, -1.2, 1)
          } else {
            canDrawText = true;
          }
        } else {
          this.drawText(this.ctx1, this.getXLabel(i), i - this.unityX * 0.2, -1.2, 1)
        } */
        
      }
    }

    this.ctx1.textAlign = this.ctx2.textAlign = this.ctx3.textAlign = "left";

    this.ctx1.lineWidth = 4 / this.scale;
    
  }

  drawLine(ctx, originX, originY, finalX, finalY, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(originX, originY);
    ctx.lineTo(finalX, finalY);
    ctx.stroke();
  }

  drawCircle(ctx, x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  drawText(ctx, text, x, y) {
    let newScale = 30;
    ctx.scale(newScale / this.scale, (-1 * newScale) / this.scale);
    ctx.fillText(text, x * this.scale / newScale, y * this.scale / (-1 * newScale));
    ctx.scale(this.scale / newScale, this.scale / (-1 * newScale));
  }

}









