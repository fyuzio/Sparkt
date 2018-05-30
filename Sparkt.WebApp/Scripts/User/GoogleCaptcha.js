
var recaptcha1;

var myCallBack = function () {
	//Render the recaptcha1 on the element with ID "recaptcha1"
	recaptcha1 = grecaptcha.render('recaptcha1', {
        'sitekey': '6LfSVlwUAAAAACV9ETt_U_QhFVTziuCZJiVirM9r', //Replace this with your Site key
		'theme': 'light'
	});
	
};