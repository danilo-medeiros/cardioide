"use strict";

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