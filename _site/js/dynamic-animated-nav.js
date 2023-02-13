// THIS JQUERY DESIGNED AND BUILT WITH LOVING CARE
// ENTIRELY BY HAND JUST FOR YOU BY IAN BESLER
// HTTPS://WWW.IANBESLER.COM

var sectionOneHeight = $("#splash").outerHeight();
var sectionTwoHeight = $("#about").outerHeight();
var sectionThreeHeight = $("#get-started").outerHeight();
var sectionFourHeight = $("#sessions").outerHeight();

$(window).scroll(function() {

	if ($(document).scrollTop() <= sectionOneHeight) {
		$("nav li:nth-child(1) a").removeClass("nav-highlight");
	}

	if ($(document).scrollTop() >= (sectionOneHeight - 2) ) {
		$("nav li:nth-child(1) a").addClass("nav-highlight");
		$("nav li:nth-child(2) a").removeClass("nav-highlight");
	}

	if ($(document).scrollTop() >= (sectionOneHeight + sectionTwoHeight) - 2) {
		$("nav li:nth-child(2) a").addClass("nav-highlight");
		$("nav li:nth-child(1) a,nav li:nth-child(3) a").removeClass("nav-highlight");
	}

	if ($(document).scrollTop() >= (sectionOneHeight + sectionTwoHeight + sectionThreeHeight) - 2) {
		$("nav li:nth-child(3) a").addClass("nav-highlight");
		$("nav li:nth-child(2) a,nav li:nth-child(4) a").removeClass("nav-highlight");
	}

	if ($(document).scrollTop() >= (sectionOneHeight + sectionTwoHeight + sectionThreeHeight + sectionFourHeight) - 2) {
		$("nav li:nth-child(4) a").addClass("nav-highlight");
		$("nav li:nth-child(3) a,nav li:nth-child(5) a").removeClass("nav-highlight");
	}
});