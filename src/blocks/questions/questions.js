pegas.questions =
{
	submit(instance)
	{
		let validator = new PegasValidator(instance);
		validator.callbacks.custom = this.customValidation;
		if(!validator.validate())
			return false;
		$(instance).hide();
		$(instance).parents('.questions').addClass('pr')
		$('.questions__title').hide();
		$('.questions__descr').hide();
		$('.success').addClass('show')
		return false;
	},
	customValidation(field)
	{
		// return true если все ок
		this.setMessage(field,'Что-то не так');
		return false;
	}
};