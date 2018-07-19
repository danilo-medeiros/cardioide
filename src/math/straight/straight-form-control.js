import BasicMathFunctions from "./../basic-math-functions";
import StraightChartControl from "./straight-chart-control";

export default class StraightFormControl {

    constructor(
        radiusInput, minAngleInput, maxAngleInput, chart, form, stopButton, continueButton) {

        this.radiusInput = radiusInput;
        this.minAngleInput = minAngleInput;
        this.maxAngleInput = maxAngleInput;
        this.chart = chart;
        this.form = form;
        this.stopButton = stopButton;
        this.continueButton = continueButton;
        this.basicMathFunctions = new BasicMathFunctions();

        this.chartControl = new StraightChartControl(this.radiusInput.value, this.getAngle(this.minAngleInput.value), this.getAngle(this.maxAngleInput.value), chart);

        this.maxAngleInput.addEventListener("keyup", () => this.validation());
        this.minAngleInput.addEventListener("keyup", () => this.validation());

        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.update();
            this.continueButton.classList.add("hidden");
            this.stopButton.classList.remove("hidden");
        });

        continueButton.addEventListener("click", () => {
            this.continue();
            this.continueButton.classList.add("hidden");
            this.stopButton.classList.remove("hidden");
        });

        stopButton.addEventListener("click", () => {
            this.stop();
            this.continueButton.classList.remove("hidden");
            this.stopButton.classList.add("hidden");
        });

    }

    getAngle(angle) {
        let angleInParts = angle.replace(",", ".").split("/");
        if (angleInParts.length > 1) {
            return parseFloat(angleInParts[0] / parseFloat(angleInParts[1]));
        }
        return parseFloat(angleInParts[0]);
    }

    stop() {
        this.chartControl.stop = true;
    }

    validation() {
        this.radiusInput.setCustomValidity("");
        this.minAngleInput.setCustomValidity("");
        this.maxAngleInput.setCustomValidity("");
        if (parseFloat(this.minAngleInput.value) >= parseFloat(this.maxAngleInput.value)) {
            this.maxAngleInput.setCustomValidity("Valores inválidos");
            return false;
        }
        if (parseFloat(this.radiusInput.value) <= 0) {
            this.radiusInput.setCustomValidity("Raio inválido. Lembre que r > 0");
            return false;
        }
        return true;
    }

    // Atualiza tudo com os valores informados
    update() {
        this.chartControl.stop = true;
        this.chartControl = new StraightChartControl(this.radiusInput.value, this.getAngle(this.minAngleInput.value), this.getAngle(this.maxAngleInput.value), this.chart);
    }

    isStopped() {
        return this.chartControl.stop;
    }

    continue() {
        this.chartControl.stop = false;
        this.chartControl.drawCurve();
    }

}