$(document).ready(function () {

/*
	$("html").easeScroll({
		frameRate: 60,
		animationTime: 1400,
		stepSize: 60,
		pulseAlgorithm: 1,
		pulseScale: 8,
		pulseNormalize: 1,
		accelerationDelta: 15,
		accelerationMax: 1,
		keyboardSupport: true,
		arrowScroll: 50,
		touchpadSupport: true,
		fixedBackground: true
	});*/




	});
	

	
/*	$(function () {
    var currentHash = "#home"
    $(document).scroll(function () {
        $('.section').each(function () {
            var top = window.pageYOffset;
            var distance = top - $(this).offset().top;
            var hash = $(this).attr('id');
  
            if (distance < 30 && distance > -30 && currentHash != hash) {
                window.location.hash = (hash);
                currentHash = hash;
            }
        });
    });
});*/
	
	
	
$(".ring-click").mouseover(function () {
	$(".consulting .clickhere").addClass("off");
});

	
	

	$(".hamburger").on("click", function () {
		$(this).toggleClass("is-active");
		$(".mobileNav").toggleClass("open");
	});

	$(".mobileNav a").on("click", function () {
		$(".hamburger").removeClass("is-active");
		$(".mobileNav").removeClass("open");
	});
	$(".section").on("click", function () {
		$(".hamburger").removeClass("is-active");
		$(".mobileNav").removeClass("open");
	});

	



	$('.keyTakways .owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: false,
		dots: true,
		items: 1
	});

	var owlvideo = $('.video-carousel .owl-carousel');
	owlvideo.owlCarousel({
		merge: true,
		loop: true,
		margin: 0,
		nav: true,
		video: true,
		smartSpeed: 700,
		lazyLoad: true,
		center: true,
		//mouseDrag: false,
		videoWidth: false,
		videoHeight: false,
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 1
			},
			// breakpoint from 480 up
			480: {
				items: 1
			},
			// breakpoint from 768 up
			992: {
				items: 3
			},
		},
	});

	//  AFTER SLIDE CHANGE - DO ANIMATION
	owlvideo.on('changed.owl.carousel', function (event) {
		// alert("change");
	//	debugger;
		var vidDefer = $('.owl-item.center').contents().find('iframe');

		for (var i = 0; i < vidDefer.length; i++) {
			var video = vidDefer[i].getAttribute("src");
			vidDefer[i].setAttribute("src", "");
			vidDefer[i].setAttribute("src", video);
		}
		//	var nowPlaying=$("#playVideo").find('iframe').attr('src');
		//	$("#playVideo").find('iframe').attr('src',nowPlaying+'?autoplay=1&amp;mute=1')
		$(".item-video .iframeoverlay").fadeIn();

		$(".owl-item.center iframe").attr("src", $(".owl-item.center iframe").attr("src").replace("autoplay=1", "autoplay=0"));

	});



	$(".item-video div.iframeoverlay").click(function (e) {

		$(this).fadeOut(600);
		//	$(this).siblings("iframe")[ 0 ].src += "?autoplay=1&amp;rel=0&amp;showinfo=0";
		//$(this).siblings("iframe")[0].src += "&amp;autoplay=1";
        //debugger;
		$(".owl-item.center iframe").attr("src", $(".owl-item.center iframe").attr("src").replace("autoplay=0", "autoplay=1"));
		//	alert("Hi");

		e.preventDefault();
	});


	/*	$('#sliderClick').click(function () {
	               var vidDefer = document.getElementsByTagName('iframe');
	               for (var i = 0; i < vidDefer.length; i++) {
	                   var video = vidDefer[i].getAttribute("src");
	                   vidDefer[i].setAttribute("src", "");
	                   vidDefer[i].setAttribute("src", video);
	               }
	           });*/


	owlvideo.on('translated.owl.carousel', function (event) {


		if ($(".KBYojana").closest(".owl-item").hasClass("center")) {
			$(".KBYojana").addClass("open");
		} else {
			$(".KBYojana").removeClass("open");
		}

		if ($(".nayiSoch").closest(".owl-item").hasClass("center")) {
			$(".nayiSoch").addClass("open");
		} else {
			$(".nayiSoch").removeClass("open");
		}

		if ($(".womensDay").closest(".owl-item").hasClass("center")) {
			$(".womensDay").addClass("open");
		} else {
			$(".womensDay").removeClass("open");
		}

		if ($(".mothersDay").closest(".owl-item").hasClass("center")) {
			$(".mothersDay").addClass("open");
		} else {
			$(".mothersDay").removeClass("open");
		}

		if ($(".pow").closest(".owl-item").hasClass("center")) {
			$(".pow").addClass("open");
		} else {
			$(".pow").removeClass("open");
		}

		if ($(".MMFWebsite").closest(".owl-item").hasClass("center")) {
			$(".MMFWebsite").addClass("open");
		} else {
			$(".MMFWebsite").removeClass("open");
		}

		if ($(".MMFLaunches").closest(".owl-item").hasClass("center")) {
			$(".MMFLaunches").addClass("open");
		} else {
			$(".MMFLaunches").removeClass("open");
		}

		if ($(".Swp").closest(".owl-item").hasClass("center")) {
			$(".Swp").addClass("open");
		} else {
			$(".Swp").removeClass("open");
		}
		if ($(".Bql").closest(".owl-item").hasClass("center")) {
			$(".Bql").addClass("open");
		} else {
			$(".Bql").removeClass("open");
		}

		if ($(".piramlCapital").closest(".owl-item").hasClass("center")) {
			$(".piramlCapital").addClass("open");
		} else {
			$(".piramlCapital").removeClass("open");
		}

		if ($(".Phfl").closest(".owl-item").hasClass("center")) {
			$(".Phfl").addClass("open");
		} else {
			$(".Phfl").removeClass("open");
		}

		if ($(".mGgage").closest(".owl-item").hasClass("center")) {
			$(".mGgage").addClass("open");
		} else {
			$(".mGgage").removeClass("open");
		}

		if ($(".Dhoni").closest(".owl-item").hasClass("center")) {
			$(".Dhoni").addClass("open");
		} else {
			$(".Dhoni").removeClass("open");
		}

		if ($(".JungleBook").closest(".owl-item").hasClass("center")) {
			$(".JungleBook").addClass("open");
		} else {
			$(".JungleBook").removeClass("open");
		}


		if ($(".danceplus").closest(".owl-item").hasClass("center")) {
			$(".danceplus").addClass("open");
		} else {
			$(".danceplus").removeClass("open");
		}

		if ($(".mmf-unnati").closest(".owl-item").hasClass("center")) {
			$(".mmf-unnati").addClass("open");
		} else {
			$(".mmf-unnati").removeClass("open");
		}

		if ($(".splts").closest(".owl-item").hasClass("center")) {
			$(".splts").addClass("open");
		} else {
			$(".splts").removeClass("open");
		}

		if ($(".ucypher-integrated").closest(".owl-item").hasClass("center")) {
			$(".ucypher-integrated").addClass("open");
		} else {
			$(".ucypher-integrated").removeClass("open");
		}

		if ($(".tedtalks").closest(".owl-item").hasClass("center")) {
			$(".tedtalks").addClass("open");
		} else {
			$(".tedtalks").removeClass("open");
		}
		
		if ($(".vyng").closest(".owl-item").hasClass("center")) {
			$(".vyng").addClass("open");
		} else {
			$(".vyng").removeClass("open");
		}
		
		if ($(".text-moji").closest(".owl-item").hasClass("center")) {
			$(".text-moji").addClass("open");
		} else {
			$(".text-moji").removeClass("open");
		}
		
		if ($(".ikywann").closest(".owl-item").hasClass("center")) {
			$(".ikywann").addClass("open");
		} else {
			$(".ikywann").removeClass("open");
		}
		
		if ($(".hspubh").closest(".owl-item").hasClass("center")) {
			$(".hspubh").addClass("open");
		} else {
			$(".hspubh").removeClass("open");
		}
		
		if ($(".kullfi").closest(".owl-item").hasClass("center")) {
			$(".kullfi").addClass("open");
		} else {
			$(".kullfi").removeClass("open");
		}
		
		if ($(".nachbaliye").closest(".owl-item").hasClass("center")) {
			$(".nachbaliye").addClass("open");
		} else {
			$(".nachbaliye").removeClass("open");
		}
		
		if ($(".total").closest(".owl-item").hasClass("center")) {
			$(".total").addClass("open");
		} else {
			$(".total").removeClass("open");
		}
		
		if ($(".hspubh-hotstar").closest(".owl-item").hasClass("center")) {
			$(".hspubh-hotstar").addClass("open");
		} else {
			$(".hspubh-hotstar").removeClass("open");
		}

		if ($(".2019-brand-refresh").closest(".owl-item").hasClass("center")) {
			$(".2019-brand-refresh").addClass("open");
		} else {
			$(".2019-brand-refresh").removeClass("open");
		}
		
		if ($(".mmf-blue-chip").closest(".owl-item").hasClass("center")) {
			$(".mmf-blue-chip").addClass("open");
		} else {
			$(".mmf-blue-chip").removeClass("open");
		}
		
		if ($(".kzk-integrated").closest(".owl-item").hasClass("center")) {
			$(".kzk-integrated").addClass("open");
		} else {
			$(".kzk-integrated").removeClass("open");
		}
		
		if ($(".the-voice").closest(".owl-item").hasClass("center")) {
			$(".the-voice").addClass("open");
		} else {
			$(".the-voice").removeClass("open");
		}
		
		if ($(".kulfi-missed-call").closest(".owl-item").hasClass("center")) {
			$(".kulfi-missed-call").addClass("open");
		} else {
			$(".kulfi-missed-call").removeClass("open");
		}
		
		if ($(".kzk-ar").closest(".owl-item").hasClass("center")) {
			$(".kzk-ar").addClass("open");
		} else {
			$(".kzk-ar").removeClass("open");
		}
		
		if ($(".ticket-to-ipl").closest(".owl-item").hasClass("center")) {
			$(".ticket-to-ipl").addClass("open");
		} else {
			$(".ticket-to-ipl").removeClass("open");
		}
		
		
	});


	
$(".ring-click").click(function (s) {
	$(".right-middle").removeClass("go-bottom"), $(".right-middle").removeClass("go-top"), $(".ring-wrapp").removeClass("active").css("opacity", "0.3"), $(".offering-wrapp").addClass("using"), $(this).parents(".ring-wrapp").addClass("active").css("opacity", "1"), s.preventDefault();

	var myRing = $(this).attr('data-my-element');

	$(".ecosystem").slideUp();
	$(".ecosystem-box").slideDown();

	$('.ecosystem[data-my-element = ' + myRing + ']').slideDown();

}),
	$(".bottom-center-angle .ring-click").click(function (s) {
		$(".right-middle").addClass("go-bottom"), s.preventDefault()
	}),
	$(".top-center-angle .ring-click").click(function (s) {
		$(".right-middle").addClass("go-top"), s.preventDefault()
	}),


	$(".collapsible-header").click(function (s) {

		var myRing = $(this).attr('data-my-element');

		$(".ecosystem").slideUp();
		$(".ecosystem-box").slideDown();

		$('.ecosystem[data-my-element = ' + myRing + ']').slideDown();

	});
	
		$(document).on("click", function (s) {
		
		
		
		$(s.target).closest(".ring-click").length || ($(".ring-wrapp").removeClass("active").css("opacity", "1"), $(".offering-wrapp").removeClass("using"), $(".right-middle").removeClass("go-bottom"), $(".right-middle").removeClass("go-top"))
	}), 

		
		$(".collapsible li .collapsible-header").on( 'click' , function(){
		$(".collapsible li .collapsible-body").slideUp();
		$(this).siblings(".collapsible-body").slideDown();
		
	});

	
	$('body').click(function(evt){    
      
       if($(evt.target).closest('.ring-click, .collapsible-header').length)
          return;             
        $(".ecosystem-box").slideUp();
		$(".ecosystem").slideUp();
      //Do processing of click event here for every element except with id menu_content

});


	$('.tooltip').tooltipster();




	$('.industryCarousel .owl-carousel').owlCarousel({
		loop: true,
		margin: 50,
		nav: false,
		//autoWidth:true,
		autoHeight: true,
		items: 1

	});


	$(".keyTakways").on("mouseenter", function () {
		$(".navigation").removeClass("show");
	});

	$(".keyTakways").on("click", function () {
		$(".navigation").removeClass("show");
	});


	$(".keyTakways").on("mouseleave", function () {
		$(".navigation").addClass("show");
	});


	// Chart
/*		var data = {
			labels: ['2015-16', '2016-17', '2017-18 Q3 Guidance', '2017-18 Q4 Guidance', '2018-19 Projection'],
			series: [
				[0.3, 3.2, 6.5, 7.04, 11],
			]
		};


		var options = {
			seriesBarDistance: 25,
			axisX: {
				// On the x-axis start means top and end means bottom
				position: 'end'
			},
			axisY: {
				// On the y-axis start means left and end means right
				position: 'start',
				onlyInteger: true,
				offset: 80,
				labelInterpolationFnc: function (value) {
					return value + ' CRS'
				},
				scaleMinSpace: 15
			}
		};


		var responsiveOptions = [
			['screen and (min-width: 641px) and (max-width: 1024px)', {
				seriesBarDistance: 10,
				axisX: {
					labelInterpolationFnc: function (value) {
						return value;
					}
				}
			}],

			['screen and (max-width: 640px)', {
				seriesBarDistance: 5,
				axisX: {
					labelInterpolationFnc: function (value) {
						return value;
					}
				}
			}]
		];

		new Chartist.Bar('.ct-chart', data, options, responsiveOptions);
	*/
	//Chart




	if ($(window).width() <= 1200) {

		$(".videoPlay").on("click", function () {
			$("#HomeVideo")[0].src += "&autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0";
			$(".videoOverlay").fadeOut(400);
			$(".pauseBtn").fadeOut(400);
			$(".videoPlay").fadeOut(400);
			//	alert("play");
		});


		$(".pauseBtn").on("click", function () {
			// $("#HomeVideo")[0].src += "";
			//	$("#HomeVideo").attr('src', $("#HomeVideo").attr('src'));
			//	$('#HomeVideo').get(0).stopVideo();
			$('#HomeVideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
			$(".videoOverlay").fadeIn(200);
			$(".pauseBtn").fadeOut(300);
			$(".videoPlay").fadeIn(300);
			//	alert("paused");
		});


	} else {

		function myFunction() {
			if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {

				$(".keyTakways").fadeIn(400);

			} else {

				$(".keyTakways").fadeOut(400);

			}
		}


		$(".videoPlay").on("click", function () {
			$("#HomeVideo")[0].src += "&autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0";
			$(".videoOverlay").fadeOut(400);
			$(".pauseBtn").fadeIn(400);
			$(".videoPlay").fadeOut(400);
			//	alert("play");
		});


		$(".pauseBtn").on("click", function () {
			// $("#HomeVideo")[0].src += "";
			//	$("#HomeVideo").attr('src', $("#HomeVideo").attr('src'));
			//	$('#HomeVideo').get(0).stopVideo();
			$('#HomeVideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
			$(".videoOverlay").fadeIn(200);
			$(".pauseBtn").fadeOut(300);
			$(".videoPlay").fadeIn(300);
			//	alert("paused");
		});

	}



	$('.achievement-section .owl-carousel').owlCarousel({
		loop: true,
		smartSpeed: 1500,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		dots: true,
		nav: false,
		items: 1,

	});
	/*$(".achievement-section .item").hover3d({
		selector: ".img",
		shine: false,
		perspective: 4000,
		sensitivity: 40,
	});*/




function openValue(valueName) {
    var i;
    var x = document.getElementsByClassName("value");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
//	debugger;
    
		document.getElementById(valueName).style.display = "block";  
//	var element = document.getElementById(valueName);
//    element.classList.add("active");
	switch(valueName)
			{
		case "ValueBrands":document.getElementById("brandsValue").classList.add('active');
			document.getElementById("businessValue").classList.remove("active");
			document.getElementById("consumersValue").classList.remove("active");
			document.getElementById("sparktValue").classList.remove("active");
			break;
			
		case "ValueBusiness":document.getElementById("businessValue").classList.add('active');
			document.getElementById("brandsValue").classList.remove("active");
			document.getElementById("consumersValue").classList.remove("active");
			document.getElementById("sparktValue").classList.remove("active");
			break;
			
		case "ValueConsumers":document.getElementById("consumersValue").classList.add('active');
			document.getElementById("brandsValue").classList.remove("active");
			document.getElementById("businessValue").classList.remove("active");
			document.getElementById("sparktValue").classList.remove("active");
			break;
			
		case "ValueSparkt":document.getElementById("sparktValue").classList.add('active');
			document.getElementById("brandsValue").classList.remove("active");
			document.getElementById("businessValue").classList.remove("active");
			document.getElementById("consumersValue").classList.remove("active");
			break;
			
		default:break;
			
			
	}
}



window.onscroll = function () {
	myFunction()
}

function myFunction() {
	if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {

		$(".navigation").addClass("show");

		//	$("#HomeVideo").get(0).pause();
		//			$(".videoOverlay").fadeIn(400);
		//			$(".videoPlay").addClass("paused");

		$('#HomeVideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		$(".videoOverlay").fadeIn(200);
		$(".pauseBtn").fadeOut(300);
		$(".videoPlay").fadeIn(300);

	} else {

		$(".navigation").removeClass("show");



	}
}
