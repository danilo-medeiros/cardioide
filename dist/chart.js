"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chart = function () {
  function Chart(canvas1, canvas2, canvas3) {
    _classCallCheck(this, Chart);

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

  _createClass(Chart, [{
    key: "configure",
    value: function configure() {

      this.canvas1.width = this.canvas2.width = this.canvas3.width = 816;
      this.canvas1.height = this.canvas2.height = this.canvas3.height = 816;

      this.ctx1 = this.canvas1.getContext("2d");
      this.ctx2 = this.canvas2.getContext("2d");
      this.ctx3 = this.canvas3.getContext("2d");

      this.ctx1.lineWidth = this.ctx2.lineWidth = this.ctx3.lineWidth = 5 / this.scale;
      this.ctx1.font = this.ctx2.font = this.ctx3.font = "italic 1px Helvetica";
      //this.ctx1.textAlign = this.ctx2.textAlign = this.ctx3.textAlign = "center";

      this.ctx1.translate(this.canvas1.width / 2, this.canvas1.height / 2);
      this.ctx2.translate(this.canvas2.width / 2, this.canvas2.height / 2);
      this.ctx3.translate(this.canvas3.width / 2, this.canvas3.height / 2);

      this.ctx1.scale(this.scale, -1 * this.scale);
      this.ctx2.scale(this.scale, -1 * this.scale);
      this.ctx3.scale(this.scale, -1 * this.scale);

      // Tamanho do canvas em unidades já escaladas
      this.width = this.canvas1.width / this.scale;
    }
  }, {
    key: "cleanAll",
    value: function cleanAll() {
      this.ctx1.clearRect(this.canvas1.width * -1, this.canvas1.height * -1, this.canvas1.width * 2, this.canvas1.height * 2);
      this.ctx2.clearRect(this.canvas1.width * -1, this.canvas1.height * -1, this.canvas1.width * 2, this.canvas1.height * 2);
      this.ctx3.clearRect(this.canvas1.width * -1, this.canvas1.height * -1, this.canvas1.width * 2, this.canvas1.height * 2);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.cleanAll();
      this.drawChart();
    }
  }, {
    key: "resetScale",
    value: function resetScale(scale) {
      this.scale = scale;
      this.configure();
      this.reset();
    }
  }, {
    key: "clean",
    value: function clean(ctx) {
      ctx.clearRect(this.canvas1.width * -1, this.canvas1.height * -1, this.canvas1.width * 2, this.canvas1.height * 2);
    }
  }, {
    key: "drawChart",
    value: function drawChart() {

      this.ctx1.lineWidth = 2 / this.scale;

      for (var i = 0; i < this.width; i++) {

        var color = i === 0 ? "#000" : "#CCC";
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
  }, {
    key: "drawLine",
    value: function drawLine(ctx, originX, originY, finalX, finalY, color) {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.moveTo(originX, originY);
      ctx.lineTo(finalX, finalY);
      ctx.stroke();
    }
  }, {
    key: "drawCircle",
    value: function drawCircle(ctx, x, y, radius, color) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = color;
      ctx.stroke();
    }
  }, {
    key: "drawText",
    value: function drawText(ctx, text, x, y) {
      var newScale = 30;
      ctx.scale(newScale / this.scale, -1 * newScale / this.scale);
      ctx.fillText(text, x * this.scale / newScale, y * this.scale / (-1 * newScale));
      ctx.scale(this.scale / newScale, this.scale / (-1 * newScale));
    }
  }]);

  return Chart;
}();