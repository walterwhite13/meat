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

	$('.award').slick({
		infinite: true,
		slidesToShow: 10,
		slidesToScroll: 3,
		prevArrow: '<div class="arr-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
		nextArrow: '<div class="arr-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
		responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 8
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});

	$('.hamburger').click(function(){
		$('.menu-2').toggle();
		$('.hamburger i').toggleClass("fa-bars fa-times");
	});

	$(window).resize(function(){
		if (window.innerWidth > 992) {
			$('.menu-2').hide();
			$('.hamburger i').removeClass("fa-bars").removeClass("fa-times").addClass("fa-bars");
		}
	});


});