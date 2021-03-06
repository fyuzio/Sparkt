$(function () {
    /*work-banner-video*/
    /*	new MediaElementPlayer('player1', {
    		features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen', 'airplay'],
    	});
    	*/
    $(".hamburger")
        .on('click', function () {
            $(this)
                .toggleClass("open");
            $(".main-menu")
                .toggleClass("open");
        });
    $(window)
        .scroll(function () {
            $(".hamburger")
                .removeClass("open");
            $(".main-menu")
                .removeClass("open");
        });
    $(window).on("load", function () {
        $(".scroll-content").mCustomScrollbar({
            scrollInertia: 0,
            scrollbarPosition: "outside",
            autoHideScrollbar: !0,
            autoExpandScrollbar: "Enable",
            theme: "rounded"
        });

        $(".horizontalScroll").mCustomScrollbar({
            axis: "x",
            theme: "minimal-dark",
            advanced: { autoExpandHorizontalScroll: true },
            mouseWheel: { enable: true, axis: "x", preventDefault: true, invert: true }

        });
    }); var videos = $('.bannerplayer')
        .mediaelementplayer({
            success: function (media) {
                $(media)
                    .bind('play', function () {
                        $.each(videos, function (k, v) {
                            if (v !== media) {
                                v.pause();
                                //	alert("Play")
                                $('body')
                                    .addClass("playing-video");
                                $(".mejs__overlay-button")
                                    .removeClass("mejs__overlay-loading-bg-img");
                            }
                        });
                    });
                $(media)
                    .bind('pause', function () {
                        $.each(videos, function (k, v) {
                            $('body')
                                .removeClass("playing-video")
                            //	alert("Pause")
                        });
                    });
            }
        });
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onEnter",
            duration: "200%"
        }
    });
    // build scenes
    new ScrollMagic.Scene({
        triggerElement: "#parallax1"
    })
        .setTween("#parallax1 > .parallax", {
            y: "50%",
            ease: Linear.easeNone
        })
        //.addIndicators()
        .addTo(controller);
    /*work-banner-video*/
    $(window)
        .scroll(function () {
            var height = $(window)
                .scrollTop();
            if (height > 100) {
                $("body")
                    .addClass("hide-clients-nav");
                $('.banner-video video')
                    .each(function () {
                        this.player.pause()
                    }); // Safe.
                $(".client-works")
                    .slideUp();
                $(".work-with-clients li")
                    .removeClass("active");
                $(".awards-wrap")
                    .removeClass("hide-awards");
            }
            else {
                $("body")
                    .removeClass("hide-clients-nav");
            }
        });
    $(".work-with-clients li a")
        .on('click', function () {
            $(".work-with-clients li")
                .removeClass("active");
            $(this)
                .parent("li")
                .addClass("active");
            $(".client-works")
                .slideDown();
            $(".awards-wrap")
                .addClass("hide-awards");
        });
    $(".work-with-clients li a")
        .on("click", function (e) {
            e.preventDefault();
            var id = $(this)
                .attr('data-related');
            $(".client-works ul")
                .each(function () {
                    $(this)
                        .hide();
                    if ($(this)
                        .attr('id') == id) {
                        $(this)
                            .show();
                    }
                });
        });
    $('body')
        .click(function (evt) {
            if (evt.target.id == "work-navigation") return;
            //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
            if ($(evt.target)
                .closest('#work-navigation')
                .length) return;
            $(".client-works")
                .slideUp();
            $(".awards-wrap")
                .removeClass("hide-awards");
            $(".work-with-clients li")
                .removeClass("active");
            //	$(".work-with-clients li a").removeClass("active");
            // alert("Clicked");
        });
    $(".assets-carousel > .slider")
        .slick({
            // normal options...
            infinite: false,
            swipe: false,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            speed: 1400,
            // fade: true,
            // cssEase: 'linear'

        });
    $('.video-carousel .video-slider')
        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.video-carousel  .video-nav'
        });
    $('.video-carousel .video-nav')
        .slick({
            slidesToShow: 5,
            infinite: false,
            slidesToScroll: 2,
            asNavFor: '.video-carousel .video-slider',
            centerMode: false,
            focusOnSelect: true,
            arrows: true,
            dots: false,

            responsive: [{
                breakpoint: 1920,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    slidesToScroll: 1,

                }
            }, {
                breakpoint: 500,

                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    slidesToScroll: 1,

                }
            }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    $('.mobile-style-carousel .video-slider')
        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            speed: 400,
            fade: true,
            asNavFor: '.mobile-style-carousel .video-nav'
        });

    $('.mobile-style-carousel .video-nav')
        .slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.mobile-style-carousel .video-slider',
            centerMode: true,
            focusOnSelect: true,
            adaptiveHeight: true,
            arrows: true,
            dots: false,
            responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });



    $('.sparkt-carousel .video-slider')
        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            speed: 400,
            fade: true,
            asNavFor: '.sparkt-carousel .video-nav'
        });

    $('.sparkt-carousel .video-nav')
        .slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.sparkt-carousel .video-slider',
            centerMode: false,
            infinite: true,
            focusOnSelect: true,
            adaptiveHeight: true,
            arrows: true,
            dots: false,
            responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 500,
                settings: {
                    centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

    $('.result-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1200,
    });


    $('.tooltip')
        .tooltipster({
            animation: 'grow',
            maxWidth: 220,
            delay: 0,
            theme: 'tooltipster-punk',
            //trigger: 'click'
        });
    var videos1 = $('.video-item video')
        .mediaelementplayer({
            pauseOtherPlayers: false,
            success: function (media1) {
                $(media1)
                    .bind('play', function () {
                        $.each(videos1, function (k, v) {
                            if (v !== media1) {
                                v.pause();
                                //	alert("Play")
                                $(".mejs__overlay-button")
                                    .removeClass("mejs__overlay-loading-bg-img");
                            }
                        });
                    });
                $(media1)
                    .bind('pause', function () {
                        $.each(videos1, function (k, v) {
                            //	alert("Pause")
                        });
                    });
            }
        });
    $('.video-nav a')
        .click(function (event) {
            //alert("Hi");
            $('.video-item video')
                .each(function () {
                    this.player.pause()
                });
            $('.video-slider')
                .on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    $('.slick-current.slick-active .video-slider .slick-current video')
                        .each(function () {
                            $(".video-slider .slick-current .mejs__overlay-button")
                                .addClass("mejs__overlay-loading-bg-img");
                            this.player.play();
                        });
                });
            event.preventDefault();
            //other code...
        });
    $('.slick-slider')
        .on('click', '.slick-next', function () {
            $('.video-item video')
                .each(function () {
                    this.player.pause()
                });
        });
    $('.slick-slider')
        .on('click', '.slick-prev', function () {
            $('.video-item video')
                .each(function () {
                    this.player.pause()
                });
        });
    $('.slick-slider')
        .on('swipe', function (event, slick, direction) {
            $('.video-item video')
                .each(function () {
                    this.player.pause()
                });
        });
    $(".mejs__overlay-play")
        .click(function () {
            //alert("hi");
            $(this)
                .children(".mejs__overlay-button")
                .addClass("mejs__overlay-loading-bg-img");
        });
    $(".project")
        .hover3d({
            selector: ".project__card",
            perspective: 5000,
            sensitivity: 50,
        });
    $('.autoplay-video')
        .mediaelementplayer({
            plugins: ['flash', 'silverlight'],
            success: function (mediaElement, domObject) {
                if (mediaElement.pluginType == 'flash') {
                    mediaElement.addEventListener('canplay', function () {
                        // Player is ready
                        mediaElement.play();
                    }, false);
                }
            },
            error: function () {
                alert('Error setting media!');
            }
        });
    $('.three-img-carousel')
        .slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            dots: true,
            arrows: false,
        });
    $('.single-video-carousel')
        .slick({
            infinite: true,
            autoplay: false,
            //  autoplaySpeed: 3000,
            speed: 500,
            dots: true,
            arrows: false,
        });
    /*$('.single-video-carousel').on( 'afterChange', function ( event, slick, currentSlide, nextSlide ) {
    		//	console.log( nextSlide );
    			//alert("Change");
    		$('.single-video-carousel video').each(function() { this.player.pause(); }); // Sa;e.	
    	

    });			
    	*/
    var controller = new ScrollMagic.Controller();
    $(".section")
        .each(function () {
            var fadeScene2 = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: '0.40',
                duration: '90%', // animation in-out in viewport area,
                //	reverse:false, // animat only once.  (when reverse false you cant use "duration" )
            })
                .setClassToggle(this, 'in-view')
                //.addIndicators()// showing indicator	
                .addTo(controller);
        });
    $(".white-bg")
        .each(function () {
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
    $('.slickSlider-3d .slickSlider')
        .slick({
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 5,
            arrows: true,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    //  arrows: false,
                    //     centerMode: true,
                    //   centerPadding: '0',
                    slidesToShow: 3
                }
            }, {
                breakpoint: 824,
                settings: {
                    //    arrows: false,
                    //  centerMode: true,
                    //   centerPadding: '0',
                    slidesToShow: 1
                }
            }]
        });
    $('.slickSlider-3d .slickSlider')
        .on('afterChange', function (event, slick, currentSlide, nextSlide) {
            //	console.log( nextSlide );
            //alert("Change");
            $('.slickSlider-3d .slickSlider video')
                .trigger('pause');
            $($(".slickSlider .slick-track .slick-center.slick-active")[0])
                .find('video')
                .get(0)
                .play();
        });


    $('.lightgallery-single').lightGallery({
        download: false,
        // speed:800,
        thumbnail: false,
        zoom: false,
        backdropDuration: 600,
        controls: false,
        slideEndAnimatoin: true,
        autoplayControls: false,
        actualSize: false,
        mode: 'lg-lollipop',
        // videoMaxWidth:900,
        autoplayFirstVideo: true,
        youtubePlayerParams: { modestbranding: 0, showinfo: 0, controls: 1, frameborder: 0, rel: 0 }
        // enableDrag:false,

    });


    $('.lightgallery').lightGallery({
        download: false,
        // speed:800,
        zoom: false,
        backdropDuration: 600,
        actualSize: false,
        mode: 'lg-lollipop',
        // videoMaxWidth:900,
        autoplayFirstVideo: true,
        youtubePlayerParams: { modestbranding: 0, showinfo: 0, controls: 1, frameborder: 0, rel: 0 }
        // enableDrag:false,

    });

    $('.video-nav-gallery .slick-track').lightGallery({
        download: false,
        // speed:800,
        zoom: false,
        backdropDuration: 600,
        actualSize: false,
        mode: 'lg-lollipop',
        // videoMaxWidth:900,
        autoplayFirstVideo: true,
        youtubePlayerParams: { modestbranding: 0, showinfo: 0, controls: 1, frameborder: 0, rel: 0 }
        // enableDrag:false,

    });


    var movementStrength = 45;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $(".hover-mover").mousemove(function (e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('.hover-mover').css("background-position", newvalueX + "px     " + newvalueY + "px");
    });

    try {
        var mySwiper = new Swiper('.vyng-slider .swiper-container', {
            spaceBetween: 0,
            speed: 1000,
            effect: 'coverflow',
            grabCursor: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: '.vyng-slider .swiper-pagination',
                clickable: true,
            },
        });
        mySwiper.on('slideChange', function () {

            $('.swiper-slide video').trigger('pause');

        });

        mySwiper.on('slideChangeTransitionEnd', function () {

            SynccarouselData();

            $($(".swiper-slide.swiper-slide-active")[0]).find('video').get(0).play();

        });
    }
    catch (e) {
    }

    var SynccarouselData = function () {
        // alert();
        var SyncData = $('.swiper-slide.swiper-slide-active').attr('data-hash');
        $('.slide-relative').removeClass('active');
        $('.slide-relative').each(function () {
            var DataId = $(this).attr('data-id');
            if (DataId == SyncData) {
                $(this).addClass('active');
            }
        });
    }

});
$(function () {
    //if ($('body').hasClass('<?php echo $bodyclass; ?>')) {
    //	   $("<?php echo str_replace(' ', ' .', $bodyclass ); ?>").addClass("active");
    //      alert('yo');
    // }
    if ($('body')
        .hasClass('mahindra')) {
        $(".mahindra")
            .addClass("highlighted");
    }
    if ($('body')
        .hasClass('star-plus')) {
        $(".star-plus")
            .addClass("highlighted");
    }
    if ($('body')
        .hasClass('star')) {
        $(".star")
            .addClass("highlighted");
    }
    if ($('body')
        .hasClass('one-plus')) {
        $(".one-plus")
            .addClass("highlighted");
    }
    if ($('body')
        .hasClass('piramal')) {
        $(".piramal")
            .addClass("highlighted");
    }
    if ($('body')
        .hasClass('mgage')) {
        $(".mgage")
            .addClass("highlighted");
    }
    if ($('body')
        .hasClass('bql')) {
        $(".bql")
            .addClass("highlighted");
    }
    if ($('body')
        .hasClass('usports')) {
        $(".usports")
            .addClass("highlighted");
    }
    if ($('body')
        .hasClass('editage')) {
        $(".editage")
            .addClass("highlighted");
    }




    if ($('body')
        .hasClass('nutrela')) {
        $(".nutrela")
            .addClass("highlighted");
    }

    if ($('body')
        .hasClass('yaarii')) {
        $(".yaarii")
            .addClass("highlighted");
    }

    if ($('body')
        .hasClass('birlawhiteputty')) {
        $(".birlawhiteputty")
            .addClass("highlighted");
    }

    if ($('body')
        .hasClass('dubsmash')) {
        $(".dubsmash")
            .addClass("highlighted");
    }

    if ($('body')
        .hasClass('indiabulls')) {
        $(".indiabulls")
            .addClass("highlighted");
    }

    if ($('body')
        .hasClass('one-plus')) {
        $(".one-plus")
            .addClass("highlighted");
    }

 if ($('body')
        .hasClass('bharti-axa')) {
        $(".bharti-axa")
            .addClass("highlighted");
    }

    if ($('body')
        .hasClass('png-health')) {
        $(".png-health")
            .addClass("highlighted");
    }

    if ($('body')
        .hasClass('others')) {
        $(".others")
            .addClass("highlighted");
    }

    if ($('body')
        .hasClass('sarva')) {
        $(".sarva")
            .addClass("highlighted");
    }
    
});
if ($('.website-operation video#mobile')[0])
    $('.website-operation video#mobile')[0].play();
if ($('.website-operation video#desktop')[0])
    $('.website-operation video#desktop')[0].play();
if ($('#insta-video')[0])
    $('#insta-video')[0].play();
if ($('#first-video')[0])
    $('#first-video')[0].play();

function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
    }
    function compareImages(img) {
        var slider, img, clicked = 0, w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w / 2) + "px";
        /*create slider:*/
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        /*insert slider*/
        img.parentElement.insertBefore(slider, img);
        /*position the slider in the middle:*/
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /*execute a function when the mouse button is pressed:*/
        slider.addEventListener("mousedown", slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener("mouseup", slideFinish);
        /*or touched (for touch screens:*/
        slider.addEventListener("touchstart", slideReady);
        /*and released (for touch screens:*/
        window.addEventListener("touchstop", slideFinish);
        function slideReady(e) {
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*the slider is now clicked and ready to move:*/
            clicked = 1;
            /*execute a function when the slider is moved:*/
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }
        function slideFinish() {
            /*the slider is no longer clicked:*/
            clicked = 0;
        }
        function slideMove(e) {
            var pos;
            /*if the slider is no longer clicked, exit this function:*/
            if (clicked == 0) return false;
            /*get the cursor's x position:*/
            pos = getCursorPos(e)
            /*prevent the slider from being positioned outside the image:*/
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            /*execute a function that will resize the overlay image according to the cursor:*/
            slide(pos);
        }
        function getCursorPos(e) {
            var a, x = 0;
            e = e || window.event;
            /*get the x positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x coordinate, relative to the image:*/
            x = e.pageX - a.left;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            return x;
        }
        function slide(x) {
            /*resize the image:*/
            img.style.width = x + "px";
            /*position the slider:*/
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}




initComparisons();

$(".img-comp-slider").on('click', function () {

    $(this).addClass('hideinfo');

});