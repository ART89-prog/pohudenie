// Маска ввода
$(() => {
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')



	$('.information_box-right a').click(function(event) {
		event.preventDefault();
		$('.information_block').css('display', 'block');
	});

	$(".information_box-right a").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({ scrollTop: destination }, 600);
		return false;
	});


})


