$(document).ready(function(){
	
	/* Scroll on buttons and links */
	$('.js--scroll-to-projects').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-projects').offset().top},1000);
	});
	
	/* Navigation scroll */
	$(function(){
 	$("a[href*='#']:not([href='#'])").click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
         location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
            }
        }
    });
});
	
	/* Animations */
	$('.js--wp-projects').waypoint(function(direction){
		$('.js--wp-projects').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});
	
	$('.js--wp-blurb').waypoint(function(direction){
		$('.js--wp-blurb').addClass('animated fadeInLeft');
	}, {
		offset: '80%'
	});
	
	$('.js--wp-details').waypoint(function(direction){
		$('.js--wp-details').addClass('animated fadeInUp');
	}, {
		offset: '70%'
	});
	
	/* GMAPS*/
	var map = new GMaps({
  	div: '.map',
  	lat: 51.4981264,
  	lng: -0.5597417,
	zoom: 9
});
	
	map.addMarker({
	 lat: 51.4981264,
	 lng: -0.5597417,
	 title: 'Slough',
});
	
});








