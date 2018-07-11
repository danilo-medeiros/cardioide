import BasicMathFunctions from "./basic-math-functions";

export default class CycloidFormControl {

    constructor(radiusInput, minAngleInput, maxAngleInput, chart) {

        this.radiusInput = radiusInput;
        this.minAngleInput = minAngleInput;
        this.maxAngleInput = maxAngleInput;
        this.basicMathFunctions = new BasicMathFunctions();
        this.chart = chart;

        this.update();

        this.maxAngleInput.addEventListener("keyup", () => this.validation());
        this.minAngleInput.addEventListener("keyup", () => this.validation());

    }


}