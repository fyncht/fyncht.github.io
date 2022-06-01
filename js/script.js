$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false 
	});

	var typed = new Typed(".typed", {
		strings: ["Production of forgings on presses and hammers as per customer drawings.","Изготовление поковок на прессах молотах по чертежапредоставляемых заказчиком."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});


	// $('.chart').easyPieChart({
 //            //easing: 'easeInOut',
 			//barColor: #ffff,
 			//trackColor: false,
 			//scaleColor: false,
 			//lineWidth: 4,
 			//size:152,
 			//
 //        });

});
 