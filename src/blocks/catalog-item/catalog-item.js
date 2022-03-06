pegas.catalogItem=
{
	add(instance)
	{
		$(instance).toggleClass('show');
	},
	open(contentClass,instance)
	{
		pegas.gPopup.removeListner();
		let popupHtml = $(`.${contentClass}`).html();
		let catalogItem = $('.catalog-item-popup');
		let currentImage = $(instance).parents('.catalog-item').find('.catalog-item__head img')
		$('._overlay').addClass('open').html(popupHtml);
		$('body').css({overflow:'hidden'});
		$('html').css({overflow:'hidden'});
		// catalogItem.find('._catalog-item-popup__img').src = "img/cataalog-image.png"
		catalogItem.find('._catalog-item-popup__img').attr('src',currentImage.attr('src'))
		pegas.gPopup.setEscEvent();

		let $popup = $('._overlay').find('._popup-content')
		pegas.innputMask();
		setTimeout(function()
		{
			pegas.gPopup.outListener = pegas.clickOutside($popup, () => {
				pegas.gPopup.close();
			});
		},10);
	},
};