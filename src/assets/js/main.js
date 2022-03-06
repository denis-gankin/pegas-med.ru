"use strict";
/**
 * инициализация всех инициализаций
 */
$(document).ready(function()
{
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', './style.css?' + Date.now()) );
});

$(window).on("load", function (e)
{
	pegas.init();
});

/**
 * основной объект
 */
const pegas =
{
	/**
	 * вызов функций, которые должны запускаться при загрузке страницы
	 */
	init()
	{
		this.reviews.initSlider();
		this.partners.initSlider();
		this.address.init();
		this.innputMask();
		// this.customScrokll();
		this.catalogBannerSlider.init();

		audiojs.events.ready(function() {
	        var as = audiojs.createAll();
	    });
	},
	/**
	* отслеживание клика вне блока
	*/
	customScrokll()
	{
		$('textarea').jScrollPane({ //На какой элемент задаем прокрутку
			showArrows: false //показать стрелки
		});
	},
	clickOutside(element, callback)
	{
		const outsideChecker = (event) =>
		{
			const container = $(element);

			if (!container.is(event.target) && container.has(event.target).length === 0)
			{
				document.removeEventListener('click', outsideChecker);
				callback();
			}
		};

		document.addEventListener('click', outsideChecker);

		return outsideChecker;
	},
	innputMask()
	{
		$('._phone-mask').mask('+7(999)999-99-99',{autoclear: false});
	},
	maskValue: val => (val+'').replace(/\D/g,'').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,'$1 '),
};