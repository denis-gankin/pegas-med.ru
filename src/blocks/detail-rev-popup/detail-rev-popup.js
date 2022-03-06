pegas.detailRevPopup =
{
	submit(instance)
	{
		let validator = new PegasValidator(instance);
		validator.callbacks.email = this.email;
		validator.callbacks.selector = this.selector;
		if(!validator.validate())
		{
			$('.error-message').show();
			return false;
		}
		$('.error-message').hide();
		$(instance).hide();
		// $(instance).parents('.questions').addClass('pr')
		$('.detail-rev-popup__content-title').hide();
		// $('.questions__descr').hide();
		$('.success').addClass('show')
		return false;
	},
	email(field)
	{
		let $input = $(field).find('input');
		const regex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
		if(regex.test($input.val()))
			return true;
		this.setMessage(field,'майл введен не корректно');
		return false;
	},
	selector(field)
	{
		let $input = $(field).find('.g-select__selected-name');
		if($input.text() != 'Ваш пол')
			return true;
		this.setMessage(field,'майл введен не корректно');
		return false;
	}
};