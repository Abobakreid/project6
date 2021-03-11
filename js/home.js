$(function () {
	"use strict";
	/* starrt the header */ 
	$(".bar i").on("click",function () {

	   $(".links2").toggle(1000);
	});
	
	$(window).on("resize",function () {
	  if($(window).width() > 768)
	  {
	  	  $(".links2").hide(1000);  
	  }

	});

	 $(".head").css({
	 
	    height: $(window).height(),
	    
	});
	/* end the header */
});