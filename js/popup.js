
var link = document.querySelector(".modal-button");
var popup = document.querySelector(".modal");
var script = document.querySelector("script");


script.onload = function (evt) {
	popup.classList.add("modal-hide");
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
});
