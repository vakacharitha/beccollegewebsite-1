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

var notices = document.querySelector(".notices");
var latestNews = document.querySelector(".latest-news");
var campusUpdatesLatestNews = document.getElementsByClassName(
	"campus-updates-latestNews-template "
);
var campusUpdatesNotices = document.getElementsByClassName(
	"campus-updates-notices-template "
);

notices.addEventListener("click", noticeSwitcher);
latestNews.addEventListener("click", latestNewsSwitcher);

function noticeSwitcher() {
	notices.style.backgroundColor = "var(--primary-color)";
	notices.style.color = "#fff";
	latestNews.style.backgroundColor = "rgba(217, 217, 217, 0.8)";
	latestNews.style.color = "var(--text-color-black)";
	for (let i = 0; i < campusUpdatesLatestNews.length; i++) {
		campusUpdatesLatestNews[i].style.display = "none";
	}
	for (let j = 0; j < campusUpdatesNotices.length; j++) {
		campusUpdatesNotices[j].style.display = "grid";
	}
}

function latestNewsSwitcher() {
	latestNews.style.backgroundColor = "var(--primary-color)";
	latestNews.style.color = "#fff";
	notices.style.backgroundColor = "rgba(217, 217, 217, 0.8)";
	notices.style.color = "var(--text-color-black)";
	for (let i = 0; i < campusUpdatesLatestNews.length; i++) {
		campusUpdatesLatestNews[i].style.display = "grid";
	}
	for (let j = 0; j < campusUpdatesNotices.length; j++) {
		campusUpdatesNotices[j].style.display = "none";
	}
}
