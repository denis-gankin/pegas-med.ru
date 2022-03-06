pegas.catalogBannerSlider =
{
	init()
	{
		$('.catalog-banner-slider').owlCarousel({
			items:1,
			loop:true,
			margin:0,
			nav:true,
			dots:true,
			dotsEach:true,
			navText: ["<img class='reviews-arr reviews-prev' src='img/prev.png'>","<img class='reviews-arr reviews-next' src='img/next.png'>"],
		});
	}
}