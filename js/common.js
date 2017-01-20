$(document).ready(function() {

	$('.slider__in').slick({
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 7000,
		prevArrow: '<img src="img/prev.png" class="arrow arrow1" alt="" />',
		nextArrow: '<img src="img/next.png" class="arrow arrow2" alt="" />'
	});

});