let typeInput = document.getElementById("type");
let radius1Input = document.getElementById("radius1");
let radius2Input = document.getElementById("radius2");
let minAngleInput = document.getElementById("minAngle");
let maxAngleInput = document.getElementById("maxAngle");

let canvas1 = document.getElementById("canvas1");
let canvas2 = document.getElementById("canvas2");
let canvas3 = document.getElementById("canvas3");

let chart = new Chart(canvas1, canvas2, canvas3);
let formControl = new FormControl(radius1Input, radius2Input, minAngleInput, maxAngleInput, typeInput, chart);

let form = document.getElementById("mainForm");
let stopButton = document.getElementById("stop");
let continueButton = document.getElementById("continue");

stopButton.addEventListener("click", () => {
	formControl.stop();
	continueButton.classList.remove("hidden");
	stopButton.classList.add("hidden");
});

continueButton.addEventListener("click", () => {
	formControl.continue();
	continueButton.classList.add("hidden");
	stopButton.classList.remove("hidden");
})

form.addEventListener("submit", (event) => {
	event.preventDefault();
	formControl.update();
	continueButton.classList.add("hidden");
	stopButton.classList.remove("hidden");
})









