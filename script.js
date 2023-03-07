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
