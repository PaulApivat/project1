$(document).ready(function(){
	$('.box').click(function(){
		$(this).fadeOut('slow');      
	});
});

$(document).ready(function(){
	$('.box1').mouseenter(function(){
		$(this).fadeOut('slow');      
	});
});


$(document).ready(function(){
	$('.pull-me').click(function(){
		$('.panel').slideToggle('slow');
	});
});

$(document).ready(function(){
	$('.box2').click(function(){
		$(this).toggleClass('highlighted');
	});
});