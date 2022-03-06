pegas.detailInformation =
{
	counter:1,
	add(instance)
	{
		pegas.detailInformation.counter = parseInt($(instance).parent('._info-count').find('._count').text());
		pegas.detailInformation.counter++;
		// console.log(pegas.detailInformation.counter);
		$(instance).parent('._info-count').find('._count').text(pegas.detailInformation.counter);
		pegas.cart.calculateSumm(instance);
	},
	remove(instance)
	{
		pegas.detailInformation.counter = parseInt($(instance).parent('._info-count').find('._count').text());
		if(pegas.detailInformation.counter <=1)
			pegas.detailInformation.counter == 1;
		else
			pegas.detailInformation.counter--;
		$(instance).parent('._info-count').find('._count').text(pegas.detailInformation.counter);
		pegas.cart.calculateSumm(instance)
	}
};