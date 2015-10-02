$(document).ready(function() {
	// NAVBAR SCROLL OPACITY EFFECT
	$(document).scroll(function() {
	  var dHeight = $(this).height()-$(window).height();
	  if (dHeight >= $(this).scrollTop()) {
	    $('nav').css('background', 'rgba(0,0,0,' + $(this).scrollTop() / dHeight + ')');
	  }
	});


	$("#home_link").click(function() {
		scrollToAnchor('home_link');
	});

	$("#slide1_button").click(function() {
		scrollToAnchor('slide1');
	});

	$("#slide2_button").click(function() {
		scrollToAnchor('slide2');
	});

	$("#contact_slide_button").click(function() {
		scrollToAnchor('contact_slide');
	});


});


function scrollToAnchor(aid) {
	var aTag = $("a[name='"+ aid + "']");
	$('html,body').animate({
		scrollTop: aTag.offset().top},2000);
}