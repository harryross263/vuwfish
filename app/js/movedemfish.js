$(document).ready(function() {
	function justKeepSwimming() {
		$(".fish").each(function() {
			$(this).css('right', Math.random()*-1000);
			$(this).animate({right: $(document).width()}, Math.random()*500 + 4000, "linear", justKeepSwimming).delay(Math.random()*1000);
		});
	}

	// $("#toggle").click(function () {
	// 	$("#canvas-wrapper").fadeToggle(1000);
	// 	$(".fish").fadeToggle(1000);
	// });
	$("#canvas-wrapper").focus();
	
	$(window).keypress(function (e) {
		if (e.which == 0 || e.which == 32) {
			e.preventDefault();
			$('#canvas-wrapper').fadeToggle(1000);
			$('.fish').fadeToggle(1000);
		}
	});

	justKeepSwimming();
});
