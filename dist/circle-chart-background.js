"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircleChartBackground = function (_Chart) {
  _inherits(CircleChartBackground, _Chart);

  function CircleChartBackground(canvas) {
    _classCallCheck(this, CircleChartBackground);

    return _possibleConstructorReturn(this, (CircleChartBackground.__proto__ || Object.getPrototypeOf(CircleChartBackground)).call(this, canvas));
  }

  _createClass(CircleChartBackground, [{
    key: "drawChartSlowly",
    value: function drawChartSlowly(initialAngle, a) {
      this.reset();
      this.drawCirclesRecursively(initialAngle, initialAngle, a, 0);
    }
  }, {
    key: "drawCircleWithPosition",
    value: function drawCircleWithPosition(x, y, a, color, text) {
      this.ctx.beginPath();
      this.ctx.arc(this.translateX(x), this.translateY(y), a * this.unity / 2, 0, 2 * Math.PI);
      if (text) this.ctx.fillText("r = " + a, this.translateX(0), this.translateY(0));
      this.ctx.strokeStyle = color;
      this.ctx.stroke();
    }
  }, {
    key: "drawCirclesRecursively",
    value: function drawCirclesRecursively(initialAngle, index, a, i) {
      var _this2 = this;

      index++;
      i++;
      this.reset();
      this.drawCircleWithPosition(0, 0, a, "#000", true);
      this.drawCircleWithPosition(Math.cos(this.getAngleInRadians(index)) * a * this.unity, Math.sin(this.getAngleInRadians(index)) * a * this.unity, a, "#000");
      this.ctx.beginPath();
      setTimeout(function () {
        if (i < 359) {
          var realAngle = index < 360 ? index : index - 360;
          _this2.drawCirclesRecursively(initialAngle, realAngle, a, i);
        }
      }, 10);
      this.ctx.stroke();
    }
  }]);

  return CircleChartBackground;
}(Chart);