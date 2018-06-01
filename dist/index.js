"use strict";

var typeInput = document.getElementById("type");
var radius1Input = document.getElementById("radius1");
var radius2Input = document.getElementById("radius2");
var minAngleInput = document.getElementById("minAngle");
var maxAngleInput = document.getElementById("maxAngle");

var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");

var chart = new Chart(canvas1, canvas2, canvas3);
var formControl = new FormControl(radius1Input, radius2Input, minAngleInput, maxAngleInput, typeInput, chart);

var form = document.getElementById("mainForm");
var stopButton = document.getElementById("stop");
var continueButton = document.getElementById("continue");

stopButton.addEventListener("click", function () {
	formControl.stop();
	continueButton.classList.remove("hidden");
	stopButton.classList.add("hidden");
});

continueButton.addEventListener("click", function () {
	formControl.continue();
	continueButton.classList.add("hidden");
	stopButton.classList.remove("hidden");
});

form.addEventListener("submit", function (event) {
	event.preventDefault();
	formControl.update();
	continueButton.classList.add("hidden");
	stopButton.classList.remove("hidden");
});