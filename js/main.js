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

	// Argazki galeria
	if (Galleria){
		Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
		Galleria.run('#galleria', {
			autoplay: 5000
		});
	} else {
		return;
	};
};


$(document).on('ready', onDocumentReady);
