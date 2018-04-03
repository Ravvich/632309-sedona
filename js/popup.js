
var link = document.querySelector(".modal-button");
var popup = document.querySelector(".modal");
var script = document.querySelector("script");
var form = popup.querySelector("form")
var datein = popup.querySelector("[name=date-in]");
var dateout = popup.querySelector("[name=date-out]");
var adults = popup.querySelector("[name=adults]");
var child = popup.querySelector("[name=child]");


script.onload = function (evt) {
	popup.classList.add("modal-hide");
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!datein.value || !dateout.value || !adults.value || !child.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
	}
});