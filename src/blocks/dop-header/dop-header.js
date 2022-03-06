pegas.dopHeader=
{
	openFinder(instance)
	{
		let $innerElement = $(instance).find('.header__item-label-inner');
		$innerElement.addClass('show');
		setTimeout(()=>
		{
			pegas.clickOutside($innerElement,()=>{$innerElement.removeClass('show')});
		},0);
	}
};