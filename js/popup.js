
var link = document.querySelector(".modal-button");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("modal");
});
