document.addEventListener("DOMContentLoaded", function () {
	$('.preloader-background').delay(1700).fadeOut('slow');

	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});

var recaptcha1;
var recaptcha2;
var recaptcha3;
var recaptcha4;
var myCallBack = function () {
	//Render the recaptcha1 on the element with ID "recaptcha1"
	recaptcha1 = grecaptcha.render('recaptcha1', {
		'sitekey': '6Lf3QiwUAAAAAATX5iNiCRoqxT4nZwHRcvjZnzku', //Replace this with your Site key
		'theme': 'light'
	});
	if ($('#recaptcha2').length > 0) {
		//Render the recaptcha2 on the element with ID "recaptcha2"
		recaptcha2 = grecaptcha.render('recaptcha2', {
			'sitekey': '6Lf3QiwUAAAAAATX5iNiCRoqxT4nZwHRcvjZnzku', //Replace this with your Site key
			'theme': 'light'
		});
	}
	if ($('#recaptcha3').length > 0) {
		//Render the recaptcha2 on the element with ID "recaptcha2"
		recaptcha3 = grecaptcha.render('recaptcha3', {
			'sitekey': '6Lf3QiwUAAAAAATX5iNiCRoqxT4nZwHRcvjZnzku', //Replace this with your Site key
			'theme': 'light'
		});
	}

	if ($('#recaptcha4').length > 0) {
		recaptcha4 = grecaptcha.render('recaptcha4', {
			'sitekey': '6Lf3QiwUAAAAAATX5iNiCRoqxT4nZwHRcvjZnzku', //Replace this with your Site key
			'theme': 'light'
		});
	}
};