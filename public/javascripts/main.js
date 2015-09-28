// $(document).ready(function() {
// 	$('#title').mousemove(function(e){
// 		var amountMovedX = (e.pageX * -1 / 6);
// 		var amountMovedY = (e.pageY * -1 / 6);
// 		$(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
// 	});
// });


$(document).scroll(function() {
  var dHeight = $(this).height()-$(window).height();
  if (dHeight >= $(this).scrollTop()) {
    $('nav').css('background', 'rgba(0,0,0,' + $(this).scrollTop() / dHeight + ')');
  }
});


$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});