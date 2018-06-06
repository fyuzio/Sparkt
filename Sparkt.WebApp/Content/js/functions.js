$(function () {
    function a() {
        setTimeout(function () {
            $("#button").addClass("onclic"), $("#button").addClass("validate", 450, b)
        }, 2250)
    }

    function b() {
        setTimeout(function () {
            $("#button").removeClass("validate")
        }, 1250)
    }

    function c() {
        500 < $(window).width() ? $(window).on("load", function () {
            $(".hashScroll").mPageScroll2id({
                scrollSpeed: 1800,
                scrollEasing: "easeInOutQuint",
                scrollingEasing: "easeOutQuint",
                pageEndSmoothScroll: !0,
                autoScrollSpeed: !0,
                forceSingleHighlight: !0,
                keepHighlightUntilNext: !0,
                highlightByNextTarget: !0,
                appendHash: !0,
                targetClass: "active-section",
                highlightClass: "active-menu"
            })
        }) : $(window).on("load", function () {
            $(".hashScroll").mPageScroll2id({
                scrollSpeed: 1800,
                offset: 72,
                scrollEasing: "easeInOutQuint",
                scrollingEasing: "easeOutQuint",
                pageEndSmoothScroll: !0,
                autoScrollSpeed: !0,
                forceSingleHighlight: !0,
                keepHighlightUntilNext: !0,
                highlightByNextTarget: !0,
                appendHash: !0,
                targetClass: "active-section",
                highlightClass: "active-menu"
            })
        })
    }

    function f() {
        1200 < $(window).width() && $(".background-video .bg-video").backgroundVideo({
            $videoWrap: $(".background-video"),
            $outerWrap: $(window),
            $window: $(window),
            minimumVideoWidth: 400,
            parallax: !0,
            parallaxOptions: {
                effect: 1.7
            },
            pauseVideoOnViewLoss: !0
        })
    }
    $(".hamburger").on("click", function () {
        $(this).toggleClass("open"), $(".main-menu").toggleClass("open"), $(".overlay-wrapp").fadeToggle("slow")
    }), $(".main-menu > ul > li ").hover(function () {
        $(this).toggleClass("active-submenu"), $(this).children(".sub-nav").slideToggle()
        }),
        $(window).scroll(function () {
        $(".hamburger").removeClass("open"), $(".main-menu").removeClass("open"), $(".overlay-wrapp").fadeOut("slow")
        }),
        $(".overlay-wrapp").on("click", function () {
        $(".hamburger").removeClass("open"), $(".main-menu").removeClass("open"), $(".overlay-wrapp").fadeOut("slow")
        }),
        $("#contact-tab").tabs({
            responsiveThreshold: !0
        }), $(".ring-click").click(function (s) {
            $(".right-middle").removeClass("go-bottom"), $(".right-middle").removeClass("go-top"), $(".ring-wrapp").removeClass("active").css("opacity", "0.3"), $(".offering-wrapp").addClass("using"), $(this).parents(".ring-wrapp").addClass("active").css("opacity", "1"), s.preventDefault()
        }), $(".bottom-center-angle .ring-click").click(function (s) {
            $(".right-middle").addClass("go-bottom"), s.preventDefault()
        }), $(".top-center-angle .ring-click").click(function (s) {
            $(".right-middle").addClass("go-top"), s.preventDefault()
        }), $(document).on("click", function (s) {
            $(s.target).closest(".ring-click").length || ($(".ring-wrapp").removeClass("active").css("opacity", "1"), $(".offering-wrapp").removeClass("using"), $(".right-middle").removeClass("go-bottom"), $(".right-middle").removeClass("go-top"))
        }),
        $(window).on("load", function () {
            $(".scroll-content").mCustomScrollbar({
                scrollInertia: 0,
                scrollbarPosition: "outside",
                autoHideScrollbar: !0,
                autoExpandScrollbar: "Enable",
                theme: "rounded"
            })
        }), $("#button").click(function (s) {
            $("#button").addClass("onclic", 250, a), s.preventDefault()
        });


    $('.collapsible').collapsible();

    $('.modal').modal();


    var i = $(".video-wrapp video").mediaelementplayer({
        success: function (e) {
            $(e).bind("play", function () {
                $.each(i, function (i, o) {

                    //$(".mejs__controls").fadeIn()

                    o !== e && (o.pause()

                    )

                })
            }), $(e).bind("pause", function () {
                $.each(i, function (e, i) {
                    //	alert("Pause");
                    $(".mejs__overlay-button").removeClass("mejs__overlay-loading-bg-img");
                })
            })
        }
    });


    $(".mejs__overlay-play").click(function () {
        $(this).children(".mejs__overlay-button").addClass("mejs__overlay-loading-bg-img");
    });


    $(".content__inner a, .scrollUp").on("click", function () {
        //alert("2");
        $(".content--intro").addClass("open-page");
        $(".bg-video")[0].play();

    });



    $(window).scroll(function () {
        $(".content--intro").addClass("open-page");
        $(".bg-video")[0].play();
    });


    /*setTimeout(function(){ 
      $(".content--intro").addClass("open-page");
        $(".bg-video")[0].play();
    	
    },10000);
        */



    var g = new Swiper(".showreel-videos", {
        //effect: "fade",
        //grabCursor: !0,
        //loop: !0,
        //autoHeight: !0,
        speed: 1500,
        resize: true,
        shortSwipes: false,
        slideToClickedSlide: true,
        preventClicksPropagation: false,
        preventClicks: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    g.on("slideChange", function () {

        $(".video-wrapp video").each(function () {
            this.player.pause();
        });

    }),

        c(), $(window).resize(function () {
            c()
        }), $("select").material_select(), $(".parallax").parallax(), $(".tabsAccordion").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            closed: "accordion",
            activate: function () {
                var t = $(this),
                    u = $("#tabInfo"),
                    v = $("span", u);
                v.text(t.text()), u.show()
            }
        }), f(), $(window).resize(function () {
            f()
        }),


        document.querySelectorAll(".ellipsify").forEach(function (s) {
            parseFloat(window.getComputedStyle(s).width) === parseFloat(window.getComputedStyle(s.parentElement).width) && s.setAttribute("title", s.textContent)
        });
    var h = new ScrollMagic.Controller,
        i = new TimelineMax;
    i.from(".video-overlay", 1, {
        autoAlpha: 0.3,
        ease: Power0.easeNone
    }, 1);
    var j = new ScrollMagic.Scene({
        triggerElement: ".background-video",
        duration: "100%",
        triggerHook: 0.5
    }).setTween(i).addTo(h);
    $(".white-bg").each(function () {
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: "0.14",
            duration: "83%"
        }).setClassToggle(".sparkt-logo", "reverse-logo").setClassToggle("body", "light-area").addTo(h)
    });
    var k = new Swiper(".culture-slider", {
        direction: "vertical",
        autoHeight: !0,
        hashNavigation: {
            watchState: !0
        },
        speed: 900,
        resize: true,
        effect: "cube",
        slideActiveClass:"cultureslideactive swiper-slide-active",
        grabCursor: !1,     
        cubeEffect: {
            shadow: !0,
            slideShadows: !1,
            shadowOffset: 20,
            shadowScale: 0.94
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
    //k.on("slideChange", function () {
    //    var dataId = $('.cultureslideactive').attr("data-hash");        
    //    $(".cultuer-title-nav a").removeClass("active");
    //    $(".cultuer-title-nav a").each(function (index) {
    //        if ("#" + dataId == $(this).attr("href")) {
    //            alert($(this).attr("href"));
    //            $(this).addClass("active");
    //        }
    //    });
    //    return false;
    //});

    $(".swiper-button-next").on("click", function () {        
        SlideChange()
    });

    $(".swiper-button-prev").on("click", function () {
        SlideChange()
    });

    function SlideChange() {
        var dataId = $('.cultureslideactive').attr("data-hash");
        //var data = dataId.substring(0, dataId.length - 1);
        //var id = dataId.substring(dataId.length - 1, dataId.length);
        //id = parseInt(id) - 1;
        //dataId = data + id;
    
        $(".cultuer-title-nav a").removeClass("active");
        $(".cultuer-title-nav a").each(function (index) {
            if ("#" + dataId == $(this).attr("href")) {
                $(this).addClass("active");
            }
        });
        return false;
    }





    //var l = function () {
    //    var s = $(".culture-slider .swiper-wrapper .swiper-slide").attr("data-hash");
    //    $(".cultuer-title-nav a").removeClass("active"), $(".cultuer-title-nav a").each(function () {
    //        var t = $(this).attr("data-id");
    //        t == s && $(this).addClass("active")
    //    })
    //};


    $(".cultuer-title-nav > a").on("click", function () {
        $(".cultuer-title-nav > a").removeClass("active"), $(this).addClass("active")
    });
    var m = new Swiper(".culture-inner-slider", {
        speed: 1200,
        pagination: {
            el: ".swiper-pagination-v",
            clickable: !0
        },
        autoHeight: !0,
        autoplay: {
            delay: 3e3,
            disableOnInteraction: !1
        }
    }),
        n = new Swiper(".accolades-slider", {
            speed: 1200,
            pagination: {
                el: ".swiper-pagination-v",
                clickable: !0
            },
            autoplay: {
                delay: 6e3,
                disableOnInteraction: !1
            },
            loop: !0
        }),
        o = new TimelineMax;
    o.from(".sparkt-table > img", 1, {
        y: "-50%",
        ease: Power0.easeNone
    }, 1);
    var j = new ScrollMagic.Scene({
        triggerElement: "#we",
        duration: "100%",
        triggerHook: 0.8
    }).setTween(o).addTo(h),
        p = new TimelineMax;
    p.from(".table-shaddow", 1, {
        autoAlpha: 0,
        scaleX: 1.5,
        ease: Power0.easeNone
    }, 1);
    var j = new ScrollMagic.Scene({
        triggerElement: "#we",
        duration: "100%",
        triggerHook: 0.8
    }).setTween(p).addTo(h);
    $(".section-title").each(function () {
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.03,
            duration: "140%"
        }).setPin(this, {
            pushFollowers: !0
        }).addTo(h)
    }), $(".squad-wrapp figure").each(function () {
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.7,
            duration: "100%"
        }).setClassToggle(this, "underline").addTo(h)
    });
    var q = new ScrollMagic.Scene({
        triggerElement: ".work-tab > .resp-tabs-list",
        triggerHook: 0
    }).setPin(".work-tab > .resp-tabs-list", {
        pushFollowers: !0
    }).addTo(h),
        r = new TimelineMax;
    r.to("header", 1, {
        backgroundColor: "rgba(0,24,45,1)",
        boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)",
        ease: Power0.easeNone
    }, 1);
    var j = new ScrollMagic.Scene({
        triggerElement: "body",
        duration: "40%",
        triggerHook: 0.1
    }).setTween(r).addTo(h)
});
