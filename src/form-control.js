class FormControl {

  constructor(radius1Input, radius2Input, minAngleInput, maxAngleInput, typeInput, chart) {

    this.radius1Input = radius1Input;
    this.radius2Input = radius2Input;
    this.minAngleInput = minAngleInput;
    this.maxAngleInput = maxAngleInput;
    this.typeInput = typeInput;
    this.basicMathFunctions = new BasicMathFunctions();
    this.chartControl = new ChartControl(this.radius1Input.value, this.radius2Input.value, this.getAngle(this.minAngleInput.value), this.getAngle(this.maxAngleInput.value), this.typeInput.value, chart);
    
    this.update();

    this.radius1Input.addEventListener("input", event => this.validation());
    this.radius2Input.addEventListener("input", event => this.validation())
    this.typeInput.addEventListener("input", event => this.validation());
  }

  getAngle(angle) {
    let angleInParts = angle.split("/");
    if (angleInParts.length > 1) {
      return this.basicMathFunctions.getAngleInDegrees(parseInt(angleInParts[0]) / parseInt(angleInParts[1]));
    }
    return this.basicMathFunctions.getAngleInDegrees(parseInt(angleInParts[0]));
  }

  validation() {
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
    this.chartControl = new ChartControl(this.radius1Input.value, this.radius2Input.value, this.getAngle(this.minAngleInput.value), this.getAngle(this.maxAngleInput.value), this.typeInput.value, chart);
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




