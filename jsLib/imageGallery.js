function showOverlay(image){
	var imgPath = $(image).attr('src');
	imgPath = imgPath.replace('PhotoThumbs','photos');
	var overlayImage = new Image();
	overlayImage.src = imgPath;
	var imgWidth = overlayImage.width;
	var imgHeight = overlayImage.height;
	var windowHeight = $(window).height();
	var overlay = $('<img/>');
	$(overlay).attr('src',imgPath);
	$(overlay).css('max-height',windowHeight);
	var documentHeight = $(document).height();
	$("#overlay").prepend(overlay);
	$("#overlay").css('height',documentHeight);
	$("#overlay").css('visibility','visible');
}

function closeOverlay(){
	$('#overlay img').remove('img');
	$("#overlay").css('visibility','hidden');
}