// Маска ввода
$(() => {
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')



	$('.information_box-right a').click(function(event) {
		event.preventDefault();
		$('.information_block2').css('display', 'block');
	});


})


