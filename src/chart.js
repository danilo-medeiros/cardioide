class Chart {

  constructor(canvas1, canvas2, canvas3) {
    // Circunferência do centro e linhas do gráfico
    this.canvas1 = canvas1;

    // Circunferência que traslada
    this.canvas2 = canvas2;

    // Curva
    this.canvas3 = canvas3;

    this.basicMathFunctions = new BasicMathFunctions();

    this.scale = 100;
    this.configure();
    this.drawChart();
  }

  configure() {

    this.canvas1.width = this.canvas2.width = this.canvas3.width = window.innerWidth * 0.6;
    this.canvas1.height = this.canvas2.height = this.canvas3.height = window.innerWidth * 0.6;

    this.ctx1 = this.canvas1.getContext("2d");
    this.ctx2 = this.canvas2.getContext("2d");
    this.ctx3 = this.canvas3.getContext("2d");

    this.ctx1.lineWidth = this.ctx2.lineWidth = this.ctx3.lineWidth = 5 / this.scale;

    this.ctx1.translate(this.canvas1.width / 2, this.canvas1.height / 2);
    this.ctx2.translate(this.canvas2.width / 2, this.canvas2.height / 2);
    this.ctx3.translate(this.canvas3.width / 2, this.canvas3.height / 2);

    this.ctx1.scale(this.scale, this.scale);
    this.ctx2.scale(this.scale, this.scale);
    this.ctx3.scale(this.scale, this.scale);

    // Tamanho do canvas em unidades já escaladas
    this.width = this.canvas1.width / this.scale;
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

  drawChart() {
    

    this.ctx1.lineWidth = 2 / this.scale;
    
    for (let i = 0; i < this.width; i++) {

      let color = i === 0 ? "#000" : "#CCC";
      // Linhas verticais
      this.drawLine(this.ctx1, i * -1, this.width * -1, i * -1, this.width, color);
      this.drawLine(this.ctx1, i, this.width * -1, i, this.width, color);

      this.drawLine(this.ctx1, i, -0.1, i, 0.1, "#000");
      this.drawLine(this.ctx1, i * -1, -0.1, i * -1, 0.1, "#000");

      // Linhas horizontais
      this.drawLine(this.ctx1, this.width * -1, i * -1, this.width, i * -1, color);
      this.drawLine(this.ctx1, this.width * -1, i, this.width, i, color);

      this.drawLine(this.ctx1, -0.1, i, 0.1, i, "#000");
      this.drawLine(this.ctx1, -0.1, i * -1, 0.1, i * -1, "#000");
    }
    this.ctx1.lineWidth = 5 / this.scale;
    
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

}









