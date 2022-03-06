pegas.cart =
{
	summ:0,
	totalSumm: 0,
	calculateSumm(element)
	{
		// let count = $(element).parents('.cart__table-body').find('._count').text();
		// let price = $(element).parents('.cart__table-body').find('._price').text();
		// let summ = $(element).parents('.cart__table-body').find('._summ');

		let count = 0;
		let price = 0;
		let summ = 0;

		$('.cart__table-body').each(function() 
		{
			count++;
			var sum = $(this).find('._count').text().replace(/\D/g,'') * $(this).find('._price').text().replace(/\D/g,'');
			$(this).find('._summ').text(pegas.maskValue(sum));
			summ+= sum;
		});

		$('._total-price').text(pegas.maskValue(summ));
		$('.cart__descr span').text(count);

		if(!count)
			$('.order._tabs-container').remove();

		// let summArray = Array.prototype.slice.call($('._summ'));
		// pegas.cart.summ = count * +price.replace(/\D/g,'');
		// summ.text(pegas.maskValue(pegas.cart.summ));
		// pegas.cart.totalSumm = summArray.reduce((a,b)=>(+$(a).text().replace(/\D/g,'') + +$(b).text().replace(/\D/g,'')));
		// $('._total-price').text(pegas.maskValue(pegas.cart.totalSumm));
	},
	remove(element)
	{
		element.closest('.cart__table-body').remove();
		pegas.cart.calculateSumm();
	}
};