$(document).ready(function() {
	
	var prev = $('.prev');
	var next = $('.next');
	var slide = $('.slide');

	var i = 0;

	$('.button').click(function() {
		$('.popup').toggleClass('hidden');
	});	
	$('.close_popup').click(function() {
		$('.popup').toggleClass('hidden');
	});

});
