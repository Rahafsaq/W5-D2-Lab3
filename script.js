let myDiv = document.getElementById('myDiv');
let widthInput = document.getElementById('width-input');
let heightInput = document.getElementById('height-input');
let coloRInput = document.getElementById('color-input');
let radiusInput = document.getElementById('radius-input');

let makeChange = document.getElementById('makeChange');
let undoChange = document.getElementById('undoChange');

makeChange.addEventListener('click', function myfun() {
	// myDiv.style.cssText = `background-color: ${coloRInput.value} ; width: ${widthInput.value} height:${heightInput.value}; borderRadius: ${radiusInput.value}`;
	myDiv.style.backgroundColor = coloRInput.value;
	myDiv.style.width = widthInput.value;
	myDiv.style.height = heightInput.value;
	myDiv.style.borderRadius = radiusInput.value;
});

undoChange.addEventListener('click', function undo() {
	// myDiv.style.cssText = `background-color: ${coloRInput.value} ; width: ${widthInput.value} height:${heightInput.value}; borderRadius: ${radiusInput.value}`;
	myDiv.style.backgroundColor = 'blue';
	myDiv.style.width = '30vw';
	myDiv.style.height = '40vh';
	myDiv.style.borderRadius = '0px';
});
