pegas.partners =
{
	initSlider()
	{
		$('.partners__slider').owlCarousel({
			loop:false,
			items:4,
			margin:90,
			nav:true,
			dots:false,
			navText: ["<img class='reviews-arr reviews-prev' src='img/prev.png'>","<img class='reviews-arr reviews-next' src='img/next.png'>"],
			responsive:{
				0:{
					items:3
				},
				1200:{
					items:4
				},
			}
		});
	}
}