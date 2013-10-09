var $audio = $('audio'),
	$menuBotoia = $('#menu-botoia'),
	$menuNagusia = $('.menu-nagusia');

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

	$menuBotoia.on('click', function(){
		$menuNagusia.slideToggle();
	});

};


$(document).on('ready', onDocumentReady);
