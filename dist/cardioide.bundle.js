/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/basic-math-functions.js":
/*!*************************************!*\
  !*** ./src/basic-math-functions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar BasicMathFunctions = function () {\n  function BasicMathFunctions() {\n    _classCallCheck(this, BasicMathFunctions);\n  }\n\n  _createClass(BasicMathFunctions, [{\n    key: \"getAngleInRadians\",\n    value: function getAngleInRadians(angle) {\n      return angle * Math.PI / 180;\n    }\n  }, {\n    key: \"getAngleInDegrees\",\n    value: function getAngleInDegrees(angle) {\n      return angle * 180;\n    }\n  }, {\n    key: \"gcd\",\n    value: function gcd(n, m) {\n      var r = 0;\n      while (n !== 0) {\n        r = m % n;\n        m = n;\n        n = r;\n      }\n      return m;\n    }\n  }]);\n\n  return BasicMathFunctions;\n}();\n\nexports.default = BasicMathFunctions;\n\n//# sourceURL=webpack:///./src/basic-math-functions.js?");

/***/ }),

/***/ "./src/chart-control.js":
/*!******************************!*\
  !*** ./src/chart-control.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _epicycloid = __webpack_require__(/*! ./epicycloid */ \"./src/epicycloid.js\");\n\nvar _epicycloid2 = _interopRequireDefault(_epicycloid);\n\nvar _hypocycloid = __webpack_require__(/*! ./hypocycloid */ \"./src/hypocycloid.js\");\n\nvar _hypocycloid2 = _interopRequireDefault(_hypocycloid);\n\nvar _basicMathFunctions = __webpack_require__(/*! ./basic-math-functions */ \"./src/basic-math-functions.js\");\n\nvar _basicMathFunctions2 = _interopRequireDefault(_basicMathFunctions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ChartControl = function () {\n  function ChartControl(R, r, minAngle, maxAngle, type, chart) {\n    _classCallCheck(this, ChartControl);\n\n    this.R = parseFloat(R);\n    this.r = parseFloat(r);\n    this.minAngle = parseFloat(minAngle);\n    this.maxAngle = parseFloat(maxAngle);\n    this.type = type;\n    this.chart = chart;\n    this.epicycloid = new _epicycloid2.default(this.R, this.r);\n    this.hypocycloid = new _hypocycloid2.default(this.R, this.r);\n    this.counter = this.minAngle;\n    this.stop = false;\n\n    this.basicMathFunctions = new _basicMathFunctions2.default();\n\n    if (this.type === \"hypo\") {\n      this.chart.resetScale(300 / R);\n    } else {\n      this.chart.resetScale(180 / (this.R + this.r));\n    }\n\n    this.infoPos = [-1 * (this.chart.canvas1.width / 2 - 20) / this.chart.scale, (this.chart.canvas1.height / 2 - 40) / this.chart.scale];\n    this.chart.drawCircle(this.chart.ctx1, 0, 0, this.R, \"#337ab7\");\n    this.chart.drawText(this.chart.ctx1, \"R = \" + this.R, this.infoPos[0], this.infoPos[1]);\n    this.chart.drawText(this.chart.ctx1, \"r = \" + this.r, this.infoPos[0], this.infoPos[1] * 0.9);\n    this.chart.drawText(this.chart.ctx1, \"T = \" + (this.type === \"hypo\" ? this.hypocycloid.getPeriod() : this.epicycloid.getPeriod()), this.infoPos[0], this.infoPos[1] * 0.8);\n\n    this.drawCurve();\n  }\n\n  _createClass(ChartControl, [{\n    key: \"drawMovingCircle\",\n    value: function drawMovingCircle(t, functionX, functionY) {\n      // Desenha o círculo em uma posição especificada\n\n      var diff = this.type === \"hypo\" ? this.R - this.r : this.R + this.r;\n\n      var posX = Math.cos(this.basicMathFunctions.getAngleInRadians(t)) * diff;\n      var posY = Math.sin(this.basicMathFunctions.getAngleInRadians(t)) * diff;\n      this.chart.clean(this.chart.ctx3);\n      this.chart.drawCircle(this.chart.ctx3, posX, posY, this.r, \"#000\");\n      this.chart.drawCircle(this.chart.ctx3, posX, posY, this.r / 15, \"#000\");\n      this.chart.drawCircle(this.chart.ctx3, functionX, functionY, this.r / 15, \"#d9534f\");\n      this.chart.drawLine(this.chart.ctx3, posX, posY, functionX, functionY, \"#000\");\n    }\n  }, {\n    key: \"drawCurve\",\n    value: function drawCurve() {\n      var _this = this;\n\n      // A verificação do stop também deve ocorrer aqui, pois a função \n      // drawCurve é chamada em mais de um lugar (redraw() e drawCurve())\n      if (this.stop) return;\n      if (!this.stop && this.counter === this.minAngle) this.chart.clean(this.chart.ctx2);\n      if (this.counter < this.maxAngle) {\n        this.counter++;\n        var originX = void 0,\n            originY = void 0,\n            futureX = void 0,\n            futureY = void 0;\n\n        if (this.type === \"hypo\") {\n          var _hypocycloid$get = this.hypocycloid.get(this.counter);\n\n          var _hypocycloid$get2 = _slicedToArray(_hypocycloid$get, 2);\n\n          originX = _hypocycloid$get2[0];\n          originY = _hypocycloid$get2[1];\n\n          var _hypocycloid$get3 = this.hypocycloid.get(this.counter + 1);\n\n          var _hypocycloid$get4 = _slicedToArray(_hypocycloid$get3, 2);\n\n          futureX = _hypocycloid$get4[0];\n          futureY = _hypocycloid$get4[1];\n        } else {\n          var _epicycloid$get = this.epicycloid.get(this.counter);\n\n          var _epicycloid$get2 = _slicedToArray(_epicycloid$get, 2);\n\n          originX = _epicycloid$get2[0];\n          originY = _epicycloid$get2[1];\n\n          var _epicycloid$get3 = this.epicycloid.get(this.counter + 1);\n\n          var _epicycloid$get4 = _slicedToArray(_epicycloid$get3, 2);\n\n          futureX = _epicycloid$get4[0];\n          futureY = _epicycloid$get4[1];\n        }\n\n        this.chart.drawLine(this.chart.ctx2, originX, originY, futureX, futureY, \"#d9534f\");\n        this.drawMovingCircle(this.counter, originX, originY);\n        this.chart.drawText(this.chart.ctx3, \"t = \" + this.counter + \"°\", this.infoPos[0], this.infoPos[1] * 0.7);\n        setTimeout(function () {\n          _this.drawCurve();\n        }, 14);\n      } else {\n        this.counter = this.minAngle;\n        setTimeout(function () {\n          _this.drawCurve();\n        }, 500);\n      }\n    }\n  }]);\n\n  return ChartControl;\n}();\n\nexports.default = ChartControl;\n\n//# sourceURL=webpack:///./src/chart-control.js?");

/***/ }),

/***/ "./src/chart.js":
/*!**********************!*\
  !*** ./src/chart.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _basicMathFunctions = __webpack_require__(/*! ./basic-math-functions */ \"./src/basic-math-functions.js\");\n\nvar _basicMathFunctions2 = _interopRequireDefault(_basicMathFunctions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Chart = function () {\n  function Chart(canvas1, canvas2, canvas3) {\n    _classCallCheck(this, Chart);\n\n    // Circunferência do centro e linhas do gráfico\n    this.canvas1 = canvas1;\n\n    // Circunferência que traslada\n    this.canvas2 = canvas2;\n\n    // Curva\n    this.canvas3 = canvas3;\n\n    this.basicMathFunctions = new _basicMathFunctions2.default();\n\n    this.scale = 100;\n    this.configure();\n    this.drawChart();\n  }\n\n  _createClass(Chart, [{\n    key: \"configure\",\n    value: function configure() {\n\n      this.canvas1.width = this.canvas2.width = this.canvas3.width = 816;\n      this.canvas1.height = this.canvas2.height = this.canvas3.height = 816;\n\n      this.ctx1 = this.canvas1.getContext(\"2d\");\n      this.ctx2 = this.canvas2.getContext(\"2d\");\n      this.ctx3 = this.canvas3.getContext(\"2d\");\n\n      this.ctx1.lineWidth = this.ctx2.lineWidth = this.ctx3.lineWidth = 5 / this.scale;\n      this.ctx1.font = this.ctx2.font = this.ctx3.font = \"italic 1px Helvetica\";\n      //this.ctx1.textAlign = this.ctx2.textAlign = this.ctx3.textAlign = \"center\";\n\n      this.ctx1.translate(this.canvas1.width / 2, this.canvas1.height / 2);\n      this.ctx2.translate(this.canvas2.width / 2, this.canvas2.height / 2);\n      this.ctx3.translate(this.canvas3.width / 2, this.canvas3.height / 2);\n\n      this.ctx1.scale(this.scale, -1 * this.scale);\n      this.ctx2.scale(this.scale, -1 * this.scale);\n      this.ctx3.scale(this.scale, -1 * this.scale);\n\n      // Tamanho do canvas em unidades já escaladas\n      this.width = this.canvas1.width / this.scale;\n    }\n  }, {\n    key: \"cleanAll\",\n    value: function cleanAll() {\n      this.ctx1.clearRect(this.canvas1.width * -1, this.canvas1.height * -1, this.canvas1.width * 2, this.canvas1.height * 2);\n      this.ctx2.clearRect(this.canvas1.width * -1, this.canvas1.height * -1, this.canvas1.width * 2, this.canvas1.height * 2);\n      this.ctx3.clearRect(this.canvas1.width * -1, this.canvas1.height * -1, this.canvas1.width * 2, this.canvas1.height * 2);\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.cleanAll();\n      this.drawChart();\n    }\n  }, {\n    key: \"resetScale\",\n    value: function resetScale(scale) {\n      this.scale = scale;\n      this.configure();\n      this.reset();\n    }\n  }, {\n    key: \"clean\",\n    value: function clean(ctx) {\n      ctx.clearRect(this.canvas1.width * -1, this.canvas1.height * -1, this.canvas1.width * 2, this.canvas1.height * 2);\n    }\n  }, {\n    key: \"drawChart\",\n    value: function drawChart() {\n\n      this.ctx1.lineWidth = 2 / this.scale;\n\n      for (var i = 0; i < this.width; i++) {\n\n        var color = i === 0 ? \"#000\" : \"#CCC\";\n        // Linhas verticais\n        this.drawLine(this.ctx1, i * -1, this.width * -1, i * -1, this.width, color);\n        this.drawLine(this.ctx1, i, this.width * -1, i, this.width, color);\n\n        this.drawLine(this.ctx1, i, -0.1, i, 0.1, \"#000\");\n        this.drawLine(this.ctx1, i * -1, -0.1, i * -1, 0.1, \"#000\");\n\n        // Linhas horizontais\n        this.drawLine(this.ctx1, this.width * -1, i * -1, this.width, i * -1, color);\n        this.drawLine(this.ctx1, this.width * -1, i, this.width, i, color);\n\n        this.drawLine(this.ctx1, -0.1, i, 0.1, i, \"#000\");\n        this.drawLine(this.ctx1, -0.1, i * -1, 0.1, i * -1, \"#000\");\n      }\n      this.ctx1.lineWidth = 5 / this.scale;\n    }\n  }, {\n    key: \"drawLine\",\n    value: function drawLine(ctx, originX, originY, finalX, finalY, color) {\n      ctx.beginPath();\n      ctx.strokeStyle = color;\n      ctx.moveTo(originX, originY);\n      ctx.lineTo(finalX, finalY);\n      ctx.stroke();\n    }\n  }, {\n    key: \"drawCircle\",\n    value: function drawCircle(ctx, x, y, radius, color) {\n      ctx.beginPath();\n      ctx.arc(x, y, radius, 0, 2 * Math.PI);\n      ctx.strokeStyle = color;\n      ctx.stroke();\n    }\n  }, {\n    key: \"drawText\",\n    value: function drawText(ctx, text, x, y) {\n      var newScale = 30;\n      ctx.scale(newScale / this.scale, -1 * newScale / this.scale);\n      ctx.fillText(text, x * this.scale / newScale, y * this.scale / (-1 * newScale));\n      ctx.scale(this.scale / newScale, this.scale / (-1 * newScale));\n    }\n  }]);\n\n  return Chart;\n}();\n\nexports.default = Chart;\n\n//# sourceURL=webpack:///./src/chart.js?");

/***/ }),

/***/ "./src/cycloid.js":
/*!************************!*\
  !*** ./src/cycloid.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _basicMathFunctions = __webpack_require__(/*! ./basic-math-functions */ \"./src/basic-math-functions.js\");\n\nvar _basicMathFunctions2 = _interopRequireDefault(_basicMathFunctions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Cycloid = function () {\n    function Cycloid(R, r) {\n        _classCallCheck(this, Cycloid);\n\n        this.basicMathFunctions = new _basicMathFunctions2.default();\n        this.R = R;\n        this.r = r;\n    }\n\n    _createClass(Cycloid, [{\n        key: \"getPeriod\",\n        value: function getPeriod() {\n            var gcd = this.basicMathFunctions.gcd(this.r, this.R);\n            var p = this.r / gcd;\n            return (2 * p).toString() + \" PI\";\n        }\n    }]);\n\n    return Cycloid;\n}();\n\nexports.default = Cycloid;\n\n//# sourceURL=webpack:///./src/cycloid.js?");

/***/ }),

/***/ "./src/epicycloid.js":
/*!***************************!*\
  !*** ./src/epicycloid.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _cycloid = __webpack_require__(/*! ./cycloid */ \"./src/cycloid.js\");\n\nvar _cycloid2 = _interopRequireDefault(_cycloid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Epicycloid = function (_Cycloid) {\n    _inherits(Epicycloid, _Cycloid);\n\n    /* \n        * Quando o usuário quer que a circunferência com raio r <= R role \n        * pela parte externa da circunferência com raio R\n    */\n\n    function Epicycloid(R, r) {\n        _classCallCheck(this, Epicycloid);\n\n        return _possibleConstructorReturn(this, (Epicycloid.__proto__ || Object.getPrototypeOf(Epicycloid)).call(this, R, r));\n    }\n\n    _createClass(Epicycloid, [{\n        key: \"get\",\n        value: function get(t) {\n            return [(this.R + this.r) * Math.cos(this.basicMathFunctions.getAngleInRadians(t)) - this.r * Math.cos(this.basicMathFunctions.getAngleInRadians(this.R / this.r + 1) * t), (this.R + this.r) * Math.sin(this.basicMathFunctions.getAngleInRadians(t)) - this.r * Math.sin(this.basicMathFunctions.getAngleInRadians(this.R / this.r + 1) * t)];\n        }\n    }]);\n\n    return Epicycloid;\n}(_cycloid2.default);\n\nexports.default = Epicycloid;\n\n//# sourceURL=webpack:///./src/epicycloid.js?");

/***/ }),

/***/ "./src/form-control.js":
/*!*****************************!*\
  !*** ./src/form-control.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _basicMathFunctions = __webpack_require__(/*! ./basic-math-functions */ \"./src/basic-math-functions.js\");\n\nvar _basicMathFunctions2 = _interopRequireDefault(_basicMathFunctions);\n\nvar _chartControl = __webpack_require__(/*! ./chart-control */ \"./src/chart-control.js\");\n\nvar _chartControl2 = _interopRequireDefault(_chartControl);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar FormControl = function () {\n  function FormControl(radius1Input, radius2Input, minAngleInput, maxAngleInput, typeInput, chart) {\n    var _this = this;\n\n    _classCallCheck(this, FormControl);\n\n    this.radius1Input = radius1Input;\n    this.radius2Input = radius2Input;\n    this.minAngleInput = minAngleInput;\n    this.maxAngleInput = maxAngleInput;\n    this.typeInput = typeInput;\n    this.basicMathFunctions = new _basicMathFunctions2.default();\n    this.chart = chart;\n    this.chartControl = new _chartControl2.default(this.radius1Input.value, this.radius2Input.value, this.getAngle(this.minAngleInput.value), this.getAngle(this.maxAngleInput.value), this.typeInput.value, chart);\n\n    this.update();\n\n    this.radius1Input.addEventListener(\"input\", function (event) {\n      return _this.validation();\n    });\n    this.radius2Input.addEventListener(\"input\", function (event) {\n      return _this.validation();\n    });\n    this.typeInput.addEventListener(\"input\", function (event) {\n      return _this.validation();\n    });\n    this.maxAngleInput.addEventListener(\"keyup\", function (event) {\n      return _this.validation();\n    });\n    this.minAngleInput.addEventListener(\"keyup\", function (event) {\n      return _this.validation();\n    });\n  }\n\n  _createClass(FormControl, [{\n    key: \"getAngle\",\n    value: function getAngle(angle) {\n      var angleInParts = angle.replace(\",\", \".\").split(\"/\");\n      if (angleInParts.length > 1) {\n        return this.basicMathFunctions.getAngleInDegrees(parseFloat(angleInParts[0]) / parseFloat(angleInParts[1]));\n      }\n      return this.basicMathFunctions.getAngleInDegrees(parseFloat(angleInParts[0]));\n    }\n  }, {\n    key: \"validation\",\n    value: function validation() {\n      this.radius2Input.setCustomValidity(\"\");\n      this.minAngleInput.setCustomValidity(\"\");\n      this.maxAngleInput.setCustomValidity(\"\");\n      if (parseFloat(this.radius1Input.value) <= parseFloat(radius2Input.value) && this.typeInput.value === \"hypo\") {\n        this.radius2Input.setCustomValidity(\"Raio inválido. Lembre que R > r\");\n        return false;\n      }\n      if (parseFloat(this.radius1Input.value) < radius2Input.value && parseFloat(this.typeInput.value) === \"epi\") {\n        this.radius2Input.setCustomValidity(\"Raio inválido. Lembre que R >= r\");\n        return false;\n      }\n      if (isNaN(this.getAngle(this.minAngleInput.value))) {\n        this.minAngleInput.setCustomValidity(\"Valor inválido. Insira somente números\");\n        return false;\n      }\n      if (isNaN(this.getAngle(this.maxAngleInput.value))) {\n        this.maxAngleInput.setCustomValidity(\"Valor inválido. Insira somente números\");\n        return false;\n      }\n      return true;\n    }\n\n    // Verifica se existe caso especial (Astroide, Cardioide e Deltoide)\n\n  }, {\n    key: \"checkSpecialCase\",\n    value: function checkSpecialCase() {\n      var specialCasesMessages = document.getElementsByClassName(\"special-case\");\n      for (var i = 0; i < specialCasesMessages.length; i++) {\n        specialCasesMessages[i].classList.add(\"hidden\");\n      }\n      if (this.typeInput.value === \"epi\") {\n        if (this.radius1Input.value === this.radius2Input.value) document.getElementById(\"cardioid-message\").classList.remove(\"hidden\");\n      } else {\n        if (this.radius1Input.value / this.radius2Input.value === 3) document.getElementById(\"deltoid-message\").classList.remove(\"hidden\");\n        if (this.radius1Input.value / this.radius2Input.value === 4) document.getElementById(\"astroid-message\").classList.remove(\"hidden\");\n      }\n    }\n\n    // Atualiza tudo com os valores informados\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.checkSpecialCase();\n      this.chartControl.stop = true;\n      this.chartControl = new _chartControl2.default(this.radius1Input.value, this.radius2Input.value, this.getAngle(this.minAngleInput.value), this.getAngle(this.maxAngleInput.value), this.typeInput.value, this.chart);\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.chartControl.stop = true;\n    }\n  }, {\n    key: \"isStopped\",\n    value: function isStopped() {\n      return this.chartControl.stop;\n    }\n  }, {\n    key: \"continue\",\n    value: function _continue() {\n      this.chartControl.stop = false;\n      this.chartControl.drawCurve();\n    }\n  }]);\n\n  return FormControl;\n}();\n\nexports.default = FormControl;\n\n//# sourceURL=webpack:///./src/form-control.js?");

/***/ }),

/***/ "./src/hypocycloid.js":
/*!****************************!*\
  !*** ./src/hypocycloid.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _cycloid = __webpack_require__(/*! ./cycloid */ \"./src/cycloid.js\");\n\nvar _cycloid2 = _interopRequireDefault(_cycloid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Hypocycloid = function (_Cycloid) {\n    _inherits(Hypocycloid, _Cycloid);\n\n    /* \n        * Quando o usuário quer que a circunferência com raio r < R role \n        * pela parte interna da circunferência com raio R\n    */\n\n    function Hypocycloid(R, r) {\n        _classCallCheck(this, Hypocycloid);\n\n        return _possibleConstructorReturn(this, (Hypocycloid.__proto__ || Object.getPrototypeOf(Hypocycloid)).call(this, R, r));\n    }\n\n    _createClass(Hypocycloid, [{\n        key: \"get\",\n        value: function get(t) {\n            return [(this.R - this.r) * Math.cos(this.basicMathFunctions.getAngleInRadians(t)) + this.r * Math.cos(this.basicMathFunctions.getAngleInRadians(this.R / this.r - 1) * t), (this.R - this.r) * Math.sin(this.basicMathFunctions.getAngleInRadians(t)) - this.r * Math.sin(this.basicMathFunctions.getAngleInRadians(this.R / this.r - 1) * t)];\n        }\n    }]);\n\n    return Hypocycloid;\n}(_cycloid2.default);\n\nexports.default = Hypocycloid;\n\n//# sourceURL=webpack:///./src/hypocycloid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _formControl = __webpack_require__(/*! ./form-control */ \"./src/form-control.js\");\n\nvar _formControl2 = _interopRequireDefault(_formControl);\n\nvar _chart = __webpack_require__(/*! ./chart */ \"./src/chart.js\");\n\nvar _chart2 = _interopRequireDefault(_chart);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar typeInput = document.getElementById(\"type\");\nvar radius1Input = document.getElementById(\"radius1\");\nvar radius2Input = document.getElementById(\"radius2\");\nvar minAngleInput = document.getElementById(\"minAngle\");\nvar maxAngleInput = document.getElementById(\"maxAngle\");\n\nvar canvas1 = document.getElementById(\"canvas1\");\nvar canvas2 = document.getElementById(\"canvas2\");\nvar canvas3 = document.getElementById(\"canvas3\");\n\nvar chart = new _chart2.default(canvas1, canvas2, canvas3);\nvar formControl = new _formControl2.default(radius1Input, radius2Input, minAngleInput, maxAngleInput, typeInput, chart);\n\nvar form = document.getElementById(\"mainForm\");\nvar stopButton = document.getElementById(\"stop\");\nvar continueButton = document.getElementById(\"continue\");\n\nstopButton.addEventListener(\"click\", function () {\n\tformControl.stop();\n\tcontinueButton.classList.remove(\"hidden\");\n\tstopButton.classList.add(\"hidden\");\n});\n\ncontinueButton.addEventListener(\"click\", function () {\n\tformControl.continue();\n\tcontinueButton.classList.add(\"hidden\");\n\tstopButton.classList.remove(\"hidden\");\n});\n\nform.addEventListener(\"submit\", function (event) {\n\tevent.preventDefault();\n\tformControl.update();\n\tcontinueButton.classList.add(\"hidden\");\n\tstopButton.classList.remove(\"hidden\");\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });