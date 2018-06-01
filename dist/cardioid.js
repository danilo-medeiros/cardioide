"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cardioid = function () {
	function Cardioid() {
		_classCallCheck(this, Cardioid);
	}

	// Retorna a r(theta) para uma função cardioide 

	_createClass(Cardioid, [{
		key: "cardioid",
		value: function cardioid(a, n, angle, func) {
			return func === "sin" ? a * (1 + n * Math.sin(angle)) : a * (1 + n * Math.cos(angle));
		}
	}, {
		key: "getDataset",
		value: function getDataset(a, n, func) {
			var dataset = [];
			for (var i = 0; i <= 360; i++) {
				var angle = Math.PI * i / 180;
				dataset.push([i, this.cardioid(a, n, angle, func)]);
			}
			return dataset;
		}
	}, {
		key: "getAngleDataset",
		value: function getAngleDataset(a, n, func) {
			var angle = this.findAngle(a, n, func);
			var dataset = [];
			var i = angle;
			do {
				var realAngle = i < 360 ? i : i - 360;
				dataset.push([i, this.cardioid(a, n, Math.PI * realAngle / 180, func)]);
				i++;
			} while (i < angle + 360);
			return dataset;
		}
	}, {
		key: "findAngle",
		value: function findAngle(a, n, func) {
			var angle = 0;
			while (this.cardioid(a, n, Math.PI * angle / 180, func) !== 0) {
				angle++;
			}
			return angle;
		}
	}]);

	return Cardioid;
}();