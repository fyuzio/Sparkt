$(document).ready(function(){	
	
var controller = new ScrollMagic.Controller();
		

//---------------------------------------------------------------------------	
//part-1
	
	
// for Individual using ID	
/*var fadeScene = new ScrollMagic.Scene({
		triggerElement: "#project1",
		triggerHook:'0.85', 
	//	duration:'90%', // animation in-out in viewport area,
		reverse:false, // animat only once.  (when reverse false you cant use "duration" )
	})	
.setClassToggle( '#project1', 'fade-in' )
.addIndicators()// showing indicator	
.addTo(controller);*/
	

// for each useing CLass or element

$("h2").each(function(){
var fadeScene2 = new ScrollMagic.Scene({
		triggerElement: this,
		triggerHook:'0.85', 
		duration:'90%', // animation in-out in viewport area,
	//	reverse:false, // animat only once.  (when reverse false you cant use "duration" )
	})	
.setClassToggle( this , 'fade-in' )
.addIndicators()// showing indicator	
.addTo(controller);	
});	
	
	
//part-1
//---------------------------------------------------------------------------	
//part-2


	
	
	//parallax bg
	
/*	// for Individual Tween animation
	var parallaxScene = new ScrollMagic.Scene({
		triggerElement:'.parallaxWrapper',
		duration:'100%',
		triggerHook: 1
	})
	.setTween(TweenMax.from('.parallax_bg', 1, { y:'-100%', ease:Power0.easeNone}))
	.addTo(controller);	*/
	
	
//for multiple tween animation	

var parallaxTL = new TimelineMax();
	
	parallaxTL
	.from('.parallaxContent', 1, {autoAlpha:0, ease:Power0.easeNone}, 1)
	.from('.parallax_bg', 2, { y:'-40%', ease:Power0.easeNone}, 0)
	;

var parallaxScene = new ScrollMagic.Scene({
		triggerElement:'.parallaxWrapper',
		duration:'100%',
		triggerHook: 1
	})
	.setTween(parallaxTL)
	.addTo(controller);	
	
//part-2
//---------------------------------------------------------------------------	
//part-3

	
	
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration:'30%'
	})
	.setPin('#intro', {pushFollowers:false})
	.addTo(controller);
	
		var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: 'header',
		triggerHook: .5,
		duration:'50%'
	})
	.setPin('header', {pushFollowers:false})
	.addTo(controller);

		
});