function create_grid(sof) {
	$("#wrapper").html("");
	for(var i = 0; i < sof; i++) {
		$("#wrapper").append("<div class = 'row'></div>");
	}

	for(var p = 1; p <= sof; p++) {
		$(".row").append("<div class = 'cell'></div>");		
	}

	var size = 640 / sof;
	
	$(".cell").width(size);
	$(".cell").height(size);
}

$(document).ready(function() {
	$(".btn").on("click", function() {
		var size_of_grid = prompt("Please enter the number of cells you want per row.", "16");
		create_grid(size_of_grid);

		$(".cell").hover(function() {
			$(this).css("background-color", "white");
		});
	});
});