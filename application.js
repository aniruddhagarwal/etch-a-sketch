$(document).ready(function() {
	for(var i = 1; i <= 16; i++) {
		$("#wrapper").append("<div class = 'row'></div>");
	}

	for(var p = 1; p <= 16; p++) {
		$(".row").append("<div class = 'box'></div>");		
	}

	$(".box").on("mouseenter", function() {
		$(this).addClass("visited");
	});
});