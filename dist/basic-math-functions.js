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
  }]);

  return BasicMathFunctions;
}();