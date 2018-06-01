"use strict";

var typeInput = document.getElementById("type");
var radius1Input = document.getElementById("radius1");
var radius2Input = document.getElementById("radius2");
var maxAngleInput = document.getElementById("maxAngle");

var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");

var form = document.getElementById("mainForm");
var chart = new Chart(canvas1, canvas2, canvas3);
var formControl = new FormControl(radius1Input, radius2Input, maxAngleInput, typeInput, chart);

form.addEventListener("submit", function (event) {
	event.preventDefault();
	formControl = new FormControl(radius1Input, radius2Input, maxAngleInput, typeInput, chart);
});