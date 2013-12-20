function startCarousel(imgPath)
{
$('#slideshow').infiniteCarousel({
		imagePath: imgPath,
		transitionSpeed:300,
		displayTime: 6000,
		internalThumbnails: false,
		thumbnailType: 'buttons',
		customClass: 'slideshow',
		progressRingColorOpacity: '255,255,255',
		progressRingBackgroundOn: false,
		margin: 10,
		easeLeft: 'easeOutExpo',
		easeRight:'easeOutQuart',
		inView: 1,
		advance: 1,
		autoPilot: true,
		prevNextInternal: true,
		autoHideCaptions: false
	});$('div.infiniteCarousel div.ic_controls').removeAttr('style');$('div.infiniteCarousel div.ic_controls').click(function(){		$(this).removeAttr('style');	if(($(this).attr('class')).indexOf('pause')!=-1)	{		$(this).attr('class','ic_controls');	}	else	{		$(this).attr('class','ic_controls pause');	}});
}