$(document).ready(function() {
	// NAVBAR SCROLL OPACITY EFFECT
	$(window).scroll(function () {
	      //if you hard code, then use console
	      //.log to determine when you want the 
	      //nav bar to stick.  
	    if ($(window).scrollTop() > 728) {
	    	$('#nav_bar').removeClass('nav_bar_bottom');
	        $('#nav_bar').addClass('navbar-fixed');
	    }
	    if ($(window).scrollTop() < 728) {
	    	$('#nav_bar').addClass('nav_bar_bottom');
	        $('#nav_bar').removeClass('navbar-fixed');

	    }
	});



	$("#slide1_button").click(function() {
		scrollToAnchor('slide1');
	});


});


function scrollToAnchor(aid) {
	var aTag = $("a[name='"+ aid + "']");
	$('html,body').animate({
		scrollTop: aTag.offset().top},2000);
}