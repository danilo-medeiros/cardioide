"use strict";

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
  }

  _createClass(FormControl, [{
    key: "getAngle",
    value: function getAngle(angle) {
      var angleInParts = angle.split("/");
      if (angleInParts.length > 1) {
        return this.basicMathFunctions.getAngleInDegrees(parseInt(angleInParts[0]) / parseInt(angleInParts[1]));
      }
      return this.basicMathFunctions.getAngleInDegrees(parseInt(angleInParts[0]));
    }
  }, {
    key: "validation",
    value: function validation() {
      this.radius2Input.setCustomValidity("");
      if (parseInt(this.radius1Input.value) <= parseInt(radius2Input.value) && this.typeInput.value === "hypo") {
        this.radius2Input.setCustomValidity("Ângulo inválido. Lembre que R > r");
        return false;
      }
      if (parseInt(this.radius1Input.value) < radius2Input.value && parseInt(this.typeInput.value) === "epi") {
        this.radius2Input.setCustomValidity("Ângulo inválido. Lembre que R >= r");
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