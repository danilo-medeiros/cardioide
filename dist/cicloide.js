"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasicMathFunctions = function () {
  function BasicMathFunctions() {
    _classCallCheck(this, BasicMathFunctions);
  }

  _createClass(BasicMathFunctions, [{
    key: "getAngleInRadians",
    value: function getAngleInRadians(angle) {
      return angle * Math.PI / 180;
    }
  }, {
    key: "getAngleInDegrees",
    value: function getAngleInDegrees(angle) {
      return angle * 180;
    }
  }, {
    key: "gcd",
    value: function gcd(n, m) {
      var r = 0;
      while (n !== 0) {
        r = m % n;
        m = n;
        n = r;
      }
      return m;
    }
  }]);

  return BasicMathFunctions;
}();



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



var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChartControl = function () {
  function ChartControl(R, r, minAngle, maxAngle, type, chart) {
    _classCallCheck(this, ChartControl);

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
      this.chart.resetScale(300 / R);
    } else {
      this.chart.resetScale(180 / (this.R + this.r));
    }

    this.infoPos = [-1 * (this.chart.canvas1.width / 2 - 20) / this.chart.scale, (this.chart.canvas1.height / 2 - 40) / this.chart.scale];
    this.chart.drawCircle(this.chart.ctx1, 0, 0, this.R, "#337ab7");
    this.chart.drawText(this.chart.ctx1, "R = " + this.R, this.infoPos[0], this.infoPos[1]);
    this.chart.drawText(this.chart.ctx1, "r = " + this.r, this.infoPos[0], this.infoPos[1] * 0.9);
    this.chart.drawText(this.chart.ctx1, "T = " + (this.type === "hypo" ? this.hypocycloid.getPeriod() : this.epicycloid.getPeriod()), this.infoPos[0], this.infoPos[1] * 0.8);

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
      this.chart.drawCircle(this.chart.ctx3, posX, posY, this.r / 15, "#000");
      this.chart.drawCircle(this.chart.ctx3, functionX, functionY, this.r / 15, "#d9534f");
      this.chart.drawLine(this.chart.ctx3, posX, posY, functionX, functionY, "#000");
    }
  }, {
    key: "drawCurve",
    value: function drawCurve() {
      var _this = this;

      // A verificação do stop também deve ocorrer aqui, pois a função 
      // drawCurve é chamada em mais de um lugar (redraw() e drawCurve())
      if (this.stop) return;
      if (!this.stop && this.counter === this.minAngle) this.chart.clean(this.chart.ctx2);
      if (this.counter < this.maxAngle) {
        this.counter++;
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
        this.drawMovingCircle(this.counter, originX, originY);
        this.chart.drawText(this.chart.ctx3, "t = " + this.counter + "°", this.infoPos[0], this.infoPos[1] * 0.7);
        setTimeout(function () {
          _this.drawCurve();
        }, 7);
      } else {
        this.counter = this.minAngle;
        setTimeout(function () {
          _this.drawCurve();
        }, 500);
      }
    }
  }]);

  return ChartControl;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cycloid = function () {
    function Cycloid(R, r) {
        _classCallCheck(this, Cycloid);

        this.basicMathFunctions = new BasicMathFunctions();
        this.R = R;
        this.r = r;
    }

    _createClass(Cycloid, [{
        key: "getPeriod",
        value: function getPeriod() {
            var gcd = this.basicMathFunctions.gcd(this.r, this.R);
            var p = this.r / gcd;
            return (2 * p).toString() + " PI";
        }
    }]);

    return Cycloid;
}();


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Epicycloid = function (_Cycloid) {
    _inherits(Epicycloid, _Cycloid);

    /* 
        * Quando o usuário quer que a circunferência com raio r <= R role 
        * pela parte externa da circunferência com raio R
    */

    function Epicycloid(R, r) {
        _classCallCheck(this, Epicycloid);

        return _possibleConstructorReturn(this, (Epicycloid.__proto__ || Object.getPrototypeOf(Epicycloid)).call(this, R, r));
    }

    _createClass(Epicycloid, [{
        key: "get",
        value: function get(t) {
            return [(this.R + this.r) * Math.cos(this.basicMathFunctions.getAngleInRadians(t)) - this.r * Math.cos(this.basicMathFunctions.getAngleInRadians(this.R / this.r + 1) * t), (this.R + this.r) * Math.sin(this.basicMathFunctions.getAngleInRadians(t)) - this.r * Math.sin(this.basicMathFunctions.getAngleInRadians(this.R / this.r + 1) * t)];
        }
    }]);

    return Epicycloid;
}(Cycloid);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormControl = function () {
  function FormControl(radius1Input, radius2Input, minAngleInput, maxAngleInput, typeInput, chart) {
    var _this = this;

    _classCallCheck(this, FormControl);

    this.radius1Input = radius1Input;
    this.radius2Input = radius2Input;
    this.minAngleInput = minAngleInput;
    this.maxAngleInput = maxAngleInput;
    this.typeInput = typeInput;
    this.basicMathFunctions = new BasicMathFunctions();
    this.chartControl = new ChartControl(this.radius1Input.value, this.radius2Input.value, this.getAngle(this.minAngleInput.value), this.getAngle(this.maxAngleInput.value), this.typeInput.value, chart);

    this.update();

    this.radius1Input.addEventListener("input", function (event) {
      return _this.validation();
    });
    this.radius2Input.addEventListener("input", function (event) {
      return _this.validation();
    });
    this.typeInput.addEventListener("input", function (event) {
      return _this.validation();
    });
    this.maxAngleInput.addEventListener("keyup", function (event) {
      return _this.validation();
    });
    this.minAngleInput.addEventListener("keyup", function (event) {
      return _this.validation();
    });
  }

  _createClass(FormControl, [{
    key: "getAngle",
    value: function getAngle(angle) {
      var angleInParts = angle.replace(",", ".").split("/");
      if (angleInParts.length > 1) {
        return this.basicMathFunctions.getAngleInDegrees(parseFloat(angleInParts[0]) / parseFloat(angleInParts[1]));
      }
      return this.basicMathFunctions.getAngleInDegrees(parseFloat(angleInParts[0]));
    }
  }, {
    key: "validation",
    value: function validation() {
      this.radius2Input.setCustomValidity("");
      this.minAngleInput.setCustomValidity("");
      this.maxAngleInput.setCustomValidity("");
      if (parseFloat(this.radius1Input.value) <= parseFloat(radius2Input.value) && this.typeInput.value === "hypo") {
        this.radius2Input.setCustomValidity("Raio inválido. Lembre que R > r");
        return false;
      }
      if (parseFloat(this.radius1Input.value) < radius2Input.value && parseFloat(this.typeInput.value) === "epi") {
        this.radius2Input.setCustomValidity("Raio inválido. Lembre que R >= r");
        return false;
      }
      if (isNaN(this.getAngle(this.minAngleInput.value))) {
        this.minAngleInput.setCustomValidity("Valor inválido. Insira somente números");
        return false;
      }
      if (isNaN(this.getAngle(this.maxAngleInput.value))) {
        this.maxAngleInput.setCustomValidity("Valor inválido. Insira somente números");
        return false;
      }
      return true;
    }

    // Verifica se existe caso especial (Astroide, Cardioide e Deltoide)

  }, {
    key: "checkSpecialCase",
    value: function checkSpecialCase() {
      var specialCasesMessages = document.getElementsByClassName("special-case");
      for (var i = 0; i < specialCasesMessages.length; i++) {
        specialCasesMessages[i].classList.add("hidden");
      }
      if (this.typeInput.value === "epi") {
        if (this.radius1Input.value === this.radius2Input.value) document.getElementById("cardioid-message").classList.remove("hidden");
      } else {
        if (this.radius1Input.value / this.radius2Input.value === 3) document.getElementById("deltoid-message").classList.remove("hidden");
        if (this.radius1Input.value / this.radius2Input.value === 4) document.getElementById("astroid-message").classList.remove("hidden");
      }
    }

    // Atualiza tudo com os valores informados

  }, {
    key: "update",
    value: function update() {
      this.checkSpecialCase();
      this.chartControl.stop = true;
      this.chartControl = new ChartControl(this.radius1Input.value, this.radius2Input.value, this.getAngle(this.minAngleInput.value), this.getAngle(this.maxAngleInput.value), this.typeInput.value, chart);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.chartControl.stop = true;
    }
  }, {
    key: "isStopped",
    value: function isStopped() {
      return this.chartControl.stop;
    }
  }, {
    key: "continue",
    value: function _continue() {
      this.chartControl.stop = false;
      this.chartControl.drawCurve();
    }
  }]);

  return FormControl;
}();


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hypocycloid = function (_Cycloid) {
    _inherits(Hypocycloid, _Cycloid);

    /* 
        * Quando o usuário quer que a circunferência com raio r < R role 
        * pela parte interna da circunferência com raio R
    */

    function Hypocycloid(R, r) {
        _classCallCheck(this, Hypocycloid);

        return _possibleConstructorReturn(this, (Hypocycloid.__proto__ || Object.getPrototypeOf(Hypocycloid)).call(this, R, r));
    }

    _createClass(Hypocycloid, [{
        key: "get",
        value: function get(t) {
            return [(this.R - this.r) * Math.cos(this.basicMathFunctions.getAngleInRadians(t)) + this.r * Math.cos(this.basicMathFunctions.getAngleInRadians(this.R / this.r - 1) * t), (this.R - this.r) * Math.sin(this.basicMathFunctions.getAngleInRadians(t)) - this.r * Math.sin(this.basicMathFunctions.getAngleInRadians(this.R / this.r - 1) * t)];
        }
    }]);

    return Hypocycloid;
}(Cycloid);


var typeInput = document.getElementById("type");
var radius1Input = document.getElementById("radius1");
var radius2Input = document.getElementById("radius2");
var minAngleInput = document.getElementById("minAngle");
var maxAngleInput = document.getElementById("maxAngle");

var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");

var chart = new Chart(canvas1, canvas2, canvas3);
var formControl = new FormControl(radius1Input, radius2Input, minAngleInput, maxAngleInput, typeInput, chart);

var form = document.getElementById("mainForm");
var stopButton = document.getElementById("stop");
var continueButton = document.getElementById("continue");

stopButton.addEventListener("click", function () {
	formControl.stop();
	continueButton.classList.remove("hidden");
	stopButton.classList.add("hidden");
});

continueButton.addEventListener("click", function () {
	formControl.continue();
	continueButton.classList.add("hidden");
	stopButton.classList.remove("hidden");
});

form.addEventListener("submit", function (event) {
	event.preventDefault();
	formControl.update();
	continueButton.classList.add("hidden");
	stopButton.classList.remove("hidden");
});
