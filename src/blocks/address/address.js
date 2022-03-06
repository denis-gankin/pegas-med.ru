pegas.address =
{
	coordinates:[50.258038, 127.517921],
	myMap:null,
	mapText:'г. Благовещенск, ул. Калинина, д. 4',
	chooseStreet(instance,arrayCoord)
	{
		let items = $('.address').find('._g-select__items--address');
		items.each((index,el)=>
		{
			if(index == $(instance).data('index'))
			{
				items.removeClass('active');
				$(el).addClass('active');
				$(el).find('li:first').click();
			}
		});
	},
	selecttItem(instance,arrayCoord)
	{
		pegas.address.coordinates = [];
		pegas.address.coordinates = arrayCoord;
		pegas.address.mapText = '';
		pegas.address.mapText = $(instance).text();
		$('._address__map-side-street').text($(instance).text());

		let $select = $(instance).parents('._select');
		$select.removeClass('error');
		$select.find('._option').removeClass('g-select__item--active');
		$(instance).addClass('g-select__item--active');
		let name = $(instance).text(),
			selectedValue = $(instance).data('value');

		pegas.gSelect.setName($select,name);
		pegas.gSelect.setSelectedValue($select,selectedValue);
		pegas.gSelect.close();
		pegas.address.myMap.setCenter(pegas.address.coordinates);
		pegas.address.addPlacemarks();
	},
	init()
	{
		ymaps.ready(this.initYamap);
	},
	initYamap()
	{
		if(!$('#yamap')) return;
		pegas.address.myMap = new ymaps.Map('yamap', {
			center: [50.258038, 127.517921],
			zoom: 18
		});
		pegas.address.addPlacemarks();
	},
	addPlacemarks()
	{
		pegas.address.myMap.geoObjects.add(new ymaps.Placemark(pegas.address.coordinates, {
			iconCaption: pegas.address.mapText
		}, {
			preset: 'islands#icon',//удалить
			iconColor: '#FF00FF',
			// iconImageHref: 'images/myIcon.gif'//кастомная картинка
		}));
	}
};