"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircleChart = function (_Chart) {
  _inherits(CircleChart, _Chart);

  function CircleChart(canvas) {
    _classCallCheck(this, CircleChart);

    var _this = _possibleConstructorReturn(this, (CircleChart.__proto__ || Object.getPrototypeOf(CircleChart)).call(this, canvas));

    _this.canvas = canvas;
    return _this;
  }

  _createClass(CircleChart, [{
    key: "reset",
    value: function reset() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "drawChartSlowly",
    value: function drawChartSlowly(dataset, a) {
      this.reset();
      this.drawPointsRecursively(dataset, 0, a);
    }
  }, {
    key: "drawPointsRecursively",
    value: function drawPointsRecursively(dataset, index, a) {
      var _this2 = this;

      this.ctx.beginPath();
      this.ctx.lineWidth = 2;
      this.drawPoint(dataset, index, a);
      setTimeout(function () {
        if (index + 1 < dataset.length - 1) {
          _this2.drawPointsRecursively(dataset, index + 1, a);
        }
      }, 10);
      this.ctx.strokeStyle = "#ff0000";
      this.ctx.stroke();
    }
  }, {
    key: "drawPoint",
    value: function drawPoint(dataset, i, a) {
      this.ctx.moveTo(this.translateX(this.getPositionX(dataset[i][0], dataset[i][1]) + Math.cos(this.getAngleInRadians(dataset[0][0])) * a / 2 * this.unity), this.translateY(this.getPositionY(dataset[i][0], dataset[i][1]) + Math.sin(this.getAngleInRadians(dataset[0][0])) * a / 2 * this.unity));
      this.ctx.lineTo(this.translateX(this.getPositionX(dataset[i + 1][0], dataset[i][1]) + Math.cos(this.getAngleInRadians(dataset[0][0])) * a / 2 * this.unity), this.translateY(this.getPositionY(dataset[i + 1][0], dataset[i][1]) + Math.sin(this.getAngleInRadians(dataset[0][0])) * a / 2 * this.unity));
    }
  }]);

  return CircleChart;
}(Chart);