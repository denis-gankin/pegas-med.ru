pegas.catalogSidebar =
{
	toggle(instance)
	{
		$(instance).next('.catalog-sidebar__toggle').slideToggle(200);
		$(instance).toggleClass('opened');
	}
};