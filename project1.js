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

$(document).ready(function(){
	$('.magic').html("Click function in action (JQuery). This sentence is being added by jQuery magic, you won't find it in the html file.")
});

$(document).ready(function(){
	$('.magic1').html("MouseEnter function in action (JQuery), with additional jQuery magic added in this sentence. Check html file.")
});

$(document).ready(function(){
	$('.magic2').html("Toggle Highlights and [JQUERY MAGIC HERE!]");
});