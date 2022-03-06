pegas.gSelect =
{
	outListeners: [],

	open($select)
	{
		this.close();
		$($select).addClass('g-select--opened');
		let listner = pegas.clickOutside($($select), () => {
			this.close();
		});
		this.outListeners.push(listner);
	},

	close()
	{
		$('._select').removeClass('g-select--opened');
		for(let listner of this.outListeners)
			document.removeEventListener('click', listner);
		this.outListeners = [];
	},

	toggle(instance)
	{
		let $select = $(instance).parents('._select')
		if (!$select.hasClass('g-select--opened'))
			this.open($select);
		else
			this.close();
	},

	setName($select,name)
	{
		$select.find('._selected-text').html(name);
	},

	setSelectedValue($select,selectedValue)
	{
		$select.find('._selected-value').val(selectedValue);
	},

	selecttItem(instance)
	{
		let $select = $(instance).parents('._select');
		$select.removeClass('error');
		$select.find('._option').removeClass('g-select__item--active');
		$(instance).addClass('g-select__item--active');
		let name = $(instance).text(),
			selectedValue = $(instance).data('value');

		this.setName($select,name);
		this.setSelectedValue($select,selectedValue);
		this.close();
	},
	selecttItemPhone(instance)
	{
		let $select = $(instance).parents('._select');
		$('._header__item-link-phone').text($(instance).data('phone'));
		$select.removeClass('error');
		$select.find('._option').removeClass('g-select__item--active');
		$(instance).addClass('g-select__item--active');
		let name = $(instance).text(),
			selectedValue = $(instance).data('value');

		this.setName($select,name);
		this.setSelectedValue($select,selectedValue);
		this.close();
	}
};