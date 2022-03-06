pegas.gPopup =
{
	outListener:false,
	open(contentClass)
	{
		this.removeListner();
		let popupHtml = $(`.${contentClass}`).html();
		$('._overlay').addClass('open').html(popupHtml);
		$('body').css({overflow:'hidden'});
		$('html').css({overflow:'hidden'});
		this.setEscEvent();

		let $popup = $('._overlay').find('._popup-content')
		let self = this;
		pegas.innputMask();
		setTimeout(function()
		{
			self.outListener = pegas.clickOutside($popup, () => {
				self.close();
			});
		},10);
	},
	close()
	{
		$('._overlay').removeClass('open');
		$('body').css({overflow:'auto'});
		$('html').css({overflow:'auto'});
		$('.success').removeClass('show');
		$('.questions__title').show();
		$('.questions__descr').show();
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
}