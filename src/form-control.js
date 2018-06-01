class FormControl {

  constructor(radius1Input, radius2Input, maxAngleInput, typeInput, chart) {

    this.radius1Input = radius1Input;
    this.radius2Input = radius2Input;
    this.maxAngleInput = maxAngleInput;
    this.typeInput = typeInput;
    this.chartControl = new ChartControl(this.radius1Input.value, this.radius2Input.value, this.maxAngleInput.value, this.typeInput.value, chart);

    this.update();
    //this.checkType();
  }

  // De acordo com o tipo selecionado, coloca valores nos raios
  checkType() {
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
    this.chartControl = new ChartControl(this.radius1Input.value, this.radius2Input.value, this.maxAngleInput.value, this.typeInput.value, chart);
  }

}




