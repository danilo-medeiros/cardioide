"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircunferenceChart = function (_Chart) {
  _inherits(CircunferenceChart, _Chart);

  function CircunferenceChart(canvas, backgroundCanvas) {
    _classCallCheck(this, CircunferenceChart);

    var _this = _possibleConstructorReturn(this, (CircunferenceChart.__proto__ || Object.getPrototypeOf(CircunferenceChart)).call(this, canvas));

    _this.canvas = canvas;
    _this.backgroundCanvas = backgroundCanvas;
    return _this;
  }

  _createClass(CircunferenceChart, [{
    key: "drawMainCircunference",
    value: function drawMainCircunference() {
      console.log("Drawing");
    }
  }, {
    key: "drawChartSlowly",
    value: function drawChartSlowly(dataset, a) {
      this.reset();
      this.drawCircle(0, 0, a, "#000", true);
      this.drawCirclesRecursively(dataset, 0, a);
    }
  }, {
    key: "drawCircle",
    value: function drawCircle(x, y, radius, color, text) {
      this.ctx.beginPath();
      this.ctx.arc(this.translateX(x), this.translateY(y), this.canvas.height / 8, 0, 2 * Math.PI);
      if (text) this.ctx.fillText("r = " + radius, this.translateX(0), this.translateY(0));
      this.ctx.strokeStyle = color;
      this.ctx.stroke();
    }
  }, {
    key: "drawCirclesRecursively",
    value: function drawCirclesRecursively(dataset, index, radius) {
      var _this2 = this;

      this.reset();

      this.drawCircle(Math.cos(this.getAngleInRadians(index)) * this.canvas.height / 4, Math.sin(this.getAngleInRadians(index)) * this.canvas.height / 4, "#000");

      this.ctx.beginPath();
      this.ctx.lineWidth = 10;
      this.drawPoint(dataset, index);
      this.ctx.lineWidth = 1;
      setTimeout(function () {
        if (index + 1 < dataset.length - 1) {

          _this2.drawCirclesRecursively(dataset, index + 1, radius);
        }
      }, 10);
      this.ctx.stroke();
    }
  }, {
    key: "drawPoint",
    value: function drawPoint(dataset, i) {
      this.ctx.moveTo(this.translateX(Math.cos(this.getAngleInRadians(dataset[i][0])) * dataset[i][1] * 20), this.translateY(Math.sin(this.getAngleInRadians(dataset[i][0])) * dataset[i][1] * 20));
      this.ctx.lineTo(this.translateX(Math.cos(this.getAngleInRadians(dataset[i + 1][0])) * dataset[i + 1][1] * 20), this.translateY(Math.sin(this.getAngleInRadians(dataset[i + 1][0])) * dataset[i + 1][1] * 20));
    }
  }]);

  return CircunferenceChart;
}(Chart);