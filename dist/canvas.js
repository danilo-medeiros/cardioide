"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
    function Canvas(canvas) {
        _classCallCheck(this, Canvas);

        this._canvas = canvas;
        this._canvas.width = window.innerWidth * 0.7;
        this._canvas.height = window.innerWidth * 0.4;

        this.ctx = this.canvas.getContext("2d");
        this.ctx.textAlign = "center";
        this.reset();
    }

    _createClass(Canvas, [{
        key: "canvas",
        get: function get() {
            return this._canvas;
        }
    }]);

    return Canvas;
}();