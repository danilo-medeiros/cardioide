import Chart from "./chart/chart";
import CyclicFormControl from "./math/cyclic/cyclic-form-control";
import StraightFormControl from "./math/straight/straight-form-control";

const cyclicFormControl = new CyclicFormControl(
	document.getElementById("r1Cyc"), 
	document.getElementById("r2Cyc"), 
	document.getElementById("minAngleCyc"), 
	document.getElementById("maxAngleCyc"), 
	document.getElementById("typeCyc"), 
	new Chart(document.getElementById("simpleCanvasContainer")),
	document.getElementById("formCyc"),
	document.getElementById("stopCyc"),
	document.getElementById("continueCyc")
);

const straightFormControl = new StraightFormControl(
	document.getElementById("rStr"), 
	document.getElementById("wStr"), 
	document.getElementById("minAngleStr"), 
	document.getElementById("maxAngleStr"), 
	new Chart(document.getElementById("cycloidCanvasContainer")),
	document.getElementById("formStr"),
	document.getElementById("stopStr"),
	document.getElementById("continueStr")
);










