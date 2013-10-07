var $audio = $('audio');

var onDocumentReady = function(){
	$('#owl-example').owlCarousel({
		items: 6,
		autoPlay: 5000
	});

	$audio.audioPlayer();
	
	$('#navigation').smartmenus();

};


$(document).on('ready', onDocumentReady);
