"use strict";

var radius1Input = document.getElementById("radius1Input");
var radius2Input = document.getElementById("radius2Input");

var radius1 = document.getElementById("radius1");
var radius2 = document.getElementById("radius2");

radius1Input.addEventListener("input", function (event) {
    radius1.innerHTML = radius1Input.value;
});

radius2Input.addEventListener("input", function (event) {
    radius2.innerHTML = radius2Input.value;
});