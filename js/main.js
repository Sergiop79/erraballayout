var $audio = $('audio');

var onDocumentReady = function(){
	$('#owl-example').owlCarousel({
		items: 6,
		autoPlay: 5000
	});

	$audio.audioPlayer();
	
	$('#navigation').smartmenus();

	$.scrollUp({
		scrollImg: true
	});

};


$(document).on('ready', onDocumentReady);
