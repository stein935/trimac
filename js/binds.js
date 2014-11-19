$(document).ready(function(){

	$('.appsButton').click(function(){

		$('#application').fadeIn(500);
		$('#repairs').hide()

	});

	$('.repairsButton').click(function(){

		$('#repairs').fadeIn(500);
		$('#application').hide();

	});

	$('.module').click(function(){

		$('.info').fadeIn(500);

	});

	var investors = $('.investors').position().top;

	$('.investorsTab').click(function(){

		$('html, body').animate({scrollTop: investors}, '500');

	});

	var renters = $('.renters').position().top;

	$('.rentersTab').click(function(){

		$('html, body').animate({scrollTop: renters}, '500');

	});

	var about = $('.about').position().top;

	$('.aboutTab').click(function(){

		$('html, body').animate({scrollTop: about}, '500');

	});

	var contact = $('.contact').position().top;

	$('.contactTab').click(function(){

		$('html, body').animate({scrollTop: contact}, '500');

	});

	var form = $('.formScroll').height();
	console.log(form)

	$('.appsButton, .repairsButton').click(function(){

		$('html, body').animate({scrollTop: form + renters + 60}, '200');

	})

	
});







































