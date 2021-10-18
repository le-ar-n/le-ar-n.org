// THIS JQUERY CODE SNIPPET SLIDES THE NAVIGATION DRAWER
// ONTO THE SCREEN WHEN THE HAMBURGER BUTTON IS CLICKED
$('#hamburger-button').click(function(){
	$('nav').toggleClass('slide-the-drawer');
});

// THIS JQUERY CODE SNIPPET CHANGES THE HAMBURGER BUTTON ICON
// INTO AN CIRCLE AND MAKES THE THREE HORIZONTAL LINES FORM 
// AN "X" CLOSE BUTTON WHEN THE BUTTON IS CLICKED
$('#hamburger-button').click(function(){
	$(this).toggleClass('border-radius-fifty-percent');
	$('#line-one').toggleClass('close-button-one');
	$('#line-two').toggleClass('close-button-two');
	$('#line-three').toggleClass('close-button-three');
});

// THIS JQUERY CODE SNIPPET SLIDES THE NAVIGATION DRAWER CLOSED
// WHEN THE USER CLICKS ON ONE OF THE NAVIGATION LINKS
$('nav a').click(function(){
	$('nav').removeClass('slide-the-drawer');
	$('#hamburger-button').removeClass('border-radius-fifty-percent');
	$('#line-one').removeClass('close-button-one');
	$('#line-two').removeClass('close-button-two');
	$('#line-three').removeClass('close-button-three');
});

// THIS JQUERY CODE SNIPPET SLIDES THE NAVIGATION DRAWER CLOSED
// WHEN THE USER PRESSES THE ESC BUTTON
$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		$('nav').removeClass('slide-the-drawer');
		$('#hamburger-button').removeClass('border-radius-fifty-percent');
		$('#line-one').removeClass('close-button-one');
		$('#line-two').removeClass('close-button-two');
		$('#line-three').removeClass('close-button-three');
	}
});