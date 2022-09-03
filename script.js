$(document).ready(function () {
	$(".counter-value").each(function () {
		$(this)
			.prop("Counter", 0)
			.animate(
				{
					Counter: $(this).text(),
				},
				{
					duration: 3500,
					easing: "swing",
					step: function (now) {
						$(this).text(Math.ceil(now));
					},
				}
			);
	});
});

document.addEventListener("click", (e) => {
	const isDropdownButton = e.target.matches("[data-dropdown-button]");
	if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

	let currentDropdown;
	if (isDropdownButton) {
		currentDropdown = e.target.closest("[data-dropdown");
		currentDropdown.classList.toggle("active");
	}

	document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
		if (dropdown === currentDropdown) return;
		dropdown.classList.remove("active");
	});
});

document.addEventListener("click", (e) => {
	const isDropdownButtonPhone = e.target.matches(
		"[data-dropdown-button-phone]"
	);
	if (
		!isDropdownButtonPhone &&
		e.target.closest("[data-dropdown-phone]") != null
	)
		return;

	let currentDropdownPhone;
	if (isDropdownButtonPhone) {
		currentDropdownPhone = e.target.closest("[data-dropdown-phone");
		currentDropdownPhone.classList.toggle("active-phone");
	}

	document
		.querySelectorAll("[data-dropdown-phone].active-phone")
		.forEach((dropdownPhone) => {
			if (dropdownPhone === currentDropdownPhone) return;
			dropdownPhone.classList.remove("active-phone");
		});
});

const hamburgerScl = document.querySelector(".scl-hamburger-container");
const hamburgerline1Scl = document.querySelector(".scl-hamburger:nth-child(1)");
const hamburgerline2Scl = document.querySelector(".scl-hamburger:nth-child(2)");
const hamburgerline3Scl = document.querySelector(".scl-hamburger:nth-child(3)");

hamburgerScl.addEventListener("click", toggleScl);

function toggleScl() {
	document.querySelector(".scl-side-bar").classList.toggle("scl-hide");
	document
		.querySelector(".scl-hamburger:nth-child(1)")
		.classList.toggle("scl-hamburger1");
	document
		.querySelector(".scl-hamburger:nth-child(2)")
		.classList.toggle("scl-hamburger2");
	document
		.querySelector(".scl-hamburger:nth-child(3)")
		.classList.toggle("scl-hamburger3");
}
