let typeInput = document.getElementById("type");
let radius1Input = document.getElementById("radius1");
let radius2Input = document.getElementById("radius2");
let maxAngleInput = document.getElementById("maxAngle");

let canvas1 = document.getElementById("canvas1");
let canvas2 = document.getElementById("canvas2");
let canvas3 = document.getElementById("canvas3");

let form = document.getElementById("mainForm");
let chart = new Chart(canvas1, canvas2, canvas3);
let formControl = new FormControl(radius1Input, radius2Input, maxAngleInput, typeInput, chart);

form.addEventListener("submit", (event) => {
	event.preventDefault();
	formControl = new FormControl(radius1Input, radius2Input, maxAngleInput, typeInput, chart);
})







