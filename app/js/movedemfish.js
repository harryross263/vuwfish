$(document).ready(function() {
	function justKeepSwimming() {
		$(".fish").each(function() {
			$(this).css('right', Math.random()*-1000);
			$(this).animate({right: $(document).width()}, Math.random()*500 + 4000, "linear", justKeepSwimming).delay(Math.random()*1000);
		});
	}
	justKeepSwimming();
});
