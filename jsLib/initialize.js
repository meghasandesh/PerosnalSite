$(function(){
$('img.grayscale').each(function(){
	grayscale(this);
});
			
});
$(document).ready(function(){
   $('img.grayscale').hover(function(){
		grayscale.reset(this);
	}, function(){
		grayscale(this);
	});
	
	$('img.grayscale').click(function(){
		showOverlay(this);
	});
	
	$('div.infiniteCarousel_item img').click(function(){
		showOverlay(this);
	});
	
	$("#closeBtn").click(function(){
		closeOverlay();
	});
});
