"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormControl = function () {
  function FormControl(radius1Input, radius2Input, maxAngleInput, typeInput, chart) {
    _classCallCheck(this, FormControl);

    this.radius1Input = radius1Input;
    this.radius2Input = radius2Input;
    this.maxAngleInput = maxAngleInput;
    this.typeInput = typeInput;
    this.chartControl = new ChartControl(this.radius1Input.value, this.radius2Input.value, this.maxAngleInput.value, this.typeInput.value, chart);

    this.update();
    //this.checkType();
  }

  // De acordo com o tipo selecionado, coloca valores nos raios


  _createClass(FormControl, [{
    key: "checkType",
    value: function checkType() {
      if (this.typeInput.value === "hypo") {
        this.radius1Input.value = 3;
        this.radius2Input.value = 1;
      } else {
        this.radius1Input.value = 1;
        this.radius2Input.value = 1;
      }
      this.update();
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
      this.chartControl = new ChartControl(this.radius1Input.value, this.radius2Input.value, this.maxAngleInput.value, this.typeInput.value, chart);
    }
  }]);

  return FormControl;
}();