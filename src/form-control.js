import BasicMathFunctions from "./basic-math-functions";
import ChartControl from "./chart-control";

export default class FormControl {

  constructor(radius1Input, radius2Input, minAngleInput, maxAngleInput, typeInput, chart) {

    this.radius1Input = radius1Input;
    this.radius2Input = radius2Input;
    this.minAngleInput = minAngleInput;
    this.maxAngleInput = maxAngleInput;
    this.typeInput = typeInput;
    this.basicMathFunctions = new BasicMathFunctions();
    this.chart = chart;
    this.chartControl = new ChartControl(this.radius1Input.value, this.radius2Input.value, this.getAngle(this.minAngleInput.value), this.getAngle(this.maxAngleInput.value), this.typeInput.value, chart);
    
    this.update();

    this.radius1Input.addEventListener("input", event => this.validation());
    this.radius2Input.addEventListener("input", event => this.validation())
    this.typeInput.addEventListener("input", event => this.validation());
    this.maxAngleInput.addEventListener("keyup", event => this.validation());
    this.minAngleInput.addEventListener("keyup", event => this.validation());
  }

  getAngle(angle) {
    let angleInParts = angle.replace(",", ".").split("/");
    if (angleInParts.length > 1) {
      return this.basicMathFunctions.getAngleInDegrees(parseFloat(angleInParts[0]) / parseFloat(angleInParts[1]));
    }
    return this.basicMathFunctions.getAngleInDegrees(parseFloat(angleInParts[0]));
  }

  validation() {
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
  checkSpecialCase() {
    let specialCasesMessages = document.getElementsByClassName("special-case");
    for (let i = 0; i < specialCasesMessages.length; i++) {
      specialCasesMessages[i].classList.add("hidden");
    }
    if (this.typeInput.value === "epi") {
      if (this.radius1Input.value === this.radius2Input.value)
        document.getElementById("cardioid-message").classList.remove("hidden");
    } else {
      if (this.radius1Input.value / this.radius2Input.value === 3)
        document.getElementById("deltoid-message").classList.remove("hidden");
      if (this.radius1Input.value / this.radius2Input.value === 4)
        document.getElementById("astroid-message").classList.remove("hidden");
    }
  }

  // Atualiza tudo com os valores informados
  update() {
    this.checkSpecialCase();
    this.chartControl.stop = true;
    this.chartControl = new ChartControl(this.radius1Input.value, this.radius2Input.value, this.getAngle(this.minAngleInput.value), this.getAngle(this.maxAngleInput.value), this.typeInput.value, this.chart);
  }

  stop() {
    this.chartControl.stop = true;
  }

  isStopped() {
    return this.chartControl.stop;
  }

  continue() {
    this.chartControl.stop = false;
    this.chartControl.drawCurve();
  }

}




