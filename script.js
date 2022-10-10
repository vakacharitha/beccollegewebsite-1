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

//drop down menu - desktop

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

//drop down menu - phone

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

//header resize on scroll in desktop

window.onscroll = function () {
	var w = window.innerWidth;
	if (w > 760) {
		myFunction();
	}
};

function myFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.querySelector(".header").style.position = "relative";
		document.querySelector(".scl-navbar-menu").style.position = "fixed";
		document.querySelector(".scl-navbar-menu").style.padding = "0px";
	} else {
		document.querySelector(".header").style.position = "sticky";
		document.querySelector(".scl-navbar-menu").style.position = "relative";
		document.querySelector(".scl-navbar-menu").style.padding = "20px";
	}
}

//notice and events switcher

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

//maruqee at the bottom

var marqueeClsBtn = document.querySelector(".marquee-close-btn");
var marquee = document.querySelector(".notice-marquee");

marqueeClsBtn.addEventListener("click", marqueeCls);

function marqueeCls() {
	marquee.style.display = "none";
}

//intersection observer for line in principals section

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("show");
			} else {
				entry.target.classList.remove("show");
			}
		});
	},
	{
		rootMargin: "-20px",
		threshold: 1,
	}
);

const hiddenElements = document.querySelectorAll(".seperator");
hiddenElements.forEach((el) => observer.observe(el));

//intersection observer welcome to bec section

const observer2 = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("show-welcometobec");
			} else {
				entry.target.classList.remove("show-welcometobec");
			}
		});
	},
	{
		rootMargin: "-20px",
		threshold: 0.1,
	}
);

const hiddenElements2 = document.querySelectorAll(".welcomebec-info");
hiddenElements2.forEach((el) => observer2.observe(el));

//intersection observer principal's section

const observer3 = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("show-principalMessage");
			} else {
				entry.target.classList.remove("show-principalMessage");
			}
		});
	},
	{
		rootMargin: "-20px",
		threshold: 0.1,
	}
);

//mouse hover for gallery section

const hiddenElements3 = document.querySelectorAll(
	".principals-message-section"
);
hiddenElements3.forEach((el) => observer3.observe(el));

var galleryTemplate = document.querySelectorAll(".gallery-template");
var galleryArray = [...galleryTemplate];
galleryArray.forEach((element, index) =>
	element.addEventListener("mouseover", function mouseOver() {
		for (j = 0; j < galleryArray.length; j++) {
			if (![index].includes(j)) {
				galleryArray[j].style.opacity = "0.3";
				galleryArray[j].style.transition = "opacity 0.25s ease-in-out 0s";
				galleryArray[j].style.cursor = "pointer";
			} else {
				galleryArray[j].style.opacity = "1";
			}
		}
	})
);

galleryArray.forEach((element) =>
	element.addEventListener("mouseout", function mouseOut() {
		for (k = 0; k < galleryArray.length; k++) {
			galleryArray[k].style.opacity = "1";
		}
	})
);

//when a pic in gallery is clicked

// var galleryPic = document.querySelectorAll(".gallery-pic");
// var galleryPicArray = [...galleryPic];
// galleryArray.forEach((element, index) =>
// 	element.addEventListener("click", function helooo() {
// 		for (l = 0; l < galleryArray.length; l++) {
// 			if (![index].includes(l)) {
// 				console.log(l + " is not active");
// 				galleryArray[l].style.scale = "1";
// 				galleryArray[l].style.display = "relative";
// 				galleryArray[l].style.minHeight = "default";
// 				galleryArray[l].style.minWidth = "default";
// 				galleryArray[l].style.zIndex = "1";
// 			} else {
// 				console.log(l + " is  active");
// 				galleryArray[l].style.transform = "translateY(calc(50vh))";
// 				galleryArray[l].style.transform = "translate3d(30vh,20vh, 0vw)";
// 				galleryArray[l].style.position = "absolute";
// 				galleryArray[l].style.display = "flex";
// 				galleryArray[l].style.flexDirection = "column";
// 				galleryArray[l].style.justifyContent = "center";
// 				galleryArray[l].style.alignItems = "center";
// 				galleryArray[l].style.minHeight = "100vh";
// 				galleryArray[l].style.minWidth = "10vw";
// 				galleryArray[l].style.zIndex = "5";
// 				galleryArray[l].style.scale = "1.5";
// 			}
// 		}
// 	})
// );
