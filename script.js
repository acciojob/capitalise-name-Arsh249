//your JS code here. If required.
let text = document.querySelector("#fname").value;

text.addEventListener("focusout", (event) => {
	text.toUpperCase();
})