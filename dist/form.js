"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
    function Form(radius1, radius2, maxAngle, type) {
        _classCallCheck(this, Form);

        this.radius1 = parseInt(radius1);
        this.radius2 = parseInt(radius2);
        this.maxAngle = parseInt(maxAngle);
        this.type = type;

        var simpleCanvas = document.getElementById("simpleCanvas");

        this.simpleChart = new SimpleChart(simpleCanvas);
        this.setUnity();
        this.createChart();
    }

    _createClass(Form, [{
        key: "createChart",
        value: function createChart() {
            this.simpleChart.drawCircle(0, 0, this.radius1, "#337ab7");
            var pos = this.type === "epi" ? this.radius1 + this.radius2 : this.radius1 - this.radius2;

            this.simpleChart.drawCircle(pos, 0, this.radius2, "#d9534f");
            //this.drawCircle(this.radius2, "#d9534f");
        }

        // Define a unidade do gráfico, de acordo do que será mostrado

    }, {
        key: "setUnity",
        value: function setUnity() {

            if (this.type === "hyp") {
                this.simpleChart.unity = this.simpleChart.canvas.width / (3 * this.radius1);
            } else {
                this.simpleChart.unity = this.simpleChart.canvas.width / (2 * (this.radius1 + this.radius2));
            }
            console.log(this.simpleChart.canvas.width);
            console.log(this.simpleChart.canvas.width / this.simpleChart.unity);
        }
    }, {
        key: "drawCircle",
        value: function drawCircle(radius, color) {}
    }]);

    return Form;
}();