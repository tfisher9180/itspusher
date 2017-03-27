$(document).ready(function() {
	let owlNavWidth = $('.owl-nav .owl-prev').outerWidth();
	$('.owl-nav .owl-prev').css('left', -owlNavWidth - 20);
	$('.owl-nav .owl-next').css('right', -owlNavWidth - 20);
});