pegas.reviews =
{
	open(instance, tabId)
	{
		this.activateTab(instance);
		const $tabsContainer = $(instance).closest('._tabs-container');
		$tabsContainer.find("[data-tab]").removeClass('open');
		$tabsContainer.find(`[data-tab="${tabId}"]`).addClass('open');
	},
	activateTab(activeTab)
	{
		$(activeTab).siblings('._tab').removeClass('active');
		$(activeTab).addClass('active');
	},
	initSlider()
	{
		$('.reviews__video').owlCarousel({
			loop:false,
			margin:30,
			nav:true,
			dotsEach:true,
			navText: ["<img class='reviews-arr reviews-prev' src='img/prev.png'>","<img class='reviews-arr reviews-next' src='img/next.png'>"],
			responsive:{
				0:{
					items:1
				},
				1200:{
					items:2
				},
				1760:{
					items:3
				}
			}
		});
		$('.reviews__audio').owlCarousel({
			loop:false,
			items:4,
			margin:30,
			nav:true,
			dotsEach:true,
			navText: ["<img class='reviews-arr reviews-prev' src='img/prev.png'>","<img class='reviews-arr reviews-next' src='img/next.png'>"]
		});
		$('.reviews__clients').owlCarousel({
			loop:false,
			margin:35,
			nav:true,
			dotsEach:true,
			navText: ["<img class='reviews-arr reviews-prev' src='img/prev.png'>","<img class='reviews-arr reviews-next' src='img/next.png'>"],
			responsive:{
				0:{
					items:1
				},
				1083:{
					items:2
				},
				1400:{
					items:3
				}
			}
		});

	},
	outListener:false,
	show(contentClass,instance)
	{
		this.removeListner();
		let popupHtml = $(`.${contentClass}`).html();
		$('._overlay').addClass('open').html(popupHtml);
		$('body').css({overflow:'hidden'});
		this.setEscEvent();
		let $popup = $('._overlay').find('._popup-content');
		$popup.each((index,el)=>
		{
			if($(instance).data('index') == index)
			{
				$('._overlay').find('._popup-content').removeClass('active');
				$(el).addClass('active');
			}
		});
		let self = this;
		setTimeout(function()
		{
			self.outListener = pegas.clickOutside($popup, () =>
			{
				self.close();
			});
		},10);
	},
	close()
	{
		$('._overlay').removeClass('open');
		$('body').css({overflow:'auto'});
		this.removeListner();
	},
	removeListner()
	{
		if(this.outListener)
			document.removeEventListener('click', this.outListener);
		this.outListener = false
	},
	escEvent:false,
	setEscEvent()
	{
		if(this.escEvent) return false;
		let self = this;
		document.onkeydown = function(evt)
		{
			evt = evt || window.event;
			if (evt.keyCode == 27)
				self.close();
		};
		this.escEvent = true;
	},
};