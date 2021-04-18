$(document).ready(function () {
	$('.bxslider').bxSlider({
		controls: false,
		randomStart: false,
		auto: true
	});

	var owl = $("#owl-slider");
	owl.owlCarousel({
		itemsCustom: [
			[0, 2],
			[320, 2],
			[450, 3],
			[600, 4],
			[700, 4],
			[1000, 6]
		],
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		navigation: false
	});

	$('.comments-list').bxSlider({
		pager: false
	});


	$(".header .nav-btn").on('click', function () {
		if ($(window).width() < 600) {
			$(".header .main-nav").toggleClass("main-nav-mobile");
		}
	});
});