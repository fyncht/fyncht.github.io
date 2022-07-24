$(window).on("load",function(){

	$(".loader").fadeOut(2000);
})


$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false 
	});

	var typed = new Typed(".typed", {
		strings: ["Production of forgings on presses and hammers as per customer drawings.","Изготовление поковок на прессах и молотах по чертежам, предоставляемых заказчиком."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});


	 $(document).ready(function() {
 
	  $(".owl-carousel").owlCarousel({
	    autoPlay : 3000,
	    margin:10,
	    loop:true,
	    paginationSpeed : 1000,
	    goToFirstSpeed : 2000,
	    singleItem : true,
	    autoHeight : true,
	    navSpeed: 700,
      	navText: ['', '']
	  });
	 
	})

/*
	$('.owl-carousel').owlCarousel({
	    loop: true,
	    margin:10,
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

	});*/



	$("#navigation li a").click(function(e){
		e.preventDeafault();

		var targetElement = $(this).attr("href");

		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
	});

	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll",stickyNavigation);

	function stickyNavigation(){

		var body = $("body");

		if($(window).scrollTop() >= navTop){
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		} 
		else{
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	}


/*	$(".items").isotope({
	    	filter: '*',
	    	animationOptions: {
	    		duration: 1500,
	    		easing: 'linear',
	    		queue: false
	    	}
	    });*/


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
 