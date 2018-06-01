"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChartControl = function () {
  function ChartControl(R, r, maxAngle, type, chart) {
    _classCallCheck(this, ChartControl);

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
      this.chart.resetScale(90 / R);
    }

    this.chart.drawCircle(this.chart.ctx1, 0, 0, this.R, "#337ab7");
    this.drawCurve();
  }

  _createClass(ChartControl, [{
    key: "drawMovingCircle",
    value: function drawMovingCircle(t, functionX, functionY) {
      // Desenha o círculo em uma posição especificada

      var diff = this.type === "hypo" ? this.R - this.r : this.R + this.r;

      var posX = Math.cos(this.basicMathFunctions.getAngleInRadians(t)) * diff;
      var posY = Math.sin(this.basicMathFunctions.getAngleInRadians(t)) * diff;
      this.chart.clean(this.chart.ctx3);
      this.chart.drawCircle(this.chart.ctx3, posX, posY, this.r, "#000");
      this.chart.drawCircle(this.chart.ctx3, posX, posY, this.r / 25, "#000");
      this.chart.drawCircle(this.chart.ctx3, functionX, functionY, this.r / 25, "#d9534f");
      this.chart.drawLine(this.chart.ctx3, posX, posY, functionX, functionY, "#000");
    }
  }, {
    key: "drawCurve",
    value: function drawCurve() {
      var _this = this;

      if (this.counter > 0) {
        this.counter--;
        var originX = void 0,
            originY = void 0,
            futureX = void 0,
            futureY = void 0;

        if (this.type === "hypo") {
          var _hypocycloid$get = this.hypocycloid.get(this.counter);

          var _hypocycloid$get2 = _slicedToArray(_hypocycloid$get, 2);

          originX = _hypocycloid$get2[0];
          originY = _hypocycloid$get2[1];

          var _hypocycloid$get3 = this.hypocycloid.get(this.counter + 1);

          var _hypocycloid$get4 = _slicedToArray(_hypocycloid$get3, 2);

          futureX = _hypocycloid$get4[0];
          futureY = _hypocycloid$get4[1];
        } else {
          var _epicycloid$get = this.epicycloid.get(this.counter);

          var _epicycloid$get2 = _slicedToArray(_epicycloid$get, 2);

          originX = _epicycloid$get2[0];
          originY = _epicycloid$get2[1];

          var _epicycloid$get3 = this.epicycloid.get(this.counter + 1);

          var _epicycloid$get4 = _slicedToArray(_epicycloid$get3, 2);

          futureX = _epicycloid$get4[0];
          futureY = _epicycloid$get4[1];
        }

        this.chart.drawLine(this.chart.ctx2, originX, originY, futureX, futureY, "#d9534f");
        this.drawMovingCircle(this.counter, futureX, futureY);
        setTimeout(function () {
          _this.drawCurve();
        }, 7);
      }
    }
  }]);

  return ChartControl;
}();