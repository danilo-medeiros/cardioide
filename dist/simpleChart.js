"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleChart = function (_Chart) {
	_inherits(SimpleChart, _Chart);

	function SimpleChart(canvas) {
		_classCallCheck(this, SimpleChart);

		return _possibleConstructorReturn(this, (SimpleChart.__proto__ || Object.getPrototypeOf(SimpleChart)).call(this, canvas));
	}

	_createClass(SimpleChart, [{
		key: "reset",
		value: function reset() {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			var radius = 0;
			var angle = 0;
			while (angle < 360) {
				this.drawLine(angle);
				angle += 15;
			}
			while (radius <= 200) {
				this.drawCircle(radius, "#CCC");
				radius += 40;
			}
		}
	}]);

	return SimpleChart;
}(Chart);