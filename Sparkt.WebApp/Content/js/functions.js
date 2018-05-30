$(function () {



	$(".hamburger").on('click', function () {
		$(this).toggleClass("open");
		$(".main-menu").toggleClass("open");
		
		//TweenMax.set(".video-overlay", {opacity: 0.8});
		
	});

	$(".main-menu > ul > li ").hover(function () {


		//  alert();
		$(this).toggleClass("active-submenu");
		$(this).children(".sub-nav").slideToggle();
	});

	$(window).scroll(function () {
		$(".hamburger").removeClass("open");
		$(".main-menu").removeClass("open");
	});



	$('.tooltip')
		.tooltipster({
			animation: 'grow',
			maxWidth: 220,
			delay: 0,
			theme: 'tooltipster-punk',
			//trigger: 'click'
		});

	$('#contact-tab').tabs({
		// swipeable:true,
		responsiveThreshold: true

	});
	
	
	
	$(window).on("load",function(){
            $(".scroll-content").mCustomScrollbar({
				scrollInertia:0,
				scrollbarPosition: "outside",
				autoHideScrollbar:true,
				autoExpandScrollbar:"Enable",
				theme: "rounded"
			});
        });


  $("#button").click(function(e) {
	  
    $("#button").addClass("onclic", 250, validate);
	  
	  e.preventDefault();
	 
	  
  });

  function validate() {
    setTimeout(function() {
      $("#button").addClass("onclic");
      $("#button").addClass("validate", 450, callback);
    }, 2250);
  }
	
  function callback() {
    setTimeout(function() {
      $("#button").removeClass("validate");
    }, 1250);
  }	
	
	
	
	
	
	navHashScroll();
	$(window).resize(function () {

		navHashScroll();

	});	
	
		function navHashScroll() {
		if ($(window).width() > 500) {

		$(window).on("load", function () {
		$(".hashScroll").mPageScroll2id({
			scrollSpeed: 1800,
			scrollEasing: "easeInOutQuint",
			scrollingEasing: "easeOutQuint",
			pageEndSmoothScroll: true,
			autoScrollSpeed: true,
			forceSingleHighlight: true,
			keepHighlightUntilNext: true,
			highlightByNextTarget: true,
			appendHash: true,
			targetClass: "active-section",
			highlightClass: "active-menu"

		});
	});

		}else{
			
			
					$(window).on("load", function () {
		$(".hashScroll").mPageScroll2id({
			scrollSpeed: 1800,
			offset:72,
			scrollEasing: "easeInOutQuint",
			scrollingEasing: "easeOutQuint",
			pageEndSmoothScroll: true,
			autoScrollSpeed: true,
			forceSingleHighlight: true,
			keepHighlightUntilNext: true,
			highlightByNextTarget: true,
			appendHash: true,
			targetClass: "active-section",
			highlightClass: "active-menu"

		});
	});
			
		}

	}


	



	$('select').material_select();

	$('.parallax').parallax();


	$('.tabsAccordion').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion           
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		closed: 'accordion', // Start closed if in accordion view
		activate: function (event) { // Callback function if tab is switched
			var $tab = $(this);
			var $info = $('#tabInfo');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});


	function fallback(video) {
		var img = video.querySelector('img');
		if (img)
			video.parentNode.replaceChild(img, video);
	}


	handlenav();
	$(window).resize(function () {

		handlenav();

	});

	function handlenav() {
		if ($(window).width() > 1200) {

			$('.background-video .bg-video').backgroundVideo({
				$videoWrap: $('.background-video'),
				$outerWrap: $(window),
				$window: $(window),
				minimumVideoWidth: 400,
				// preventContext<a href='https://www.jqueryscript.net/menu/'>Menu</a>: false,
				parallax: true,
				parallaxOptions: {
					effect: 1.7
				},
				pauseVideoOnViewLoss: true
			});

		}

	}



	$(".enter").click(function () {

		$('.bg-video')[0].play();
		//alert();
	});

	
	

	document.querySelectorAll('.ellipsify').forEach(function (elem) {
		if (parseFloat(window.getComputedStyle(elem).width) === parseFloat(window.getComputedStyle(elem.parentElement).width)) {
			elem.setAttribute('title', elem.textContent);
		}
	});

	var controller = new ScrollMagic.Controller();

	var parallaxTL = new TimelineMax();

	parallaxTL
		.from('.video-overlay', 1, {
			autoAlpha: 0.3,
			ease: Power0.easeNone
		}, 1)
		//.from('.parallax_bg', 2, { y:'-40%', ease:Power0.easeNone}, 0)
	;

	var parallaxScene = new ScrollMagic.Scene({
			triggerElement: '.background-video',
			duration: '100%',
			triggerHook: 0.5
		})
		.setTween(parallaxTL)
		.addTo(controller);

	//  $(".section")
	//        .each(function () {
	//            var fadeScene2 = new ScrollMagic.Scene({
	//                    triggerElement: this,
	//                    triggerHook: '0.40',
	//                    duration: '90%', // animation in-out in viewport area,
	//                    //	reverse:false, // animat only once.  (when reverse false you cant use "duration" )
	//                })
	//                .setClassToggle(this, 'in-view')
	//                //.addIndicators()// showing indicator	
	//                .addTo(controller);
	//        });

	$(".white-bg").each(function () {
		var lightbg = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: '0.14',
				duration: '83%', // animation in-out in viewport area,
				//	reverse:false, // animat only once.  (when reverse false you cant use "duration" )
			})
			.setClassToggle(".sparkt-logo", 'reverse-logo')
			.setClassToggle("body", 'light-area')
			//.addIndicators()// showing indicator	
			.addTo(controller);
	});


	
   var mySwiper = new Swiper ('.culture-slider', {
    // Optional parameters
       direction: 'vertical',
	   autoHeight: true, 
	   hashNavigation: {
        watchState: true,
      },

	  speed: 900,
	  effect: 'cube',
      grabCursor: false,
      cubeEffect: {
        shadow: true,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
	
	
	
mySwiper.on('slideChange', function () {
  	SynccarouselData();
	
});
	
   var SynccarouselData=function(){
	  var SyncData= $('.culture-slider .swiper-wrapper .swiper-slide').attr('data-hash');
	   
	  $('.cultuer-title-nav a').removeClass('active');
	   $('.cultuer-title-nav a').each(function(){
		   var DataId=$(this).attr('data-id');
		  
		   if(DataId==SyncData)
			   {
				   $(this).addClass('active');
			   }
	   });
   }	

   
  $('.cultuer-title-nav > a').on('click', function(){
	 
    $('.cultuer-title-nav > a').removeClass('active');
	 $(this).addClass('active');


 });
   	
	

   var mySwiper2 = new Swiper ('.culture-inner-slider', {

	 //  slidesPerView: 1,
	   speed: 1200,
	    pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
      },
	   autoHeight: true, 
	   autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
	  // centeredSlides: true,
  

  //  loop: true,

  });
	
	
	
   var accoladesSlider = new Swiper ('.accolades-slider', {

	 //  slidesPerView: 1,
	   speed: 1200,
	    pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
      },
	   autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
	  // centeredSlides: true,
       loop: true,

  //  loop: true,

  });




	var parallaxTable = new TimelineMax();

	parallaxTable.from('.sparkt-table > img', 1, {
		y: '-50%',
		ease: Power0.easeNone
	}, 1);

	var parallaxScene = new ScrollMagic.Scene({
			triggerElement: '#we',
			duration: '100%',
			triggerHook: 0.8
		})
		.setTween(parallaxTable)
		.addTo(controller);



	var parallaxTableShadow = new TimelineMax();
	parallaxTableShadow.from('.table-shaddow', 1, {
		autoAlpha: 0,
		scaleX: 1.5,
		ease: Power0.easeNone
	}, 1);

	var parallaxScene = new ScrollMagic.Scene({
			triggerElement: '#we',
			duration: '100%',
			triggerHook: 0.8
		})
		.setTween(parallaxTableShadow)
		.addTo(controller);



	$(".section-title").each(function () {
		var pinTitle = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 0.03,
				duration: '140%'
					//	reverse:false, // animat only once.  (when reverse false you cant use "duration" )
			})
			.setPin(this, {
				pushFollowers: true
			})
			//	.setClassToggle( this , 'active-section' )
			.addTo(controller);
	});

	//$(".section-title").each(function(){
	//var pinTitleFade = new ScrollMagic.Scene({
	//		triggerElement: this,
	//		triggerHook: 0.01,
	//		duration:'80%'
	//	//	reverse:false, // animat only once.  (when reverse false you cant use "duration" )
	//	})	
	//	//.setPin( this , { pushFollowers:true })
	//	.setClassToggle( this , 'active-section' )
	//	.addTo(controller);
	//});	


	$(".squad-wrapp figure").each(function () {
		var ProfileUnderline = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 0.7,
				duration: '100%'
					//	reverse:false, // animat only once.  (when reverse false you cant use "duration" )
			})
			//.setPin( this , { pushFollowers:true })
			.setClassToggle(this, 'underline')
			.addTo(controller);
	});



	var pinIntroScene = new ScrollMagic.Scene({
			triggerElement: '.work-tab > .resp-tabs-list',
			triggerHook: .0,
			//duration:'50%'
		})
		.setPin('.work-tab > .resp-tabs-list', {
			pushFollowers: true
		})
		.addTo(controller);
	
	
	

	
	
	var headerBg = new TimelineMax();

	headerBg.to('header', 1, { backgroundColor: 'rgba(0,24,45,1)',  boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)", ease: Power0.easeNone }, 1);

	var parallaxScene = new ScrollMagic.Scene({
			triggerElement: 'body',
			duration: '40%',
			triggerHook: 0.1
		})
		.setTween(headerBg)
		.addTo(controller);



	
	
	
	
	
});
